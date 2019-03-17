import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';

import Home from "./components/home/Home";
import Epk from "./components/epk/Epk";


class App extends Component {


  render() {


    return (
      
      <Router>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/epk" component={Epk} />

          <Switch>
          </Switch>
        </div>
      </Router>
          
    );
  }
}

export default App;
