import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home.js';
import Background from './Component/Background';
import Service from './Component/Service';
import Logistic from './Component/Logistic';
import Contact from './Component/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Clients from './Component/Clients';
import Client from './Component/Client';

function App() {
  return (
      <Router>    
        <Switch>
        <Route exact path="/">
          <Background/>
        </Route>
        <Route path="/Service">
         <Service/>
        </Route>
        <Route path="/Logistic">
          <Logistic/>
        </Route>
        <Route path="/Contact">
          <Contact/>
        </Route>
        <Route path="/Clients">
          <Clients/>
        </Route>
        <Route path="/Client">
          <Client/>
        </Route>
       </Switch>
       <Logistic/>
       <Service/>
       <Client/>
       <Clients/>
       <Contact/>
      </Router>
  );
}
export default App;
