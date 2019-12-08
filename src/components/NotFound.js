import React from 'react';
//import { Link } from 'react-router-dom'

function NotFound (){
  return (
    <div className="section">
      <div className="container has-text-centered not-found">
        <p>
          <span className="icon is-large">
            <i className="fas fa-skull fa-3x"></i>
          </span>
        </p>
        <p>
          <h1 className="title is-1">uh oh</h1>
        </p>
        <p>
          Whatever you're looking for isn't here...
        </p>
      </div>
    </div>
  )
}

export default NotFound;