var makeHilary = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img width=100px class="dancer" src="http://i26.photobucket.com/albums/c105/007access/HILL/H-YellowJacket.gif">');
  this.setPosition(top, left);
};
makeHilary.prototype = Object.create(makeDancer.prototype);
makeHilary.prototype.constructor = makeHilary;
makeHilary.prototype.step = function() {
  makeDancer.prototype.step.call(this)
}; 