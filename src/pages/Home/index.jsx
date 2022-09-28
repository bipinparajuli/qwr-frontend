import React, { useEffect } from "react";

// For redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "./../../redux/Home/Actions";

import { setHeaderNameAction } from "../../redux/MainLayout/Actions";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// import Pagination from '@material-ui/lab/Pagination';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from "@material-ui/core/Typography";
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import Card from "@material-ui/core/Card";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
// import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import MenuBookIcon from "@material-ui/icons/MenuBook";
// import Paper from '@material-ui/core/Paper';
import { ReactTypeformEmbed } from "react-typeform-embed";
import Markdown from "react-markdown";
import GitHubIcon from "@material-ui/icons/GitHub";

//####################################################################### newly added
import { useHistory } from "react-router-dom";
import appStoreLogo from "../../assets/images/appStore.png";
import vrOneLogo from "../../assets/images/vrOne.png";
import edificeVrLogo from "../../assets/images/edificeVR.png";
import backPaper from "../../assets/images/backPaper.jpeg";
// import Loader from '../../components/Loader';
// import { Link } from 'react-router-dom';
// import SingleProperty from './../../components/Property/SingleProperty';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Box, createTheme } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Stepper, Step, StepLabel } from "@material-ui/core";


const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  // button: {
  //   display: 'block',
  //   marginTop: theme.spacing(2),
  // },
  // formControl: {
  //   margin: theme.spacing(1),
  //   minWidth: 120,
  // },
  root: {
    // minWidth: 275,
    display: "flex",
    //flexGrow: 1,
    alignItems: "center",
  },
  cardRoot: {
    maxWidth: "320px",
    minWidth: "280px",
    height: "300px",
    marginBlock: "10px",
    backgroundColor: "rgba(84, 84, 84, 0.42)",
    borderBottom: "5px solid #333",
    borderRadius: "30px",
    borderLeft: "1px solid #333",
    borderRight: "1px solid #333",
    borderTop: "2px solid #333",
  },
  media: {
    height: "140px",
    width: "250px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
  },
  cardContent: {
    height: "90px",
  },
  title: {
    fontSize: 14,
    paddingTop: 13,
  },
  pos: {
    marginBottom: 12,
  },
  // For cards -experimental
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
  },

  //MODEL
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: "#000",
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

}));



