(function() {
  'use strict';

  angular.module('writeModule')
  .controller('writeController', function() {
      var vm = this;
    var leapCoordinates = document.getElementById('lmCoordinates');
var normalizedCoordinates = document.getElementById('normalizedCoordinates');
var windowCoordinates = document.getElementById('windowCoordinates');

Leap.loop(function(frame){
    var interactionBox = frame.interactionBox;
    
    if(frame.pointables.length > 0){
        //Leap coordinates
        var tipPosition = frame.pointables[0].tipPosition;
        leapCoordinates.innerText = vectorToString(tipPosition,1);
        
        //Normalized coordinates
        var normalizedPosition = interactionBox.normalizePoint(tipPosition, true);
        normalizedCoordinates.innerText = vectorToString(normalizedPosition,4);

        //Pixel coordinates in current window
        var windowPosition = [normalizedPosition[0] * window.innerWidth, 
                              window.innerHeight - (normalizedPosition[1] * window.innerHeight), 
                              0];
        windowCoordinates.innerText = vectorToString(windowPosition, 0);        
    }
});

function vectorToString(vector, digits) {
  if (typeof digits === "undefined") {
    digits = 1;
  }
  return "(" + vector[0].toFixed(digits) + ", "
             + vector[1].toFixed(digits) + ", "
             + vector[2].toFixed(digits) + ")";
}   

  });

})();