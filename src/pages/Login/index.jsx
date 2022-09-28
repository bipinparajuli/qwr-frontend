import React from "react";

// For redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "./../../redux/Login/Actions";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
// import Checkbox from '@material-ui/core/Checkbox';
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import MuiAlert from "@material-ui/lab/Alert";
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// Document Head Manager
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";

// import { Copyright } from './../../components/MainLayout';
import Notification from "./../../components/Notification";

//############################## newly added #########################
import { Divider } from "@material-ui/core";
import projectLogo from "../../assets/images/Asset 4VRone.png";

const useStyles = makeStyles((theme) => ({
  container_design: {
    background: "#1E1F20",
    display: "center",
    borderRadius: "30px",
    alignSelf: "center",
    //minHeight: "calc(120vh -  650px)",
  },
  root: {
    height: "100vh",
  },
  //   image: {
  //     //backgroundImage: `url(${process.env.REACT_APP_BASE_PATH}/media/background.png)`,
  //     backgroundRepeat: "no-repeat",
  //     backgroundColor:
  //       theme.palette.type === "dark"
  //         ? theme.palette.grey[900]
  //         : theme.palette.grey[50],
  //     backgroundSize: "cover",
  //     backgroundPosition: "center",
  //   },
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
    backgroundImage: "dark",
    display: "flex", // need to change this property
    flexDirection: "column",
    alignItems: "center",
    align: "center",
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  // textField: {
  //   borderRadius: "30px",
  // },
  form: {
    width: "50%", // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "black",
  },
  divLayout: {
    display: "flex",
    alignContent: "space-around",
  },
  paper2: {
    padding: theme.spacing(2),
    display: "flex",
    textAlign: "center",
    color: "gray",
  },
}));

export const Alert = (props) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

const LoginValidationSchema = Yup.object().shape({
  username: Yup.string().required("Please enter username or email"),
  password: Yup.string().required("Please enter a password").min(8).max(255),
});

const Login = (props) => {
  console.log(props);
  const {
    isAuthenticated,
    hasError,
    errorMessage,
    isEmailVerified,
    emailVerificationId,
    resentVerificationMailAction,
  } = props;
  const classes = useStyles();


  const handleFormSubmit = (values) => {
    console.log(values);
    props.handleLoginRequestAction(values);
  };

  const resendVerificationMail = () => {
    const payload = {
      _id: emailVerificationId,
    };

    resentVerificationMailAction(payload);
  };

  return isAuthenticated ? (
    <Redirect to="/home" />
  ) : (
    //################ Login Page ################
    <Container
      className={classes.container_design}
      // component="main"
      maxWidth="sm"
    >
      <Notification />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{process.env.REACT_APP_NAME}</title>
      </Helmet>
      {/* Main Div */}
      <div className={classes.paper}>
        {/* ################ #1 Bottom Layout ################ */}
        {/* <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          style={{ paddingTop: "20px", alignContent: "center" }}
        > */}

        <Grid
          style={{
            // display: "flex",
            // justifyContent: "space-between",
            paddingTop: "20px",
            paddingBottom: "10px",
            display: "flex",
            //height: "20px",
            paddingRight: "12px",
            paddingLeft: "12px",
            boxPack: "justify",
            justifyContent: "space-between",
            WebkitAlignItems: "center",
            alignItems: "center",
          }}
        >
          <Grid
            className={classes.paper2}
            style={{ justifyContent: "space-between", color: "white" }}
            item
            xs
          >
            <Typography component="h2" variant="h4" alignItems="center">
              Login
            </Typography>
          </Grid>
          <Grid className={classes.paper2} item xs alignItems="center">
            <img
              className="app-header-logo-img"
              alt="Carolina React Admin Dashboard with Material-UI Free"
              src={projectLogo}
              height="60px"
              width="50px"
            />
          </Grid>
        </Grid>
        {hasError && (
          <Alert className="mt-3 w-100" severity="error">
            {errorMessage}
          </Alert>
        )}
        {/* ################ #2 Middle Layout -> radius ################ */}
        <Grid className={classes.paper}>
          <Formik
            enableReinitialize
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={handleFormSubmit}
            validationSchema={LoginValidationSchema}
          >
            {(renderProps) => {
              const { values: formValues, touched, errors } = renderProps;
              return (
                <>
                  <Form className={classes.form}>
                    <TextField
                      className={classes.textField}
                      label="Your Username / Email"
                      style={{ width: "100%" }}
                      margin="normal"
                      fullWidth
                      id="username"
                      name="username"
                      autoComplete="username"
                      autoFocus
                      value={formValues.username}
                      onChange={(e) =>
                        renderProps.setFieldValue("username", e.target.value)
                      }
                      helperText={touched.username ? errors.username : ""}
                      error={touched.username && errors.username ? true : false}
                    />
                    <TextField
                      label="Password"
                      margin="normal"
                      style={{ width: "100%" }}
                      fullWidth
                      id="password"
                      name="password"
                      autoComplete="current-password"
                      InputProps={{
                        type: "password",
                      }}
                      value={formValues.password}
                      onChange={(e) =>
                        renderProps.setFieldValue("password", e.target.value)
                      }
                      helperText={touched.password ? errors.password : ""}
                      error={touched.password && errors.password ? true : false}
                    />
                    {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  /> */}
                    {isEmailVerified !== undefined &&
                      isEmailVerified === false && (
                        <Grid container>
                          <Grid item xs />
                          <Grid item>
                            <Button onClick={resendVerificationMail}>
                              Resend Verification Email
                            </Button>
                          </Grid>
                        </Grid>
                      )}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Sign In
                    </Button>
                  </Form>
                </>
              );
            }}
          </Formik>
        </Grid>
        {/* ################ #3 Bottom Layout -> Complete ################ */}
        <Grid
          style={{
            display: "flex",
            flexGrow: "1",
          }}
        >
          <Grid container item xs>
            <Link className={classes.paper2} to="/forgot-password">
              Forgot password?
            </Link>
          </Grid>
          <Grid item xs>
            <Link className={classes.paper2} to="/register">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  ...state.Login,
});

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
