var form = document.querySelector(".app-form");
var errorWindow = document.querySelector(".window--error");
var succesWindow = document.querySelector(".window--succes");
var closeButtons = document.querySelectorAll(".window__button");

document.querySelector(".app-form__button").addEventListener("click", function (evt) {
  // Проверяем валидна ли форма
  if (form.checkValidity()) {

    var url = form.getAttribute("action");
    var method = form.getAttribute("method");

    //Прерывем дальнешее распространение события
    evt.preventDefault();

    try {
      // Создаем запрос
      var requst = new XMLHttpRequest();
      // Инициализируем запрос
      requst.open(method, url, true);
      // Объявляем обработчик изменения состояния запроса
      requst.onreadystatechange = function () {

        if (requst.readyState != 4) return; // (4) Овтет получен
        // Проверяем статус ответа
        if (requst.status != 200) {
          errorWindow.classList.add("window--is-showed");
        } else {
          succesWindow.classList.add("window--is-showed");
        }
      };
      // Отправляем запрос
      requst.send(new FormData(form));
    } catch (e) {
      errorWindow.classList.add("window--is-showed");
    }
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
