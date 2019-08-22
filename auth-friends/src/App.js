import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './styles.css';
import Login from "./components/login/Login";
import Friends from "./components/friends/Friends";
import PrivateRoute from "./components/PrivateRoute";
import PersonProfile from './components/Person/PersonProfile'

function App() {
  return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
          </ul>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={Friends}/>
          <PrivateRoute path="/friends/:friendId" component={PersonProfile} />
        </div>
      </Router>
  );
}

export default App;
