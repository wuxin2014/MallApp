import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import RouterMap from './router/RouterMap';
import './public/styles/common.css'
import configureStore from './store/configureStore';


// 创建Redux的store对象
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <RouterMap />
    </Provider>,
    document.getElementById('root')
);