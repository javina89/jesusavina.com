import React, { lazy, Suspense } from 'react'
import { render } from 'react-dom'
import './tailwind.css'

const App = lazy(() => import('./App').then(({ App }) => ({ default: App })),)

render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
