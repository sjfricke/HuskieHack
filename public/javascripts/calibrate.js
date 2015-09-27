(function() {
  'use strict';

  angular.module('writeModule')
  .controller('calibrateController', function($scope, $location) {
      var vm = this;
      
vm.leapCoordinates = [0,0,0];
vm.normalizedCoordinates = [0,0,0];
vm.caliCounter = 0;
      
Leap.loop(function(frame){
$scope.$apply(function() {
    var interactionBox = frame.interactionBox;
    
    //only grabs if hand shown
    if(frame.pointables.length > 0){
        //grabs pointer finger tip
        var tipPosition = frame.pointables[1].tipPosition;
        vm.leapCoordinates[vm.caliCounter] = vectorToString(tipPosition,1);
                
        //Normalized coordinates
        var normalizedPosition = interactionBox.normalizePoint(tipPosition, true);
        vm.normalizedCoordinates[vm.caliCounter] = vectorToString(normalizedPosition,4);

     
    }
    

});
});

//turns vector into string 
function vectorToString(vector, digits) {
  if (typeof digits === "undefined") {
    digits = 1;
  }
  return "(" + vector[0].toFixed(digits) + ", "
             + vector[1].toFixed(digits) + ", "
             + vector[2].toFixed(digits) + ")";
};

//waits for spacebar to be pressed
window.addEventListener('keydown', function(event) {
    if(event.keyCode === 32) {
        calibrationCounter();
    }
});

//runs if calibration is called
function calibrationCounter() {
   
    //increments and sees if all has been calibrated
    if (vm.caliCounter++ == 2){
        $location.path('/write');
    }
};

  });

})();