import React, { Component } from 'react';

import styles from './homeHeader.module.scss';

class homeHeader extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      homeHeader: []
    };
  }

  render() {

    return (
      <header class="d-flex flex-column" id={styles.home}>
          <div class="container">
              <div class="row" id={styles.logo} >
                  <img src="../assets/logo.png"/>
              </div>
              <div class="row buttons d-flex justify-content-between">
                  <a class="btn-trans" href="#about">About</a>
                  <a class="btn-trans" href="#contact">Contact</a>
              </div>
          </div>
          <div class="scroll w-100 d-flex justify-content-center">
              <div class="d-flex justify-content-center align-self-ends">
                  <a href="#qoute"></a>
              </div>
          </div>
      </header>
    	
    );
  }
}

export default homeHeader;
