import React, { Component } from 'react';
import Login from './Components/Auths/Login';
import Register from './Components/Auths/Register';

import {Routes,Route, BrowserRouter as Router} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div>
       <Router>
       <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       </Routes>
       </Router>
      </div>
    );
  }
}

export default App;
