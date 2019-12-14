import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import '../App.sass';

import NavBar from './NavBar';
import Albums from './Albums';
import About from './About';
import NotFound from './NotFound';

//      <section className="section">
//        <div className="container">
//          <h2 className="title is-1 has-text-centered has-text-weight-bold">Feed Me Music</h2>
//        </div>
//      </section>


function App() {
  return (
    <Router>
      <NavBar />
      
        <Switch>
          <Route exact path="/"             component={Albums} />
          <Route path="/feed/:feed"         component={Albums} />
          <Route path="/genre/:genre"       component={Albums} />
          <Route path="/category/:category" component={Albums} />
          <Route path="/search/:keywords"   component={Albums} />
          <Route exact path="/about"        component={About} />
          <Route path="*"                   component={NotFound} />
        </Switch>
      
    </Router>
  );
}

// Sticky footer https://github.com/jgthms/bulma/issues/47


 /*     <Route path="/feed/:feed"         component={Albums} />
        <Route path="/genre/:genre"       component={Albums} />
        <Route path="/category/:category" component={Albums} />
        <Route path="/search/:keywords"   component={Albums} />
        <Route path="/regions"            component={Regions} />
        <Route path="/feeds"              component={Feeds} />*/
       
export default App;
