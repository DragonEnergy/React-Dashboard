import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import {Router, hashHistory, Route, IndexRoute} from 'react-router';

import App from './components/App';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import requireAuth from './components/requireAuth';
import styles from './styles.css';


const client = new ApolloClient({
  link: new HttpLink({
    credentials: 'same-origin'
  }),
  cache: new InMemoryCache(),
  dataIdFromObject: o => o.id
});


const Root = () => {
  return (
    <MuiThemeProvider>
      <ApolloProvider client={client}>
        <HashRouter>
          <div>
            <Header />
              <Route exact path="/" component={App}/>
              <Route path="/login" component={LoginForm}/>
              <Route path="/signup" component={SignUpForm}/>
              <Route path="/dashboard" component={requireAuth(Dashboard)}/>
          </div>
        </HashRouter>
      </ApolloProvider>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
