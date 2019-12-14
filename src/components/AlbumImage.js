import React, { Component } from 'react';

class AlbumImage extends Component {
  
  constructor(props) {
    super(props); 
    this.onClick = this.onClick.bind(this);
  }
  
  onClick(e) {
    const {album} = this.props;
    window.location.href = album.album_uri;
    e.preventDefault();
  }
  
  render() {
    const {album} = this.props;  
    
    return (
      <figure className="image is-square album-image">
        <img src={ album.image} onClick={ this.onClick } alt="album art" />
        <div className="overlay" onClick={ this.onClick } >
          <span className="icon is-large">
            <i className="fab fa-spotify fa-5x"></i>
          </span>
        </div>
      </figure>
    );
  }
}

export default AlbumImage;
