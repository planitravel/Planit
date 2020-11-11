// Initialize and add the map
function initMap() {
    // The location of Ottawa
    const ottawa = {lat: 45.344, lng: -74.080 };
    // The map, centered at Rough Ottawa
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: ottawa,
    });
    // The marker, positioned at rough Ottawa
    const marker = new google.maps.Marker({
      position: ottawa,
      map: map,
    });
  }
