var makeTrump = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.jquery('<img width=100px class="dancer" src="http://trumpotax.com/trumpspin.gif">');
  this.setPosition(top, left);
};
makeTrump.prototype = Object.create(makeDancer.prototype);
makeTrump.prototype.constructor = makeTrump;
makeTrump.prototype.step = function() {
  makeDancer.prototype.step.call(this)
   this.$node.toggle();
};