import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Analytics from 'react-router-ga';

import '../App.sass';

import NavBar from './NavBar';
import Albums from './Albums';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Analytics id="my-ga-tracking-id">
        <NavBar />
        <Switch>
          <Route exact path="/"             component={Albums} />
          <Route path="/feed/:feed"         component={Albums} />
          <Route path="/genre/:genre"       component={Albums} />
          <Route path="/category/:category" component={Albums} />
          <Route path="/search/:keywords"   component={Albums} />
          <Route path="*"                   component={NotFound} />
        </Switch>      
       </Analytics>
     </Router>
  );
}
      
export default App;
