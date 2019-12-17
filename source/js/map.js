function initMap() {
    var coordinates = {lat: 59.9387165, lng: 30.3208587},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates
        }),

        image = 'img/map-pin.png',
        marker = new google.maps.Marker({
          position: coordinates,
          map: map,
          icon: image
        });
}
