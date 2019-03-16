import React, { Component } from 'react';

import styles from './Latest.module.scss';
import video from "../../assets/replay-short-30.mp4";

class Latest extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      Latest: []
    };
  }

  render() {

    return (
      <section className={styles.latest} id={styles.latest}>
          <div className={styles["latest-bg"]}>
              <video autoPlay muted loop >
                  <source src={video} />
              </video>
              
          </div>
          <div className={["container d-flex align-items-center", styles.container].join(" ")}>
              <div>
                  <p>Check out the latest release</p>
                  <h1>
                      <span>Replay</span>
                  </h1>
                  <div className={styles["latest-qoute"]}>
                      <span>We kept chasing re-writing and second-chance ideas. It feels cool to sing this one.</span>
                  </div>
              </div>
              <div className={styles["latest-album"]}>
                  <div></div>
              </div>
          </div>
      </section>
    	
    );
  }
}

export default Latest;
