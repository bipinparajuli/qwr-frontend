import React from "react";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Route";

import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, makeStyles } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';
// import { makeStyles } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: "dark",
  },
  // root: {
  //   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  // },
});



// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//   },
// });

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={process.env.REACT_APP_BASE_PATH}>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
