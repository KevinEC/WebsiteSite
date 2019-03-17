import React, { Component } from 'react';

import styles from './Stories.module.scss';

import $ from "jquery";

class Stories extends Component {

  componentDidMount() {
    $(".carousel").carousel({
      interval: false
    })

  }

  render() {

    return (
      <section className={styles.stories}>
        <div className={["container", styles.container].join(" ")}>
          <div className={["title", styles.title].join(" ")}>
            <h2>Song Stories</h2>
          </div>
        </div>
        <div className={["container carousel slide", styles.container].join(" ")} id="stories-carousel" data-ride="carousel" data-interval="false">
          
          <div className={["d-flex align-items-center justify-content-center", styles["stories-gallery"]].join(" ")}>
            <a className={styles["stories-button"]} id={styles["stories-prev"]} href="#stories-carousel" role="button" data-slide="prev"></a>

            <div className={["active carousel-item", styles["carousel-item"]].join(" ")} >
              <div className={["d-flex", styles["stories-card"]].join(" ")}>
                <div className={styles["stories-card-album"]}></div>
                <div className={["d-flex flex-column", styles["stories-card-text"]].join(" ")}>
                  <h3>Replay</h3>
                  <p>
                    Lots of retro references in this song. Spent a session with Dave Stanley Doust and Bryan Fogelman at a rafting resort and the fresh air gave us that melody. Once the idea of the mix tape caught on, we wrote the verses that are actually titles from hit songs - both recent and distant past - and we kept chasing re-writing and second-chance ideas. It feels cool to sing this one.
                  </p>
                </div>
              </div>
            </div>
            <a className={styles["stories-button"]} id={styles["stories-next"]} href="#stories-carousel" role="button" data-slide="next"></a>
          </div>
        </div>
      </section>
    	
    );
  }
}

export default Stories;
