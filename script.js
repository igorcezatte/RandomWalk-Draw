function setup() {
       frameRate(15);
       width = 875;
       height = 875;
       createCanvas(width, height);
       pos = createVector(width / 2, height / 2);
       prev = pos.copy();
       background(1);
}

function draw() {
       stroke(color(255));
       line(pos.x, pos.y, prev.x, prev.y);
       prev = pos.copy();

       var step = p5.Vector.random2D();
       randomWalkX = random(0, 3);
       randomWalkY = random(0, 3);
       if (Math.floor(randomWalkX) == 0) {
              step.x = -1;
       } else if (Math.floor(randomWalkX) == 1) {
              step.x = 0;
       } else if (Math.floor(randomWalkX) == 2) {
              step.x = 1;
       }
       if (Math.floor(randomWalkY) == 0) {
              step.y = -1;
       } else if (Math.floor(randomWalkY) == 1) {
              step.y = 0;
       } else if (Math.floor(randomWalkY) == 2) {
              step.y = 1;
       }
       step.mult(35);

       pos.add(step)
       if (pos.x > height) {
              pos.x = height
       }
       if (pos.y > width) {
              pos.y = width
       }
       if (pos.x < 0) {
              pos.x = 0
       }
       if (pos.y < 0) {
              pos.y = 0
       }
}
