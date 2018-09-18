var review = document.querySelector(".review");
var contactcloses = document.querySelector(".popap-closes");
var map = document.querySelector(".popap");

review.addEventListener("click", function(evt){
  evt.preventDefault();
  map.classList.add("display-show");
});
contactcloses.addEventListener("click", function(evt){
  evt.preventDefault();
  map.classList.remove("display-show");
});


var openmap = document.querySelector(".main-maps");
var popap = document.querySelector(".map");
var popapclose = document.querySelector(".contact-closes");



openmap.addEventListener("click", function(evt){
  evt.preventDefault();
  popap.classList.add("display-show");
});
popapclose.addEventListener("click", function(evt){
  evt.preventDefault();
  popap.classList.remove("display-show");
});



var btn1 = document.querySelector(".delivery-menu-btn1");
var btn2 = document.querySelector(".delivery-menu-btn2");
var btn3 = document.querySelector(".delivery-menu-btn3");

var deliverys = document.querySelector(".main-deliverys");
var guarantee = document.querySelector(".main-guarantee");
var credit = document.querySelector(".main-credit");

btn1.addEventListener("click", function(evt){
  evt.preventDefault();

  btn1.classList.add("delivery-menu-active");
  deliverys.classList.add("display-show");

  btn2.classList.remove("delivery-menu-active");
  btn3.classList.remove("delivery-menu-active");

  guarantee.classList.add("display");
  credit.classList.add("display");

  guarantee.classList.remove("display-show");
  credit.classList.remove("display-show");

});

btn2.addEventListener("click", function(evt){
  evt.preventDefault();

  btn2.classList.add("delivery-menu-active");
  guarantee.classList.add("display-show");

  btn1.classList.remove("delivery-menu-active");
  btn3.classList.remove("delivery-menu-active");

  deliverys.classList.add("display");
  credit.classList.add("display");

  deliverys.classList.remove("display-show");
  credit.classList.remove("display-show");

});

btn3.addEventListener("click", function(evt){
  evt.preventDefault();

  btn3.classList.add("delivery-menu-active");
  credit.classList.add("display-show");

  btn1.classList.remove("delivery-menu-active");
  btn2.classList.remove("delivery-menu-active");

  deliverys.classList.add("display");
  guarantee.classList.add("display");

  deliverys.classList.remove("display-show");
  guarantee.classList.remove("display-show");

});
