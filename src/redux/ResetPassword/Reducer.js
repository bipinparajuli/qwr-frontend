import {
  CHECK_TOKEN_VERIFICATION,
  TOKEN_CHECK_FAILURE,
  RESET_RESET_PASSWORD_PARAMS,
  PASSWORD_RESET_SUCCESS,
} from './Constants';

const initialState = {
  isLoading: false,
  isTokenVerified: true,
  hasError: false,
  hasSuccess: false,
  successMessage: '',
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_TOKEN_VERIFICATION:
      return {
        ...state,
        isTokenVerified: true,
        isLoading: false,
      };
    case TOKEN_CHECK_FAILURE:
      return {
        ...state,
        hasError: true,
        errorMessage: action.data.message,
        hasSuccess: false,
        successMessage: '',
        isLoading: false,
      };
    case PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        hasSuccess: true
      }
    case RESET_RESET_PASSWORD_PARAMS:
      return initialState;
    default:
      return state;
  }
}