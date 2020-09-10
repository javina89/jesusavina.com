import React from 'react'
import { render } from 'react-dom'
import './tailwind.css'
import App from './App'
import {ThemeContextProvider} from './themeContext'

render(
  <ThemeContextProvider>
      <App />
    </ThemeContextProvider>,
  document.getElementById('root')
)
