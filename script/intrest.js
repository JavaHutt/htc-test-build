addInterestButton.addEventListener(
  'click',
  function(event) {
    var extractedInterest = prompt('Добавить интерес','');
    if (extractedInterest) {
      var html = "<button class='removable' onclick='this.remove()'>"+ extractedInterest +"</button>";
      target.innerHTML += html;
    } else { console.warn('input is empty') }    
  });