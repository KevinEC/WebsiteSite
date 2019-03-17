import React, { Component } from 'react';

import styles from '../home/Qoute.module.scss';

class EpkQoute extends Component {

  render() {

    return (
      <section className={styles.qoute} id="qoute">
          <div className={["container d-flex  align-items-center", styles.container].join(" ")}>
              <div className={["d-flex align-items-center justify-content-between", styles["qoute-container"]].join(" ")}>
                  <span className={styles["qoute-text"]}>
                      Bo Henrik is neo-soul, hip hop and dirty rhythms all wrapped into one. Bo Henrik writes, produces and choreographs all his moves and can’t wait to get onstage at any given moment
                  </span>
              </div>
          </div>
      </section>
    );
  }
}

export default EpkQoute;
