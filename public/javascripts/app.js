(function () {
    'use strict';

    angular
        .module('writeModule', [
            'ngRoute'
        ]);
})();


angular
    .module('writeModule')
    .config(config);

function config($routeProvider) {
    $routeProvider
        $routeProvider
    
    .when('/calibrate', {
      templateUrl: 'views/calibrate.html',
      controller:  'calibrateController',
      controllerAs: 'calibrate'
    })
    .when('/play', {
      templateUrl: 'views/play.html',
      controller:  'playController',
      controllerAs: 'play'
    })
    .otherwise({
      redirectTo: '/play'
    });
}
