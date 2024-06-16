var popupoverlay = document.querySelector(".pop-overlay");
var popupbox = document.querySelector(".popupbox");
var addbutton = document.getElementById("add-popup-btn");
addbutton.addEventListener("click", function () {
  popupbox.style.display = "block";
  popupoverlay.style.display = "block";
});
document.getElementById("cancel-popup").addEventListener("click", function () {
  event.preventDefault();
  popupbox.style.display = "none";
  popupoverlay.style.display = "none";
});
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitle = document.getElementById("book-title-input");
var bookauthor = document.getElementById("book-author-input");
var bookdspt = document.getElementById("book-descriptio -input");

addbook.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${booktitle.value}</h2>`+`<h5>${bookauthor.value}</h5>`+`<p>${bookdspt.value}</p>`+'<button onclick="book(event)">Delete</button>';
  container.append(div);
  popupbox.style.display = "none";
  popupoverlay.style.display = "none";
});
function book(event){
    event.target.parentElement.remove()
}
var darkmode=document.querySelector(".nightmode")
var bookcontainer=document.querySelector(".book-container")
var body=document.querySelector(".body")
var daymode=document.querySelector(".daymode")

darkmode.addEventListener("click",function(){
  bookcontainer.style.border="2px white solid"
  container.style.backgroundColor="black"
  body.style.backgroundColor="black"
  
})
daymode.addEventListener("click",function(){
  bookcontainer.style.border="2px white solid"
  container.style.backgroundColor="white"
  body.style.backgroundColor="white"
  
})
