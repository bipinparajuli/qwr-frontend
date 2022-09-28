import {
  HomePage,

  // PropertyEditPage,
  IntroPage,
  LoginPage,
  RegisterPage,
  UserVerificationPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ChangePasswordPage,
  Agreement,
  AppStore,
  CreateApp,
  AppStoreDashboard,
  DetailPage
} from "./../pages";

export const openRoutes = [
  {
    path: "/",
    name: "Intro",
    exact: true,
    component: IntroPage,
  },
  {
    path: "/login",
    name: "Login",
    exact: true,
    component: LoginPage,
  },

  {
    path: "/register",
    name: "Register",
    exact: true,
    component: RegisterPage,
  },
  {
    path: "/users/verify/:id",
    name: "Verify User",
    exact: true,
    component: UserVerificationPage,
  },
  {
    path: "/forgot-password",
    name: "Forgot Password",
    exact: true,
    component: ForgotPasswordPage,
  },
  {
    path: "/reset-password/:id",
    name: "Forgot Password",
    exact: true,
    component: ResetPasswordPage,
  },
];

export const protectedRoutes = [
  {
    path: "/home",
    name: "Home",
    exact: true,
    component: HomePage,
  },
  {
    path: "/home/agreement",
    name: "Agreement",
    exact: true,
    component: Agreement,
  },
  // {
  //   path: "/Dashboard",
  //   name: "Dashboard",
  //   exact: true,
  //   component: Dashboard,
  // },
  {
    path: "/change-password",
    name: "Change Password",
    exact: true,
    component: ChangePasswordPage,
  },
  // {
  //   path: '/property/:id',
  //   name: 'Property Edit',
  //   exact: true,
  //   component: PropertyEditPage
  // }
];

export const appStoreRoutes = [
  {
    path: "/appstore",
    name: "AppStore",
    exact: true,
    component: AppStore,
  },
  {
    path: "/createapp",
    name: "AppStore",
    exact: true,
    component: CreateApp,
  },
  {
    path: "/appstoredashboard",
    name: "AppStore",
    exact: true,
    component: AppStoreDashboard,
  },
  {
    path: "/appdetail/:appid",
    name: "DetailPage",
    exact: true,
    component: DetailPage,
  },
]