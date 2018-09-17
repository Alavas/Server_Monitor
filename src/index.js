import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { serverReducer } from './reducers'
import thunk from 'redux-thunk'

import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'

/* eslint-disable no-underscore-dangle */
const store = createStore(
    serverReducer,
    applyMiddleware(thunk)
    )
    /* eslint-enable */
    
var ws = new WebSocket('ws://192.168.1.92:8888')

ws.onmessage = (message) => {
    let payload = JSON.parse(message.data)
    store.dispatch({
            'type': payload.action,
            'update': payload.data
        })
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))
registerServiceWorker()
