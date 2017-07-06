function initMap() {
    var coordinates = {lat: 53.88841, lng: 27.544509};
    var map = new google.maps.Map(document.getElementById('content'), {
        zoom: 17,
        center: coordinates
    });
    var marker = new google.maps.Marker({
        position: coordinates,
        map: map
    });
}