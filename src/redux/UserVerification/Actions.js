import { VERIFY_USER_SUCCESS, VERIFY_USER_FAILURE, RESET_VERIFICATION_PROCESS } from './Constants';
import Api from '../../helpers/ApiHandler';

const api = new Api();

export const verifyUserAction = (token) => dispatch => {
  
  api.get(`users/verify/${token}`)
    .then((result) => {
      if(result.success) {
        dispatch({
          type: VERIFY_USER_SUCCESS,
          data: {
            message: result.msg
          }
        })
      } else {
        dispatch({
          type: VERIFY_USER_FAILURE,
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

export const resetVerificationProcessAction = () => dispatch => {
  dispatch({
    type: RESET_VERIFICATION_PROCESS
  })
}