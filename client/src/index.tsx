import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./theme/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyles";
import { Provider as Redux } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root") as Element;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Redux store={store}>
        <App />
      </Redux>
    </ThemeProvider>
  </React.StrictMode>
);
