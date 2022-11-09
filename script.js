
  var infos ={}
  infos["gramo"] = "Klub Gramofon Godz 21; tel. +48 722 888 888";
  infos["moon"] = "Klub The Moon Godz 21; tel. +48 722 888 888";

 function initMap() {
  var infodiv = document.getElementById("info");
    const myLatLng = { lat: 52.0363009, lng: 23.1427439};
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13.25,
      center: myLatLng,
    });
  
    var gramo = new google.maps.Marker({
      position: {lat: 52.0326696, lng: 23.1182635},
      map,
      title: "Gramofon",
    });

    var moon = new google.maps.Marker({
      position: {lat: 52.0364132, lng:23.1193443},
      map,
      title: "The Moon",
    });

    gramo.addListener("click", function() {
      infodiv.innerHTML = infos["gramo"];
    });

    moon.addListener("click", function() {
      infodiv.innerHTML = infos["moon"];
    });

    var gramolink = document.getElementById("gramo");

   
    gramolink.addEventListener("click", function() {
      map.panTo({lat: 52.0326696, lng: 23.1182635});
      map.setZoom(15);
    });

    var moonlink = document.getElementById("themoon");

  
    moonlink.addEventListener("click", function() {
      map.panTo({lat: 52.0364132, lng: 23.1193443});
      map.setZoom(15);
    });
    
  }
  
  window.initMap = initMap;
  