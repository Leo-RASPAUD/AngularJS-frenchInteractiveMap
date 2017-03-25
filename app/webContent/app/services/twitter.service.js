(function () {
    'use strict';
    angular.module('app').service('twitterService', twitterService);

    twitterService.$inject = ['$http'];
    function twitterService($http) {
        const vm = this;
        vm.searchMeteoTweets = searchMeteoTweets;

        /**
         * @name app.service:twitterService#showFilterInput
         */
        function searchMeteoTweets(city) {
            return $http.get(`/getMeteoTweets?city=${city}`);
        }


        /*
         ****************************************
         *          PRIVATE FUNCTIONS           *
         ****************************************
         */


    }
})();
