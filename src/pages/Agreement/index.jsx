import React, { useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import {connect} from "react-redux"
import { bindActionCreators } from "redux";

import {Box,Paper,Grid,withStyles,Stepper,Step,StepLabel,Button,Checkbox} from "@material-ui/core";

import * as Actions from "./../../redux/Payment/Actions";




// /LOADSCRIPT

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}


function Agreement(props) {

  const {isAppStoreSubscriber} = props


    const [state, setstate] = useState({
        currentStep:1,
        agree:false
    })

    const {currentStep,agree} = state;

    const history = useHistory();
    

        const handleOnChange = ({target})=>{
            if(target.checked) setstate({...state,agree:true})

            else setstate({...state,agree:false})

        };

        const StepperStep =[
            {label:"Sign In With Email"},
            {label:"App AGREEMENT"},
            {label:"Complete Payment"},

        ];
       
        async function showRazorpay() {
          
            const res = await loadScript(
              "https://checkout.razorpay.com/v1/checkout.js"
            );
        
            if (!res) {
              alert("Razorpay SDK failed to load. Are you online?");
              return;
            }
        
            props.handleOrderRequestAction({amount:500}).then(data=>{

                console.log(data);
        
            const options = {
              key: "rzp_test_Y5YVbYI7c0q9aO",
              currency: data.data.currency,
              amount: data.data.amount.toString(),
              order_id: data.data.id,
              name: "QWR",
              description: "description . . .",
              image: "http://localhost:1337/logo.svg",
              handler: function (response) {

                fetch('https://api.ipify.org?format=jsonp?callback=?', {
            method: 'GET',
            headers: {},
          })
          .then(res => {
            return res.text()
          }).then(ip => {
            props.handleUserUpdateRequestAction({ appStoreAgreement:{ip:ip},isAppStoreSubscriber:true})

            // setstate({...state,currentStep:3})
            

          });

              


                
              },
              prefill: {
                name: "Bipin",
                email: "bipin@gmail.com",
                phone_number: "9899999999",
              },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
            })
          }

          useEffect(()=>{

            if(isAppStoreSubscriber)
            {
              history.push("/appstoredashboard")
            }

          },[isAppStoreSubscriber])
       
        return (
            <Grid container style={{justifyContent:"center"}} >
                <Grid item xs={12} sm={7}>
                <Paper component={Box}>

                
                <Box  p={1} mb={1}>
                        <Stepper activeStep={currentStep} alternativeLabel>
        {StepperStep.map((item,i) => (
          <Step key={i}>
            <StepLabel>{item.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
                    </Box>
                    </Paper>
                    <Box component={Paper} style={{height:"100%",padding:"20px 40px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                        
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam assumenda, fugiat quis sapiente provident ducimus nesciunt repudiandae facilis optio recusandae repellat vel pariatur adipisci maxime veniam officia. Harum dignissimos error minus quia, ea quod eaque doloribus nobis ut iusto architecto, quasi perferendis veniam possimus deleniti autem expedita deserunt ad vitae repellat laudantium, saepe cum quis reiciendis? Officia quae quod voluptates quis inventore doloribus aspernatur omnis cumque eum, maiores, quisquam ea minus facilis. Molestias corporis accusamus eligendi maxime dolore illum dolorem? Consequuntur quas sapiente, deserunt laborum sequi dolor possimus non ducimus accusamus numquam voluptates eum vel maiores, nihil doloremque tempora nulla?</span>

                        <div>
                                    <Checkbox
                                    onChange={handleOnChange}
                                            // defaultChecked
                                            color="default"
                                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                                        />
                         <strong>Agree Terms and Condition</strong>
                        
                        {
                           agree? <Button variant="contained" color="primary" onClick={showRazorpay} >
                            CONTINUE AND PAY
                        </Button>
                        :
                        <Button variant="contained" color="primary" disabled >
                            CONTINUE AND PAY
                        </Button>
                        }
                        </div>
                        </Box>
                    </Grid>
            </Grid>
        )
    }



    const mapStateToProps = (state) => ({
  ...state,
  isAppStoreSubscriber:state.Payment.isAppStoreSubscriber

  // ...state.UpdateUser
      });
      
      const mapDispatchToProps = (dispatch) => {
        return {
          ...bindActionCreators({ ...Actions}, dispatch),
        };
      };
      
      export default connect(mapStateToProps, mapDispatchToProps)(Agreement);
