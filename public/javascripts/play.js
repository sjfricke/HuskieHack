(function() {
  'use strict';

  angular.module('writeModule')
  .controller('playController', function($scope, $timeout) {
      var vm = this;
        
     var synth = new Tone.SimpleSynth().toMaster(); //default toneJS
     vm.tone1 = true; //default
     var tone = 1; //default
     var tipPosition; 
     var newTone = false;
     vm.volume = 0; //default
     
    //wait booleans for various methods
     var wait = true;
     var gestureWait = true;  
     var volumeWait = true;
      
//calls and runs main loop of leap      
Leap.loop({enableGestures: true},function(frame){
//applies all changes to DOM    
$scope.$apply(function() {    
   
    var interactionBox = frame.interactionBox;
   
    //grabs gesture if one is preformed   
    if(frame.valid && frame.gestures.length > 0  && gestureWait){
         if (frame.gestures[0].type == 'swipe'){
                var toneString = 'tone'+tone;
                vm[toneString] = false;                        
                tone++;     
                
                if (tone === 13){tone = 1;}
                
                toneString = 'tone'+tone;
                vm[toneString] = true;
                
                gestureWait = false;
                newTone = true;
                
                //500 Millisecond wait to look for gesture again
                $timeout(function() {
                    gestureWait = true;
                }, 500);
            }
        }
        
        //runs if fingers are present
        if(frame.pointables.length > 0){
            //only first hand
            for(var i = 0; i < 5; i++){
                
                //calls if downward movement by the finger
                //the more negative the faster the finger needs to be
                if (frame.pointables[i].tipVelocity[1] < -200 && wait){
                    var x = interactionBox.normalizePoint(frame.pointables[i].tipPosition, true)[0];
                        
                       //sets key board from 0 to 1 and divids its by where in x axis the finger
                       //that moved is, roughly equally seperated
                    
                       //each calls the not to be played, turns indecator a color and then calls a wait function
                       if (x <= .11){         
                           synth.triggerAttackRelease("C4", "8n"); 
                           document.getElementById('note1').style.backgroundColor = "red";
                           playNote('note1');
                       } else if ( x <= .16) {   
                           synth.triggerAttackRelease("C#4", "8n");
                           document.getElementById('note01').style.backgroundColor = "red";
                           playNote('note01');
                       } else if ( x <= .26) {
                           synth.triggerAttackRelease("D4", "8n");
                           document.getElementById('note2').style.backgroundColor = "red";
                           playNote('note2');
                       } else if ( x <= .31) {
                           synth.triggerAttackRelease("D#4", "8n");
                           document.getElementById('note02').style.backgroundColor = "red";
                           playNote('note02');
                       } else if ( x <= .41) {
                           synth.triggerAttackRelease("E4", "8n");
                           document.getElementById('note3').style.backgroundColor = "red";
                           playNote('note3');
                       } else if ( x <= .51) {
                            synth.triggerAttackRelease("F4", "8n");
                           document.getElementById('note4').style.backgroundColor = "red";
                           playNote('note4');
                       } else if ( x <= .56) {
                           synth.triggerAttackRelease("F#4", "8n");
                           document.getElementById('note03').style.backgroundColor = "red";
                           playNote('note03');
                       } else if ( x <= .66) {
                           synth.triggerAttackRelease("G4", "8n");
                           document.getElementById('note5').style.backgroundColor = "red";
                           playNote('note5');
                       } else if ( x <= .71) {
                           synth.triggerAttackRelease("G#4", "8n");
                           document.getElementById('note04').style.backgroundColor = "red";
                           playNote('note04');
                       } else if ( x <= .81) {
                           synth.triggerAttackRelease("A4", "8n");
                           document.getElementById('note6').style.backgroundColor = "red";
                           playNote('note6');
                       } else if ( x <= .86) {
                           synth.triggerAttackRelease("A#4", "8n");
                           document.getElementById('note05').style.backgroundColor = "red";
                           playNote('note05');
                       } else {
                           synth.triggerAttackRelease("B4", "8n");
                           document.getElementById('note7').style.backgroundColor = "red";
                           playNote('note7');
                       }               
                    }
                }
            
            
            if (newTone){setTone2();}

            //allows second hand to pinch to raise volume    
            if(frame.hands.length > 1 && volumeWait){
                // raise to be less sensitive and lowers to be more sensitive
                if(frame.hands[1].pinchStrength > .95){
                    vm.volume += 5;
                    //cap at 20 for now
                    if (vm.volume === 25) { vm.volume = 20; }
                    synth.chain(new Tone.Volume(vm.volume), Tone.Master);

                    volumeWait = false;
                    $timeout(function() {
                            volumeWait = true;
                    }, 1000);

            }
            //allows first hand to pinch to reset volume to zero
            if(frame.hands[0].pinchStrength > .95){
                vm.volume = 0;
                //for unknown reason, ToneJS won't descrese volume
                setTone2();

                volumeWait = false;
                $timeout(function() {
                        volumeWait = true;
                }, 1000);
            }
        }         
    } //end of finger call
}); //$scope.$apply
}); //Leap.Loop
      
//takes note and sets wait and then opens it again while turning of indicator      
function playNote(note){
    wait = false;
    $timeout(function() {
        wait = true;
        document.getElementById(note).style.backgroundColor = "";

    }, 150);
}
      
//sets wait and newtone boolean      
function setTone(){
    wait = false;
    newTone = false;
    $timeout(function() {
        wait = true;
    }, 500);
}
      
//sets tone if new to what ever tone is at the momenet
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
            synth = new Tone.FMSynth().toMaster();
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
            synth = new Tone.AMSynth().toMaster();
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

}); //Controller

})();