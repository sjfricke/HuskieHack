(function() {
  'use strict';

  angular.module('writeModule')
  .controller('playController', function($scope) {
      var vm = this;

     var tipPosition;
      
Leap.loop(function(frame){
$scope.$apply(function() {
   
  
   
    var controller = new Leap.Controller();
    controller.on('frame', function(frame){
        if(frame.pointables.length > 0){
            for(var i = 0; i < 5; i++){
                if (frame.pointables[i].tipVelocity[1] < -300){
                console.log(i);
                }
            }
        }
    });
    controller.connect();
//    if (frame.pointables.length > 0) {
//      for (var i = 0; i < frame.pointables.length; i++) {
//        tipPosition = frame.pointables[1].tipPosition;
//        var leapCoordinates[i] = vectorToString(tipPosition,1);
//                
//        //Normalized coordinates
//        var normalizedPosition = interactionBox.normalizePoint(tipPosition, true);
//        var normalizedCoordinates[i] = vectorToString(normalizedPosition,4);  
//      }
//        //grabs pointer finger tip
//        
//        
//        
//        console.log(normalizedCoordinates[1]);
//        console.log(normalizedCoordinates[6]);
//    }

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



  });

})();