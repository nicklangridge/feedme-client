import React, { Component } from 'react';
import update from 'immutability-helper';
import { getAlbums } from '../utils/API';

const PAGESIZE = 30;

class Albums extends Component {

  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      genres: [],
      isFetching: false,
      offset: 0,
      atEnd: false, 
      filters: null,
    };
    
//    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.fetchAlbums(this.props);
  }
  
//   componentWillReceiveProps(nextProps) {
//     this.fetchAlbums(nextProps);
//   }
  
  loadMore(page) {
    console.log('load more', page);
    this.fetchAlbums(this.props, page);
  }
  
  fetchAlbums(props, page = 0) {
    
    this.setState({
      isFetching: true,
      albums: page > 0 ? this.state.albums : [],
      genres: [],
      atEnd: false,
    });  
    
    const args = {
      offset: page * PAGESIZE,
      limit: PAGESIZE,
      feeds: props.params ? props.params.feed : null,
      genres: props.params ? props.params.genre : null,
      category: props.params ? props.params.category : null,
      keywords: props.params ? props.params.keywords : null,
    };
    
    return getAlbums(args).then(data => {
      this.setState({
        isFetching: false,
        albums: update(this.state.albums, {$push: data.albums}),
        genres: data.genres,
        atEnd: data.albums.length < PAGESIZE,
        filters: data.filters
      });
      
    }).catch(err => { 
      throw err; 
    });
  }

  render() {
    const { albums, isFetching, atEnd } = this.state;
    //const { albums, genres, filters, isFetching, atEnd } = this.state;
    //const { source, genre } = this.props.params;
    
    const hasAlbums = albums.length > 0;
    //const hasGenres = genres.length > 0;
    //const hasMore = !atEnd && !isFetching;
    
    console.log(albums);
    
    return (  
      <div> 
        { hasAlbums ? <div>got albums: {albums.length} </div> : '' }
        { isFetching ? <div>loading...</div> : '' }
        { atEnd ? <div>at end</div> : '' }
      </div>
    );
  }
}

export default Albums;
