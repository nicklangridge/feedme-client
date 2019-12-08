import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      activeMenu: false,
    };
  }    

  toggleMenu() {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };
  
  render() {    
    
    const categories = [
      ['rock-indie', 'Rock / indie'],
      ['pop', 'Pop'],
      ['electronic', 'Electronic'],
      ['hip-hop-rap', 'Hip-hop / rap'],
      ['folk', 'Folk'],
      ['avant-garde', 'Avant garde'],
      ['randb', 'R & B'],
      ['country', 'Country'],
      ['ambient', 'Ambient'],
      ['soul-funk-jazz', 'Soul / funk / jazz'],
      ['reggae-dub', 'Reggae / dub']
    ];
    
    const feeds = [
      ['clash', 'Clash'],
      ['cos', 'Consequence of Sound'],
      ['drownedinsound', 'Drowned In Sound'],
      ['gigsoup', 'Gig Soup'],
      ['guardian', 'Guardian'],
      ['loudandquiet', 'Loud and Quiet'],
      ['nme', 'NME'],
      ['pitchfork', 'Pitchfork'],
      ['reggaevibes', 'Reggae Vibes'],
      ['residentadvisor', 'Resident Advisor'],
      ['bestfit', 'The Line of Best Fit'],
      ['quietus', 'The Quietus'],
      ['undertheradar', 'Under the Radar'],
      ['xlr8r', 'XLR8R'],
      ['xsnoize', 'XS Noize']
    ];
    
    const activeMenu = this.state.activeMenu;
    
    return (
       <nav className="navbar is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item logo" to="/">
              <span className="icon is-medium">
                <i className="fas fa-record-vinyl fa-lg"></i>
              </span>
              <b>feedmemusic</b>
            </Link>
            <span className={`navbar-burger burger ${activeMenu ? 'is-active' : ''}`} data-target="navMenu" onClick={this.toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navMenu" className={`navbar-menu ${activeMenu ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <div className="navbar-item">
                <Search toggleMenu={this.toggleMenu} />
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="/">
                  Categories
                </a>
                <div className="navbar-dropdown">
                  { 
                    categories.map((cat, i) => { 
                      return (<Link className="navbar-item" key={`cat-${i}`} to={ '/category/' + cat[0] } onClick={this.toggleMenu}>{ cat[1] }</Link>)
                    })
                  }                  
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="/">
                  Feeds
                </a>
                <div className="navbar-dropdownd">
                  { 
                    feeds.map((feed, i) => { 
                      return (<Link className="navbar-item" key={`feed-${i}`}  to={ '/feed/' + feed[0] } onClick={this.toggleMenu}>{ feed[1] }</Link>)
                    })
                  }                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
