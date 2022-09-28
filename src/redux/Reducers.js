import Home from "./Home/Reducer";
// import PropertyEdit from "./PropertyEdit/Reducer";

import Notification from "./Notification/Reducer";

// Auth Reducers
import Login from "./Login/Reducer";
import Register from "./Register/Reducer";
import ForgotPassword from "./ForgotPassword/Reducer";
import ResetPassword from "./ResetPassword/Reducer";
import ChangePassword from "./ChangePassword/Reducer";
import UserVerification from "./UserVerification/Reducer";
import Payment from "./Payment/Reducer";
import AppStore from './AppStore/Reducer'



import MainLayout from "./MainLayout/Reducer";

export default {
  // Common Reducers
  Home,
  Notification,
  MainLayout,
  // PropertyEdit,
  // Auth Reducers
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  ChangePassword,
  UserVerification,
  Payment,
  AppStore
}