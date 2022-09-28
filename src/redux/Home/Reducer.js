import {
  RESET_DASHBOARD,
  LOAD_PROPERTIES,
  LOAD_PROPERTIES_ERROR,
  UPDATE_PAGE_NUMBER,
  UPDATE_FILTER,
} from './Constants';

const initialState = {
  isLoading: true,
  properties: [],
  filters: {
    review_status: "all",
    reviewed_by: "all",
    status: "all",
  },
  totalRecords: 0,
  currentPage: 1,
  limit: 9,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROPERTIES:
      return {
        ...state,
        isLoading: false,
        properties: action.data,
        totalRecords: action.totalRecords
      }
    case LOAD_PROPERTIES_ERROR:
      return {
        ...state,
        isLoading: false,
        properties: [],
      }
    case UPDATE_PAGE_NUMBER:
      return {
        ...state,
        currentPage: action.data,
        isLoading: true,
      }
    case UPDATE_FILTER:
      return {
        ...state,
        filters: action.filters,
        currentPage: 1,
        isLoading: true,
      }
    case RESET_DASHBOARD:
      return initialState;
    default:
      return state
  }
}