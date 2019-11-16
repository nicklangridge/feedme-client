import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import '../App.css';
import Albums from './Albums';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/"      component={Albums} />
          <Route exact path="/about" component={About} />
          <Route path="*"            component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}


 /*<Route path="/feed/:feed"         component={Albums} />
        <Route path="/genre/:genre"       component={Albums} />
        <Route path="/category/:category" component={Albums} />
        <Route path="/search/:keywords"   component={Albums} />
        <Route path="/regions"            component={Regions} />
        <Route path="/feeds"              component={Feeds} />*/
       
export default App;
