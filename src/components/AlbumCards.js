import React, { Component } from 'react';
import AlbumCard from '../components/AlbumCard';

class AlbumCards extends Component {
  render() {
    //const {albums, hasMore, loadMore} = this.props;
    const {albums} = this.props;
     
//     const pairs = albums.reduce(function(result, value, index, array) {
//       if (index % 2 === 0) result.push(array.slice(index, index + 2));
//       return result;
//     }, []);
    
//     const cards = pairs.map((pair, i) => { 
//       return (
//       <div className="columns is-widescreen">
//         <div className="column">
//           <AlbumCard album={pair[0]} key={i+'_0'} />
//         </div>
//         <div className="column">
//           <AlbumCard album={pair[1]} key={i+'_1'} />
//         </div>
//       </div>
//     )});

    const cards = albums.map((album, i) => { 
    return (
      <AlbumCard album={album} key={i} />
    )});
    
    return (
      <div className="album-cards">
          { cards }
      </div>
    );
  }
}

export default AlbumCards;
