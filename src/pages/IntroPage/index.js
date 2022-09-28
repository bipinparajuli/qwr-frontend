import React, { useState } from "react";

// For redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "./../../redux/MainLayout/Actions";
import { handleLogoutRequestAction } from "../../redux/Login/Actions";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useMediaQuery from '@material-ui/core/useMediaQuery';


// ##################################################################################### new added
import projectLogo from "../../assets/images/Asset 4VRone.png";

// Newly added
import { Box, Divider, Grid } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import appStoreLogo from "../../assets/images/appStore.png";
import vrOneLogo from "../../assets/images/vrOne.png";
import edificeVrLogo from "../../assets/images/edificeVR.png";
import backPaper from "../../assets/images/backPaper.jpeg";
import makeInIndia from "../../assets/images/makeInIndia.png";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
// import Accordion from '@material-ui/core/Accordion';
import Accordion from "@material-ui/core/Accordion";

import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Newly added - end

import clsx from "clsx";
import SearchRounded from "@material-ui/icons/SearchRounded";
import ChevronRight from "@material-ui/icons/ChevronRight";

import Notification from "../../components/Notification";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "WebkitBox",
    display: "webkitFlex",
    display: "flex",
    zIndex: "9999",
    justifyContent: "center",

    maxWidth: "none",
    marginTop: "0",
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: "0",
  },

  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  // fixedHeight: {
  //   height: 240,
  // },
  mainGrid: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingTop: "50px",
    flexWrap:"wrap"
  },
  typo: {
    color: "gray",
  },
  gridBlock: {
    maxWidth: "20%",
    alignItems: "center",
  },
  divider: {
    marginBottom: "10px",
  },
}));




const Intro = () => {
  // const { isAuthenticated } = props;
  const classes = useStyles();

  // For external Link - Privacy Policies link
  const viewPrivacyPolicies = () => {
    window.open("https://www.questionwhatsreal.com/support/legal", "_blank");
  };

  const viewAURL = () => {
    window.open("https://www.questionwhatsreal.com/products/aurl", "_blank");
  };

  const viewVRone = () => {
    window.open("https://www.questionwhatsreal.com/products/vrone", "_blank");
  };

  const viewLiteX = () => {
    window.open("https://www.questionwhatsreal.com/products/litex", "_blank");
  };

  const viewAccessories = () => {
    window.open("https://www.questionwhatsreal.com/store", "_blank");
  };

  const viewProjectEEVEE = () => {
    window.open("https://www.questionwhatsreal.com/products/eevee", "_blank");
  };

  const viewProjectBrahmastra = () => {
    window.open("https://www.questionwhatsreal.com/products/connect", "_blank");
  };

  const viewAboutUs = () => {
    window.open("https://www.questionwhatsreal.com/about", "_blank");
  };

  const viewContact = () => {
    window.open("https://www.questionwhatsreal.com/contact", "_blank");
  };

  const viewBrandCenter = () => {
    window.open("https://www.questionwhatsreal.com/brand-center", "_blank");
  };

  const viewResearch = () => {
    window.open("https://www.questionwhatsreal.com/rnd", "_blank");
  };

  const viewCareers = () => {
    window.open("https://www.questionwhatsreal.com/career", "_blank");
  };

  const viewInternships = () => {
    window.open("https://www.questionwhatsreal.com/career", "_blank");
  };

  const viewDeveloperCenter = () => {
    window.open(
      "https://www.questionwhatsreal.com/community/developers",
      "_blank"
    );
  };

  const viewDeveloperProgram = () => {
    window.open(
      "https://www.questionwhatsreal.com/community/developer-program",
      "_blank"
    );
  };

  const viewDeveloperBlog = () => {
    window.open("https://www.questionwhatsreal.com/#", "_blank");
  };

  const viewDeveloperForums = () => {
    window.open("https://www.questionwhatsreal.com/#", "_blank");
  };

  const viewCreators = () => {
    window.open(
      "https://www.questionwhatsreal.com/community/creators",
      "_blank"
    );
  };

  const viewLaunchPad = () => {
    window.open(
      "https://www.questionwhatsreal.com/community/launch-pad",
      "_blank"
    );
  };

  const viewForums = () => {
    window.open("http://forum.questionwhatsreal.com/", "_blank");
  };

  const viewQWRLabs = () => {
    window.open("https://www.questionwhatsreal.com/#", "_blank");
  };

  const viewSupport = () => {
    window.open("https://www.questionwhatsreal.com/support-contact", "_blank");
  };

  const viewDownloads = () => {
    window.open("https://www.questionwhatsreal.com/#", "_blank");
  };

  const visitFacebook = () => {
    window.open("https://www.facebook.com/questionwhatsreal/", "_blank");
  };
  const visitInstagram = () => {
    window.open("https://www.instagram.com/questionwhatsreal/", "_blank");
  };
  const visitTwitter = () => {
    window.open("https://twitter.com/QWR_asia", "_blank");
  };
  const visitYouTube = () => {
    window.open(
      "https://www.youtube.com/channel/UCa8YX0Ib1pmsMqBAC0Bt3kA",
      "_blank"
    );
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);

  }

