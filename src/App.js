import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
// import PistaUno from './components/PistaUno'
import Pichochis from './container/Pichochis'
import Layout from './components/Layout/Layout'


class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <Switch>
            <Route path="/uno" component={Pichochis} />
            <Route path="/dos" component={Pichochis} />
            <Route path="/tres" component={Pichochis} />
            <Route path="/cuatro" component={Pichochis} />
            <Route path="/cinco" component={Pichochis} />
            <Route path="/final" component={Pichochis} />
            <Redirect from="/" to="/uno" />
          </ Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
