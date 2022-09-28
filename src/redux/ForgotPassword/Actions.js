import {
  REQUEST_RESET_SUCCESS,
  REQUEST_FAILURE,
  RESET_FORGOT_PASSWORD_PARAMS,
} from './Constants';
import Api from '../../helpers/ApiHandler';

const api = new Api();

export const requestResetPasswordAction = (payload) => dispatch => {
  api.post('users/forgot', { data: payload })
    .then((result) => {
      if(result.success) {
        dispatch({
          type: REQUEST_RESET_SUCCESS,
          data: {
            message: result.msg
          }
        })
      } else {
        dispatch({
          type: REQUEST_FAILURE,
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

export const resetForgotPasswordParamsAction = () => dispatch => {
  dispatch({
    type: RESET_FORGOT_PASSWORD_PARAMS
  })
}