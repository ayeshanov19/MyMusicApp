import React from 'react';
import { BrowserRouter as Router, Switch, Route, browserHistory } from 'react-router-dom'
import SignPage from './SignPage'
import Content from './Content'
import {Properties} from './Properties'
import SignUpUser from'./SignUpUser'
import Header from './Header'




let App = ()=> {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={SignPage} />
          <Route path="/signup" exact component={SignPage} />
          <Route path={Properties.AUTHENTICATED_URL + "/"} component={Content} /> 
                                                                   
        </Switch>
      </Router>
    </>
  )
}


export default App

