let form = document.querySelector(".app-form");
let errorWindow = document.querySelector(".window--error");
let succesWindow = document.querySelector(".window--succes");
let closeButton = document.querySelector(".window__button");

document.querySelector(".app-form__button").addEventListener("click", function(evt) {
  if (form.checkValidity()) {
    succesWindow.classList.add("window--is-showed");
  } else {
    errorWindow.classList.add("window--is-showed");
  }
});

closeButton.addEventListener("click", function(evt) {
  succesWindow.classList.remove("window--is-showed");
  errorWindow.classList.remove("window--is-showed");
});

// document.querySelector("#write-to-us-button").addEventListener("click", function(evt){
//   evt.preventDefault();
//   modalWindow.classList.add("is-showed");
//   modalWindow.querySelector("input").focus();
// });


// document.querySelector(".close-form-button").addEventListener("click", function(evt){
//   event.preventDefault();
//   document.querySelector(".popap.is-showed").classList.remove("is-showed");
//   modalWindow.classList.remove("modal-error");
// });

