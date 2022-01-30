import React from 'react'
import ReactDOM from 'react-dom'
import './styles/global.css'
import App from './App'

import { AppLevelProvider } from './context/AppLevelContext'

ReactDOM.render(
  <React.StrictMode>
    <AppLevelProvider>
      <App />
    </AppLevelProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
