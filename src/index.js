import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import StickyBanner from "./components/banner";
import MyCarousel from "./components/Carousel"
import Card from "./components/Card"
import IconRow from "./components/IconRow";
import MyFooter from "./components/Footer";


ReactDOM.render(
    <React.StrictMode>
        <StickyBanner/>
        <MyCarousel/>
        <Card/>
        <IconRow/>
        <MyFooter/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
