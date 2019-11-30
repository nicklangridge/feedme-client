import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import '../styles/App.sass';

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

      
<nav className="navbar is-fixed-top">
	<div className="container">
		<div className="navbar-brand">
      <a className="navbar-item logo" href="/">
        feedmemusic
      </a>
			<span className="navbar-burger burger" data-target="navMenu">
				<span></span>
				<span></span>
				<span></span>
			</span>
		</div>
		<div id="navMenu" className="navbar-menu">
			<div className="navbar-end">
				<a href="/" className="navbar-item">Home</a>
				<a href="/" className="navbar-item">Feeds</a>
				<a href="/" className="navbar-item">Categories</a>
			</div>
		</div>
	</div>
</nav>

<div className="section">
  <div className="container has-text-centered">
    <h1 className="title is-1 has-text-weight-bold">Recent Albums</h1>
  </div>
</div>
      
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
