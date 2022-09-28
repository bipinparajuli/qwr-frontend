import {
  VERIFY_USER_SUCCESS,
  VERIFY_USER_FAILURE,
  RESET_VERIFICATION_PROCESS,
} from './Constants';

const initialState = {
  isLoading: true,
  hasError: false,
  errorMessage: '',
  successMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        errorMessage: '',
        successMessage: action.data.message
      };
    case VERIFY_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.data.message,
      };
    case RESET_VERIFICATION_PROCESS:
      return initialState;
    default:
      return state;
  }
}