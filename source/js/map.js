var coordinates = {lat: 59.938729, lng: 30.323043};
var tabletWidth = "768px";

function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: coordinates,
          zoom: 17
        }),

        image = 'img/map-pin.png'

        window.addEventListener('resize', function () {
          if (window.innerWidth < tabletWidth) {
            marker = new google.maps.Marker({
              position: coordinates,
              map: map,
              icon: {
                url: image,
                scaledSize: new google.maps.Size(60, 53)
              }
            });
          }
          else {
            marker = new google.maps.Marker({
              position: coordinates,
              map: map,
              icon: {
                url: image,
                scaledSize: new google.maps.Size(118, 106)
              }
            });
          }
        })
};
