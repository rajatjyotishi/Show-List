import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import dashboardReducers from "./reducers";
import "./index.scss";
import Router from "./router/router";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const store = createStore(dashboardReducers, applyMiddleware(thunkMiddleware));
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <Provider store={store}>
      <Router />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
