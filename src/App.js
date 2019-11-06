import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import "./App.scss";
import LoginPage from "./components/LoginPage";
import LoggedInDashboard from "./components/LoggedInDashboard";
import PrivateRoute from "./PrivateRoute";
import HomePage from "./components/HomePage";
import DashboardPage from "./components/DashboardPage";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
      <Router>
        <Switch>
          <Route  path="/login" component={LoginPage} />
          <PrivateRoute  path="/home" component={HomePage} />
          <PrivateRoute exact path="/" component={LoggedInDashboard} />
          <PrivateRoute  path="/dashboard" component={DashboardPage} />
        </Switch>
      </Router>
    </div>
    </Provider>
  );
};

export default App;
