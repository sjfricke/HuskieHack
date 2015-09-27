(function() {
  'use strict';

  angular.module('writeModule')
  .controller('writeController', function($scope) {
      var vm = this;
      
vm.test = "test";
      
Leap.loop(function(frame){
$scope.$apply(function() {
   
    

});
});


  });

})();