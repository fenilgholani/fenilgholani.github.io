const s2 = ( p ) => {
var n = 0;
var c = 3;

var points = [];

var start = 0;

p.setup = function() {
  canvas = p.createCanvas(400, 400);
  canvas.parent('sketch-holder3');
  canvas.style('display', 'inline-block');
  canvas.style('position', 'static');
  canvas.style('bottom', '410px');
  canvas.style('left', '450px');
  p.angleMode(p.DEGREES);
  p.colorMode(p.HSB);
}

p.draw = function() {
  p.background(0);
  p.translate(p.width / 2, p.height / 2);
  p.rotate(n * 0.3);
  for (var i = 0; i < n; i++) {
    var a = i * 137.5;
    var r = c * p.sqrt(i);
    var x = r * p.cos(a);
    var y = r * p.sin(a);
    var hu = p.sin(start + i * 0.5);
    hu = p.map(hu, -1, 1, 0, 360);
    p.fill(hu, 255, 255);
    p.noStroke();
    p.ellipse(x, y, 4, 4);
  }
  n += 5;
  start += 5;
}
}

let myp7 = new p5(s2);