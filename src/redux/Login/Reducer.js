import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  RESET_LOGIN_PARAMS,
  RESEND_MAIL_SUCCESS,
} from './Constants';
import { hasToken, deleteSession, persistSession, getUserData,isAppStoreSubscriber } from './../../helpers/session';

const initialState = {
  isFetching: true,
  isAuthenticated: hasToken(),
  hasError: false,
  errorMessage: '',
  user: getUserData(),
  // isAppStoreSubscriber:isAppStoreSubscriber()
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      action.data.user.email = undefined;
      action.data.user.username = undefined;
      // action.data.user._id = undefined;
      action.data.user.apiKey = undefined;

      console.log(action.data.user);

      persistSession(action.data);
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        user: action.data.user,
        // isAppStoreSubscriber:action.data.user.isAppStoreSubscriber
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        hasError: true,
        ...action.data,
      };
    case LOGOUT_REQUEST:
      deleteSession();
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        user: undefined,
        // isAppStoreSubcriber:false
      };
    case RESEND_MAIL_SUCCESS:
    case RESET_LOGIN_PARAMS:
      return initialState
    default:
      return state;
  }
}