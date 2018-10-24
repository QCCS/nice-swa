/**
 * Created by zhouli on 18/9/15
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './css/index.css';
import './css/reset.css';

//使用 redux
import { Provider } from 'react-redux';
import store from './js/redux/store';

// BrowserRouter 慎用
import { HashRouter as Router} from "react-router-dom";
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>, document.getElementById('body')
);