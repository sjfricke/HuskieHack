(function() {
  'use strict';

  angular.module('writeModule')
  .controller('calibrateController', function($scope) {
      var vm = this;
      
vm.caliCounter = 1;
      
Leap.loop(function(frame){
    $scope.$apply(function() {
    var interactionBox = frame.interactionBox;
    

});
});

function vectorToString(vector, digits) {
  if (typeof digits === "undefined") {
    digits = 1;
  }
  return "(" + vector[0].toFixed(digits) + ", "
             + vector[1].toFixed(digits) + ", "
             + vector[2].toFixed(digits) + ")";
};

window.addEventListener('keydown', function(event) {
    if(event.keyCode === 32) {
        calibrationCounter();
    }
});
function calibrationCounter() {
   
    vm.caliCounter = vm.caliCounter + 1;
    
};

  });

})();