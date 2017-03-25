(function () {
    'use strict';
    angular.module('app.home').controller('HomeController', HomeController);

    HomeController.$inject = ['uiGmapGoogleMapApi', '$scope', 'twitterService', 'userWeather'];
    function HomeController(uiGmapGoogleMapApi, $scope, twitterService, userWeather) {
        const vm = this;
        const init = () => {

            vm.userWeather = userWeather.data;


            const toulouseCoordinates = {
                latitude: 43.6047,
                longitude: 1.442
            };
            const events = {
                click: clickMapEvent
            };


            vm.map = {
                center: toulouseCoordinates,
                zoom: 8,
                events: events
            };
        };

        init();

        uiGmapGoogleMapApi.then(function (maps) {
            vm.maps = maps;
        });

        // GET WEATHER FROM GMAP
        // GET WEATHER FROM GMAP
        // GET WEATHER FROM GMAP// GET WEATHER FROM GMAP
        // GET WEATHER FROM GMAP
        // GET WEATHER FROM GMAP
        // GET WEATHER FROM GMAP
        // GET WEATHER FROM GMAP


        function clickMapEvent(map, eventName, event) {
            const mouseEvent = event[0];
            const latitude = mouseEvent.latLng.lat();
            const longitude = mouseEvent.latLng.lng();

            const latlng = new vm.maps.LatLng(latitude, longitude);
            const geocoder = new vm.maps.Geocoder();
            geocoder.geocode({'latLng': latlng}, function (results, status) {

                if (results) {
                    const addressComponents = results[0].address_components;
                    const formattedAddress = results[0].formatted_address;
                    const coordinates = {
                        latitude: results[0].geometry.location.lat(),
                        longitude: results[0].geometry.location.lng()
                    };
                    let city;
                    for (const addressComponent of addressComponents) {
                        if (addressComponent.types && addressComponent.types.indexOf('locality') > -1) {
                            city = addressComponent.long_name;
                            break;
                        }
                    }

                    vm.selectedCity = {
                        city: city,
                        address: formattedAddress,
                        coordinates: coordinates
                    };

                    twitterService.searchMeteoTweets(city).then(result => {
                        if (result.data) {
                            vm.tweets = result.data.statuses;
                        }
                    });

                    // Since Google Map's SDK events are fired outside the scope of the Angular application, a call to $apply is necessary to trigger
                    // dirty checking
                    $scope.$apply();

                }

            });
        }


        /*
         ****************************************
         *          PRIVATE FUNCTIONS           *
         ****************************************
         */
    }
})();

