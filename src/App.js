import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Social from "./components/pages/Social"
import Tracks from "./components/pages/Tracks"
import Contact from "./components/pages/mailto"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact = {true} component={Home} />
          <Route path='/about' exact = {true} component={About} />
          <Route path='/social' exact={true} component={Social}/>
          <Route path='/tracks' exact={true} component={Tracks}/>
          <Route path='/contact' exact={true} component={Contact}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
