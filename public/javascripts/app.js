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
    
    .when('/play', {
      templateUrl: 'views/play.html',
      controller:  'playController',
      controllerAs: 'play'
    })
    .otherwise({
      redirectTo: '/play'
    });
}
