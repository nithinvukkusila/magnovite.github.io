    var numberOfEls = 200;
    var duration = 2000;
    var midScreenX = window.innerWidth / 2;
    var midScreenY = window.innerHeight / 2;
    var radius = Math.sqrt(midScreenX * midScreenX + midScreenY * midScreenY);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < numberOfEls; i++) {
      var hue = Math.round(360 / numberOfEls * i);
      var angle = Math.random() * Math.PI * 2;
      var el = document.createElement('div');
      el.classList.add('particule');
      el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
      el.style.width = '1px';
      el.style.height = '1px';
      anime({
        targets: el,
        width: ['0.3px', '10px'],
        height: ['0.3px', '10px'],
        left: [midScreenX + 'px', Math.cos(angle) * radius + midScreenX + 'px'],
        top: [midScreenY + 'px', Math.sin(angle) * radius + midScreenY + 'px'],
        delay: (duration / numberOfEls) * i,
        duration: duration,
        easing: 'easeInExpo',
        loop: true
      });
      fragment.appendChild(el);
    }

    document.body.appendChild(fragment);


    /* magnovite typejs */
    
    var resolver = {
      resolve: function resolve(options, callback) {
        // The string to resolve
        var resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
        var combinedOptions = Object.assign({}, options, { resolveString: resolveString });
    
        function getRandomInteger(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
    
        function randomCharacter(characters) {
          return characters[getRandomInteger(0, characters.length - 1)];
        };
    
        function doRandomiserEffect(options, callback) {
          var characters = options.characters;
          var timeout = options.timeout;
          var element = options.element;
          var partialString = options.partialString;
    
          var iterations = options.iterations;
    
          setTimeout(function () {
            if (iterations >= 0) {
              var nextOptions = Object.assign({}, options, { iterations: iterations - 1 });
    
              // Ensures partialString without the random character as the final state.
              if (iterations === 0) {
                element.textContent = partialString;
              } else {
                // Replaces the last character of partialString with a random character
                element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
              }
    
              doRandomiserEffect(nextOptions, callback);
            } else if (typeof callback === "function") {
              callback();
            }
          }, options.timeout);
        };
    
        function doResolverEffect(options, callback) {
          var resolveString = options.resolveString;
          var characters = options.characters;
          var offset = options.offset;
          var partialString = resolveString.substring(0, offset);
          var combinedOptions = Object.assign({}, options, { partialString: partialString });
    
          doRandomiserEffect(combinedOptions, function () {
            var nextOptions = Object.assign({}, options, { offset: offset + 1 });
    
            if (offset <= resolveString.length) {
              doResolverEffect(nextOptions, callback);
            } else if (typeof callback === "function") {
              callback();
            }
          });
        };
    
        doResolverEffect(combinedOptions, callback);
      }
    
    
      /* Some GLaDOS quotes from Portal 2 chapter 9: The Part Where He Kills You
         * Source: http://theportalwiki.com/wiki/GLaDOS_voice_lines#Chapter_9:_The_Part_Where_He_Kills_You
         */ };
    var strings = ['"GOLD EDITION"'];
    
    var counter = 0;
    
    var options = {
      // Initial position
      offset: 0,
      // Timeout between each random character
      timeout: 0,
      // Number of random characters to show
      iterations: 10,
      // Random characters to pick from
      characters: ['A', 'B', 'C', 'D', 'I', 'H', 'G', 'F', 'E', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'W', 'X', 'Y'],
      // String to resolve
      resolveString: strings[counter],
      // The element
      element: document.querySelector('[data-target-resolver]')
    
    
      // Callback function when resolve completes
    };function callback() {
      setTimeout(function () {
        counter++;
    
        if (counter >= strings.length) {
          counter = 0;
        }
    
        var nextOptions = Object.assign({}, options, { resolveString: strings[counter] });
        resolver.resolve(nextOptions, callback);
      }, 9000);
    }
    
    resolver.resolve(options, callback);



/* count down */

(function() {
  angular.module('app', []).directive('countdown', [
    'Util',
    '$interval',
    function(Util,
    $interval) {
      return {
        restrict: 'A',
        scope: {
          date: '@'
        },
        link: function(scope,
    element) {
          var future;
          future = new Date(scope.date);
          $interval(function() {
            var diff;
            diff = Math.floor((future.getTime() - new Date().getTime()) / 1000);
            return element.text(Util.dhms(diff));
          },
    1000);
        }
      };
    }
  ]).factory('Util', [
    function() {
      return {
        dhms: function(t) {
          var days,
    hours,
    minutes,
    seconds;
          days = Math.floor(t / 86400);
          t -= days * 86400;
          hours = Math.floor(t / 3600) % 24;
          t -= hours * 3600;
          minutes = Math.floor(t / 60) % 60;
          t -= minutes * 60;
          seconds = t % 60;
          return [days + 'd',
    hours + 'h',
    minutes + 'm',
    seconds + 's'].join(' ');
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLEtBQWYsRUFBc0IsRUFBdEIsQ0FFQSxDQUFDLFNBRkQsQ0FFVyxXQUZYLEVBRXdCO0lBQUMsTUFBRDtJQUFTLFdBQVQ7SUFBc0IsUUFBQSxDQUFDLElBQUQ7SUFBTyxTQUFQLENBQUE7YUFDNUM7UUFBQSxRQUFBLEVBQVUsR0FBVjtRQUNBLEtBQUEsRUFDRTtVQUFBLElBQUEsRUFBTTtRQUFOLENBRkY7UUFHQSxJQUFBLEVBQU0sUUFBQSxDQUFDLEtBQUQ7SUFBUSxPQUFSLENBQUE7QUFDSixjQUFBO1VBQUEsTUFBQSxHQUFTLElBQUksSUFBSixDQUFTLEtBQUssQ0FBQyxJQUFmO1VBQ1QsU0FBQSxDQUFVLFFBQUEsQ0FBQSxDQUFBO0FBQ1IsZ0JBQUE7WUFBQSxJQUFBLEdBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFQLENBQUEsQ0FBQSxHQUFtQixJQUFJLElBQUosQ0FBQSxDQUFVLENBQUMsT0FBWCxDQUFBLENBQXBCLENBQUEsR0FBNEMsSUFBdkQ7bUJBQ1AsT0FBTyxDQUFDLElBQVIsQ0FBYyxJQUFJLENBQUMsSUFBTCxDQUFVLElBQVYsQ0FBZDtVQUZRLENBQVY7SUFHRSxJQUhGO1FBRkk7TUFITjtJQUQ0QyxDQUF0QjtHQUZ4QixDQWVBLENBQUMsT0FmRCxDQWVTLE1BZlQsRUFlaUI7SUFBRSxRQUFBLENBQUEsQ0FBQTthQUNqQjtRQUNFLElBQUEsRUFBTSxRQUFBLENBQUMsQ0FBRCxDQUFBO0FBQ0osY0FBQSxJQUFBO0lBQUEsS0FBQTtJQUFBLE9BQUE7SUFBQTtVQUFBLElBQUEsR0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLENBQUEsR0FBSSxLQUFmO1VBQ1AsQ0FBQSxJQUFLLElBQUEsR0FBTztVQUNaLEtBQUEsR0FBUSxJQUFJLENBQUMsS0FBTCxDQUFXLENBQUEsR0FBSSxJQUFmLENBQUEsR0FBdUI7VUFDL0IsQ0FBQSxJQUFLLEtBQUEsR0FBUTtVQUNiLE9BQUEsR0FBVSxJQUFJLENBQUMsS0FBTCxDQUFXLENBQUEsR0FBSSxFQUFmLENBQUEsR0FBcUI7VUFDL0IsQ0FBQSxJQUFLLE9BQUEsR0FBVTtVQUNmLE9BQUEsR0FBVSxDQUFBLEdBQUk7aUJBQ2QsQ0FBRSxJQUFBLEdBQU8sR0FBVDtJQUFjLEtBQUEsR0FBUSxHQUF0QjtJQUEyQixPQUFBLEdBQVUsR0FBckM7SUFBMEMsT0FBQSxHQUFVLEdBQXBELENBQXlELENBQUMsSUFBMUQsQ0FBK0QsR0FBL0Q7UUFSSTtNQURSO0lBRGlCLENBQUY7R0FmakI7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhcHAnLCBbXVxuXG4uZGlyZWN0aXZlICdjb3VudGRvd24nLCBbJ1V0aWwnLCAnJGludGVydmFsJywgKFV0aWwsICRpbnRlcnZhbCkgLT5cbiAgcmVzdHJpY3Q6ICdBJ1xuICBzY29wZTpcbiAgICBkYXRlOiAnQCdcbiAgbGluazogKHNjb3BlLCBlbGVtZW50KSAtPiAgICBcbiAgICBmdXR1cmUgPSBuZXcgRGF0ZSBzY29wZS5kYXRlXG4gICAgJGludGVydmFsIC0+XG4gICAgICBkaWZmID0gTWF0aC5mbG9vciAoZnV0dXJlLmdldFRpbWUoKSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAvIDEwMDBcbiAgICAgIGVsZW1lbnQudGV4dCAgVXRpbC5kaG1zIGRpZmZcbiAgICAsIDEwMDBcbiAgICByZXR1cm5cbl1cblxuLmZhY3RvcnkgJ1V0aWwnLCBbIC0+XG4gIHtcbiAgICBkaG1zOiAodCkgLT5cbiAgICAgIGRheXMgPSBNYXRoLmZsb29yIHQgLyA4NjQwMFxuICAgICAgdCAtPSBkYXlzICogODY0MDBcbiAgICAgIGhvdXJzID0gTWF0aC5mbG9vcih0IC8gMzYwMCkgJSAyNFxuICAgICAgdCAtPSBob3VycyAqIDM2MDBcbiAgICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKHQgLyA2MCkgJSA2MFxuICAgICAgdCAtPSBtaW51dGVzICogNjBcbiAgICAgIHNlY29uZHMgPSB0ICUgNjBcbiAgICAgIFsgZGF5cyArICdkJywgaG91cnMgKyAnaCcsIG1pbnV0ZXMgKyAnbScsIHNlY29uZHMgKyAncycgXS5qb2luICcgJ1xuICB9XG5dIl19
//# sourceURL=coffeescript


/* onmouse move*/

// var windowWidth = $(window).width();

// $('.page-container').mousemove(function(event){
//   var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
//   var moveY = (($(window).height() / 2) - event.pageY) * 0.1;
//   $('.page-back').css('margin-left', moveX + 'px');
//   $('.page-back').css('margin-top', moveY + 'px');
//   $('.page-front').css('margin-left', -moveX + 'px');
//   $('.page-front').css('margin-top', -moveY + 'px');
// });



// timer


var countdown = document.querySelector('.countdown');



// Update every second
var x = setInterval( function() {
  // Set Launch Date (ms)
var launchDate = new Date(' 28 February 2019 ,13:00:00').getTime();
  // Get todays date and time (ms)
  var now = new Date().getTime();

  // Distance from now and the launch date (ms)
  var distance = launchDate - now;

  // Time calculation
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
  <div>${days}<span>Days</span></div> 
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;

  // If launch date is reached
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);