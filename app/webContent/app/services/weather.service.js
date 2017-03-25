(function () {
    'use strict';
    angular.module('app').service('weatherService', weatherService);

    weatherService.$inject = ['$http'];
    function weatherService($http) {
        const vm = this;
        const TOKEN = 'fcfa56ce32dfd331e9f46ff9a9906ee2';
        vm.getWeather = getWeather;

        /**
         * @name app.service:weatherService#searchMeteoTweets
         */
        function getWeather(latitude, longitude) {
            return $http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${TOKEN}&units=metric`);
        }

        /*
         ****************************************
         *          PRIVATE FUNCTIONS           *
         ****************************************
         */


    }
})();
