// returns array-like collection of DOM nodes
const removableButtons = document.querySelectorAll('.removable');

// transform to array to have a handy forEach method and
// add listeners to each el to remove itself
Array.from(removableButtons).forEach(function(el) {
  el.addEventListener('click', el.remove)
});