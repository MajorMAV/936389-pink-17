var cropToggle = document.querySelector(".picture-loader__tools-button--crop");
var fillToggle = document.querySelector(".picture-loader__tools-button--fill");
var contrastToggle = document.querySelector(".picture-loader__tools-button--contrast");

var disactivation = function() {
  cropToggle.classList.remove("picture-loader__tools-button--active");
  fillToggle.classList.remove("picture-loader__tools-button--active");
  contrastToggle.classList.remove("picture-loader__tools-button--active");

};

cropToggle.addEventListener("click", function (){
  disactivation();
  cropToggle.classList.add("picture-loader__tools-button--active");
});

fillToggle.addEventListener("click", function () {
  disactivation();
  fillToggle.classList.add("picture-loader__tools-button--active");
});

contrastToggle.addEventListener("click", function () {
  disactivation();
  contrastToggle.classList.add("picture-loader__tools-button--active");

})