const matches = useMediaQuery('(min-width:600px)');

  return (
    <>
      <Notification />
      <CssBaseline />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          borderBottomLeftRadius: "30px",
          backgroundColor: "#f1f3f5",
        }}
      >
        <AppBar
          style={{
            zIndex: "999999999",
            position: "inherit",
            width: "100%",
            height: "54px",

            height: "auto",
            maxWidth: "none",
            marginTop: "0",
            marginRight: "auto",
            marginLeft: "auto",
            paddingTop: "0",

            backgroundColor: "black",
            boxSizing: "border-box",
          }}
        >
          <Toolbar className={classes.toolbar}>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <Link to="/login">
                <img
                  style={{ alignContent: "center" }}
                  to="/login"
                  alt="QWR"
                  src={projectLogo}
                  height="70px"
                  width="55px"
                />
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <Box
        // style={{
        //   marginTop: "0",
        //   paddingTop: "0",
        //   paddingBottom: "0",
        // }}
        >
          {/* Jumbo Div 1 */}
          <Container
            src={backPaper}
            style={{
              backgroundImage: `url(${backPaper})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              margin: "auto",
              borderBottomLeftRadius: "50px",
              borderBottomRightRadius: "50px",

              height: "75vh",

              width: "calc(20vw * 0.54 - 2%)",
              marginTop: "0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              minWidth: "100%",
              alignContent: "center",
              backgroundColor: "black",
              // borderFilter: "blur(30px)",
            }}
            // component={Typography}
          >
            <Typography style={{ color: "gray" }} varient="p" align="center">
              Augmenting the future of Humanity
            </Typography>
            <Typography
              // component={Container}
              variant="h2"
              align="center"
              fontFamily="Avenir sans-serif"
            >
              Question What's Real
            </Typography>

            <Link to="/login" color="#f1f3f5" align="center">
              <LockOutlinedIcon
                color="action"
                style={{ height: "40px", width: "30px", marginTop: "50px" }}
              />
            </Link>
            <Link to="/login" color="#f1f3f5" align="center">
              <Button  variant="outlined" color="default">
                Login
              </Button>
            </Link>
            <Link to="/login">
              <Typography
                style={{ marginTop: "35px", color: "#f1f3f5" }}
                varient="p"
                align="center"
              >
                Login for QWR Developer portal
              </Typography>
            </Link>
          </Container>
          <Typography
            variant="h6"
            align="center"
            style={{ color: "gray", paddingTop: "40px" }}
          >
            Read More
            <ArrowDropDownIcon
              align="center"
              style={{
                alignSelf: "center",
                color: "gray",
                paddingTop: "5px",
              }}
            />
          </Typography>

          <div
            style={{
              marginTop: "0",
              display: "flex",
              backgroundColor: "#f1f3f5",
            }}
          >
            <Container
              width="940px"
              style={{
                minheight: "35vh",
                // width: "calc(20vw * 0.54 - 2%)",
                marginTop: "0",
                display: "flex",
                flexWrap:"wrap",
                justifyContent: "space-evenly",
                minWidth: "80%",
                alignItems: "center",
                marginBottom: "100px",
                marginTop: "50px",
              }}
            >
              <Grid xs={5} item={true} style={{ flex: "0.5",minWidth:'300px' }}>
                <Typography
                  style={{
                    color: "black",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  WHY DEVELOP FOR QWR ECOSYSTEM?
                </Typography>
                <Typography style={{ color: "black" }} variant="h3">
                  A one stop shop for the future of human computer interaction
                </Typography>
              </Grid>
              <Grid item={true} xs={6} style={{ flex: "0.5" }}>
                <Typography style={{ color: "gray", paddingTop: "40px" }}>
                  "Everything from highly accurate machine vision modules to
                  developer montinisation programs. QWR Ecosystem will serve to
                  be the most powerful resource to enable enthusiasts to
                  codegeekalike. There are tools for everyone built to amplify
                  your capabilities and give you superpowersthat you never had
                  in 1 place before."
                </Typography>
              </Grid>
            </Container>
            {/* Jumbo Div 1 END */}
          </div>
          {/* div 2 end */}
          <div
            style={{
              paddingTop: "20px",
              backgroundColor: "black",
              borderTopLeftRadius: "50px",
              borderTopRightRadius: "50px",
            }}
          >
            <Container
              style={{
                backgroundColor: "black",
              }}
            >
              <div style={{ paddingTop: "100px" }}>
                <Typography
                  style={{ color: "gray", paddingBottom: "5px", width: "100%" }}
                >
                  AND THAT'S NOT EVERYTHING
                </Typography>
              </div>
              <Box>
                <Typography
                  // borderBottom="1px #f1f3f5"
                  variant="h3"
                  style={{
                    paddingTop: "10px",
                    height: "50px",
                  }}
                >
                  Features Overview
                </Typography>
              </Box>
              <Grid
                className={classes.mainGrid}
                style={{ display: "flex", marginTop: "50px" }}
              >
                <Grid className={classes.gridBlock} item xs={4}>
                  <Divider className={classes.divider} />
                  <Typography align="center" className={classes.typo}>
                    Access to latest hardware, tools and resources
                  </Typography>
                </Grid>
                <Grid className={classes.gridBlock} item xs={4}>
                  <Divider className={classes.divider} />
                  <Typography align="center" className={classes.typo}>
                    Capability to work inbleeding of immersive andindustry 4.0
                    technologies.
                  </Typography>
                </Grid>
                <Grid className={classes.gridBlock} item xs={4}>
                  <Divider className={classes.divider} />
                  <Typography align="center" className={classes.typo}>
                    Access to QWR Developer Grants Program
                  </Typography>
                </Grid>
              </Grid>
              <Grid className={classes.mainGrid} style={{ display: "flex" }}>
                <Grid className={classes.gridBlock} item xs={4}>
                  <Divider className={classes.divider} />
                  <Typography align="center" className={classes.typo}>
                    Access to an existing library of apps, games & tools for
                    your reference.
                  </Typography>
                </Grid>
                <Grid className={classes.gridBlock} item xs={4}>
                  <Divider className={classes.divider} />
                  <Typography align="center" className={classes.typo}>
                    Carefully crafted and highlycross functional SDKplatform.
                  </Typography>
                </Grid>
                <Grid className={classes.gridBlock} item xs={4}>
                  <Divider className={classes.divider} />
                  <Typography align="center" className={classes.typo}>
                    Access to the best low latency cloud computing platform
                  </Typography>
                </Grid>
              </Grid>
              <Grid className={classes.mainGrid} style={{ display: "flex" }}>
                <Grid className={classes.gridBlock} item xs={4}>
                  <Divider className={classes.divider} />
                  <Typography align="center" className={classes.typo}>
                    Opportunity to pitch solutions from Day “0” to all QWR
                    ecosystem partners.
                  </Typography>
                </Grid>
                <Grid className={classes.gridBlock} item xs={4}>
                  <Divider className={classes.divider} />
                  <Typography align="center" className={classes.typo}>
                    Access to the world’s largest immersive reality AppStore.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            {/* ############## End Div - Edit Above section only ############## */}
            <div
              src={backPaper}
              style={{
                backgroundImage: `url(${backPaper})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                margin: "auto",

                height: "40vh",

                width: "calc(20vw * 0.54 - 2%)",
                marginTop: "0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",

                minWidth: "100%",
                alignContent: "center",
                backgroundColor: "black",
                // borderFilter: "blur(30px)",
              }}
            />
            {/* End - div Ends here */}
            {/* Footer starts */}
           <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#f1f3f5",
                height: "74vh",
              }}
            >
              <Container>
                <div
                  style={{
                    color: "black",
                    marginTop: "50px",
                    paddingTop: "20px",
                    marginBottom: "15px",
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{ color: "gray" }}
                    fontWeight="Bold"
                  >
                    Question What's Real
                  </Typography>
                </div>
                <Divider
                  style={{
                    align: "center",
                    backgroundColor: "#acabaa",
                    marginBottom: "15px",
                  }}
                />
{
  !matches ? <> <Accordion style={{backgroundColor:"#f1f3f5",color:"#000"}}  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1bh-content"
    id="panel1bh-header"
  >
    <Typography className={classes.heading}>Products</Typography>
  </AccordionSummary>
  <AccordionDetails>
  <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "20px",
                      }}
                    >
  <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        fontWeight="Light"
                        onClick={viewAURL}
                      >
                        AURL
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewVRone}
                      >
                        VRone.
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewLiteX}
                      >
                        LiteX
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewAccessories}
                      >
                        Accessories
                      </Typography>
                      <Divider
                        style={{
                          align: "center",
                          backgroundColor: "gray",
                          marginBottom: "15px",
                          marginTop: "15px",
                        }}
                      />
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewProjectEEVEE}
                      >
                        Project EEVEE
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewProjectBrahmastra}
                      >
                        Project Brahmastra
                      </Typography>
                      </div>
  </AccordionDetails>
