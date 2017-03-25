(function () {
    'use strict';
    angular.module('app.home').config(route);

    route.$inject = ['$stateProvider'];
    function route($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/home.html',
                resolve: {
                    userInformation: getUserInformation,
                    userWeather: getUserWeather,
                    googleMap: getGoogleMap,
                    biggestCitiesWeather: getBiggestCitiesWeather
                },
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    }

    getGoogleMap.$inject = ['uiGmapGoogleMapApi'];
    function getGoogleMap(uiGmapGoogleMapApi) {
        return uiGmapGoogleMapApi;
    }

    getUserInformation.$inject = ['$http'];
    function getUserInformation($http) {
        return $http.get('http://ipinfo.io/json');
    }

    getUserWeather.$inject = ['userInformation', 'weatherService'];
    function getUserWeather(userInformation, weatherService) {
        if (userInformation.data && userInformation.data.city) {
            const coordinates = userInformation.data.loc.split(',');
            return weatherService.getWeather(coordinates[0], coordinates[1]);
        } else {
            return 'Sorry but we are not able to retrieve your city information!';
        }
    }

    getBiggestCitiesWeather.$inject = ['weatherService', 'biggestFrenchCities'];
    function getBiggestCitiesWeather(weatherService, biggestFrenchCities) {
        const promises = [];
        promises.push(weatherService.getWeather(biggestFrenchCities[0].latitude, biggestFrenchCities[0].longitude));
        promises.push(weatherService.getWeather(biggestFrenchCities[1].latitude, biggestFrenchCities[1].longitude));
        promises.push(weatherService.getWeather(biggestFrenchCities[2].latitude, biggestFrenchCities[2].longitude));
        promises.push(weatherService.getWeather(biggestFrenchCities[3].latitude, biggestFrenchCities[3].longitude));
        promises.push(weatherService.getWeather(biggestFrenchCities[4].latitude, biggestFrenchCities[4].longitude));
        return Promise.all(promises);
    }

})();
