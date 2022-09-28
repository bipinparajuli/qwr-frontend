import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  RESET_REGISTER_PARAMS,
} from './Constants';
// import { ADDED_NOTIFICATION } from "./../Notification/Constants";
import Api from '../../helpers/ApiHandler';

const api = new Api();

export const handleRegisterRequestAction = (payload) => dispatch => {
  api.post('users/register', { data: payload })
    .then((result) => {
      if(result.success) {
        dispatch({
          type: REGISTER_SUCCESS,
          data: {
            message: result.msg
          }
        })
      } else {
        dispatch({
          type: REGISTER_FAILURE,
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

export const resetRegisterParamsAction = () => dispatch => {
  dispatch({
    type: RESET_REGISTER_PARAMS
  })
}