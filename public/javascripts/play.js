(function() {
  'use strict';

  angular.module('writeModule')
  .controller('playController', function($scope) {
      var vm = this;

      
      vm.test=test;
      function test(){alert('TEST');}
      
Leap.loop(function(frame){
$scope.$apply(function() {
   
    

});
});


  });

})();