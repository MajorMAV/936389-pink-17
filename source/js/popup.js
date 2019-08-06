let form = document.querySelector(".app-form");
let errorWindow = document.querySelector(".window--error");
let succesWindow = document.querySelector(".window--succes");
let closeButtons = document.querySelectorAll(".window__button");

document.querySelector(".app-form__button").addEventListener("click", function(evt) {
  if (form.checkValidity()) {
    succesWindow.classList.add("window--is-showed");
  } else {
    errorWindow.classList.add("window--is-showed");
  }
});

for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function(evt) {
    succesWindow.classList.remove("window--is-showed");
    errorWindow.classList.remove("window--is-showed");
  });
}
