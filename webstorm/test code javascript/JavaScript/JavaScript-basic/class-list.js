// Class Property

/* 
  add, 
  remove, 
  toggle, 
  contains ==> methods for the classList property of an element. 
*/

var boxElement = document.querySelector(".box"); // <div class="box"></div>

boxElement.classList.add("red");

setTimeout(() => {
  boxElement.classList.remove("red");
}, 3000);
