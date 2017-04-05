var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = ('<img width=100px class="dancer" src="/Users/student/code/hrsf75-subclass-dance-party/src/Images/bernie_face.png">')

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
// makeDancer.prototype.setPosition = function(top, left) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };
makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this)
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
   // this.$node.toggle();
};
