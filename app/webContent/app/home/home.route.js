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
                    userWeather: getUserWeather
                },
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    }

    getUserInformation.$inject = ['$http'];
    function getUserInformation($http) {
        return $http.get('http://ipinfo.io/json');
    }

    getUserWeather.$inject = ['userInformation', 'weatherService'];
    function getUserWeather(userInformation, weatherService) {
        if (userInformation.data && userInformation.data.city) {
            return weatherService.getWeather(userInformation.data.city);
        } else {
            return 'Sorry but we are not able to retrieve your city information!';
        }
    }

})();
