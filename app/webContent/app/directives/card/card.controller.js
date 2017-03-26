(/**IIFE*/
    function () {
    'use strict';
    angular.module('app').controller('CardController', CardController);

    CardController.$inject = ['weatherService'];
    function CardController(weatherService) {
        const vm = this;
        const init = () => {
            if (vm.city) {
                vm.city = weatherService.transformWeatherInformation(vm.city);
            }
        };
        init();
    }
})();