import React, { Component } from 'react';

import styles from './Contact.module.scss';
import ClipBoardJS from "clipboard";

class Contact extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      Contact: []
    };
    this.cardHover = this.cardHover.bind(this);
  }

  componentDidMount() {
    this.cardHover();

  }

  cardHover(){
    let clipboard = new ClipBoardJS('.copy',{
      target: function(trigger) {
        console.log(trigger);
        return trigger.childNodes[1];
      }
    });

    clipboard.on('success', function(e) {
      console.log("clipboard sucess");
      e.clearSelection();
    });

    let modal = document.querySelector(".card-notification");
    let elements = document.querySelectorAll(".copy");
    let clicked = false;

    elements.forEach( function(element) {
    
        element.addEventListener("mouseenter", function( event ) {

            modal.setAttribute("style", "display: block;");

        }, false);
        element.addEventListener("mouseleave", function( event ) {

            modal.setAttribute("style", "display: none; background-color: #111111;");
            if(clicked) modal.innerHTML = "Click to copy";
            

        }, false);
        element.addEventListener("click", function( event ) {

            modal.innerHTML = "Copied!";
            clicked = true;
            modal.setAttribute("style", "display: block; background-color: #ffd15e;")
            

      }, false);  
    });
    
  }

  render() {

    return (

        <section className={styles.contact} id="contact">
          <div className="d-flex justify-content-center flex-column">
              <div className={["title", styles.title].join(" ")}>
                  <h2>Contact</h2>
              </div>
              <div className={["d-flex justify-content-center align-items-center", styles["contact-card"]].join(" ")}>
                  
                  <div className={["d-flex flex-column justify-content-center", styles["contact-card-info"]].join(" ")}>
                      <div className={["card-notification", styles["card-notification"]].join(" ")}>
                          Click to copy
                      </div>
                      <div className={["copy d-flex align-items-center", styles["card-item"]].join(" ")}>
                          <div id={styles["card-phone"]}></div>
                          <span id={styles["phone-num"]}>+1 778 317 6951</span>
                      </div>
                      <div className={["d-flex align-items-center", styles["card-item"]].join(" ")}>
                          <div id={styles["card-mail"]}></div>
                          <a id={styles["mail-add"]} href="mailto:me@bohenrik.com">Me@BoHenrik.com</a>
                      </div>
                      <div className={["d-flex align-items-center", styles["card-item"]].join(" ")}>
                          <div id={styles["card-insta"]}></div>
                          <a id={styles["insta-link"]} href="https://www.instagram.com/bohenrikmusic/">BoHenrikMusic</a>
                      </div>
                  </div>
                  <div className={["d-flex flex-column justify-content-center",styles["contact-card-logo"]].join(" ")}>
                      <div className={styles["contact-card-logo-pic"]}></div>
                      <h3>/Artist/Writer/Producer/</h3>
                  </div>
              </div>
          </div>
      </section>
    	
    );
  }
}

export default Contact;
