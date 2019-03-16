import React, { Component } from 'react';

import styles from './Music.module.scss';

import { Link } from "react-router-dom";

class Music extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      Music: []
    };
  }

  render() {

    return (

      <section className={styles.music}>
          <div className={styles["music-bg"]}></div>
          <div className={["container d-flex align-items-center", styles.container].join(" ")}>
              <div className={styles["music-text"]}>
                  <div className={["title", styles.title].join(" ")}>
                      <h2>Music</h2>
                  </div>
                  <h4>Check out my music!</h4>
              </div>
              <div className={["d-flex align-items-center justify-content-around", styles["music-icons"]].join(" ")}>
                  <Link className={styles["music-icon"]} id={styles["music-spotify"]} to="https://open.spotify.com/album/2JIYyBsa8tzk0itMuCVlLd"
                  ></Link>
                  <span></span>
                  <Link className={styles["music-icon"]} id={styles["music-apple"]} to="https://itunes.apple.com/ca/album/replay/1448891178?i=1448891186&fbclid=IwAR1vG1MrJT8jNFKB8SR28sCOWEB6rEVtfyhCXYy0MngMZjPw4BfuyTmx0CY"
                  ></Link>
              </div>
          </div>
      </section>
    	
    );
  }
}

export default Music;
