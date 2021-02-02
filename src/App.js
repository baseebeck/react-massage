import React from 'react';
import './App.css';
import Axios from 'axios';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';
// import Navbar from './components/Navbar';


function App() {

  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  return (
    <Router>
    {/* <Navbar /> */}
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signin" component={SignInPage} exact />
    </Switch>
    </Router>
  );
}

export default App;
