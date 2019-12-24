import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollIntoView from 'react-scroll-into-view';

// const types = {
//  category: { name: 'Category', path: null },
//  genre:    { name: 'Genre', path: null },
//  feed:     { name: 'Feed', path: '/feeds' },
//  search:   { name: 'Search', path: null },
// }

class FilterBar extends Component {
  render() {
    const filters = this.props.filters;
    
    if (!filters) return (
      <div className="section">
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-weight-bold">Recent albums</h1>
          <p style={{'marginTop':'-0.5rem'}}>
            The latest Spotify albums and reviews from the best sites on the web
            <span className="icon">
              <ScrollIntoView selector="#footer">
                <div className="about-button"><i className="far fa-question-circle"></i></div>
              </ScrollIntoView>
            </span>
          </p>
        </div>
      </div>
    );
       
    const type = filters[0].type;
    const name = filters[0].name;
    
    return (
      <div className="section">
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-weight-bold" style={{'marginBottom':'1rem'}}>
            { type === 'search' ? `Search '${name}'` : name }
          </h1>
          <p>
            <Link to={'/'}>
              <span className="icon is-medium">
                <i className="far fa-times-circle fa-2x"></i>
              </span>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default FilterBar;
