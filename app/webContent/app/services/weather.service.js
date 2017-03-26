(function () {
    'use strict';
    angular.module('app').service('weatherService', weatherService);

    weatherService.$inject = ['$http'];
    function weatherService($http) {
        const vm = this;
        const TOKEN = 'fcfa56ce32dfd331e9f46ff9a9906ee2';
        vm.getWeather = getWeather;
        vm.transformWeatherInformation = transformWeatherInformation;

        function getWeather(latitude, longitude) {
            return $http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${TOKEN}&units=metric`);
        }

        function transformWeatherInformation(data) {
            const object = data;
            const date = new Date(data.dt * 1000);
            const hours = date.getHours();
            const minutes = "0" + date.getMinutes();
            const seconds = "0" + date.getSeconds();
            object.formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
            object.iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            return object;
        }
    }
})();
