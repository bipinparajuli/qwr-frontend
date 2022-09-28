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
    GETAPPDETAIL_SUCCESS,
    GETAPPDETAIL_FAILURE,
    UPDATEVERSION_SUCCESS,
    UPDATEVERSION_FAILURE,
    ISLOADING,
    RESET
  } from './Constants';
  
  const initialState = {
    data:[],
    hasError:false,
    success:false,
    addappsuccess:false,
    addimagesuccess:false,
    addapksuccess:false,
    updateapksuccess:false,
    isLoading:null,
    appdata:[],
    appdetail:[]
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case APPDATA_SUCCESS:

        return {
          ...state,
        // data:action.data,
          // appdata:[...state.appdata,action.data],
        addappsuccess:true
        };
      case APPDATA_FAILURE:
        return {
          ...state,
          hasError: true,
          ...action.data,
          addappsuccess:false
        };

        case APPIMAGE_SUCCESS:

        return {
          ...state,
        data:action.data,
        addimagesuccess:true
        };
      case APPIMAGE_FAILURE:
        return {
          ...state,
          hasError: true,
          ...action.data,
          addimagesuccess:false
        };

        case APKFILE_SUCCESS:

        return {
          ...state,
        // data:action.data,
        appdata:[...state.appdata,action.data],
        addapksuccess:true
        };
      case APKFILE_FAILURE:
        return {
          ...state,
          hasError: true,
          ...action.data,
          addapksuccess:false
        };

        case GETDATA_SUCCESS:

        return {
          ...state,
        appdata:action.data,
        success:true
        };
      case GETDATA_FAILURE:
        return {
          ...state,
          hasError: true,
          ...action.data,
          success:false
        };

        case UPDATEAPK_SUCCESS:

          return {
            ...state,
            // TODO
          // appdata:[...state.appdata,action.data],
          updateapksuccess:true,
          isLoading:false
          };
        case UPDATEAPK_FAILURE:
          return {
            ...state,
            hasError: true,
            ...action.data,
            updateapksuccess:false,
            isLoading:false
          };

          case GETAPPDETAIL_SUCCESS:

          return {
            ...state,
            appdetail:action.data
            
          };
        case GETAPPDETAIL_FAILURE:
          return {
            ...state,
            hasError: true,
          
          };

          case UPDATEVERSION_SUCCESS:
          return {
            ...state,
            hasError: false,
            appdetail:action.data
            
          };
          case UPDATEVERSION_FAILURE:
          return {
            ...state,
            hasError: true,
          
          };
          case ISLOADING:
            return {
              ...state,
              isLoading: true,
            
            };
            case RESET:
              return {
                ...state,
                addappsuccess:false,
                addimagesuccess:false,
                addapksuccess:false,
                          
              };
          
      default:
        return state;
    }
  }