import React, { Component } from 'react';

class NoAlbums extends Component {
  render() {    
    return (
      <div className="section">
        <div className="container has-text-centered no-albums">
          <p>
            <span className="icon is-large">
              <i className="far fa-thumbs-down fa-3x"></i>
            </span>
          </p>
          <p>
            Sorry, not a sauasage
          </p>
        </div>
      </div>
    );
  }
}

export default NoAlbums;
