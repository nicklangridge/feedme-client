import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Genres extends Component {
  render() {
    const {genres} = this.props;
    
    return (
      <div className="section" style={{paddingTop:'0'}}>
        <div className="container has-text-centered">
          <p class="title is-6">GENRES</p>
          <div className="tags are-medium" style={{justifyContent: 'center'}}>
            { 
              genres.map((tag, i) => { 
                return (<span key={ i } className="tag feed"><Link to={ '/genre/' + tag.slug }>{ tag.name }</Link></span>)
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Genres;
