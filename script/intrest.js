addInterestButton.addEventListener(
  'click',
  function(event) {
    var newDiv = document.createElement("button"); 
  // and give it some content 
    var newContent = document.createTextNode(prompt('Новый интерес','')); 
    var newAtt = document.createAttribute('onclick');
    newAtt.value = 'this.remove()';
  // add the text node to the newly created div
    newDiv.appendChild(newContent);  
    newDiv.setAttributeNode(newAtt);

  // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("target"); 
    currentDiv.insertBefore(newDiv, currentDiv.firstChild); 
  });
