(function () {
    'use strict';
    angular.module('app').directive('card', card);
    function card() {
        return {
            bindToController: true,
            controller: 'CardController',
            controllerAs: 'vm',
            restrict: 'EA',
            transclude: true,
            templateUrl: 'app/directives/card/card.template.html',
            scope: {
                city: '='
            }
        };
    }
})();