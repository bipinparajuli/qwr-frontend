import {
  REQUEST_RESET_SUCCESS,
  REQUEST_FAILURE,
  RESET_FORGOT_PASSWORD_PARAMS,
} from './Constants';

const initialState = {
  hasError: false,
  hasSuccess: false,
  successMessage: '',
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RESET_SUCCESS:
      return {
        ...state,
        hasSuccess: true,
        successMessage: action.data.message,
        hasError: false,
        errorMessage: '',
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        hasError: true,
        errorMessage: action.data.message,
        hasSuccess: false,
        successMessage: '',
      };
    case RESET_FORGOT_PASSWORD_PARAMS:
      return initialState;
    default:
      return state;
  }
}