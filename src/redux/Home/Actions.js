import {
  RESET_DASHBOARD,
  // LOAD_PROPERTIES,
  // LOAD_PROPERTIES_ERROR,
  UPDATE_PAGE_NUMBER,
  UPDATE_FILTER,
  DOWNLOAD_SDK
} from './Constants';

import { ADDED_NOTIFICATION } from "./../Notification/Constants";

import Api from './../../helpers/ApiHandler';
const api = new Api();

// export const fetchAllPropertiesAction = (payload) => dispatch => {
//   api.post('property/property-list', { data: payload })
//     .then((result) => {
//       if (result.success) {
//         dispatch({
//           type: LOAD_PROPERTIES,
//           data: result.data,
//           totalRecords: result.count_records
//         });
//       } else {
//         dispatch({
//           type: LOAD_PROPERTIES_ERROR,
//           data: [],
//           totalRecords: 0
//         });
//         dispatch({
//           type: ADDED_NOTIFICATION,
//           data: {
//             type: 'error',
//             message: result.msg
//           }
//         });
//       }
//     })
//     .catch((err) => {
//       console.log('err', err);
//     });
// }

export const updateFiltersAction = filters => dispatch => {
  dispatch({
    type: UPDATE_FILTER,
    filters
  })
}

export const changePageNumberAction = (pageNumber) => (dispatch) => {
  dispatch({
    type: UPDATE_PAGE_NUMBER,
    data: pageNumber
  });
};

export const resetDashboardAction = () => dispatch => {
  dispatch({
    type: RESET_DASHBOARD
  })
}

export const downloadSDKAction = (id) => dispatch => {
  // console.log("Download SDK Action: " + id);
  api.get(`sdks/get-sdk-url/${id}`)
    .then((result) => {
      if (result.success) {
        dispatch({
          type: DOWNLOAD_SDK,
          data: result.data
        });
      } else {
        dispatch({
          type: ADDED_NOTIFICATION,
          data: {
            type: 'error',
            message: result.msg
          }
        });
      }
    })
    .catch((err) => {
      console.log('err', err);
      dispatch({
          type: ADDED_NOTIFICATION,
          data: {
            type: 'error',
            message: err.reason
          }
        });
    });

}