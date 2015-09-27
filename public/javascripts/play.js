(function() {
  'use strict';

  angular.module('writeModule')
  .controller('playController', function($scope, $timeout) {
      var vm = this;

     var synth = new Tone.SimpleSynth().toMaster();
     var tipPosition;
     var x = [2,2,2,2,2];
     vm.wait = true;
      
Leap.loop(function(frame){
$scope.$apply(function() {
   
    var interactionBox = frame.interactionBox;
   
    var controller = new Leap.Controller();
    controller.on('frame', function(frame){
        if(frame.pointables.length > 0){
            for(var i = 0; i < 5; i++){
                
                if (frame.pointables[i].tipVelocity[1] < -200 && vm.wait){
                    x[i] = interactionBox.normalizePoint(frame.pointables[i].tipPosition, true)[0];
                }
            }
            if (vm.wait) {
                for(var i = 0; i < 5; i++){
                           if (x[i] <= .10){                                                     
    //                           vm.note1 = true; 
                               synth.triggerAttackRelease("C4", "8n"); 
                           } else if ( x[i] <= .16) {                           
    //                            vm.note01 = true;
                                synth.triggerAttackRelease("C#4", "8n");
                           } else if ( x[i] <= .26) {
    //                            vm.note2 = true;
                                synth.triggerAttackRelease("D4", "8n");
                           } else if ( x[i] <= .32) {
    //                            vm.note02 = true;
                                synth.triggerAttackRelease("D#4", "8n");                            
                           } else if ( x[i] <= .42) {
    //                            vm.note3 = true;
                                synth.triggerAttackRelease("E4", "8n");                            
                           } else if ( x[i] <= .52) {
    //                            vm.note4 = true;
                                synth.triggerAttackRelease("F4", "8n");                            
                           } else if ( x[i] <= .58) {
                                synth.triggerAttackRelease("F#4", "8n");
    //                            vm.note03 = true;
                           } else if ( x[i] <= .68) {
                                synth.triggerAttackRelease("G4", "8n");
    //                            vm.note5 = true;
                           } else if ( x[i] <= .74) {
                                synth.triggerAttackRelease("G#4", "8n");
    //                            vm.note04 = true;
                           } else if ( x[i] <= .84) {
                                synth.triggerAttackRelease("A5", "8n");
    //                            vm.note6 = true;
                           } else if ( x[i] <= .90) {
                                synth.triggerAttackRelease("A#5", "8n");
    //                            vm.note05 = true;
                           } else if ( x[i] <= 1) {
                                synth.triggerAttackRelease("B5", "8n");
    //                            vm.note7 = true;
                           }


                }
            }
                    vm.wait = false;
            console.log('false');
                    $timeout(function() {
//                        vm.wait = true;
//                        vm.note1 = false; vm.note2 = false; vm.note3 = false; vm.note4 = false; vm.note5 = false; vm.note6 = false; vm.note7 = false; vm.note01 = false; vm.note02 = false; vm.note03 = false; vm.note04 = false; vm.note05 = false;
                    }, 550);
                    
                
            
            
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