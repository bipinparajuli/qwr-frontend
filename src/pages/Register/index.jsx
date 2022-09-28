import React, { useEffect } from "react";

// For redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../../redux/Register/Actions";

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
import AlertTitle from "@material-ui/lab/AlertTitle";
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// Document Head Manager
import { Helmet } from "react-helmet";
import projectLogo from "../../assets/images/Asset 4VRone.png";

import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";

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
  // image: {
  //   backgroundImage: `url(${process.env.REACT_APP_BASE_PATH}/media/background.png)`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  // },
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
  form: {
    width: "50%",
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

const RegisterValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter first name").max(50),
  lastName: Yup.string().required("Please enter last name").max(50),
  username: Yup.string()
    .required("Please enter username")
    .min(6)
    .max(30)
    .matches(
      /^[a-zA-Z0-9_]*$/,
      "Username must only contain alpha-numeric and underscore."
    ),
  email: Yup.string().required("Please enter email").email().max(255),
  password: Yup.string().required("Please enter a password").min(8).max(255),
});

const Register = (props) => {
  const {
    isAuthenticated,
    hasError,
    errorMessage,
    hasSuccess,
    successMessage,
    resetRegisterParamsAction,
  } = props;
  const classes = useStyles();

  const handleFormSubmit = (values) => {
    props.handleRegisterRequestAction(values);
  };

  useEffect(() => {
    return () => {
      resetRegisterParamsAction();
    };
  }, [resetRegisterParamsAction]);

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
        <title>Register | {process.env.REACT_APP_NAME}</title>
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
            <Typography component="h2" variant="h4">
              Signup
            </Typography>
          </Grid>
          <Grid className={classes.paper2} item xs>
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
        {hasSuccess ? (
          <React.Fragment>
            <Alert
              className="mt-4"
              style={{ width: "100%" }}
              severity="success"
            >
              <AlertTitle>Registered Successfully!</AlertTitle>
              <p>{successMessage}</p>
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
              firstName: "",
              lastName: "",
              username: "",
              email: "",
              password: "",
            }}
            onSubmit={handleFormSubmit}
            validationSchema={RegisterValidationSchema}
          >
            {(renderProps) => {
              const { values: formValues, touched, errors } = renderProps;
              return (
                <>
                  <Form className={classes.form}>
                    <TextField
                      label="First Name"
                      style={{ width: "100%" }}
                      margin="normal"
                      fullWidth
                      id="firstName"
                      name="firstName"
                      autoFocus
                      value={formValues.firstName}
                      onChange={(e) =>
                        renderProps.setFieldValue("firstName", e.target.value)
                      }
                      helperText={touched.firstName ? errors.firstName : ""}
                      error={
                        touched.firstName && errors.firstName ? true : false
                      }
                    />
                    <TextField
                      label="Last Name"
                      style={{ width: "100%" }}
                      margin="normal"
                      fullWidth
                      id="lastName"
                      name="lastName"
                      value={formValues.lastName}
                      onChange={(e) =>
                        renderProps.setFieldValue("lastName", e.target.value)
                      }
                      helperText={touched.lastName ? errors.lastName : ""}
                      error={touched.lastName && errors.lastName ? true : false}
                    />
                    <TextField
                      label="User Name"
                      style={{ width: "100%" }}
                      margin="normal"
                      fullWidth
                      id="username"
                      name="username"
                      autoComplete={"false"}
                      value={formValues.username}
                      onChange={(e) =>
                        renderProps.setFieldValue("username", e.target.value)
                      }
                      helperText={touched.username ? errors.username : ""}
                      error={touched.username && errors.username ? true : false}
                    />
                    <TextField
                      label="Your Email"
                      style={{ width: "100%" }}
                      margin="normal"
                      fullWidth
                      id="email"
                      name="email"
                      value={formValues.email}
                      onChange={(e) =>
                        renderProps.setFieldValue("email", e.target.value)
                      }
                      helperText={touched.email ? errors.email : ""}
                      error={touched.email && errors.email ? true : false}
                    />
                    <TextField
                      label="Password"
                      style={{ width: "100%" }}
                      margin="normal"
                      fullWidth
                      id="password"
                      name="password"
                      autoComplete={"false"}
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
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Sign up
                    </Button>
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
                        <Link className={classes.paper2} to="/login">
                          {"Already have an account? Sign In"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Form>
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
  ...state.Register,
  isAuthenticated: state.Login.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
