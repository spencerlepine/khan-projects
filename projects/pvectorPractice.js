var main = function () {
  var b;
  var ball = function () {
    this.position = new PVector(width / 2, height / 2);
    this.velocity = new PVector(0, 0);
    this.speed = 2;
    //this.acceleration = new PVector(1,1);
  };
  ball.prototype.update = function () {
    var mouse = new PVector(mouseX, mouseY);
    var dir = PVector.sub(mouse, this.position);
    dir.normalize();
    dir.mult(0.2);
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.acceleration.limit(10);
    this.position.add(this.velocity);
  };
  ball.prototype.draw = function () {
    fill(156, 156, 156);
    ellipse(this.position.x, this.position.y, 20, 20);

  };
  ball.prototype.reset = function () {
    // if (this.position.x > width) {
    // this.position.x = 0;
    // }
    // if (this.position.y > height && this.position.y > 0) {
    // this.position.y = random(height);
    // this.position.x = 0;
    // }
  };
  b = new ball();
  draw = function () {
    //background(255);
    b.update();
    b.draw();
    b.reset();
  };
}

const pvectorPractice = {
  PROJECT_NAME: 'PVector Animation',
  PROJECT_LINK: 'https://www.khanacademy.org/computer-programming/pvector-practice/5556020818280448',
  main,
}