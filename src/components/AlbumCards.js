import React, { Component } from 'react';
import AlbumCard from '../components/AlbumCard';

class AlbumCards extends Component {

  renderTitle() {  
    return (
      <div className="container has-text-centered">
        <p class="title is-6">ALBUMS</p>
      </div>
    );
  }
  
  render() {
    const { albums, withTitle } = this.props;

    const cards = albums.map((album, i) => { 
    return (
      <AlbumCard album={album} key={i} />
    )});
    
    return (
      <div className="album-cards">
          { withTitle ? this.renderTitle() : '' }
          { cards }
      </div>
    );
  }
}

export default AlbumCards;
