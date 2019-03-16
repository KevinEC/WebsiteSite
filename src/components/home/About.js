import React, { Component } from 'react';

import styles from './About.module.scss';

import { Link } from "react-router-dom";

class About extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      About: []
    };

    this.expandText = this.expandText.bind(this);
  }

  componentDidMount() {
    this.expandText();
  }

  expandText(){

    let btnExpand = document.querySelector(".btn-expand");
    let btnWrapper = document.querySelector(".btn-expand-wrapper");
    let text = document.querySelector(".about .container p:nth-of-type(2)");
    let about = document.querySelector("#about");
    let toggled = false;


    btnExpand.addEventListener("click", function(event){

      if(!toggled){
        btnWrapper.setAttribute("style", "transform: rotateX(180deg); height: 50px; margin-top: 0px;");
        text.setAttribute("style", "display: block;");
        btnExpand.setAttribute("href", "");

        toggled = true;
      } else {
        btnWrapper.setAttribute("style", "");
        text.setAttribute("style", "");
        document.querySelector("html").setAttribute("style","scroll-behavior: auto");
        about.scrollIntoView({behavior: "auto", block: "start"});        

        toggled = false;
      }

    });
    
  }

  render() {

    return (
      <article className={["about", styles.about].join(" ")} id="about">
          <div className={["container d-flex flex-column", styles.container].join(" ")}>
              <div className={["title", styles.title].join(" ")}>
                  <h2>About Bo Henrik</h2>
              </div>
              <p>
                  I create music for the love of doing it, keeping it honest while still hitting hard and having the most catchy yet lasting melodies. If it sounds good and feels good, then that’s what I’m aiming for. I want my songs to bring you back to that time and place with your buddies or your girl at the time, maybe chilling around a campfire or just going out on your first date. I strive to make music that connects with you here and now, that you also will genuinely enjoy in 10 years time.
                  <br />
              </p>
              <p>
                  It's essential to me that the people surrounding my work as an artist are just as passionate about what they do as I am about songwriting and performing. My videos are for example shot by my high school friend Albin who has the taste and understanding of modern aesthetics combined with ridiculously impressive cinematography and editing skills (that lands him work with big companies); my homepage is made by Kevin who has a genuine love for design (also happened to teach me to skateboard back in the day) who has a similar story to Albins. He understands and has a true feel for modern aesthetics mixed with the skills that have landed him jobs at big media companies.
                  <br /><br />
                  Simply put, I believe that working with close friends that share your vision and are ridiculously talented will always give the best results. Kevin sees the homepage as its own art project, Bryan is extremely diligent when we’re working through the 8th version of the lyrics, Albin puts all of his knowledge and taste into the music video and when Susan Szatmary helps design my logo, she puts her full understanding of who I am into the design. People can feel it when something is true and when all of the people behind it love what they're doing; genuine people with genuine passions shine through. That’s why Tyler The Creator, Childish Gambino and Chance The Rapper feel 100% real and their songs stay feeling fresh. I'm hoping that I can provide the same core feeling with my songs, music videos and my live shows.
                  
              </p>
              <div className={["btn-expand-wrapper", styles["btn-expand-wrapper"]].join(" ")}>
                  <div className={["btn-expand", styles["btn-expand"]].join(" ")}></div>
              </div>
              <Link className={["btn btn-primary", styles.btn].join(" ")} to="EPK">EPK</Link>
          </div>
      </article>
    	
    );
  }
}

export default About;
