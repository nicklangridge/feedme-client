import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import AlbumImage from '../components/AlbumImage';


class AlbumCard extends Component {
  
  renderReview(review, key) {  
    
    const text = review.snippet ? 
      <span> <a href={ review.url } target="_blank" rel="noopener noreferrer"><span className="quote">&ldquo;</span>{ review.snippet }<span className="quote">&rdquo;</span></a> </span> : 
      <span> <a href={ review.url } target="_blank" rel="noopener noreferrer">no preview available</a> </span>;
    
    return (
      <p key={ key }>
        <span className="feed-name has-text-weight-semibold is-italic">{ review.name }</span>&nbsp; 
        { text }
      </p>
    );
  }
  
  render() {
    const {album} = this.props;  
              
    return (
      <div className="section album">
        <div className="album-card" key={ album.album_id }>
          <div className="columns">
            <div className="column is-one-third">
              <AlbumImage album={album} />
            </div>

            <div className="column album-info">
              <h2 className="title is-3"><a href={ album.album_uri }>{ album.album_name }</a></h2>
              <h4 className="subtitle is-5"><a href={ album.artist_uri }>{ album.artist_name }</a></h4>
              <div className="reviews">
                { album.reviews.map(this.renderReview) }
              </div>
              <p className="time-ago is-size-7">Found <TimeAgo date={ album.created } /></p>              
              <div className="tags are-medium">
                  { 
                    album.reviews.map((tag, i) => { 
                      return (<span key={ i } className="tag feed"><Link to={ '/feed/' + tag.slug }>{ tag.name }</Link></span>)
                    })
                  }
                  { 
                    album.genres.filter(short).map((tag, i) => { 
                      return (<span key={ i } className="tag genre"><Link to={ '/genre/' + tag.slug }>{ tag.name }</Link></span>)
                    })
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function short(tag) {
  return tag.name.split(" ").length < 3;
}

export default AlbumCard;
