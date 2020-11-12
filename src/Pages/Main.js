import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import History from "./History";
import Schedule from "./Schedule";
import "./index.css";
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/home"><img src="../../../images/logo1.png" alt="logo"/></NavLink></li>
            <li><NavLink to="/history"  aria-current="true" href="#/stuff" class="active">01. History</NavLink></li>
            <li><NavLink to="/schedule"  aria-current="true" href="#/stuff" class="active">02. Team</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/home" component={Home}/>
            <Route path="/history" component={History}/>
            <Route path="/schedule" component={Schedule}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;