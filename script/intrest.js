document.getElementById('addInterestButton').addEventListener(
  'click',
  function(event) {
    var newString = prompt('Новый интерес','');  
    if (newString.length >= 16) {
      alert('Не более 16 символов!');
    }  
    else if (newString) {
      var newTextNode = document.createTextNode(newString);
      var newButton = document.createElement("button");       
      newButton.appendChild(newTextNode);        
      var currentDiv = document.getElementById("target"); 
      currentDiv.insertBefore(newButton, currentDiv.firstChild);
      newButton.addEventListener('click',newButton.remove);      
    }   
    else {
      console.log("input is empty");
    }
  });
const removableButtons = document.querySelectorAll('.removable');

Array.from(removableButtons).forEach(function(el) {
  el.addEventListener('click', el.remove)
});
