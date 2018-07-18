import React from 'react';
import Routes from '../routes';
import logo from '../assets/img/logo.png';
import { container, logoImg } from '../styles/app.scss';

const App = () =>
    <div className={container}>
        <img src={logo} className={logoImg}/>
        { Routes }
    </div>;

export default App;
