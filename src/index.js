import React from 'react'
import ReactDOM from 'react-dom'


import {Provider} from 'react-redux'
import createWithMiddleware from 'redux/create'

import {App} from './container/index.js'

const store = createWithMiddleware()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('app'))