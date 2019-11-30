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
        <img src={ album.image} alt="album art" />
      </figure>
    );
  }
}

export default AlbumImage;
