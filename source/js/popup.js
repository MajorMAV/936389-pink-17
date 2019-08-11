var form = document.querySelector(".app-form");
var errorWindow = document.querySelector(".window--error");
var succesWindow = document.querySelector(".window--succes");
var closeButtons = document.querySelectorAll(".window__button");

document.querySelector(".app-form__button").addEventListener("click", function(evt) {
  if (form.checkValidity()) {
    succesWindow.classList.add("window--is-showed");
  } else {
    errorWindow.classList.add("window--is-showed");
  }
});

for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function(evt) {
    succesWindow.classList.remove("window--is-showed");
    errorWindow.classList.remove("window--is-showed");
  });
}
