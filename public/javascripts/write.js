
      (function() {
  'use strict';

  angular.module('writeModule')
  .controller('writeController', function($scope) {
      var vm = this;
      
      var tipPosition;
      var windowPosition;
      var vm = this;
      var leapCoordinates = document.getElementById('lmCoordinates');
      var normalizedCoordinates = document.getElementById('normalizedCoordinates');
      var windowCoordinates = document.getElementById('windowCoordinates');
      var fingers = {};
vm.test = "test";
      
      


   
    Leap.loop(function(frame){  
        var interactionBox = frame.interactionBox;

        if(frame.pointables.length > 0){
            //Leap coordinates
            tipPosition = frame.pointables[1].tipPosition;
            leapCoordinates.innerText = vectorToString(tipPosition,1);

            //Normalized coordinates
            var normalizedPosition = interactionBox.normalizePoint(tipPosition, true);
            normalizedCoordinates.innerText = vectorToString(normalizedPosition,4);

            //Pixel coordinates in current window
            windowPosition = [normalizedPosition[0] * window.innerWidth, 
                                  window.innerHeight - (normalizedPosition[1] * window.innerHeight), 
                                  0];
            windowCoordinates.innerText = vectorToString(windowPosition, 0);        
            
            if(frame.valid && frame.gestures.length > 0){
                frame.gestures.forEach(function(gesture){
                    switch (gesture.type){
                        case "screenTap":
                            console.log("Screen Tap Gesture");
                           document.elementFromPoint(tipPosition[0], tipPosition[1]).trigger("click");
                            break;
                        case "swipe":
                            console.log("Swipe Gesture");
                            break;
                    }
                });
            }
            
            
        }

        frame.hands.forEach(function(hand) {

        var indexFinger = ( fingers[1] || (fingers[1] = new Finger()) );    
        indexFinger.setTransform(windowPosition);

        });
    }).use('screenPosition');
    

      document.elementFromPoint(tipPosition[0], tipPosition[1]).on( "click", function() {
              alert( 'fuck ya' );
            });
    

    var Finger = function() {
      var finger = this;
      var img = document.createElement('img');
      img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/109794/cat_2.png';
      img.style.position = 'absolute';
      img.onload = function () {
        finger.setTransform([window.innerWidth/2,window.innerHeight/2], 0);
        document.body.appendChild(img);
      }

      finger.setTransform = function(position, rotation) {

        img.style.left = position[0] - img.width  / 2 + 'px';
        img.style.top  = position[1] - img.height / 2 + 'px';

        img.style.transform = 'rotate(' + -rotation + 'rad)';

        img.style.webkitTransform = img.style.MozTransform = img.style.msTransform =
        img.style.OTransform = img.style.transform;

      };

    };


    // This allows us to move the cat even whilst in an iFrame.
    Leap.loopController.setBackground(true)

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

      

