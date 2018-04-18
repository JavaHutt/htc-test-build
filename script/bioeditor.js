target.addEventListener(
    'click',
    function(event) {
      var newText = prompt('Новое имя', '');
      document.getElementById("target").textContent = newText;
    }
  );