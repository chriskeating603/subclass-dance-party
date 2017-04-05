// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.$node = $('<img width=100px class="dancer" src="/Users/student/Downloads/200w_d.gif">');
  // console.log(this.setPosition)
  this.step();
  this.setPosition(this.top, this.left);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};
makeDancer.prototype.step = function() {
  // this.step()
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};

makeDancer.prototype.lineUp = function() {
  var styleSettings = {
    left: 0
  }
  this.$node.css(styleSettings);
}

//each time a node is created, it will have this method
//

