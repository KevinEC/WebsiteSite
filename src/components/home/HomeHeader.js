import React, { Component } from 'react';

import styles from './HomeHeader.module.scss';
import './HomeHeader.module.scss';

import logo from "../../assets/logo.png"

import { HashLink as AnchorLink } from "react-router-hash-link";

class HomeHeader extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      HomeHeader: []
    };
  }

  render() {

    return (
      <header className={["d-flex flex-column", styles.header].join(" ")} id={styles.homeHeader}>
          <div className={["container", styles.container].join(" ")}>
              <div className="row" id={styles.logo} >
                  <img src={logo} alt="logo"/>
              </div>
              <div className={["row d-flex justify-content-between", styles.buttons].join(" ")}>
                  <AnchorLink className={styles.btnTrans} to="#about">About</AnchorLink>
                  <AnchorLink className={styles.btnTrans} to="#contact">Contact</AnchorLink>
              </div>
          </div>
          <div className={["w-100 d-flex justify-content-center", styles.scroll].join(" ")}>
              <div className="d-flex justify-content-center align-self-ends">
                  <AnchorLink to="#qoute"></AnchorLink>
              </div>
          </div>
      </header>
    	
    );
  }
}

export default HomeHeader;
