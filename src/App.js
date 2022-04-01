// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import News from './components/News';
// import Spinner from './components/Spinner';
// import React from "react";
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";

export default class App extends Component {
//  render is lifecycle method

// apiKey = '7ef65a3a976c4fd4af098e91c013aaf9'
state = {
  progress: 0
}
  setProgress = (progress) => {
   this.setState({progress: progress})
  }

  render() {
    return (
       <>
       <Router>
        <LoadingBar 
        height ={2.5}
       color='#f11946'
         progress={this.state.progress}
         
       /> 
          <Navbar />
      <Switch>
      <Route exact path="/"  >
        <News key="general"  setProgress = {this.setProgress}  pagesize={6} country={"in"} category ={"general" }/>
        </Route>
        <Route exact path="/sports"  >
        <News   key="sports"  setProgress = {this.setProgress}   pagesize={6} country={"in"} category ={"sports" }/>
        </Route>
        <Route exact path="/science"  >
        <News   key="science"  setProgress = {this.setProgress}  pagesize={6} country={"in"} category ={"science" }/>
        </Route>
       
        <Route exact path="/business">
        <News  key="business"   setProgress = {this.setProgress}   pagesize={6} country={"in"} category ={"business" }/>
        </Route>
        <Route exact path="/technology"  >
        <News  key="technology"  setProgress = {this.setProgress}   pagesize={6} country={"in"} category ={"technology" }/>
        </Route>
        <Route exact path="/health"  >
        <News key="health"  setProgress = {this.setProgress}   pagesize={6} country={"in"} category ={"health" }/>
        </Route>
        <Route exact path="/entertainment"  >
        <News key="entertainment"  setProgress = {this.setProgress}   pagesize={6} country={"in"} category ={"entertainment" }/>
        </Route>

      </Switch>
      </Router>
       </>
     
    )
  }
}