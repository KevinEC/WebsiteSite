import React, { Component } from 'react';

import styles from './Assets.module.scss';

import $ from "jquery";

class Assets extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      firstClick: true,
      imageIndex: 0
    };

    this.imageIndex = 0;
    this.importAll = this.importAll.bind(this);
    this.modal = this.modal.bind(this);
  }

  componentDidMount(){

    this.modal();


  }

  modal(){

    let firstClick = true;

    // NOW THIS IS GENIUS. this stops being the react version of this once you step into the jquery $. outstanding move.
    let THIS = this;

    $('#galleryModal').on('show.bs.modal', function (e) {   

      // if it's the first time the modal is clicked, import all full size images
      if(firstClick) {
        THIS.images = THIS.importAll(require.context('../../assets/gallery', false, /\.(png|jpe?g|svg)$/));
        firstClick = false;
        THIS.setState({firstClick: false});
      }

      
      // get the bgUrl of the clicked element
      let clickedE = e.relatedTarget.childNodes[0];
      let bgUrl = $(clickedE).css('background-image');
      //remove thumb to get the address to the fullsize version
      let tempBgUrl = bgUrl.replace("_thumb", '');
      //remove everything before static
      tempBgUrl = tempBgUrl.slice(tempBgUrl.search("/static"));
      //remove the random hash
      tempBgUrl = tempBgUrl.slice(0, tempBgUrl.indexOf(".") );

      let tempUrl = "";
      // match url strings to set index ofr modal picture
      THIS.images.forEach( function(url, index) {
        tempUrl = url.slice(0, url.indexOf("."));
        if(tempUrl.includes(tempBgUrl)){
          THIS.setState({imageIndex: index});
        }
      });
    });

  }

  //import all images recursivley
  importAll(r) {
    return r.keys().map(r);
  }

  render() {

    const images = this.importAll(require.context('../../assets/gallery', false, /\.(png|jpe?g|svg)$/));
    let index = 2;

    return (
      <section className={styles.assets} id="assets">
        <div className={["container", styles.container].join(" ")}>
          <div className={["title", styles.title].join(" ")}>
            <h2>Assets</h2>
          </div>
          <div className={["d-flex", styles["assets-gallery"]].join(" ")}>
            <div id={styles["gallery-image-1"]} className={["assets-gallery-container", styles["assets-gallery-container"]].join(" ")} data-toggle="modal" data-target="#galleryModal"><div></div></div>
            <div id={styles["gallery-image-2"]} className={["assets-gallery-container", styles["assets-gallery-container"]].join(" ")} data-toggle="modal" data-target="#galleryModal"><div></div></div>
            <div id={styles["gallery-image-3"]} className={["assets-gallery-container", styles["assets-gallery-container"]].join(" ")} data-toggle="modal" data-target="#galleryModal"><div></div></div>
            <div id={styles["gallery-image-4"]} className={["assets-gallery-container", styles["assets-gallery-container"]].join(" ")} data-toggle="modal" data-target="#galleryModal"><div></div></div>
            <div id={styles["gallery-image-5"]} className={["assets-gallery-container", styles["assets-gallery-container"]].join(" ")} data-toggle="modal" data-target="#galleryModal"><div></div></div>
          </div>
        </div>


        <div className="modal fade" id="galleryModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="image">
            <div className="modal-content">
              <button type="button" className={styles.close} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"></span>
              </button>
              <div className={["modal-body d-flex justify-content-center align-items-center", styles["modal-body"]].join(" ")}>
                <img src={images[this.state.imageIndex]} id={"modal-image"} alt="right click to save image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    	
    );
  }
}

export default Assets;
