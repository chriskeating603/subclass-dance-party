var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.$node = $('<img width=100px class="dancer" src="http://www.bernbabybern.co/assets/img/dancing-bernie.gif">');
  this.step();
  this.setPosition(this.top, this.left);
};
makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};
makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
makeDancer.prototype.lineUp = function() {
  var styleSettings = {
    left: 0
  }
  this.$node.css(styleSettings);
}