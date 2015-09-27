(function() {
  'use strict';

  angular.module('writeModule')
  .controller('playController', function($scope, $timeout) {
      var vm = this;
      
     
     var synth = new Tone.SimpleSynth().toMaster();
     vm.tone1 = true;
     var tone = 1;  
     var tipPosition;
     var wait = true;
     var gestureWait = true;
     var newTone = false;
      
Leap.loop({enableGestures: true},function(frame){
$scope.$apply(function() {
   
    var interactionBox = frame.interactionBox;
   
    var controller = new Leap.Controller();    
    controller.on('gesture', function(gesture){
        console.log("gesture");
        if (gesture.type == 'circle' && gestureWait){
                var toneString = 'tone'+tone;
                vm[toneString] = false;                        
                tone++;     
                if (tone === 13){tone = 1;}
                toneString = 'tone'+tone;
                vm[toneString] = true;
                gestureWait = false;
                newTone = true;
                $timeout(function() {
                    gestureWait = true;
                }, 500);
            }
    });
    
//    var controller = new Leap.Controller();
    controller.on('frame', function(frame){
        
        if(frame.pointables.length > 0){
            for(var i = 0; i < 5; i++){
                
                if (frame.pointables[i].tipVelocity[1] < -200 && wait){
                    var x = interactionBox.normalizePoint(frame.pointables[i].tipPosition, true)[0];
                        
                       if (x <= .11){         
                           synth.triggerAttackRelease("C4", "8n"); 
                       } else if ( x <= .16) {   
                            synth.triggerAttackRelease("C#4", "8n");
                       } else if ( x <= .26) {
                            synth.triggerAttackRelease("D4", "8n");
                       } else if ( x <= .31) {
                            synth.triggerAttackRelease("D#4", "8n");                            
                       } else if ( x <= .41) {
                            synth.triggerAttackRelease("E4", "8n");                            
                       } else if ( x <= .51) {
                            synth.triggerAttackRelease("F4", "8n");                            
                       } else if ( x <= .56) {
                            synth.triggerAttackRelease("F#4", "8n");
                       } else if ( x <= .66) {
                            synth.triggerAttackRelease("G4", "8n");
                       } else if ( x <= .71) {
                            synth.triggerAttackRelease("G#4", "8n");
                       } else if ( x <= .81) {
                            synth.triggerAttackRelease("A4", "8n");

                       } else if ( x <= .86) {
                            synth.triggerAttackRelease("A#4", "8n");

                       } else {
                            synth.triggerAttackRelease("B4", "8n");

                       }
                    wait = false;
                    $timeout(function() {
                        wait = true;

                    }, 150);
                    
                       
                }
            }
            
         if (newTone){
            switch(tone){
                case 1:
                    synth = new Tone.AMSynth().toMaster();
                    setTone();
                    break;
                case 2:
                    synth = new Tone.DrumSynth().toMaster();
                    setTone();
                    break;
                case 3:
                    synth = new Tone.DuoSynth().toMaster();
                    setTone();
                    break;
                case 4:
                    synth = new Tone.Instrument().toMaster();
                    setTone();
                    break;
                case 5:
                    synth = new Tone.MonoSynth().toMaster();
                    setTone();
                    break;
                case 6:
                    synth = new Tone.PolySynth().toMaster();
                    setTone();
                    break;
                case 7:
                    synth = new Tone.Sampler().toMaster();
                    setTone();
                    break;
                case 8:
                    synth = new Tone.SimpleSynth().toMaster();
                    setTone();
                    break;
                case 9:
                    synth = new Tone.FMSynth().toMaster();
                    setTone();
                    break;
                case 10:
                    synth = new Tone.PluckSynth().toMaster();
                    setTone();
                    break;
                case 11:
                    synth = new Tone.SimpleFM().toMaster();
                    setTone();
                    break;
                case 12:
                    synth = new Tone.NoiceSynth().toMaster();
                    setTone();
                    break;                             
            }
         }
            
//          if(frame.pointables.length > 5){  
//            if (frame.pointables[5].tipVelocity[1] < -400){setTone1();}
//            if (frame.pointables[6].tipVelocity[1] < -400){setTone2();}
//            if (frame.pointables[7].tipVelocity[1] < -400){setTone3();}
//            if (frame.pointables[8].tipVelocity[1] < -400){setTone4();}
//          }
                    
               
            
            
        }
    });
    controller.connect();


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
      
function setTone(){
    wait = false;
    newTone = false;
    $timeout(function() {
        wait = true;
    }, 500);
}




  });

})();