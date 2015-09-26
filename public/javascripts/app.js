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
    
    .when('/write', {
      templateUrl: 'views/write.html',
      controller:  'writeController',
      controllerAs: 'write'
    })
    .otherwise({
      redirectTo: '/write'
    });
}
