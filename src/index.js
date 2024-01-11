import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import App2 from './App2';
import State from './State';
import Effect from "./Effect";
import Memo from "./Memo";
import Ref from "./Ref";
import Style from "./Style";
import App3 from "./App3";
import App4_redux from "./App4_redux";
import {createStore} from "redux";
import reducer from "./store";
import {Provider} from "react-redux";

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
    <Provider store={store}>
        <App4_redux/>
    </Provider>
    // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
