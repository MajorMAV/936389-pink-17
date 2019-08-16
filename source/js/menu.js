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

if (typeof ymaps !== "undefined" && ymaps) {
  ymaps.ready(init);
}

function init(){
  var mapInitObject = {
    center: [59.936390, 30.321229],
    zoom: 16
  };
  if (window.innerWidth >= 660 ) {
    mapInitObject = {
      center: [59.936540, 30.321229],
      zoom: 16
    };
  }

  if (window.innerWidth >= 960) {
    mapInitObject = {
      center: [59.936470, 30.321229],
      zoom: 16
    };
  }

  var myMap = new ymaps.Map("map", mapInitObject);

  myPlacemark = new ymaps.Placemark(
    [59.936030, 30.321100]
    , {
      hintContent: "Б.Конюшенная, д. 19/8",
      balloonContent: "Б.Конюшенная, д. 19/8"
    }
    , {
      iconLayout: "default#image",
      iconImageHref: "img/icon-map-marker.svg",
      iconImageSize: [34, 34],
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
