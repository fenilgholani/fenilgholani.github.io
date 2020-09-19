const s1 = ( p ) => {


let width = screen.width/2, height = 500;
let stars = [];
let asteroid;
// let rotary = 0;
p.setup = function() {
    canvas = p.createCanvas(width, height);
    canvas.parent('sketch-holder1');
    asteroid = p.loadImage('https://cdn.glitch.com/31b4820d-7ad2-4f03-a28a-7e91c1bfe3f1%2Fasteroid1.png?v=1578075745056');
    for (var i = 0; i < 500; i++) {
        stars.push(new Circle());
    }
}

p.draw = function() {
    p.background(0);
    p.push();
    p.translate(width/2, height/2);
    for (var i = 0; i < stars.length; i++) {
        stars[i].draw();
    }
    p.pop();
    p.text('Press F11', 0, 0);

}

class Circle{
    constructor(){
        this.x = p.random(-width, width);
        this.y = p.random(-height, height);
        this.z = p.random(width);
        this.r = 15;
    }
    draw(){
        p.noStroke();
        p.fill(255);

        let vx = this.x/this.z;
        let vy = this.y/this.z;
        vx *= 100;
        vy *= 100;
        // if(vx > width){
        //     vx = random(width);
        // }
        // if(vy > height){
        //     vy = random(height);
        // }
        this.z  -= 1;
        if(this.z < 1){
            this.z = width;
            this.x = p.random(-p.width, p.width);
            this.y = p.random(-p.height, p.height);
        }
        p.push()
        // translate(this.x, this.y);
        // rotate(rotary);
        // circle(vx, vy, this.r/map(this.z, 0, width, 0, 30));
        p.image(asteroid, vx, vy, this.r/p.map(this.z, 0, width, 0, 10), this.r/p.map(this.z, 0, width, 0, 10) );
        // rotary++;
        p.pop();
    }
}
}
let myp6 = new p5(s1);
