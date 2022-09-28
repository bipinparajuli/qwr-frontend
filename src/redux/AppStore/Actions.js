import {
    APPDATA_SUCCESS,
    APKFILE_FAILURE,
    APKFILE_SUCCESS,
    APPDATA_FAILURE,
    APPIMAGE_FAILURE,
    APPIMAGE_SUCCESS,
    GETDATA_SUCCESS,
    GETDATA_FAILURE,
    UPDATEAPK_SUCCESS,
    UPDATEAPK_FAILURE,
    GETAPPDETAIL_FAILURE,
    GETAPPDETAIL_SUCCESS,
    UPDATEVERSION_FAILURE,
    UPDATEVERSION_SUCCESS,
    ISLOADING,
    RESET
  } from './Constants';
  
  import Api from '../../helpers/ApiHandler';
  import {getSession} from '../../helpers/session'
  
  const api = new Api();

  let id;
  
  export const handleAppData = (payload) => dispatch => {
    console.log(payload);
    api.post('apps/add-app', { data: payload })
      .then((result) => {
        console.log(result)
        if(result.success) {
            id=result.data._id
          dispatch({
            type: APPDATA_SUCCESS,
            data: result.data
          })
  
        } else {
          
          dispatch({
            type: APPDATA_FAILURE,
            data: {
              errorMessage: result.msg,
            }
          })
        }
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  //handle App Image
  export const handleAppImage = (payload) => dispatch => {
    console.log(payload);
    api.post(`apps/upload-image/${id}`, { data: payload })
      .then((result) => {
        console.log(result)
        if(result.success) {
          dispatch({
            type: APPIMAGE_SUCCESS,
            data: result.data
          })
  
        } else {
          
          dispatch({
            type: APPIMAGE_FAILURE,
            data: {
              errorMessage: result.msg,
            }
          })
        }
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  //handle APK data
  export const handleApkData = (payload) => dispatch => {
    // console.log(payload,id);
    api.post(`apps/upload-app/${id}`, { data: payload })
      .then((result) => {
        console.log(result)
        if(result.success) {
          dispatch({
            type: APKFILE_SUCCESS,
            data: result.data
          })
  
        } else {
          
          dispatch({
            type: APKFILE_FAILURE,
            data: {
              errorMessage: result.msg,
            }
          })
        }
      })
      .catch((err) => {
        console.log('err', err);
         
        dispatch({
            type: APKFILE_FAILURE,
            data: {
              errorMessage: err.msg,
            }
          })
      });
  }

  //update apk data
  export const updateApkData = (payload,id) => dispatch => {
    console.log(payload,id);
    dispatch({
      type: ISLOADING,
      // data: result.data
    })
    api.post(`apps/upload-app/${id}`, { data: payload })
      .then((result) => {
        console.log(result)
        if(result.success) {
          dispatch({
            type: UPDATEAPK_SUCCESS,
            data: result.data
          })
  
        } else {
          
          dispatch({
            type: UPDATEAPK_FAILURE,
            data: {
              errorMessage: result.msg,
            }
          })
        }
      })
      .catch((err) => {
        console.log('err', err);
         
        dispatch({
            type: APKFILE_FAILURE,
            data: {
              errorMessage: err.msg,
            }
          })
      });
  }

   //Get App Data
  export const getAppData = (payload) => dispatch => {
    const id = JSON.parse(getSession()).user._id
    api.get(`apps/app-list?userid=${id}&devices=vrone&status=pending&page=${payload}`,{data:payload})
      .then((result) => {
        console.log(result)
        if(result.success) {
          dispatch({
            type: GETDATA_SUCCESS,
            data: result.data
          })
  
        } else {
          
          dispatch({
            type: GETDATA_FAILURE,
            data: {
              errorMessage: result.msg,
            }
          })
        }
      })
      .catch((err) => {
        console.log('err', err);
      });
  }
  
  //get app details

  //Get App Data
  export const getAppDetail = (payload) => dispatch => {
    const id = JSON.parse(getSession()).user._id
    api.get(`apps/appDetails/${payload}`,{data:payload})
      .then((result) => {
        console.log(result)
        if(result.success) {
          dispatch({
            type: GETAPPDETAIL_SUCCESS,
            data: result.data
          })
  
        } else {
          
          dispatch({
            type: GETAPPDETAIL_FAILURE,
            data: {
              errorMessage: result.msg,
            }
          })
        }
      })
      .catch((err) => {
        console.log('err', err);
      });
  }
  

  //UPDATE LASTEST VERSION
  export const updateVersion = (id,payload) => dispatch => {
    console.log(payload,id);
    api.post(`apps/update-app/${id}`, { data: {published_version:payload} })
      .then((result) => {
        console.log(result)
        if(result.success) {
          dispatch({
            type:UPDATEVERSION_SUCCESS,
            data: result.data
          })
  
        } else {
          
          dispatch({
            type: UPDATEVERSION_FAILURE,
            data: {
              errorMessage: result.msg,
            }
          })
        }
      })
      .catch((err) => {
        console.log('err', err);
         
        dispatch({
            type: APKFILE_FAILURE,
            data: {
              errorMessage: err.msg,
            }
          })
      });
  }

//resetting state

export const handleResetAction = () => dispatch => {
  dispatch({
    type: RESET
  })
}