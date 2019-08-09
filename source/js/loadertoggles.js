var cropToggle = document.querySelector(".picture-loader__tools-botton--crop");
var fillToggle = document.querySelector(".picture-loader__tools-button--fill");
var contrastToggle = document.querySelector(".picture-loader__tools-botton--contrast");
var cropSetter = document.querySelector(".picture-loader__setter--crop");
var fillSetter = document.querySelector(".picture-loader__setter--fill");
var contrastSetter = document.querySelector(".picture-loader__setter--contrast");

var disactivation = function() {
  cropToggle.classList.remove("picture-loader__tools-botton--active");
  fillToggle.classList.remove("picture-loader__tools-botton--active");
  contrastToggle.classList.remove("picture-loader__tools-botton--active");
  cropSetter.classList.remove("picture-loader__setter--active");
  fillSetter.classList.remove("picture-loader__setter--active");
  contrastSetter.classList.remove("picture-loader__setter--active");
};

cropToggle.addEventListener("click", function (){
  disactivation();
  cropToggle.classList.add("picture-loader__tools-botton--active");
  cropSetter.classList.add("picture-loader__setter--active");
});

fillToggle.addEventListener("click", function () {
  disactivation();
  fillToggle.classList.add("picture-loader__tools-botton--active");
  fillSetter.classList.add("picture-loader__setter--active");
});

contrastToggle.addEventListener("click", function () {
  disactivation();
  contrastToggle.classList.add("picture-loader__tools-botton--active");
  contrastSetter.classList.add("picture-loader__setter--active");
})
