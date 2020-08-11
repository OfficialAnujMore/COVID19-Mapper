function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/cases.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.confirmed;

                if (cases < 255) {
                    color = "rgb(14, 237, 40)";
                }
                else if(cases >255 & cases<1000){
                    color = "rgb(255, 233, 0)";
                }
                else
                {
                    color = `rgb(${cases},0,0)`;
                }


                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color

                }).setLngLat([longitude, latitude])
                    .addTo(map);
            });




      
        })
}

let interval = 2000;
setInterval(updateMap, interval);