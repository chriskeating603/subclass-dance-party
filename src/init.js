$(document).ready(function() {
  window.dancers = []; 

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');


    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
// console.log(window[dancerMakerFunctionName]);
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      (250 * Math.random()) + 250,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
    
    for (var i = 0; i < window.dancers.length - 1; i++) {
      if (Math.sqrt((window.dancers[i].top - dancer.top)**2 + (window.dancers[i].left - dancer.left)**2) < 250) {
        dancer.$node.animate({ "left": "-=50px" }, "slow" ).animate({ "left": "+=50px" }, "slow" );
        window.dancers[i].$node.animate({ "left": "+=50px" }, "slow" ).animate({ "left": "-=50px" }, "slow" );
      }
    }
    $('.dancer').on('mouseenter', function () {
      $(this).animate({
        height: 'toggle',
        width: 'toggle'
      })
      // alert('spinner')
      // (this).toggle();
    });
  });
  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();  
    }
    // var tickMarks = ($('body').height()) / window.dancers.length;
    // var increments = tickMarks;
    // var sortedHeights = window.dancers.sort(function(a,b) {
    //   return a.top - b.top
    // })

    // for(var i = 0; i < sortedHeights.length; i++) {
    //   sortedHeights[i].top.css('height', increments)
    //   increments += tickMarks
    // }
  });
  $('.dancer').on('click', function () {
    $(this).$node.hideDancer()
    // alert('spinner')
    // (this).toggle();
  });
});