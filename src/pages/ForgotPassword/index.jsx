import React, { useEffect } from "react";

// For redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "./../../redux/ForgotPassword/Actions";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";

import { Link, Redirect } from "react-router-dom";

// Document Head Manager
import { Helmet } from "react-helmet";
import projectLogo from "../../assets/images/Asset 4VRone.png";

import { Formik, Form } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  container_design: {
    background: "#1E1F20",
    display: "center",
    borderRadius: "30px",
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

const ForgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().required("Please enter an email or username"),
});

const ForgotPassword = (props) => {
  const {
    isAuthenticated,
    hasError,
    hasSuccess,
    errorMessage,
    requestResetPasswordAction,
    resetForgotPasswordParamsAction,
  } = props;
  const classes = useStyles();

  useEffect(() => {
    return () => {
      resetForgotPasswordParamsAction();
    };
  }, [resetForgotPasswordParamsAction]);

  const handleFormSubmit = (values) => {
    requestResetPasswordAction(values);
  };

  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <Container
      className={classes.container_design}
      component="main"
      maxWidth="sm"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Forgot Password | {process.env.REACT_APP_NAME}</title>
      </Helmet>
      <div className={classes.paper}>
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
            <Typography component="h4" variant="h4">
              Forgot Password
            </Typography>
          </Grid>
          <Grid className={classes.paper2} item xs alignItems="center">
            <img src={projectLogo} height="60px" width="50px" align />
            {/* 
            {hasError && (
              <Alert
                style={{ paddingBottom: "30px" }}
                className="mt-3 w-100"
                severity="error"
              >
                {errorMessage}
              </Alert>
            )} */}
          </Grid>
        </Grid>
        {hasError ? (
          <Alert
            style={{
              width: "50%",
              marginBottom: "30px",
              backgroundColor: "black",
              borderRadius: "8px",
            }}
            severity="error"
          >
            <AlertTitle>Error</AlertTitle>
            {errorMessage}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              component={Link}
              to="/login"
            >
              Try again
            </Button>
          </Alert>
        ) : hasSuccess ? (
          <React.Fragment>
            <Alert
              style={{ width: "50%", paddingBottom: "30px" }}
              severity="success"
            >
              <AlertTitle>Recovery Email Sent!</AlertTitle>
              <p>
                Please check your email within the next 2 hours for next steps
                to reset your password.
              </p>
              <p>
                If you can’t see the email, it might be in your spam folder, or
                your vrone account might be under a different email address.
              </p>
            </Alert>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              component={Link}
              to="/login"
            >
              Back to Login
            </Button>
          </React.Fragment>
        ) : (
          <>
            <Grid className={classes.paper}>
              <Formik
                enableReinitialize
                initialValues={{
                  email: "",
                }}
                onSubmit={handleFormSubmit}
                validationSchema={ForgotPasswordValidationSchema}
              >
                {(renderProps) => {
                  const { values: formValues, touched, errors } = renderProps;
                  return (
                    <Form className={classes.form}>
                      <TextField
                        label="Email"
                        style={{ width: "100%" }}
                        margin="normal"
                        fullWidth
                        id="email"
                        name="email"
                        autoComplete="email"
                        newsletter={true}
                        InputProps={{
                          autoComplete: "off",
                        }}
                        value={formValues.email}
                        onChange={(e) =>
                          renderProps.setFieldValue("email", e.target.value)
                        }
                        helperText={touched.email && errors.email}
                        error={touched.email && errors.email ? true : false}
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Submit
                      </Button>
                    </Form>
                  );
                }}
              </Formik>
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexGrow: "1",
              }}
            >
              <Grid container item xs>
                <Link className={classes.paper2} to="/login">
                  Back to Login?
                </Link>
              </Grid>
              <Grid item xs>
                <Link className={classes.paper2} to="/register">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  ...state.ForgotPassword,
  isAuthenticated: state.Login.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
