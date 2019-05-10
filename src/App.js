import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home Component/Home';
import Register from './components/register/register'
import Educational from './components/Educational Component/Educational';
import Contact from './components/Contact Component/Contact';
import Personal from './components/Personal Component/Personal';
import Login from './components/login/login';

const routes = [
  {
    path: '/',
    exact: true,
    main: Login,
    component: Login
  },
  {
    path: "/register",
    main: Register,
    component: Register
  },
  {
    path: "/home",
    main: Home,
    component: Home
  },
  {
    path: '/educational',
    main: Educational,
    component: Educational
  },
  {
    path: '/personal',
    main: Personal,
    component: Personal
  },
  {
    path: "/contact",
    main: Contact,
    component: Contact
  }
]

class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>

            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                main={route.main}
                component={route.component}
              />
            ))}
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
