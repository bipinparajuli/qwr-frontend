import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  RESET_LOGIN_PARAMS,
  RESEND_MAIL_SUCCESS,
} from './Constants';

import {UPDATE_SUCCESS} from '../Payment/Constants'

import { ADDED_NOTIFICATION } from './../Notification/Constants';

import Api from '../../helpers/ApiHandler';

const api = new Api();

export const handleLoginRequestAction = (payload) => dispatch => {
  console.log(payload);
  api.post('users/authenticate', { data: payload })
    .then((result) => {
      console.log(result)
      if(result.success) {
        dispatch({
          type: LOGIN_SUCCESS,
          data: {
            user: {
              "_id": result.data._id,
              "firstName": result.data.firstName,
              "lastName": result.data.lastName,
              "username": result.data.username,
              "email": result.data.email,
              "isDeveloper": result.data.isDeveloper,
              "apiKey": result.data.apiKey,
              "isAppStoreSubscriber":result.data.isAppStoreSubscriber
            },
            token: result.data.token
          }
        })

        dispatch({
          type:UPDATE_SUCCESS,
          data:result.data.isAppStoreSubscriber
        })

      } else {
        let otherData = {};
        if(result.data && result.data.isEmailVerified !== undefined) {
          otherData = {
            isEmailVerified: result.data.isEmailVerified,
            emailVerificationId: result.data._id,
          }
        }
        dispatch({
          type: LOGIN_FAILURE,
          data: {
            errorMessage: result.msg,
            ...otherData
          }
        })
      }
    })
    .catch((err) => {
      console.log('err', err);
    });
}

export const resentVerificationMailAction = (payload) => dispatch => {
  api.post('users/resend', { data: payload })
    .then((result) => {
      if(result.success) {
        dispatch({
          type: RESEND_MAIL_SUCCESS,
        })
        dispatch({
          type: ADDED_NOTIFICATION,
          data: {
            type: 'success',
            message: result.msg
          }
        });
      } else {
        dispatch({
          type: ADDED_NOTIFICATION,
          data: {
            type: 'error',
            message: result.msg
          }
        });
      }
    })
    .catch((err) => {
      console.log('err', err);
    });
}

export const handleLogoutRequestAction = () => dispatch => {
  dispatch({
    type: LOGOUT_REQUEST
  })
}

export const resetLoginParamsAction = () => dispatch => {
  dispatch({
    type: RESET_LOGIN_PARAMS
  })
}