/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store';
import App from './features/root/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './index.css';
import inject from './inject';


inject(ReactDOM, BrowserRouter, Provider, App, store);
