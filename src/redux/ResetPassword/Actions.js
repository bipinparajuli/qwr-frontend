import {
  PASSWORD_RESET_SUCCESS,
  CHECK_TOKEN_VERIFICATION,
  TOKEN_CHECK_FAILURE,
  RESET_RESET_PASSWORD_PARAMS,
} from './Constants';
import Api from '../../helpers/ApiHandler';

const api = new Api();

export const requestCheckTokenAction = (token) => dispatch => {
  console.log(token);
  api.get(`users/newPass/${token}`)
    .then((result) => {
      if(result.success) {
        dispatch({
          type: CHECK_TOKEN_VERIFICATION,
          data: {
            message: result.msg
          }
        })
      } else {
        dispatch({
          type: TOKEN_CHECK_FAILURE,
          data: {
            message: result.msg
          }
        })
      }
    })
    .catch((err) => {
      console.log('err', err);
    });
}

export const setNewPasswordAction = (token, payload) => dispatch => {
  console.log(token);
  api.post(`users/newPass/${token}`, { data: payload })
    .then((result) => {
      if(result.success) {
        dispatch({
          type: PASSWORD_RESET_SUCCESS,
          data: {
            message: result.msg
          }
        })
      } else {
        dispatch({
          type: TOKEN_CHECK_FAILURE,
          data: {
            message: result.msg
          }
        })
      }
    })
    .catch((err) => {
      console.log('err', err);
    });
}

export const resetResetPasswordParamsAction = () => dispatch => {
  dispatch({
    type: RESET_RESET_PASSWORD_PARAMS
  })
}