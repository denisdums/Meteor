import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import store from "./store/store";
import {Provider} from 'react-redux'
import Home from "./views/Home";
import Favs from "./views/Favs";
import Search from "./views/Search";
import City from "./views/City";
import Map from "./views/Map";

const rootElement = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path='/' element={<App/>}>
                        <Route path='/' element={<Home/>}/>
                        <Route path='favs' element={<Favs/>}/>
                        <Route path='search' element={<Search/>}/>
                        <Route path='map' element={<Map/>}/>
                        <Route path='/city/:city' element={<City/>}/>
                    </Route>
                </Routes>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
