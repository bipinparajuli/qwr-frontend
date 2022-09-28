import React, { useEffect } from "react";

// For redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../../redux/ChangePassword/Actions";
import { setHeaderNameAction } from "./../../redux/MainLayout/Actions";

import { makeStyles } from "@material-ui/core/styles";
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

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: '#000',
  },
  form: {
    width: "50%", // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    // backgroundColor: '#000',
    // color: '#000',
    backgroundColor: "black",
    // '&:hover': {
    //   backgroundColor: '#000',
    //   color: '#000',
    // }
  },
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    minWidth: "100%",
    "& .MuiInput-underline": {
      "&:after": {
        borderBottom: "2px solid #000",
      },
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#000",
    },
  },
}));

const ChangePasswordValidationSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required("Please enter current password")
    .min(8, "Password is too short - should be 8 chars minimum."),
  newPassword: Yup.string()
    .required("Please enter a new password")
    .min(8, "Password is too short - should be 8 chars minimum."),
  confirmNewPassword: Yup.string()
    .oneOf(
      [Yup.ref("newPassword"), null],
      "Confirm password must be same as New Password"
    )
    .required("Please enter confirm password"),
});

const ChangePassword = (props) => {
  const {
    isLoading,
    hasError,
    hasSuccess,
    errorMessage,
    setHeaderNameAction,
    setNewPasswordAction,
    resetChangePasswordParamsAction,
  } = props;
  const classes = useStyles();

  useEffect(() => {
    setHeaderNameAction("Change Password");
    return () => {
      resetChangePasswordParamsAction();
    };
  }, [resetChangePasswordParamsAction, setHeaderNameAction]);

  const handleFormSubmit = (values) => {
    setNewPasswordAction({
      current_password: values.oldPassword,
      new_password: values.newPassword,
      confirm_password: values.confirmNewPassword,
    });
  };

  return (
    <Container
      className="my-4"
      component="main"
      style={{ minHeight: "calc(100vh -  596px)" }}
      maxWidth="sm"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Change Password | {process.env.REACT_APP_NAME}</title>
      </Helmet>
      {/* Change pssword div */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h2" variant="h4">
          Change Password
        </Typography>
        {isLoading ? (
          <CircularProgress className="mt-5" />
        ) : hasError ? (
          <Alert className="mt-4" style={{ width: "100%" }} severity="error">
            <AlertTitle>Error</AlertTitle>
            {errorMessage}
          </Alert>
        ) : hasSuccess ? (
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
              to="/"
            >
              Back to Home
            </Button>
          </React.Fragment>
        ) : (
          <Grid className={classes.paper}>
            <Formik
              enableReinitialize
              initialValues={{
                oldPassword: "",
                newPassword: "",
                confirmNewPassword: "",
              }}
              onSubmit={handleFormSubmit}
              validationSchema={ChangePasswordValidationSchema}
            >
              {(renderProps) => {
                const { values: formValues, touched, errors } = renderProps;
                return (
                  <>
                    <Form className={classes.form}>
                      <TextField
                        className={classes.textField}
                        label="Old Password"
                        style={{ width: "100%" }}
                        margin="normal"
                        fullWidth
                        id="oldPassword"
                        name="oldPassword"
                        autoComplete="oldPassword"
                        InputProps={{
                          type: "password",
                          autoComplete: "off",
                        }}
                        value={formValues.oldPassword}
                        onChange={(e) =>
                          renderProps.setFieldValue(
                            "oldPassword",
                            e.target.value
                          )
                        }
                        helperText={touched.oldPassword && errors.oldPassword}
                        error={
                          touched.oldPassword && errors.oldPassword
                            ? true
                            : false
                        }
                      />
                      <TextField
                        label="New Password"
                        style={{ width: "100%" }}
                        margin="normal"
                        fullWidth
                        id="newPassword"
                        name="newPassword"
                        autoComplete="newPassword"
                        InputProps={{
                          type: "password",
                          autoComplete: "off",
                        }}
                        value={formValues.newPassword}
                        onChange={(e) =>
                          renderProps.setFieldValue(
                            "newPassword",
                            e.target.value
                          )
                        }
                        helperText={touched.newPassword && errors.newPassword}
                        error={
                          touched.newPassword && errors.newPassword
                            ? true
                            : false
                        }
                      />
                      <TextField
                        label="Confirm Password"
                        style={{ width: "100%" }}
                        margin="normal"
                        fullWidth
                        id="confirmNewPassword"
                        name="confirmNewPassword"
                        autoComplete="password"
                        InputProps={{
                          type: "password",
                          autoComplete: "off",
                        }}
                        value={formValues.confirmNewPassword}
                        onChange={(e) =>
                          renderProps.setFieldValue(
                            "confirmNewPassword",
                            e.target.value
                          )
                        }
                        helperText={
                          touched.confirmNewPassword &&
                          errors.confirmNewPassword
                        }
                        error={
                          touched.confirmNewPassword &&
                          errors.confirmNewPassword
                            ? true
                            : false
                        }
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
                  </>
                );
              }}
            </Formik>
          </Grid>
        )}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  ...state.ChangePassword,
});

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...Actions, setHeaderNameAction }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
