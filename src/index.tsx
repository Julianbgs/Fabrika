import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter} from "react-router-dom";
import Main from "./main/Pages/Main/Main";
import {RouterProvider} from "react-router";
import {Provider} from "react-redux";
import store from "./main/store/store";
import About from "./main/Pages/About/About";
import ContactsPage from "./main/Pages/Contacts/Contacts";
import Basket from "./main/Pages/Basket/Basket";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/about-us',
        element: <About/>
    },
    {
        path: '/contacts',
        element: <ContactsPage/>
    },
    {
        path: '/basket',
        element: <Basket/>
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
