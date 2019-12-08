import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { getClientRegion } from '../utils/API';


class Footer extends Component {
  render() {    
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <span className="icon is-large">
              <i className="fab fa-github fa-2x"></i>
            </span>
           <span className="icon is-large">
              <i className="fab fa-spotify fa-2x"></i>
            </span>
          </p>
          <p>
            Your region has been detected as '{ getClientRegion() }'.
          </p>
          <p>
            This product uses a SPOTIFY API but is not endorsed,certified or otherwise approved in any way by Spotify.<br /> 
            Spotify is the registered trade mark of the Spotify Group.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
