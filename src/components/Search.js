import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      redirect: null
    };
    
    this.toggleMenu = this.props.toggleMenu;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  setRedirect(target) {
    this.setState({ redirect: target });
  }
  
  renderRedirect() {
    if (this.state.redirect) {
      this.setRedirect(null);
      return <Redirect to={this.state.redirect} />
    }
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const queryInput = ReactDOM.findDOMNode(this._queryInput);
    const query = queryInput.value.trim().replace(/\s+/g, ' ');
    if (query.length > 0) {
      this.setRedirect('/search/' + query);
      this.toggleMenu();
      queryInput.value = '';
    }
  }
  
  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        { this.renderRedirect() }
        <p className="control has-icons-left">
          <input ref={queryInput => this._queryInput = queryInput} className="input" type="text" placeholder="Search albums and genres" />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" ></i>
          </span>
        </p>
      </form>
    );
  }
}

export default Search;
