import {
  PASSWORD_CHANGE_SUCCESS,
  PASSWORD_CHANGE_FAILURE,
  RESET_CHANGE_PASSWORD_PARAMS,
} from './Constants';
import Api from '../../helpers/ApiHandler';

const api = new Api();

export const setNewPasswordAction = (payload) => dispatch => {
  api.post(`users/change-password`, { data: payload })
    .then((result) => {
      if(result.success) {
        dispatch({
          type: PASSWORD_CHANGE_SUCCESS,
          data: {
            message: result.msg
          }
        })
      } else {
        dispatch({
          type: PASSWORD_CHANGE_FAILURE,
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

export const resetChangePasswordParamsAction = () => dispatch => {
  dispatch({
    type: RESET_CHANGE_PASSWORD_PARAMS
  })
}