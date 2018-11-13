import style from "./main.scss";
import Navigo from "Navigo/lib/navigo";


function $id(id) {
  return document.getElementById(id);
}

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