</Accordion>

{/* // second */}
<Accordion style={{backgroundColor:"#f1f3f5",color:"#000"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1bh-content"
  id="panel1bh-header"
>
  <Typography className={classes.heading}>About</Typography>
</AccordionSummary>
<AccordionDetails>
<div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "20px",
                      }}
                    >
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewAboutUs}
                      >
                        About Us
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewContact}
                      >
                        Contact
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewBrandCenter}
                      >
                        Brand Center
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewResearch}
                      >
                        Research
                      </Typography>

                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewCareers}
                      >
                        Careers
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewInternships}
                      >
                        Internships
                      </Typography>
                    </div>
</AccordionDetails>
</Accordion>

{/* //third */}

<Accordion style={{backgroundColor:"#f1f3f5",color:"#000"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1bh-content"
  id="panel1bh-header"
>
  <Typography className={classes.heading}>Developers</Typography>
</AccordionSummary>
<AccordionDetails>
<div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "20px",
                      }}
                    >
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewDeveloperCenter}
                      >
                        Developer Center
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewDeveloperProgram}
                      >
                        Developer Program
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewDeveloperBlog}
                      >
                        Developer Blog
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewDeveloperForums}
                      >
                        Developer Forums
                      </Typography>
                    </div>
