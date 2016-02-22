
	var places = 	[{name: "Hello World!",   lat: 42.68, lng: 23.31, zoom: 14,
        info: "hfgjjgyfjmf,migtryhtdfriuyogtfrhgfdghtjykulkjghfddghjkgfd\nghjgjhgjhgjhgjhgjhgjhgjhgjgjghjhgjhgjhg" },
								{name: "Flow rider", lat: 28.19, lng:-82.74, zoom: 17,  info: "tyhjtyhedfvryhtdfriuyogtfrhgfdghtjykulkjghfddghjkgfd\nghjgjhgjhgjhgjhgjhgjhgjhgjgjghjhgjhgjhg"  },
								{name: "Yee Hah",     lat:29.57 , lng:-95.6,  info: "ewrwrwerwerwsdffriuyogtfrhgfdghtjykulkjghfddghjkgfd\nghjgjhgjhgjhgjhgjhgjhgjhgjgjghjhgjhgjhg" },
								{name: "Can'a da", lat:44.01 , lng:-79.418 },
                                {name: "Chillin'", lat:44.01 , lng:-79.418 },
                                {name: "Bang La Desh", lat:44.01 , lng:-79.418 },
                                {name: "Island", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "Bel Chocolates", lat:44.01 , lng:-79.418 },
                                {name: "NL", lat:44.01 , lng:-79.418 },
                                {name: "Sweden", lat:44.01 , lng:-79.418 },
                                {name: "Mos Cow", lat:44.01 , lng:-79.418 },
                                {name: "In De a", lat:44.01 , lng:-79.418 },
                                {name: "TH", lat:44.01 , lng:-79.418 },
                                {name: "Dub Lin", lat:44.01 , lng:-79.418 },
                                {name: "Galway", lat:44.01 , lng:-79.418 },
                                {name: "Cavan", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:144.01 , lng:29.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "SP", lat:44.01 , lng:-79.418 },
                                {name: "FR", lat:44.01 , lng:-79.418 },
                                {name: "VA",   lat:53.57 , lng:-2.44 }];
  window.onload=function(){

    var myLatLng =  {lat: 42.397, lng: 23.644}; 
    var myLatLng2 = {lat: 35.427, lng: 136.644};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 6
    });


 // also center_changed
    // map also has     panTo(latlng:  and setCenter(latlng:
    map.addListener('mousemove', function(data) {
        var clickLatLng = {
            lat: data.latLng.lat(),
            lng: data.latLng.lng()
        };
        document.getElementById("lat").innerHTML = clickLatLng.lat;
        document.getElementById("lng").innerHTML = clickLatLng.lng;
        console.log(data.latLng.lat());
    });
    //var marker
    //    map.addListener('mousemove', function(data){
    //        console.log(data);});
    var image = 'images/plane.png';
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        animation: google.maps.Animation.DROP,
        title: 'Hello World!',
        icon: image
    });
    var infowindow = new google.maps.InfoWindow({
        content: "some cool info"
    });
    marker.addListener("click", function(data) {
        infowindow.open(map, marker);
        map.panTo(myLatLng2);
    });
    // marker also has setVisible
    var story = document.getElementById("story");
    for (var i = 0; i < places.length; i++) {
        console.log(places[i]);
        var newDiv = document.createElement("li");



        newDiv.innerHTML = places[i].name;
        newDiv.lat = places[i].lat;
        newDiv.lng = places[i].lng;
        newDiv.onclick = function() {
            map.panTo({
                lat: this.lat,
                lng: this.lng
            });
            //          alert(this.lat.toString() + " " + this.lng.toString());
        }
        story.appendChild(newDiv);
    }
};

