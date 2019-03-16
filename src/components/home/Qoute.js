import React, { Component } from 'react';

import styles from './Qoute.module.scss';

class Qoute extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      Qoute: []
    };
  }

  render() {

    return (
      <section className={styles.qoute} id={styles.qoute}>
          <div className="container d-flex  align-items-center">
              <div className={["d-flex align-items-center justify-content-between", styles["qoute-container"]].join(" ")}>
                  <span className={styles["qoute-icon"]}>”</span>
                  <span className={styles["qoute-text"]}>
                      Old school, new beats, wild nature, soul. These are things that shape the sound of Bo Henrik.  His music is gonna bring you to the edge of your seat and not let go.
                      <br/><br/>
                      -Brady Blade Drummer of the Dave Matthews and Friends band
                  </span>
              </div>
          </div>
      </section>
    	
    );
  }
}

export default Qoute;
