
	var places = 	[{name: "Hello World!",   lat: 42.68, lng: 23.31, zoom: 14,
        info: "first thing" },
								{name: "Flow rider", lat: 28.19, lng:-82.74, zoom: 17,  info: "second thing\nghjgjhgjhgjhgjhgjhgjhgjhgjgjghjhgjhgjhg"  },
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
                                {name: "Lon Don", lat:14 , lng:29.418 },
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
  

var lastClick = null;

  window.onload=function(){
            $("#info").html(places[0].info);

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
        $("#lat").html(clickLatLng.lat);
        $("#lng").html(clickLatLng.lng);
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
        newDiv.info= places[i].info;




        newDiv.onclick = function(x) {
            // Closure here is like variable scoping, but only for a function
            return function(){
                map.panTo({
                    lat: this.lat,
                    lng: this.lng
                });
      


                  // console.log(lastClick);
                lastClick = x;


// Swapping div element contents
                $("#next-info").html(this.info).addClass("pt-page-moveFromRightFade");
                $("#info").addClass("pt-page-moveToLeftFade").on("webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend", function (){
                        console.log("hello");

                        $("#info").html($("#next-info").html());
                        $("#next-info").removeClass("pt-page-moveFromRightFade");
                        $("#info").removeClass("pt-page-moveToLeftFade");
                });
            };
            //          alert(this.lat.toString() + " " + this.lng.toString());
        } (i);


        story.appendChild(newDiv);
    }
};




// Here is a basic code example using HTML5 geolocation to get the user's position. It then calls nearestcity() and calculates the distance (km) from the location to each city. I passed on using the Haversine formulae and instead used the simpler Pythagoras formulae and an equirectangular projection to adjust for the curvature in longitude lines.


// <script>
// // Get User's Coordinate from their Browser
//     window.onload = function () {
//         // HTML5/W3C Geolocation
//         if ( navigator.geolocation )
//         {
//             navigator.geolocation.getCurrentPosition( UserLocation );
//         }
//         // Default to Washington, DC
//         else
//             NearestCity( 38.8951, -77.0367 );
//     }

//     // Callback function for asynchronous call to HTML5 geolocation
//     function UserLocation( position )
//     {
//         NearestCity( position.coords.latitude, position.coords.longitude );
//     }


//     // Convert Degress to Radians
//     function Deg2Rad( deg ) {
//        return deg * Math.PI / 180;
//     }

//     function PythagorasEquirectangular( lat1, lon1, lat2, lon2 )
//     {
//     lat1 = Deg2Rad(lat1);
//     lat2 = Deg2Rad(lat2);
//     lon1 = Deg2Rad(lon1);
//     lon2 = Deg2Rad(lon2);
//     var R = 6371; // km
//     var x = (lon2-lon1) * Math.cos((lat1+lat2)/2);
//     var y = (lat2-lat1);
//     var d = Math.sqrt(x*x + y*y) * R;
//     return d;
//     }

//     var lat=20; // user's latitude
//     var lon=40; // user's longitude

//     var cities= [
//     ["city1", 10, 50, "blah" ],
//     ["city2", 40, 60, "blah" ],
//     ["city3", 25, 10, "blah" ],
//     ["city4", 5,  80, "blah" ]
//     ];

//     function NearestCity( latitude, longitude )
//     {
//         var mindif=99999;
//         var closest;

//         for (index = 0; index < cities.length; ++index) {
//             var dif =  PythagorasEquirectangular( lat, lon, cities[ index ][ 1 ], cities[ index ][ 2 ] );
//             if ( dif < mindif )
//             {
//                 closest=index;
//                 mindif = dif;
//             }
//         }

//         // echo the nearest city
//         alert( cities[ closest ] );
//     }
// </script>







