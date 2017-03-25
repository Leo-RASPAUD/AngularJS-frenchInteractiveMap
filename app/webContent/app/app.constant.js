(function () {
    'use strict';
    angular.module('app')
           .constant('toulouseCoordinates', {
               latitude: 43.6047,
               longitude: 1.442
           })
           .constant('biggestFrenchCities', [
               {name: 'Paris', latitude: '48.864716', longitude: '2.349014'},
               {name: 'Marseille', latitude: '43.296482', longitude: '5.369780'},
               {name: 'Lyon', latitude: '45.764043', longitude: '4.835659'},
               {name: 'Toulouse', latitude: '43.604652', longitude: '1.444209'},
               {name: 'Nice', latitude: '43.710173', longitude: '7.261953'}
           ]);
})();