</AccordionDetails>
</Accordion>

{/* //fourth */}

<Accordion style={{backgroundColor:"#f1f3f5",color:"#000"}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1bh-content"
  id="panel1bh-header"
>
  <Typography className={classes.heading}>Community</Typography>
</AccordionSummary>
<AccordionDetails>
<div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "20px",
                      }}
                    >
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewCreators}
                      >
                        Creators
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewLaunchPad}
                      >
                        Launch Pad
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewForums}
                      >
                        Forums
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewQWRLabs}
                      >
                        QWR Labs
                      </Typography>
                      <Divider
                        style={{
                          align: "center",
                          backgroundColor: "gray",
                          marginBottom: "15px",
                          marginTop: "15px",
                        }}
                      />
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewSupport}
                      >
                        Support
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewDownloads}
                      >
                        Downloads
                      </Typography>
                    </div>
</AccordionDetails>
</Accordion>
</>
:
<>

<Grid
                  style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "row",
                  }}
                  className={classes.mainGrid}
                >
<Grid md={3} item={true} style={{margin:"10px 0"}} >
                    <Typography style={{ color: "gray" }} fontWeight="Bold">
                      {/* <Box > */}
                        Products
                      {/* </Box> */}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "20px",
                      }}
                    >
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        fontWeight="Light"
                        onClick={viewAURL}
                      >
                        AURL
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewVRone}
                      >
                        VRone.
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewLiteX}
                      >
                        LiteX
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewAccessories}
                      >
                        Accessories
                      </Typography>
                      <Divider
                        style={{
                          align: "center",
                          backgroundColor: "gray",
                          marginBottom: "15px",
                          marginTop: "15px",
                        }}
                      />
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewProjectEEVEE}
                      >
                        Project EEVEE
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewProjectBrahmastra}
                      >
                        Project Brahmastra
                      </Typography>
                    </div>
                  </Grid>

                  {/* 2nd grid */}
                  <Grid item={true} md={3} style={{margin:"10px 0"}}>
                    <Typography style={{ color: "gray" }} fontWeight="Bold">
                      {/* <Box > */}
                        About
                      {/* </Box> */}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "20px",
                      }}
                    >
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewAboutUs}
                      >
                        About Us
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewContact}
                      >
                        Contact
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewBrandCenter}
                      >
                        Brand Center
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewResearch}
                      >
                        Research
                      </Typography>

                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewCareers}
                      >
                        Careers
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewInternships}
                      >
                        Internships
                      </Typography>
                    </div>
                  </Grid>

                 
                  {/* 3rd grid */}
                  <Grid md={3} item={true} style={{margin:"10px 0"}}>
                    <Typography style={{ color: "gray" }} fontWeight="Bold">
                      {/* <Box > */}
                        Developers
                      {/* </Box> */}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "20px",
                      }}
                    >
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewDeveloperCenter}
                      >
                        Developer Center
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewDeveloperProgram}
                      >
                        Developer Program
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewDeveloperBlog}
                      >
                        Developer Blog
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewDeveloperForums}
                      >
                        Developer Forums
                      </Typography>
                    </div>
                  </Grid >
                  {/* 4th Grid */}
                  <Grid md={3} item={true} style={{margin:"10px 0"}}>
                    <Typography style={{ color: "gray" }} fontWeight="Bold">
                      {/* <Box style={{ color: "gray" }} fontWeight="Bold"> */}
                        Commmunity
                      {/* </Box> */}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "20px",
                      }}
                    >
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewCreators}
                      >
                        Creators
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewLaunchPad}
                      >
                        Launch Pad
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewForums}
                      >
                        Forums
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewQWRLabs}
                      >
                        QWR Labs
                      </Typography>
                      <Divider
                        style={{
                          align: "center",
                          backgroundColor: "gray",
                          marginBottom: "15px",
                          marginTop: "15px",
                        }}
                      />
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewSupport}
                      >
                        Support
                      </Typography>
                      <Typography
                        style={{ paddingTop: "10px" }}
                        className={classes.typo}
                        onClick={viewDownloads}
                      >
                        Downloads
                      </Typography>
                    </div>
                  </Grid>


                  {/* End */}
                  </Grid>
