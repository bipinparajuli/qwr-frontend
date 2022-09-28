import React, { useEffect } from 'react';

// For redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../../redux/UserVerification/Actions';

import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
// import Typography from '@material-ui/core/Typography';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Button from '@material-ui/core/Button';

// Document Head Manager
import { Helmet } from "react-helmet";

import { Link } from 'react-router-dom';

const UserVerification = (props) => {
  const { isLoading, hasError, errorMessage, successMessage, match, verifyUserAction, resetVerificationProcessAction } = props;

  useEffect(() => {
    verifyUserAction(match.params.id);
    return () => {
      resetVerificationProcessAction()
    };
  }, [verifyUserAction, resetVerificationProcessAction, match.params.id])

  return (
    isLoading ?
      <Container className="my-4 d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh -  608px)' }} component="main" maxWidth="sm">
        <CircularProgress />
      </Container>
      :
      <Container className="my-4" component="main" style={{ minHeight: 'calc(100vh -  608px)' }} maxWidth="sm">
        <Helmet>
          <meta charSet="utf-8" />
          <title>User Verification | {process.env.REACT_APP_NAME}</title>
        </Helmet>
        {hasError ?
          <Alert className="mt-4" style={{ width: '100%' }} severity="error">
            <AlertTitle>Error</AlertTitle>
            {errorMessage}
          </Alert>
          :
          <Alert className="mt-4" style={{ width: '100%' }} severity="success">
            <AlertTitle>Success</AlertTitle>
            {successMessage}
          </Alert>
        }
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className="mt-2"
          component={Link}
          to="/login"
        >
          Back to Login
        </Button>
      </Container>
  )
}

const mapStateToProps = (state) => ({
  ...state.UserVerification
})

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserVerification)
