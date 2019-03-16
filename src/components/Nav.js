import React, { Component } from 'react';
import styles from './Nav.module.scss';

import { Link } from "react-router-dom";

class Nav extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      nav: []
    };
  }

  render() {

    return (
      <nav className={["navbar navbar-expand navbar-dark bg-trans", styles.navbar].join(" ")}>
        <ul className="navbar-nav w-100">
          <li className="nav-item ">
                <Link className={["nav-link", styles.navLink].join(" ")}
                      to="/"
                >
                  Home
               </Link>
            </li>
            <li className="nav-item">
                <Link  className={["nav-link", styles.navLink].join(" ")}
                    to="/epk"
                >
                  Electronic Press Kit
              </Link>
          </li>
        </ul>
      </nav>
    	
    );
  }
}

export default Nav;