</>
}
                <Box style={{ paddingTop: "50px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={makeInIndia}
                      style={{
                        height: "100px",
                        width: "220px",
                        opacity: "60%",
                        marginBottom: "8px",
                      }}
                    />
                    <div>
                      <FacebookIcon
                        onClick={visitFacebook}
                        style={{
                          fontSize: 40,
                          marginLeft: "10px",
                          marginRight: "10px",
                          color: "gray",
                        }}
                      />
                      <InstagramIcon
                        onClick={visitInstagram}
                        style={{
                          fontSize: 40,
                          marginLeft: "10px",
                          marginRight: "10px",
                          color: "gray",
                        }}
                      />
                      <TwitterIcon
                        onClick={visitTwitter}
                        style={{
                          fontSize: 40,
                          marginLeft: "10px",
                          marginRight: "10px",
                          color: "gray",
                        }}
                      />
                      <YouTubeIcon
                        onClick={visitYouTube}
                        style={{
                          fontSize: 40,
                          marginLeft: "10px",
                          marginRight: "10px",
                          color: "gray",
                        }}
                      />
                    </div>
                  </div>
                  <Divider
                    style={{
                      align: "center",
                      backgroundColor: "gray",
                      marginBottom: "15px",
                    }}
                  />
                  <div
                    style={{
                      color: "gray",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>
                      Copyright © 2020 QWR Interactive Solutions PLC. All rights
                      reserved.
                    </Typography>
                    <Typography
                      component="button"
                      variant="inherit"
                      onClick={viewPrivacyPolicies}
                    >
                      Privacy Policy | Terms of Use | Legal
                    </Typography>
                  </div>
                </Box>
              </Container>
            </div>
            {/* Footer end */}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Intro;
