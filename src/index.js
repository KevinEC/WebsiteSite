import style from "./main.scss";
import Navigo from "Navigo/lib/navigo";
import "bootstrap";
import $ from "jquery";
import ClipBoardJS from "clipboard";

function $id(id) {
  return document.getElementById(id);
}



window.onload = function() {

    /* Clipboard */
  
    let modal = document.querySelector(".card-notification");
    let elements = document.querySelectorAll(".card-item");
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

    /* Modal */
    $('#galleryModal').on('show.bs.modal', function (e) {

      // get the bgUrl of the clicked element
      let clickedE = e.relatedTarget.childNodes[0];
      let bg = $(clickedE).css('background-image');

      // slice string
      let root = location.origin;
      let bgUrl = bg.replace(root, '');
      bgUrl = bgUrl.slice(5,bgUrl.length - 2);
      bgUrl = bgUrl.replace("_thumb", '');

      console.log(bgUrl);

      //set bg of modal
      $('#modal-image').attr('src', bgUrl);
    })


    
  });
}


/* ROUTING */


// asyncrhonously fetch the html template partial from the file directory,
// then set its contents to the html of the parent element
function loadHTML(url, id) {
  let req = new XMLHttpRequest();
  req.open('GET', url);
  req.send();
  req.onload = () => {
    $id(id).innerHTML = req.responseText;
  };
}
let root = location.origin;
console.log(root);
// use #! to hash
let router = new Navigo(root, true, '#!');

// set the default route
router.on({'/' : () => { loadHTML('./home.html', 'view'); } });

router.on({
  // 'view' is the id of the div element inside which we render the HTML
  'home': () => { loadHTML('./home.html', 'view'); },
  'home#qoute': () => { loadHTML('./home.html#qoute', 'view'); },
  'home#contact': () => { loadHTML('./home.html#contact', 'view'); },

  '#qoute': () => { loadHTML('./home.html#qoute', 'view'); },
  '#contact': () => { loadHTML('./home.html#contact', 'view'); },

  'EPK': () => { loadHTML('./EPK.html', 'view'); },
  'EPK#latest': () => { loadHTML('./EPK.html#latest', 'view'); },
  'EPK#assets': () => { loadHTML('./EPK.html#assets', 'view'); }
});



// set the 404 route
router.notFound((query) => { $id('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; });

router.resolve();
