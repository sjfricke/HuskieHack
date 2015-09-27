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
    .when('/write', {
      templateUrl: 'views/write.html',
      controller:  'writeController',
      controllerAs: 'write'
    })
    .otherwise({
      redirectTo: '/calibrate'
    });
}
