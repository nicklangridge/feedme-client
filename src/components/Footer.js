import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { getClientRegion } from '../utils/API';


class Footer extends Component {
  render() {    
    return (
      <footer className="footer" id="footer">
        <div className="section">
          <div className="container about">
            <div className="columns">
              
              <div className="column is-two-thirds">
                <p className="has-text-weight-semiboldx">
                  About
                </p>
                <p>
                  This website brings together album reviews from music sites all over the web and links them with albums in the Spotify catalogue.
                </p>
                <p>
                  The aim is to provide a simple way to get a daily fix of new music. 
                  Each album is listed with a review teaser, category, and genre tags, giving just enough info to pique your interest or give it a swerve.    
                </p>
                <p>
                  This is a non-commercial hobby project and is run on a best-effort basis. 
                  If you encounter problems or have suggestions please <a href="https://github.com/nicklangridge/feedme-client/issues">create issues in GitHub</a>.
                </p>
              </div>
              
              <div className="column">
                <p className="has-text-weight-semiboldx">
                  Links
                </p>
                <div style={{margin:'1rem 0'}}>
                  <div className="columns is-mobile is-vcentered">
                    <div className="column is-narrow">
                      <span className="icon is-medium">
                        <i className="fab fa-spotify fa-2x"></i>
                      </span>
                    </div>
                    <div className="column">
                      To use this website you need <a href="https://www.spotify.com">Spotify</a> installed on your device.
                    </div>
                  </div>
                  <div className="columns is-mobile is-vcentered">
                    <div className="column is-narrow">
                      <span className="icon is-medium">
                        <i className="fab fa-github fa-2x"></i>
                      </span>
                    </div>
                    <div className="column">
                      <a href="https://github.com/nicklangridge/feedme-client">Get the code on GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section" style={{borderTop:'#ccc 1px solid'}}>
          <div className="content has-text-centered">
            <p>
              Your region has been detected as '{ getClientRegion() }'.
            </p>
            <p>
              This product uses a SPOTIFY API but is not endorsed,certified or otherwise approved in any way by Spotify.<br /> 
              Spotify is the registered trade mark of the Spotify Group.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
