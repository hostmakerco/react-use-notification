import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-use-notification'

import './index.css'
import App from './App'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
