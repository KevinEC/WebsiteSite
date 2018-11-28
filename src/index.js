import style from "./main.scss";
import Navigo from "Navigo/lib/navigo";
import "bootstrap";
import $ from "jquery";
import ClipBoardJS from "clipboard";

function $id(id) {
  return document.getElementById(id);
}

//enable tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

let currentPath = "";

    function cardHover(){
      /* Clipboard */

      console.log("clipboarding");
      let clipboard = new ClipBoardJS('.copy');

      clipboard.on('success', function(e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);

      e.clearSelection();
  });
  
      let modal = document.querySelector(".card-notification");
      let elements = document.querySelectorAll(".copy");
      let clicked = false;

      if (currentPath == "home")
      {
        elements.forEach( function(element) {
        
            element.addEventListener("mouseenter", function( event ) {

                console.log('mouseenter');
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
            console.log("adding card things");    
        });
      }
    }


window.onload = function() {


  console.log("im running", "path", currentPath);


  // call card hover funcionality
  cardHover();
  

 /* Modal */
 console.log($('#galleryModal'));
  $('#galleryModal').on('show.bs.modal', function (e) {

    console.log("modal pls");

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
router.on({'/' : () => { loadHTML('./home.html', 'view'); currentPath = 'home'; } });

router.on({
  // 'view' is the id of the div element inside which we render the HTML
  'home': () => { loadHTML('./home.html', 'view'); currentPath = 'home'; },
  'home#qoute': () => { loadHTML('./home.html#qoute', 'view'); if(!currentPath) currentPath = 'home'; },
  'home#contact': () => { loadHTML('./home.html#contact', 'view'); if(!currentPath) currentPath = 'home'; },

  '#qoute': () => { loadHTML('./home.html#qoute', 'view'); currentPath = 'home'; },
  '#contact': () => { loadHTML('./home.html#contact', 'view'); currentPath = 'home'; },

  'EPK': () => { loadHTML('./EPK.html', 'view'); currentPath = 'epk'; },
  'EPK#latest': () => { loadHTML('./EPK.html#latest', 'view'); currentPath = 'epk'; },
  'EPK#assets': () => { loadHTML('./EPK.html#assets', 'view'); currentPath = 'epk'; }
});




// set the 404 route
router.notFound((query) => { $id('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; });

router.resolve();
