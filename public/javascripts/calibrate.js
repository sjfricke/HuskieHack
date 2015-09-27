(function() {
  'use strict';

  angular.module('writeModule')
  .controller('calibrateController', function($scope) {
      var vm = this;
      
vm.caliCounter = 1;
      
Leap.loop(function(frame){
$scope.$apply(function() {
    var interactionBox = frame.interactionBox;
    
    //only grabs if hand shown
    if(frame.pointables.length > 0){
        //grabs pointer finger tip
        var tipPosition = frame.pointables[1].tipPosition;
                
        //Normalized coordinates
        var normalizedPosition = interactionBox.normalizePoint(tipPosition, true);
        vm.normalizedCoordinates = vectorToString(normalizedPosition,4);

        //Pixel coordinates in current window
        var windowPosition = [normalizedPosition[0] * window.innerWidth, 
                              window.innerHeight - (normalizedPosition[1] * window.innerHeight), 
                              0];
        vm.windowCoordinates = vectorToString(windowPosition, 0);    
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
   
    vm.caliCounter = vm.caliCounter + 1;
    
};

  });

})();