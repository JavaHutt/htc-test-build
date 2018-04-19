//name edit
if (localStorage.name) {
  document.getElementById("nameChanger").value = localStorage.name;
}

document.getElementById("nameChangerForm").addEventListener("submit", function(event){
  //prevent using Enter as submit button
  event.preventDefault();                                  
})

document.getElementById("nameChanger").addEventListener("blur", function(){
  var newName = document.getElementById("nameChanger").value;
  localStorage.setItem("name", newName);
})

//phone edit
if (localStorage.phone) {
  document.getElementById("phoneChanger").value = localStorage.phone;
}

document.getElementById("phoneChangerForm").addEventListener("submit", function(event){  
  event.preventDefault();                                  
})

document.getElementById("phoneChanger").addEventListener("blur", function(){
  var newPhone = document.getElementById("phoneChanger").value;
  localStorage.setItem("phone", newPhone);
})

//email edit
if (localStorage.email) {
  document.getElementById("emailChanger").value = localStorage.email;
}

document.getElementById("emailChangerForm").addEventListener("submit", function(event){  
  event.preventDefault();                                  
})

document.getElementById("emailChanger").addEventListener("blur", function(){
  var newEmail = document.getElementById("emailChanger").value;
  localStorage.setItem("email", newEmail);
})
//relationship edit
var select = document.querySelector("#count");
var selectOption = select.options[select.selectedIndex];
var lastSelected = localStorage.getItem('select');

if(lastSelected) {
    select.value = lastSelected; 
}

select.onchange = function () {
   lastSelected = select.options[select.selectedIndex].value;
   console.log(lastSelected);
   localStorage.setItem('select', lastSelected);
}
