(function () {
    'use strict';
    angular.module('app').config(config);

    config.$inject = ['uiGmapGoogleMapApiProvider'];
    function config(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key : 'AIzaSyBxYQMimO5m0wM9vxUUkvZsqWW_jmATB2c',
            v: '3.28',
            libraries: 'weather,geometry,visualization'
        });
    }
})();
