// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const rootContainer = document.getElementById('root')

if (rootContainer) {
  ReactDOM.render(<App />, rootContainer)
  registerServiceWorker()
}
