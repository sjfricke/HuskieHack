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
     vm.volume = 0;
     var volumeWait = true;
      
Leap.loop({enableGestures: true},function(frame){
$scope.$apply(function() {
    
   
    var interactionBox = frame.interactionBox;
   
      
    if(frame.valid && frame.gestures.length > 0  && gestureWait){
//                console.log(frame.gestures[0]);
                 if (frame.gestures[0].type == 'swipe'){
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
            }
        
       
   

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
            
             setTone2();
         }
        
            if(frame.hands.length > 1 && volumeWait){
                if(frame.hands[1].pinchStrength > .95){
                    vm.volume += 5;
                    if (vm.volume === 25) { vm.volume = 20; }
                    synth.chain(new Tone.Volume(vm.volume), Tone.Master);
                    console.log("upp!");
                    volumeWait = false;
                    $timeout(function() {
                            volumeWait = true;
                        }, 1000);
                    
                }
                if(frame.hands[0].pinchStrength > .95){
                    vm.volume = 0;
                    setTone2();
                    console.log("DOWN!");
                    volumeWait = false;
                    $timeout(function() {
                            volumeWait = true;
                        }, 1000);
                }
                
            }   
            


                       
            
            
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
      
function setTone(){
    wait = false;
    newTone = false;
    $timeout(function() {
        wait = true;
    }, 500);
}

      function setTone2(){
             
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
                    synth = new Tone.Monophonic().toMaster();
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
                    synth = new Tone.SimpleAM().toMaster();
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



  });

})();