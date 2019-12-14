import React, { Component } from 'react';

class NoAlbums extends Component {
  render() {    
    return (
      <div className="section">
        <div className="container has-text-centered no-albums">
          <p>
            <span className="icon is-large">
              <i className="fas fa-record-vinyl fa-3x"></i>
            </span>
          </p>
          <p>
            Sorry, no albums
          </p>
        </div>
      </div>
    );
  }
}

export default NoAlbums;
