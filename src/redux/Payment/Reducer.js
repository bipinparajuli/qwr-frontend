import {
    ORDER_SUCCESS,
    ORDER_FAILURE,
    UPDATE_FAILURE,
    UPDATE_SUCCESS
  } from './Constants';
  
  import {isAppStoreSubscriber} from '../../helpers/session'

  const initialState = {
    data:"",
    hasError: false,
    errorMessage: '',
    isAppStoreSubscriber:isAppStoreSubscriber(),
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case ORDER_SUCCESS:
  console.log(action.data);
        return {
          ...state,
          
          data: action.data,
        };
      case ORDER_FAILURE:
        return {
          ...state,
          
          hasError: true,
          ...action.data,
        };

        case UPDATE_SUCCESS:
  console.log(action.data);
        return {
          ...state,
          isAppStoreSubscriber: action.data,
        };
      case UPDATE_FAILURE:
        return {
          ...state,
          
          hasError: true,
          ...action.data,
        };
      
      default:
        return state;
    }
  }