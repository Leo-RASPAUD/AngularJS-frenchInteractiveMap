(function () {
    'use strict';
    angular.module('app').service('twitterService', twitterService);

    twitterService.$inject = ['$http'];
    function twitterService($http) {
        const vm = this;
        vm.searchMeteoTweets = searchMeteoTweets;

        function searchMeteoTweets(city) {
            return $http.get(`/getMeteoTweets?city=${city}`);
        }
    }
})();
