
const s = ( p ) => {
    p.setup = function()  {
    canvas = p.createCanvas(400, 400);
    canvas.parent('sketch-holder2')
    canvas.style('display', 'inline-block');
    p.angleMode(p.DEGREES);
  }
  
  p.draw = function()  {
    p.background(0);
    p.translate(200, 200);
    p.rotate(-90);
  
    let hr = p.hour();
    let mn = p.minute();
    let sc = p.second();
  
    p.strokeWeight(8);
    p.stroke("#6fe7dd");
    p.noFill();
    let secondAngle = p.map(sc, 0, 60, 0, 360);
    p.arc(0, 0, 300, 300, 0, secondAngle);
  
    p.stroke("#3490de");
    let minuteAngle = p.map(mn, 0, 60, 0, 360);
    p.arc(0, 0, 280, 280, 0, minuteAngle);
  
    p.stroke("#6639a6");
    let hourAngle = p.map(hr % 12, 0, 12, 0, 360);
    p.arc(0, 0, 260, 260, 0, hourAngle);
  
    p.push();
    p.rotate(secondAngle);
    p.stroke("#6fe7dd");
    p.line(0, 0, 100, 0);
    p.pop();
  
    p.push();
    p.rotate(minuteAngle);
    p.stroke("#3490de");
    p.line(0, 0, 75, 0);
    p.pop();
  
    p.push();
    p.rotate(hourAngle);
    p.stroke("#6639a6");
    p.line(0, 0, 50, 0);
    p.pop();
  
    p.stroke(255);
    p.point(0, 0);
  
    p.fill(255);
    p.noStroke();
    p.text(hr + ':' + mn + ':' + sc, 10, 200);
  }
}
let myp5 = new p5(s);