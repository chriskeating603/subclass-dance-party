var makeBernie = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = ('<img width=100px class="dancer" src="http://www.bernbabybern.co/assets/img/dancing-bernie.gif">')
  this.setPosition(top, left)
};
makeBernie.prototype = Object.create(makeDancer.prototype);
makeBernie.prototype.constructor = makeBernie;
makeBernie.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};