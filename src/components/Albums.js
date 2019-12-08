import React, { Component } from 'react';
import update from 'immutability-helper';
import { getAlbums } from '../utils/API';
import AlbumCards from '../components/AlbumCards';
import FilterBar from '../components/FilterBar';
import Spinner from '../components/Spinner';
import NoAlbums from './NoAlbums';
import Footer from './Footer';

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
      page: 0,
    };
    
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.fetchAlbums(this.props);
  }
  
  componentWillReceiveProps(nextProps) {
    this.fetchAlbums(nextProps);
  }
  
  loadMore() {
    this.fetchAlbums(this.props, true);
  }
  
  fetchAlbums(props, more = false) {
    var page = more ? this.state.page + 1 : 0;
    
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
        filters: data.filters,
        page: page
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
      <div>
        <div className="container">
          { isFetching && !hasAlbums ? '' : <FilterBar filters={ filters } /> }
          { hasAlbums ? <AlbumCards albums={ albums } hasMore={ hasMore } loadMore={ this.loadMore } /> : '' }
          { isFetching ? <Spinner /> : '' }
          { !isFetching && !hasAlbums ? <NoAlbums /> : '' }
          { hasMore ?  
            <div className="section">
              <div className="container has-text-centered">
                <span className="button" onClick={ this.loadMore }>feed me more >>></span>
              </div> 
            </div>
            : '' 
          }
        </div>
        { isFetching ? '' : <Footer /> }
      </div>
    );
  }
}

export default Albums;
