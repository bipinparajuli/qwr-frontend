import React, { useEffect } from "react";

// For redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../../redux/ResetPassword/Actions";

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
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";

import { Helmet } from "react-helmet";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

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

const ResetPasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Please enter a password")
    .min(8, "Password is too short - should be 8 chars minimum."),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Confirm password must be same as Password"
    )
    .required("Please enter confirm password"),
});

const ResetPassword = (props) => {
  const {
    isLoading,
    isAuthenticated,
    isTokenVerified,
    hasError,
    hasSuccess,
    errorMessage,
    match,
    setNewPasswordAction,
    requestCheckTokenAction,
    resetResetPasswordParamsAction,
  } = props;
  const classes = useStyles();

  useEffect(() => {
    requestCheckTokenAction(match.params.id);
    return () => {
      resetResetPasswordParamsAction();
    };
  }, [
    resetResetPasswordParamsAction,
    requestCheckTokenAction,
    match.params.id,
  ]);

  const handleFormSubmit = (values) => {
    setNewPasswordAction(match.params.id, {
      password: values.password,
      confirm_password: values.confirmPassword,
    });
  };

  return (
    <Container
      className={classes.container_design}
      component="main"
      maxWidth="sm"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Reset Password | {process.env.REACT_APP_NAME}</title>
      </Helmet>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        {isAuthenticated ? (
          <Alert className="mt-4" style={{ width: "100%" }} severity="error">
            <AlertTitle>Error</AlertTitle>
            You need to logout first to reset the password.
          </Alert>
        ) : isLoading ? (
          <CircularProgress className="mt-5" />
        ) : hasError ? (
          <Alert className="mt-4" style={{ width: "100%" }} severity="error">
            <AlertTitle>Error</AlertTitle>
            {errorMessage}
          </Alert>
        ) : isTokenVerified && hasSuccess ? (
          <React.Fragment>
            <Alert
              className="mt-4"
              style={{ width: "100%" }}
              severity="success"
            >
              <AlertTitle>
                Your password has been reset successfully!
              </AlertTitle>
              <p>You can now login with your new password.</p>
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
          <Formik
            enableReinitialize
            initialValues={{
              password: "",
              confirmPassword: "",
            }}
            onSubmit={handleFormSubmit}
            validationSchema={ResetPasswordValidationSchema}
          >
            {(renderProps) => {
              const { values: formValues, touched, errors } = renderProps;
              return (
                <>
                  <Form className={classes.form}>
                    <TextField
                      className={classes.textField}
                      label="New Password"
                      style={{ width: "100%" }}
                      margin="normal"
                      fullWidth
                      id="password"
                      name="password"
                      autoComplete="password"
                      newsletter={true}
                      InputProps={{
                        type: "password",
                        autoComplete: "off",
                      }}
                      value={formValues.password}
                      onChange={(e) =>
                        renderProps.setFieldValue("password", e.target.value)
                      }
                      helperText={touched.password && errors.password}
                      error={touched.password && errors.password ? true : false}
                    />
                    <TextField
                      label="Confirm Password"
                      style={{ width: "100%" }}
                      margin="normal"
                      fullWidth
                      id="confirm-password"
                      name="confirm-password"
                      autoComplete="password"
                      newsletter={true}
                      InputProps={{
                        type: "password",
                        autoComplete: "off",
                      }}
                      value={formValues.confirmPassword}
                      onChange={(e) =>
                        renderProps.setFieldValue(
                          "confirmPassword",
                          e.target.value
                        )
                      }
                      helperText={
                        touched.confirmPassword && errors.confirmPassword
                      }
                      error={
                        touched.confirmPassword && errors.confirmPassword
                          ? true
                          : false
                      }
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      border="5px solid #333"
                      className={classes.submit}
                    >
                      Submit
                    </Button>
                  </Form>
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
              );
            }}
          </Formik>
        )}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  ...state.ResetPassword,
  isAuthenticated: state.Login.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
