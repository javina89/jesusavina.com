import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Top from './Top'
import Landing from './Landing'
// const TopPromise = import('./Top')
// const Top = lazy(() => TopPromise)

// const LandingPromise = import('./Landing')
// const Landing = lazy(() => LandingPromise)

// const Landing = lazy(() => import('./Landing').then(({ Landing }) => ({ default: Landing })),)

const App = () => {
    return (
      <>
        {/* <Top />
        <Switch>
          <Route exact path="/">
          <Landing />
          </Route>
          <Route path="/informational/:pageName">
            <main><Informational /></main>
          </Route>
          <Route path="/projects">
            <main><Projects /></main>
          </Route>
          <Route exact path="/404">
            <main><GenericNotFound /></main>
          </Route>
          <Redirect to="/404" />
        </Switch>
        <Footer /> */}
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Top />
          </Suspense>
          <Switch>
            <Route exact path="/">
              <Suspense fallback={<div>Loading...</div>}>
                <Landing />
              </Suspense>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
  export default App