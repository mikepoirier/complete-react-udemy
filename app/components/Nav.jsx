import React, {Component} from 'react';
import {IndexLink} from 'react-router'

class Nav extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <IndexLink to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="https://github.com/mikepoirier" target="_blank">Mike Poirier</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

module.exports = Nav;