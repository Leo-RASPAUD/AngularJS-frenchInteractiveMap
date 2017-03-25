(function () {
    'use strict';
    angular.module('app.home').controller('HomeController', HomeController);

    HomeController.$inject = ['uiGmapGoogleMapApi'];
    function HomeController(uiGmapGoogleMapApi) {
        const vm = this;

        const init = () => {
            const toulouseCoordinates = {
                latitude:  43.6047,
                longitude : 1.442
            };
            vm.map = { center: toulouseCoordinates, zoom: 8 };
        };

        init();

        uiGmapGoogleMapApi.then(function(maps) {
            console.log(maps);
        });

        /*
         ****************************************
         *          PRIVATE FUNCTIONS           *
         ****************************************
         */
    }
})();
