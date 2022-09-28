import React,{useState,useEffect} from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../../redux/AppStore/Actions";



import {Box,Paper,Grid,withStyles,Stepper,Step,StepLabel,TextField,Typography,NativeSelect,Input,Button} from "@material-ui/core";
import { Redirect,Link } from 'react-router-dom';




function CreateApp(props) {

  const {handleAppData,hasError,handleApkData,handleAppImage,success,data,addappsuccess,addimagesuccess,addapksuccess,handleResetAction} = props;
  

    const [state,setState] =useState(
        {
          name:"",
          description:"",
          devices:"",
          category:"",
          package_name:"",
          file:"",
          currentStep:0,
          loading:false,
          formData: new FormData()
       }
       )

       const {name,description,devices,category,file,currentStep,loading,formData} = state;
    
       console.log(currentStep)

        const handleChange = name => event=>{

          if(name == "file" || name =="images"){
          formData.set(name,event.target.files[0])
          }

          else{
          formData.set(name,event.target.value)
          setState({...state,[name]:event.target.value});

        }


          
          }

          const handleSubmit = () => {
            handleAppData(state);

          }

          const handleApkSubmit = () => {
            setState({...state,loading:true})
            handleApkData(formData);
          }

          const handleImageSubmit = () => {
            handleAppImage(formData);

            setState({...state,formData:new FormData()})

          }

          useEffect(()=>{

            if(addappsuccess ||addimagesuccess || addapksuccess)
            {
              setState({...state,currentStep:currentStep+1,formData:new FormData()})
              
            }
            

          },[addappsuccess,addimagesuccess,addapksuccess])

//           useEffect(()=>{

            
// if(hasError)
// {
//   alert("Error")
//   setState({...state,loading:false})
// }

//           },[hasError])
        


        const StepperStep =[
            {label:"Store Listing"},
            {label:"Assets"},
            {label:"App Release"},

        ];

       

        const getStepsItems = (steps) => {
            switch(steps){
                case 0:
                    return <Paper component={Box}
                     p={2}
                      style={{display:"flex",alignItems:"center",flexDirection:"column"}} >
                   
                                <Grid 
                                container
                                spacing={2} 
                                style={{marginBottom:"10px",paddingTop:"20px",width:"70%"}}
                                >
                                   
                                <Typography variant="h4" component="h6">
                                    Product Details
                                </Typography>
                                

                                    <Grid item xs={12} sm={7}>
                                    <TextField  
                                    fullWidth 
                                    id="standard-basic"
                                     label="Name*"
                                      name="name"
                                       onChange={handleChange("name")}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                    <TextField 
                                      fullWidth
                                      id="standard-basic"
                                      label="Description*"
                                      name="description"
                                      onChange={handleChange("description")} 
                                        />

                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                    <TextField  
                                    fullWidth 
                                    id="standard-basic"
                                     label="Package Name*"
                                      name="package_name"
                                       onChange={handleChange("package_name")}
                                        />
                                    </Grid>
                                </Grid>

                                  <hr style={{width:"95%"}} />
                                <Grid container spacing={2} style={{marginBottom:"10px",paddingTop:"20px",width:"70%"}}>
                                   
                                <Typography variant="h4" component="h6">
                                    Categorization
                                </Typography>
                                

                                    <Grid item xs={12} sm={12}>
                                    <NativeSelect
                                         onChange={handleChange("category")}
                                          name="category"
                                           inputProps={{ 'aria-label': 'Select Application Category' }}
                                    >
                                          <option value="">Select Category</option>
                                          <option value="Art & Design">Art & Design</option>
                                          <option value="Auto & Vehicles">Auto & Vehicles</option>
                                          <option value="Beauty">Beauty</option>
                                          <option value="Books & Reference">Books & Reference</option>
                                          <option value="Business">Business</option>
                                          <option value="Comics">Comics</option>
                                          <option value="Communication">Communication</option>
                                          <option value="Dating">Dating</option>
                                          <option value="Education">Education</option>
                                          <option value="Entertainment">Entertainment</option>
                                          <option value="Events">Events</option>
                                          <option value="Finance">Finance</option>
                                          <option value="Food & Drink">Food & Drink</option>
                                          <option value="Game">Game</option>
                                          <option value="Health & Fitness">Health & Fitness</option>
                                          <option value="House & Home">House & Home</option>
                                          <option value="Libraries & Demo">Libraries & Demo</option>
                                          <option value="Lifestyle">Lifestyle</option>
                                          <option value="Maps & Navigation">Maps & Navigation</option>
                                          <option value="Medical">Medical</option>
                                          <option value="Music & Audio">Music & Audio</option>
                                          <option value="News & Magazines">News & Magazines</option>
                                          <option value="Parenting">Parenting</option>
                                          <option value="Personalization">Personalization</option>
                                          <option value="Photography">Photography</option>
                                          <option value="Productivity">Productivity</option>
                                          <option value="Shopping">Shopping</option>
                                          <option value="Social">Social</option>
                                          <option value="Sports">Sports</option>
                                          <option value="Tools">Tools</option>
                                          <option value="Travel & Local">Travel & Local</option>
                                          <option value="Video Players & Editors">Video Players & Editors</option>
                                          <option value="Weather">Weather</option>

                                      </NativeSelect>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                      <NativeSelect
                                          onChange={handleChange("devices")}
                                          name="devices"
                                          inputProps={{ 'aria-label': 'Select Device' }}
                                        >
                                          <option value="">Select Device</option>
                                          <option value="vrone">Vrone</option>
                                      </NativeSelect>
                                    </Grid>

                                    </Grid>

                                   
                                
                                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                                      Save and Continue
                                    </Button>
                </Paper>
                
                case 1:
                        return <Paper 
                                  component={Box}
                                  p={2}
                                  style={{display:"flex",alignItems:"center",flexDirection:"column"}}
                                > 
                        
                                    <Grid 
                                    container
                                     spacing={2}
                                      style={{marginBottom:"10px",paddingTop:"20px",width:"70%"}}
                                      >
                                   
                                        <Typography variant="h4" component="h6">
                                            Graphics Assets
                                        </Typography>
                            

                                    <Grid item xs={12} sm={7}>
                                    <Input
                                     type="file"
                                       fullWidth
                                        id="standard-basic"
                                         label="Image*"
                                          // value={images}
                                          onChange={handleChange("images")} />
                                    </Grid>
                           

                                   </Grid>
                     
                     <Button variant="contained" color="primary" onClick={handleImageSubmit}>
                                      Upload and Continue
                                    </Button>
                     </Paper>
                        case 2:
                    return <Paper component={Box} p={2} style={{display:"flex",alignItems:"center",flexDirection:"column"}} > 
                    <Grid container spacing={2} style={{marginBottom:"10px",paddingTop:"20px",width:"70%"}}>
                               
                    <Typography variant="h4" component="h6">
                        APk to add
                    </Typography>
                    

                        <Grid item xs={12} sm={7}>
                        <Input
                          type="file"
                          fullWidth
                          label="apk file*"
                          name="file"
                          // value={file}
                          onChange={handleChange("file")} 
                               
                               />
                        </Grid>
                       

                 </Grid>

                 <hr style={{width:"95%"}} />
                                <Grid container spacing={2} style={{marginBottom:"10px",paddingTop:"20px",width:"70%"}}>
                                   
                                <Typography variant="h4" component="h6">
                                    Release Name
                                </Typography>
                                

                                    <Grid item xs={12} sm={7}>
                                <TextField 
                                 fullWidth id="standard-basic"
                                  label="Version*"
                                   name="version"
                                    onChange={handleChange("version")} 
                                    />
                                   
                                    </Grid>
                                    
                                    </Grid>
                 {
                   loading?<Button variant="contained" color="default">
                   Releasing App
                 </Button>:
                 
                 <Button variant="contained" color="primary" onClick={handleApkSubmit}>
                                      Release App
                                    </Button>}
                 </Paper>
                  
                    default:
                      handleResetAction();
                        return  <Paper component={Box} p={2} style={{display:"flex",alignItems:"center",flexDirection:"column"}} > 
                        <Grid container spacing={2} style={{marginBottom:"10px",paddingTop:"20px",width:"70%"}}>
                                   
                        <Typography variant="h4" component="h6">
                        Success fully created your app
                        </Typography>
                            {/* <link to="/appstoredashboard">Go Back</link> */}
                        
                        
    
    
                     </Grid>
    
                     </Paper> 
                      
                      }
        };

       
        return (
            <Grid container
             style={{display:"flex"}} >
                {/* <Grid item xs={12} sm={7}> */}
                {/* <Paper component={Box}> */}

                
                <Box  component={Paper} style={{width:"100%"}}>
                        <Stepper activeStep={state.currentStep} alternativeLabel>
        {StepperStep.map((item,i) => (
          <Step key={i}>
            <StepLabel>{item.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
                    </Box>
                    {/* </Paper> */}
                    <Box component={Paper}  >
                        <form >
                        
                        {getStepsItems(state.currentStep)}
                        </form>
                        </Box>
                    </Grid>
            // </Grid>
        )
    }

    const mapStateToProps = (state) => ({
      ...state.AppStore,
    });
    
    const mapDispatchToProps = (dispatch) => {
      return {
        ...bindActionCreators({ ...Actions }, dispatch),
      };
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(CreateApp);


