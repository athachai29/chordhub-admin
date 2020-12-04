import React, { useState } from "react";
import './App.css';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AuthContext } from './context/auth';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import authService from './services/AuthService';

function App() {
  const u = JSON.parse(localStorage.getItem("u"));
  const [authTokens, setAuthTokens] = useState(u);
  const existingTokens = u ? u : undefined;
  authService.setToken(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("u", JSON.stringify(data));
    setAuthTokens(data);
  }

  const logOut = () => {
    setTokens(null);
  }

  return (
    <>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Router>
          {authTokens && (
            <div className="header">
              <span className="logo">ChordHub Admin</span>
              <span className="logout-button" onClick={() => logOut()}>Log out</span>
            </div>
          )}
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
