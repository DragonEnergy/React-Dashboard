import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

//import {Router, hashHistory, Route, IndexRoute} from 'react-router';

import {App} from './components/App';
import {LoginForm} from './components/LoginForm';
import {SignUpForm} from './components/SignupForm';
import {Dashboard} from './components/Dashboard';
import RequireAuth from './components/requireAuth';

const history = createHistory()
const location = history.location


const client = new ApolloClient({
  link: new HttpLink({
    uri: '/graphql',
    opts:{
      credentials: 'same-origin'
    }}),
  cache: new InMemoryCache(),
  dataIdFromObject: o => o.id
});


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/signup" component={SignUpForm}/>
          <Route path="/dashboard" component={RequireAuth(Dashboard)}/>
        </Switch>
      </Router>
    </ApolloProvider>

  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
