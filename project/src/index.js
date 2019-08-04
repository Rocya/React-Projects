import React from 'react';
import ReactDOM from 'react-dom';

import GrobalRouter from './router'
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import 'antd/dist/antd.css'; //antd css全局引入
import {Provider} from 'react-redux'
import Store from './store/store'
//引入axios
import axios from './utils/axios';
React.Component.prototype.axios = axios;


ReactDOM.render(<Provider store={Store}><GrobalRouter /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
