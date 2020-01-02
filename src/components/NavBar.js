import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

    this.state = {
      activeMenu: false,
    };
  }    

  toggleMenu() {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };
  
   closeMenu() {
    this.setState({
      activeMenu: false,
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
      <div>
       <nav className="navbar is-fixed-top is-unselectable">
         <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item logo" to="/" onClick={this.closeMenu}>
                <span className="icon is-medium">
                  <i className="fas fa-dot-circle fa-lg"></i>
                </span>
                <b>feed<span style={{paddingLeft:'3px'}}></span>me<span style={{paddingLeft:'3px'}}></span>music</b>
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
                <div className="columns is-centered">
                  <div className="column">
                    <div className="has-text-weight-semibold">Feeds</div>
                    <div className="tags are-medium">
                      { 
                        feeds.map((feed, i) => { 
                          return (<Link to={ '/feed/' + feed[0] } onClick={this.closeMenu} key={`feed-${i}`} className="tag feed">{ feed[1] }</Link>)
                        })
                      }                  
                    </div>
                  </div>
                  <div className="column">
                    <div className="has-text-weight-semibold">Categories</div>
                    <div className="tags are-medium">
                      { 
                        categories.map((cat, i) => { 
                          return (<Link to={ '/category/' + cat[0] } onClick={this.closeMenu} key={`cat-${i}`} className="tag cat">{ cat[1] }</Link>)
                        })
                      }                  
                    </div>   
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
