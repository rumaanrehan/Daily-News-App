import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    const specs={ 
      country : "in",
      pageSize : 9
    }
    return (
      <div>
        <Router>
        <Navbar/>
        <Switch>
            <Route exact path='/'><News key="general" pageSize={specs.pageSize} country ={specs.country} category="general"/></Route>
            <Route exact path='/business'><News key="business" pageSize={specs.pageSize} country ={specs.country} category="business"/></Route>
            <Route exact path='/entertainment'><News key="entertainment" pageSize={specs.pageSize} country ={specs.country} category="entertainment"/></Route>
            <Route exact path='/health'><News key="health" pageSize={specs.pageSize} country ={specs.country} category="health"/></Route>
            <Route exact path='/science'><News key="science" pageSize={specs.pageSize} country ={specs.country} category="science"/></Route>
            <Route exact path='/sports'><News key="sports" pageSize={specs.pageSize} country ={specs.country} category="sports"/></Route>
            <Route exact path='/technology'><News key="technology" pageSize={specs.pageSize} country ={specs.country} category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
