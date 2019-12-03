import React, { Component } from 'react';
import update from 'immutability-helper';
import { getAlbums } from '../utils/API';
import AlbumCards from '../components/AlbumCards';
import FilterBar from '../components/FilterBar';
import Spinner from '../components/Spinner';

const PAGESIZE = 10;

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
  
  componentWillReceiveProps(nextProps) {
    this.fetchAlbums(nextProps);
  }
  
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
      feeds: props.match.params.feed,
      genres: props.match.params.genre,
      category: props.match.params.category,
      keywords: props.match.params.keywords
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
    const { albums, filters, isFetching, atEnd } = this.state;
    //const { albums, genres, filters, isFetching, atEnd } = this.state;
    //const { source, genre } = this.props.params;
    
    const hasAlbums = albums.length > 0;
    //const hasGenres = genres.length > 0;
    const hasMore = !atEnd && !isFetching;
    
    console.log(albums);
    
    return (  
      <div className="container">
        <div>
          { isFetching && !hasAlbums ? '' : <FilterBar filters={ filters } /> }
          { hasAlbums ? <AlbumCards albums={ albums } hasMore={ hasMore } loadMore={ this.loadMore } /> : '' }
          { isFetching ? <Spinner /> : '' }
          { atEnd ? <div>at end</div> : '' }
        </div>
      </div>
    );
  }
}

export default Albums;
