import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import Item1Component from './components/Item1Component';
import Item2Component from './components/Item2Component';
import Item3Component from './components/Item3Component';
import Item4Component from './components/Item4Component';

class App extends Component {
  render() {
    return (      
      <div className="App container">
        <Router>
          <div>
            <Route exact path="/" component={HomeComponent} ></Route>
            <Route path="/item1" component={Item1Component} ></Route>
            <Route path="/item2" component={Item2Component} ></Route>
            <Route path="/item3" component={Item3Component} ></Route>
            <Route path="/item4" component={Item4Component} ></Route>
          </div>
        </Router>   
      </div>
    );
  }
}

export default App;
