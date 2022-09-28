import {
    ORDER_SUCCESS,
    ORDER_FAILURE,
    UPDATE_SUCCESS,
    UPDATE_FAILURE
  } from './Constants';
  
  import {storeSuscriber} from '../../helpers/session'

  import Api from '../../helpers/ApiHandler';
  
  const api = new Api();
  
  export const handleOrderRequestAction = (payload) => dispatch => {
      console.log(payload);
  return  api.post('razorpay/create-order',{data:payload})
    //   .then((result) => {
        
    //     if(result.success) {
    //       dispatch({
    //         type: ORDER_SUCCESS,
    //         data: result.data

    //       })
    //     } else {
    //       dispatch({
    //         type: ORDER_FAILURE,
    //         data: {
    //           errorMessage: result.reason,
    //         }
    //       })
    //     }
    //   })
      .catch((err) => {
        console.log('err', err);
      });
  }

  export const handleUserUpdateRequestAction = (payload) => dispatch => {
    console.log(payload);
 api.post('users/updateUserDetails',{data:payload})
    .then((result) => {
      console.log(result);
      storeSuscriber(result.data.isAppStoreSubscriber)
      if(result.success) {
        dispatch({
          type: UPDATE_SUCCESS,
          data: result.data.isAppStoreSubscriber

        })
      } else {
        dispatch({
          type: UPDATE_FAILURE,
          data: {
            errorMessage: result.reason,
          }
        })
      }
    })
    .catch((err) => {
      console.log('err', err);
    });
}