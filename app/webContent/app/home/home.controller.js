(function () {
    'use strict';
    angular.module('app.home').controller('HomeController', HomeController);

    HomeController.$inject =
        ['googleMap', '$scope', 'twitterService', 'userWeather', 'weatherService', 'toulouseCoordinates', 'biggestCitiesWeather'];
    function HomeController(googleMap, $scope, twitterService, userWeather, weatherService, toulouseCoordinates, biggestCitiesWeather) {
        const vm = this;
        const init = () => {

            console.log(biggestCitiesWeather);

            vm.userWeather = userWeather.data;
            vm.googleMap = googleMap;

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


        //noinspection JSUnusedLocalSymbols
        function clickMapEvent(map, eventName, event) {
            const mouseEvent = event[0];
            const latitude = mouseEvent.latLng.lat();
            const longitude = mouseEvent.latLng.lng();

            const latitudeLongitude = new vm.googleMap.LatLng(latitude, longitude);
            const geocoder = new vm.googleMap.Geocoder();

            geocoder.geocode({'latLng': latitudeLongitude}, loadWeatherAndTweets);
        }


        /*
         ****************************************
         *          PRIVATE FUNCTIONS           *
         ****************************************
         */

        function loadWeatherAndTweets(results) {
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

                const promises = [];
                promises.push(weatherService.getWeather(coordinates.latitude, coordinates.longitude));
                promises.push(twitterService.searchMeteoTweets(city));
                Promise.all(promises).then(setWeatherAndTweets);
            }
        }

        function setWeatherAndTweets(results) {
            vm.selectedCity.weather = results[0].data;
            vm.tweets = results[1].data.statuses;
            $scope.$apply();
        }
    }
})();

