import React, { Component } from 'react';

import styles from './Footer.module.scss';

class Footer extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      Footer: []
    };
  }

  render() {

    return (

      <footer className="w-100 d-flex align-items-center">
        <div className="container">
          <nav className="d-flex flex-column">
              <h6 className={styles.logo}>Bo Henrik Music</h6>
              <h6 className={styles.mail}><a href="mailto:me@bohenrik.com">Me@BoHenrik.com</a></h6>
              <h6 className={styles.coded} >Designed and Coded by Kevin Evans</h6>
          </nav>
        </div>
      </footer>
    	
    );
  }
}

export default Footer;
