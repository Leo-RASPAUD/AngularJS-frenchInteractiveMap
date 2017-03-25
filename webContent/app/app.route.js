(function () {
    'use strict';
    angular.module('app').config(route);

    route.$inject = ['$urlRouterProvider'];
    function route($urlRouterProvider) {
        $urlRouterProvider
            .when('', '/home')
            .otherwise('');
    }
})();
