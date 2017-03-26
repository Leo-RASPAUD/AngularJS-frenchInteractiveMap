(function () {
    'use strict';
    angular.module('app').config(config);

    config.$inject = ['uiGmapGoogleMapApiProvider', '$compileProvider'];
    function config(uiGmapGoogleMapApiProvider, $compileProvider) {

        $compileProvider.preAssignBindingsEnabled(true);

        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyBxYQMimO5m0wM9vxUUkvZsqWW_jmATB2c',
            v: '3.28',
            libraries: 'geometry,visualization'
        });
    }
})();
