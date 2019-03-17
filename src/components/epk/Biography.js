import React, { Component } from 'react';

import styles from './Biography.module.scss';

class Biography extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      Biography: []
    };
  }

  render() {

    return (
      <article className={styles.biography}>
        <div className={styles["biography-bg"]}></div>
        <div className={["container", styles.container].join(" ")}>
          <div className={styles["col-8"], styles["biography-card"]}>
            <div className={["title", styles.title].join(" ")}>
              <h2>Biography</h2>
            </div>
            <p>
              Bo Henrik lives for the mix.  He’s got old-school artistry in his genes, wild nature in his sights, and North America and Sweden as his life’s cultural forces.  These days he lives in Vancouver, Canada, where he’s inspired by the beautiful city and its beat, backed up by forest and mountains.  
              <br />
              His sound is a result of cross-generational collaboration, writing alongside his great mentor Bryan Fogelman (and sometimes his older brother). Many of his fondest experiences and story sources come from couch surfing at the homes of fellow musicians and producers.  Curious to a fault, Bo Henrik plays and arranges mostly all the instruments in his songs, and is grateful to those who put the finishing touches on his work.


            </p>
          </div>
          
        </div>
      </article>
    	
    );
  }
}

export default Biography;
