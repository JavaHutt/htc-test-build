var text = document.getElementById('name').textContent;
document.getElementById('name').addEventListener(
    'click',
    function(event) {
      var newText = prompt('Новое имя', text);
      if (newText) {
      document.getElementById("name").textContent = newText;
      }
      else {
        console.log('input is empty');
      }
    }
  );