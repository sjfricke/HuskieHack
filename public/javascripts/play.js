(function() {
  'use strict';

  angular.module('writeModule')
  .controller('playController', function($scope, $timeout) {
      var vm = this;

     var tipPosition;
      
Leap.loop(function(frame){
$scope.$apply(function() {
   
    var interactionBox = frame.interactionBox;
   
    var controller = new Leap.Controller();
    controller.on('frame', function(frame){
        if(frame.pointables.length > 0){
            for(var i = 0; i < 5; i++){
                if (frame.pointables[i].tipVelocity[1] < -200){
                    var synth = new Tone.SimpleSynth().toMaster();
                    var x = interactionBox.normalizePoint(frame.pointables[i].tipPosition, true)[0]
                       if (x <= .10){
                           $timeout(function() {
                            synth.triggerAttackRelease("C4", "8n");
                            }, 1000);
                       } else if ( x <= .16) {
                            $timeout(function() {
                                synth.triggerAttackRelease("B4", "8n");
                            }, 1000);
                       } else if ( x <= .26) {
                            $timeout(function() {
                                synth.triggerAttackRelease("D4", "8n");
                            }, 1000);
                       } else if ( x <= .32) {
                            $timeout(function() {
                                synth.triggerAttackRelease("E4", "8n");
                            }, 1000);
                       } else if ( x <= .42) {
                            $timeout(function() {
                                synth.triggerAttackRelease("F4", "8n");
                            }, 1000);
                       } else if ( x <= .52) {
                            $timeout(function() {
                                synth.triggerAttackRelease("C4", "8n");
                            }, 1000);
                       } else if ( x <= .58) {
                            $timeout(function() {
                                synth.triggerAttackRelease("C4", "8n");
                            }, 1000);
                       } else if ( x <= .68) {
                            $timeout(function() {
                                synth.triggerAttackRelease("C4", "8n");
                            }, 1000);
                       } else if ( x <= .74) {
                            $timeout(function() {
                                synth.triggerAttackRelease("C4", "8n");
                            }, 1000);
                       } else if ( x <= .84) {
                            $timeout(function() {
                                synth.triggerAttackRelease("C4", "8n");
                            }, 1000);
                       } else if ( x <= .90) {
                            $timeout(function() {
                                synth.triggerAttackRelease("C4", "8n");
                            }, 1000);
                       } else {
                            $timeout(function() {
                                synth.triggerAttackRelease("C4", "8n");
                            }, 1000);
                       }
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