const Home = (props) => {

  console.log(props);

  const {
    // isLoading,
    // properties,
    // filters,
    // currentPage,
    // limit,
    user,
    // totalRecords,
    setHeaderNameAction,
    // changePageNumberAction,
    // updateFiltersAction,
    // fetchAllPropertiesAction,
    resetDashboardAction,
    data,
    isAppStoreSubscriber
    // downloadSDKAction
  } = props;

  const history = useHistory();

  // const { reviewed_by, review_status, status } = filters;

  // const classes = useStyles();
  // const propertiesLength = properties.length;

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setHeaderNameAction("Dashboard");
    return () => {
      resetDashboardAction();
    };
  }, [setHeaderNameAction, resetDashboardAction]);



  // useEffect(() => {
  //   let payload = {
  //     page: currentPage,
  //     limit,
  //   };

  //   if (reviewed_by !== 'all') {
  //     payload = { ...payload, reviewed_by: user._id };
  //   }

  //   if (review_status !== 'all') {
  //     payload = { ...payload, review_status };
  //   }

  //   if (status !== 'all') {
  //     payload = { ...payload, status };
  //   }

  //   fetchAllPropertiesAction(payload);
  // }, [fetchAllPropertiesAction, currentPage, limit, reviewed_by, review_status, status, user._id])

  // const handleChangePageNumber = (pageNumber) => {
  //   if (currentPage !== pageNumber) {
  //     changePageNumberAction(pageNumber);
  //   }
  // }

  // const handleChangeFilterOption = (filterType, value) => {
  //   if(filters[filterType] !== value) {
  //     let newFilters = { ...filters, [filterType]: value };
  //     updateFiltersAction(newFilters);
  //   }
  // }

  const classes = useStyles();

  const postmanEmbedCode =
    "[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/ef8a84042c4afaeb47f7)";

  const gotoVRoneSDK = () => {
    window.open("https://github.com/QuestionWhatsReal/VRone-SDK/releases", "_blank");
  };

  const gotoEdificeVRGithub = () => {
    window.open("https://github.com/EdificeVR/EdificeVR/releases", "_blank");
  };

  const readVRoneSDKDocs = () => {
    window.open("https://docs.vrone.qwr.asia/", "_blank");
  };

  const readAIDocs = () => {
    window.open("https://docs.aiaas.qwr.asia/", "_blank");
  };





  // async function showRazorpay() {
  //   const res = await loadScript(
  //     "https://checkout.razorpay.com/v1/checkout.js"
  //   );

  //   if (!res) {
  //     alert("Razorpay SDK failed to load. Are you online?");
  //     return;
  //   }

  // // let data =  props.handleOrderRequestAction({amount:500,currency:"INR",receipt:"test_order_rcptid_1"})
  // // .then(data=> data)

  // // data= data.then(d=>d);

  // const data = await fetch("http://localhost:1337/razorpay", {
  //     method: "POST",
  //   }).then((t) => t.json());
  // console.log(data);



  //   const options = {
  //     key: "rzp_test_R1NQqOZzTHhT7g",
  //     currency: data.currency,
  //     amount: data.amount.toString(),
  //     order_id: data.id,
  //     // receipt:data.data.receipt,
  //     name: "Question What's Real",
  //     description: "description . . . ",
  //     // image: require("../../assets/images/Asset 4VRone.png"),
  //     handler: function (response) {
  //       alert(response.razorpay_payment_id);
  //       alert(response.razorpay_order_id);
  //       alert(response.razorpay_signature);

  //       alert("Transaction successful");
  //     },
  //     prefill: {
  //       name: "bipin",
  //       email: "bipinprjl@gmail.com",
  //       phone_number: "9800000000",
  //     },
  //   };

  //   const paymentObject = new window.Razorpay(options);
  //   paymentObject.open();






  // }

  const visitAppStore = () => {

    console.log(props);

    if (isAppStoreSubscriber) {
      history.push("/appstoredashboard")
    }
    else {
      history.push("/home/agreement")
    }

  }

  console.log(user)

  return (
    <Box
      // maxWidth="lg"
      style={{
        display: "flex",
        flexDirection: "row",
        boxPack: "start",
        alignItems: "center",
      }}
    >
      {user.isDeveloper ? (
        <>
          <div
            display="flex"
            flex="coloumn"
            className={classes.container}
            style={{
              display: "flex",
              flexWrap: "wrap",
              paddingLeft: "80px",
              paddingRight: "80px",
              marginLeft: "5px",
              marginBottom: "20px",
              minWidth: "100%",
              alignContent: "center",
              justifyContent: "space-between",
              backgroundColor: "black",
            }}
          >
            <Container
              src={backPaper}
              // paddingTop="50px"
              style={{
                backgroundImage: `url(${backPaper})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // margin: 'auto',
                height: "35vh",
                width: "calc(20vw * 0.54 - 2%)",
                borderRadius: 8,
                display: "flex",

                display: "flex",
                flexDirection: "column",
                paddingLeft: "80px",
                paddingRight: "80px",
                marginLeft: "5px",
                marginBottom: "20px",
                minWidth: "100%",
                alignContent: "center",
                // justifyContent: "space-between",
                backgroundColor: "black",
              }}
            // component={Typography}
            >
              <Typography

                style={{
                  fontSize: "10vw"
                }}

                variant="h1" align="center">
                Welcome
              </Typography>
              {/* <div
                className={classes.container}
                style={{
                  display: "flex",

                  boxPack: "justifyContent",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "gray",
                  height: "10px",
                  paddingTop: "10px",
                }}
              > */}
              <Typography
                style={{ color: "gray" }}
                varient="p"
                align="center"
                position=""
              >
                Explore the Features
              </Typography>
              {/* </div> */}
            </Container>

            {/* Cards Start */}
            <div
              // Container
              style={{
                width: "calc(100% + 32px)",
                margin: "-16px",
                display: "flex",
                flexWrap: "wrap",
                boxSizing: "border-box",
                paddingLeft: "5px",
                paddingRight: "5px",
                marginLeft: "5px",
                marginBottom: "20px",
                minWidth: "100%",
                alignContent: "center",
                justifyContent: "space-between",
                backgroundColor: "black",
              }}
            >
              {/* ################# 1st card App store ################# */}
              {/* <Paper
                style={{ backgroundColor: "black" }}
                className={classes.paper}
              > */}
              {user.isAdmin ? (
                <Card
                  // style={{ backgroundColor: "black" }}
                  className={classes.cardRoot}
                >
                  <CardActionArea
                    style={{ alignContent: "center", alignItems: "center" }}
                  >
                    <CardMedia className={classes.media} title="App store">
                      <img
                        style={{
                          paddingTop: "20px",
                          paddingLeft: "40px",
                          display: "flex",
                          flex: "1",
                          width: "50px",
                          height: "80px",
                          width: "160px",
                        }}
                        src={appStoreLogo}
                      />
                    </CardMedia>
                  </CardActionArea>

                  <CardContent className={classes.cardContent} align="center">
                    <Typography
                      stlye={{ alignItems: "center" }}
                      variant="h5"
                      component="h2"
                    ></Typography>
                    <Typography
                      variant="body2"
                      style={{ color: "gray" }}
                      component="p"
                    // backgroundColor="#111115"
                    >
                      {/* App store managment for you. */}
                    </Typography>
                  </CardContent>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignContent: "center",
                      justifyContent: "space-between",
                    }}
                  >

                    <Button
                      style={{ flex: "1", alignContent: "center" }}
                      size="small"
                      // color="white"
                      onClick={visitAppStore}
                    >

                      Visit

                    </Button>
                  </div>
                </Card>
              ) : () => null}
              {/* </Paper> */}
              {/* </div> */}
              {/* <div
              // style={{ paddingLeft: "50px", paddingRight: "50px" }}
              item
              xs={3}
            > */}
              {/* ################# 2nd QWR VRone SDK ################# */}
              {/* <Paper
                style={{ backgroundColor: "black" }}
                className={classes.paper}
              > */}
              <Card className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia className={classes.media} title="QWR VRone SDK">
                    <img
                      style={{
                        paddingTop: "20px",
                        paddingLeft: "40px",
                        display: "flex",
                        flex: "1",
                        width: "50px",
                        height: "60px",
                        width: "160px",
                      }}
                      src={vrOneLogo}
                    />
                  </CardMedia>
                </CardActionArea>
                <CardContent align="center">
                  <Typography
                    // gutterBottom
                    // variant="h6"
                    style={{ color: "gray" }}
                  >
                    QWR VRone SDK
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "gray" }}
                    component="p"
                  >
                    v0.1.11
                  </Typography>
                </CardContent>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignContent: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    style={{ flex: "0.5", alignContent: "center" }}
                    onClick={gotoVRoneSDK}
                    size="small"
                  // color="white"
                  >
                    <GitHubIcon />
                  </Button>
                  <Button
                    style={{ flex: "0.5", alignContent: "center" }}
                    onClick={readVRoneSDKDocs}
                    size="small"
                  // color="white"
                  >
                    <MenuBookIcon />
                  </Button>

                </div>
              </Card>
              {/* </Paper> */}
              {/* </div> */}
              {/* <div
              // style={{ paddingLeft: "50px", paddingRight: "50px" }}
              item
              xs={3}
            > */}
              {/* ################# 3rd AIaas API Key ################# */}
              {/* <Paper
                style={{ backgroundColor: "black" }}
                className={classes.paper}
              > */}
              <Card className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia className={classes.media} title="AIaas API Key">
                    <h1
                      style={{
                        paddingTop: "20px",
                        paddingLeft: "95px",
                        display: "flex",
                        flex: "1",
                        width: "50px",
                        height: "60px",
                        width: "160px",
                      }}
                    >
                      AIaaS
                    </h1>
                  </CardMedia>
                </CardActionArea>
                <CardContent align="center">
                  <Typography style={{ color: "gray" }}>API Key</Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "gray" }}
                    component="p"
                  >
                    {user.apiKey}
                  </Typography>
                </CardContent>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignContent: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    //bottom Style
                    style={{ flex: "0.5", alignContent: "center" }}
                    size="small"
                  // color="white"
                  >
                    <Markdown source={postmanEmbedCode} />
                  </Button>
                  <Button
                    aria-label="documentation"
                    onClick={readAIDocs}
                    size="small"
                    // color="white"
                    //bottom Style
                    style={{ flex: "0.5", alignContent: "center" }}
                  >
                    <MenuBookIcon />
                  </Button>
                </div>
              </Card>
              {/* </Paper> */}
              {/* </div> */}
              {/* <div
              // style={{ paddingLeft: "50px", paddingRight: "50px" }}
              item
              xs={3}
            > */}

              {/* ################# 4th Card - EdificeVR ################# */}
              {/* <Paper
                style={{ backgroundColor: "black" }}
                className={classes.paper}
              > */}
              <Card className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    // image={edificeVrLogo}
                    title="EdificeVR"
                  >
                    <img
                      src={edificeVrLogo}
                      style={{
                        paddingTop: "20px",
                        paddingLeft: "30px",
                        display: "flex",
                        flex: "1",
                        width: "30px",
                        height: "200px",
                      }}
                    />
                  </CardMedia>
                </CardActionArea>
                <CardContent align="center">
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ color: "gray" }}
                  >
                    EdificeVR
                  </Typography>
                  {/* <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Realtor Login details:
                      
                    </Typography> */}

                  <Typography
                    variant="subtitle2"
                    style={{ color: "gray" }}
                    component="p"
                  >
                    Username: info@edificevr.com
                  </Typography>
                  <Typography
                    // variant="body"
                    style={{ color: "gray" }}
                    component="p"
                  >
                    Password: edificevr
                  </Typography>
                </CardContent>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignContent: "center",
                    justifyContent: "space-between",
                    minHeight: "30px",
                  }}
                >
                  <Button
                    onClick={gotoEdificeVRGithub}
                    anchor="bottom"
                    style={{ flex: "1", align: "center" }}
                  >
                    <GitHubIcon />
                  </Button>
                </div>
              </Card>
              {/* </Paper> */}
            </div>

            {/* End cards */}
          </div>
        </>
      ) : (
        <Typography color="textSecondary">
          <ReactTypeformEmbed url="https://questionwhatsreal.typeform.com/to/b3GXpO" />
        </Typography>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  ...state.Home,
  ...state.Payment,
  user: state.Login.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...Actions, setHeaderNameAction }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
