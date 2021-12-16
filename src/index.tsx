import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from "./index.styles";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle/>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);