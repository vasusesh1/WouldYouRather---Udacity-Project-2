import React from 'react'


import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import ReactDOM from 'react-dom'
import './index.css'
import middleware from './middleware'

var store = createStore(reducer, middleware)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
