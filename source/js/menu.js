var pageHeader = document.querySelector(".page-header");
var pageTitle = document.querySelector(".page-title");
var appDownload = document.querySelector(".app-download");
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");
pageHeader.classList.remove("page-header--nojs");
if (pageTitle) {
  pageTitle.classList.remove("page-title--nojs");
}
if (appDownload) {
  appDownload.classList.remove("app-download--nojs");
}


navToggle.addEventListener("click", function () {

  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
  if (pageHeader.classList.contains("page-header--closed")) {
    pageHeader.classList.remove("page-header--closed");
    pageHeader.classList.add("page-header--opened")
  } else {
    pageHeader.classList.remove("page-header--opened");
    pageHeader.classList.add("page-header--closed");
  }
  if (appDownload) {
    if (appDownload.classList.contains("app-download--closed")) {
      appDownload.classList.remove("app-download--closed");
      appDownload.classList.add("app-download--opened");
    } else {
      appDownload.classList.remove("app-download--opened");
      appDownload.classList.add("app-download--closed");
    }
  }
  if (pageTitle) {
    if (pageTitle.classList.contains("page-title--closed")) {
      pageTitle.classList.remove("page-title--closed");
      pageTitle.classList.add("page-title--opened");
    } else {
      pageTitle.classList.remove("page-title--opened");
      pageTitle.classList.add("page-title--closed");
    }
  }
});

if (typeof yourvar !== 'undefined' && ymaps) {
  ymaps.ready(init);
}

function init(){
  // Создание карты.

  let myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [59.936367, 30.321229],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 16
  });
  //coordinates: [59.938631, 30.323055
  myPlacemark = new ymaps.Placemark(
    [59.936130, 30.321229]
    , {
      hintContent: "Б.Конюшенная, д. 19/8",
      balloonContent: "Б.Конюшенная, д. 19/8"
    }
    , {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/icon-map-marker.svg',
      // Размеры метки.
      iconImageSize: [34, 34],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      //iconImageOffset: [0, 0]
    }
  );
  myMap.geoObjects.add(myPlacemark);
  var toolBar = document.querySelector(".ymaps-2-1-74-controls__toolbar");
  if (toolBar) {
    toolBar.style.display = "none";
  }
  var goToMaps = document.querySelector(".ymaps-2-1-74-map-copyrights-promo");
  if (goToMaps) {
    goToMaps.style.display = "none";
  }
};
