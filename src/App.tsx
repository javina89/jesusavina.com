import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { Top } from './Top'
import { Landing } from './Landing';

export const App = () => {
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
          <Top />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </>
    )
  };