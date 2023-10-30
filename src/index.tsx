import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter} from "react-router-dom";
import Main from "./main/Pages/Main/Main";
import {RouterProvider} from "react-router";
import ChooseAddress from "./main/Pages/ChooseAddress/ChooseRestaurant";
import {Provider} from "react-redux";
import store from "./main/store/store";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/choose-restaurant',
        element: <ChooseAddress/>
    }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={ store }>
        <RouterProvider router={routes} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
