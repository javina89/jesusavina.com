import React from 'react'
import { render } from 'react-dom'
import './tailwind.css'
import App from './App'
import {ThemeContextProvider} from './themeContext'

const time = (new Date()).toLocaleString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
})

render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
