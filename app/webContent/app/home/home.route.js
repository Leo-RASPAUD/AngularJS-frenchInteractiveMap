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
                },
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    }

})();
