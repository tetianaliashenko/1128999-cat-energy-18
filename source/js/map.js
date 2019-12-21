var coordinates = { lat: 59.938729, lng: 30.323043 };
var coordinatesDesktop = { lat: 59.938757, lng: 30.319367 };
var tabletWidth = 768;
var desktopWidth = 1440;
var isDesktop = window.innerWidth >= desktopWidth;
var isMobile = window.innerWidth < tabletWidth;
var map;
var marker;
var image = 'img/map-pin.png';

function debounce(func, wait, immediate) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: changeCenter(),
    zoom: 17
  });

  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: {
      url: image,
      scaledSize: getMarkerSize()
    }
  });
};

function getMarkerSize() {
  return window.innerWidth < tabletWidth ? new google.maps.Size(47, 53) : new google.maps.Size(85, 91)
}

function setDesktopMarker() {
  if (isMobile) {
    marker.setMap(null);
    marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      icon: {
        url: image,
        scaledSize: getMarkerSize()
      }
    });

    isMobile = window.innerWidth > (tabletWidth - 1);
  }
}

function setMobileMarker() {
  if (!isMobile) {
    marker.setMap(null);
    marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      icon: {
        url: image,
        scaledSize: getMarkerSize()
      }
    });

    isMobile = window.innerWidth < tabletWidth;
  }
}

function changeMarker() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    setDesktopMarker();
    return;
  }

  setMobileMarker();
}

function setDesktopCenter() {
  if (isDesktop) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: coordinatesDesktop,
      zoom: 17
    });
  }
}

function setMobileCenter() {
  if (!isDesktop) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: coordinates,
      zoom: 17
    });
  }
}

function changeCenter() {
  if (window.matchMedia('(min-width: 1440px)').matches) {
    setDesktopCenter();
  }

  setMobileCenter();
}

initMap();
window.addEventListener('resize', debounce(changeMarker, changeCenter, 100));
