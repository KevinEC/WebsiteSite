import React, { Component } from 'react';

import styles from './EpkHeader.module.scss';

class EpkHeader extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      EpkHeader: []
    };
  }

  render() {

    return (
      <header className="d-flex flex-column" id={styles["epk-header"]}>
      <div className={["container", styles.container].join(" ")}>
          <div className="row" id={styles["epk-logo"]} >
            <h1>Electronic Press Kit</h1>
            <span>The artist who gets his beat from North America and his soul from Sweden</span>
          </div>
          <div className={["row d-flex justify-content-between", styles.buttons].join(" ")}>
            <a className={styles.btnTrans} href="#assets">Assets</a>
          </div>
        </div>
      </header>
    	
    );
  }
}

export default EpkHeader;
