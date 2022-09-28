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
import useMediaQuery from '@material-ui/core/useMediaQuery';

import MoreVertIcon from "@material-ui/icons/MoreVert";


// ##################################################################################### new added
import projectLogo from "../../assets/images/Asset 4VRone.png";
import { Box,List,ListItem,ListItemText,Divider,SwipeableDrawer } from "@material-ui/core";
import clsx from "clsx";
import SearchRounded from "@material-ui/icons/SearchRounded";
import ChevronRight from "@material-ui/icons/ChevronRight";

import Notification from "./../Notification";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    position: "static",
    display: "WebkitBox",
    display: "webkitFlex",
    display: "flex",
    padding: "0 12px",
    WebkitBoxPack: "justify",
    WebkitJustifyContent: "space-between",
    justifyContent: "space-between",
    WebkitBoxAlign: "center",
    webkitAlignItems: "center",
    alignItems: "center",

    zIndex: "9999",
    width: "80%",
    height: "auto",
    maxWidth: "none",
    marginTop: "0",
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: "0",
    lineHeight: "54px",
    // background: "rgba(0,0,0,0.8)", // keep right padding when drawer closed
    display: "flex",
    // paddingRight: "12px",
    // paddingLeft: "20px",
    boxPack: "justifyContent",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },


  menuButtonHidden: {
    // display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    backgroundColor: "black",
  },
  container: {
    // paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const MainLayout = (props) => {
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const {
    // name: headerName,
    handleLogoutRequestAction,
  } = props;
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuCloseAndLogout = () => {
    handleMenuClose();
    handleLogoutRequestAction();
  };


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[" "," ",'Home', 'Discover', 'Support', 'Develop','Account'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div
      className={classes.root}
      // style={{ color: "#333" }}
    >
      <Notification />
      <CssBaseline />
      {/* ############### Head Content ############### */}
      <Box>
        <AppBar
          component={Box}
          style={{
            zIndex: "999999999",
            position: "fixed",
            width: "100%",
            height: "54px",
            marginTop: "0",
            paddingTop: "0",
            paddingBottom: "0",
            // WebkitBoxPack: "start",
            // WebkitJustifyContent: "flex-Start",
            backdropFilter: "saturate(180%) blur(20px)",
            // msFlexpack: "start",
            // justifyContent: "flex-Start",
            backgroundColor: "rgba(0,0,0,0.8)",
            lineHeight: "54px",
            boxSizing: "border-box",
            // display: "block",
            // paddingTop: "20px",
            // borderBottom: "0px solid #333 ",
          }}
        >

          <SwipeableDrawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
            onOpen={toggleDrawer("top", true)}
          >
            {list("top")}
          </SwipeableDrawer>

          <Toolbar component={Container} className={classes.toolbar}>
          

            {/* ############# Logo ############# */}
            <div
            // className={clsx("app-header-logo", {})}
            >
              <Box
              // className="header-logo-wrapper"
              >
                <Link
                  to="/"
                  // className="header-logo-wrapper-link"
                >
                  <img
                    to="/"
                    // className="app-header-logo-img"
                    alt="QWR"
                    src={projectLogo}
                    height="30px"
                    width="25px"
                    align="center"
                  />
                </Link>
              </Box>
            </div>

            {/* Smaller screen */}

            {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton> */}

            {/* ############# Home typo ############# */}

      {
              !matches?
              <IconButton
            // edge="start"
            color="inherit"
            aria-label="open drawer"
            // onClick={handleDrawerOpen}
            onClick={toggleDrawer("top", true)}
            className={`${classes.menuButton} ${
              open ? classes.menuButtonHidden : ""
            }`}
          >
            <MenuIcon />
          </IconButton>
        :

      <>
 <Link to="/" className="header-logo-wrapper-link">
    <Typography
      component={IconButton}
      to="/"
      color="inherit"
      size="small"
    >
      Home
    </Typography>
  </Link>

  <Typography
    component={IconButton}
    to="/"
    size="small"
    color="inherit"
    noWrap
  >
    Discover
  </Typography>

  {/* ############# Support typo ############# */}
  <Typography
    component={IconButton}
    to="/"
    size="small"
    color="primary"
    noWrap
  >
    Support
  </Typography>

  {/* ############# Develop typo ############# */}
  <Typography
    component={IconButton}
    to="/"
    size="small"
    color="inherit"
    noWrap
  >
    Develop
  </Typography>

  {/* ############# Account typo ############# */}
  <Typography
    component={IconButton}
    to="/"
    size="small"
    color="inherit"
    noWrap
  >
    Account
  </Typography>

  {/* ############# Search Icon ############# */}
  <IconButton
    className="navigation-links-menu-icon mr-3 p-2"
    aria-label="main menu"
    size="small"
    //onClick={}
  >
    <SearchRounded />
  </IconButton>

  
      </>
          }

         {/* ############# More options ############# */}
  <IconButton
    className="navigation-links-menu-icon mr-3 p-2"
    aria-label="main menu"
    onClick={handleMenuOpen}
  >
    <MoreVertIcon />
  </IconButton>

  {/* ############# More options open ############# */}
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    id="primary-search-account-menu"
    keepMounted
    transformOrigin={{ vertical: "top", horizontal: "right" }}
    open={isMenuOpen}
    onClose={handleMenuClose}
    style={{ zIndex: "9999999999999" }}
  >
    <MenuItem component={Link} to="/change-password" color="inherit">
      Change Password
    </MenuItem>
    <MenuItem onClick={handleMenuCloseAndLogout}>Logout</MenuItem>
  </Menu>

          </Toolbar>
        </AppBar>
      </Box>
      {/* Head Content - end */}
      {/* Body content */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Box>
          <Box
            //style={{ maxWidth: "70%", overflow: "auto" }}
            className={classes.container}
          >
            {props.children}
          </Box>
        </Box>
      </main>
    </div>

);
};

const mapStateToProps = (state) => ({
  ...state.MainLayout,
});

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...Actions, handleLogoutRequestAction }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
