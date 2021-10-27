var main = function () {
  var input = [];
  var Mover = [];
  // make game of traveling to mars

  var Pos = [random(-100, 60), random(200, -100)];

  keyPressed = function () { input[keyCode] = true; };
  keyReleased = function () { input[keyCode] = false; };

  var system = function () {
    this.mcoords = false;

    if (input[77]) {
      this.mcoords = true;
    } else { this.mcoords = false; }

    if (this.mcoords === true) {
      println("\n\n" + "(" + mouseX + "," + mouseY + ")" + "\n\n\n\n");
    }
    if (input[79]) {
      fill(255, 255, 255);
      rect(width / 2 - 2, height / 2, 4, height);
      rect(width / 4 - 2, height / 2, 4, height);
      rect(width * 0.75 - 2, height / 2, 4, height);
    }
    if (input[82]) {
      Program.restart();
    }
  };

  var vehicle = function (speed, mxspeed) {
    this.brake = true;
    this.position = new PVector(width / 2, height / 2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.maxSpeed = mxspeed;
    this.speed = speed;
    this.draw = function () {
      this.position.x = constrain(this.position.x, 100, 300);
      pushMatrix();
      var angle = this.velocity.heading();
      translate(this.position.x, this.position.y);
      if (this.brake) {
        rotate(angle - 90);
      }
      rotate(angle);
      {
        noStroke();
        fill(79, 79, 79);
        rect(-8, -10, 10, 4, 2);
        rect(-8, 10, 10, 4, 2);
        rect(8, -10, 10, 4, 2);
        rect(8, 10, 10, 4, 2);
        fill(255, 0, 0);
        rect(2, 0, 34, 18, 2);
        rect(0, 0, 20, 20);
        fill(202, 247, 246);
        rect(-8, 0, 4, 14);
        rect(8, 0, 4, 14);
        fill(255, 208, 0, 200);
        rect(17, -7, 3, 3, 1);
        rect(17, 6, 3, 3, 1);
        fill(82, 0, 0, 200);
        rect(-14.5, -7, 2, 2, 1);
        rect(-14.5, 7, 2, 2, 1);
      }
      popMatrix();
    };
    this.applyForce = function (force) {
      this.acceleration.add(force);
    };
    this.applyForce2 = function (force) {
      this.velocity.add(force);
    };
    this.checkEdges = function () {
      if (this.position.x > width) {
        this.position.x = 0;
      }
      if (this.position.x < 0) {
        this.position.x = width;
      }
      if (this.position.y > height) {
        this.position.y = 0;
      }
      if (this.position.y < 0) {
        this.position.y = height;
      }
    };
    this.checkKey = function () {
      var angle = this.velocity.heading();
      // if (input[DOWN]) {
      //     this.brake = true;
      // }
      if (input[RIGHT]) {
        if (this.brake !== true) {
          // this.acceleration.add(this.speed,0);
          var force = this.velocity.get();
          force.rotate(PI);
          this.applyForce(force);
        }
      }
      if (input[LEFT]) {
        if (this.brake !== true) {
          // this.acceleration.add(-this.speed,0);
          var force = this.velocity.get();
          force.rotate(-PI);
          this.applyForce(force);
        }
      }
      if (input[UP]) {
        this.brake = false;
        if (this.speed < this.maxSpeed / 130) {
          this.speed += 0.001;
        }
      }
      if (input[32]) {
        if (this.speed < this.maxSpeed / 200) {
          this.speed += 0.001;
        }
      }
      //println(this.maxSpeed/10 + " " + this.speed);
      if (input[DOWN]) {
        if (this.speed > 0.010) {
          this.speed -= 0.0001;
        }
      }
      if (this.brake === false) {
        var force = new PVector(0, -0.2);
        this.applyForce2(force);
        if (this.velocity.y > 0.001) {
          this.velocity.set(0, 0);
        }
      } else if (this.brake) {
        var force = new PVector(0, this.speed);
        if (this.velocity.y < 0) {
          this.applyForce2(force);
          if (this.velocity.y > 0.001) {
            this.velocity.set(0, 0);
          }
        }
      }
    };
    this.update = function () {
      if (this.brake !== true) {
        this.velocity.add(this.acceleration);
      }
      this.velocity.limit(this.maxSpeed);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    };
    this.run = function () {
      this.draw();
      this.update();
      this.checkKey();
      //this.checkEdges();
    };
  };

  var police = function (speed, mxspeed) {
    this.brake = true;
    this.position = new PVector(width / 2, 242);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.maxSpeed = mxspeed;
    this.speed = speed;
    this.draw = function () {
      this.position.x = constrain(this.position.x, 100, 300);
      pushMatrix();
      var angle = this.velocity.heading();
      translate(this.pos.x, this.pos.y);
      {
        noStroke();
        fill(79, 79, 79);
        rect(-8, -10, 10, 4, 2);
        rect(-8, 10, 10, 4, 2);
        rect(8, -10, 10, 4, 2);
        rect(8, 10, 10, 4, 2);
        fill(30, 0, 255);
        rect(2, 0, 34, 18, 2);
        rect(0, 0, 20, 20);
        fill(202, 247, 246);
        rect(-8, 0, 4, 14);
        rect(8, 0, 4, 14);
        fill(255, 208, 0, 200);
        rect(17, -7, 3, 3, 1);
        rect(17, 6, 3, 3, 1);
        fill(0, 0, 0, 200);
        rect(-14.5, -7, 2, 2, 1);
        rect(-14.5, 7, 2, 2, 1);
      }
      popMatrix();
    };
    this.applyForce = function (force) {
      this.acceleration.add(force);
    };
    this.applyForce2 = function (force) {
      this.velocity.add(force);
    };
    this.checkEdges = function () {
      if (this.position.x > width) {
        this.position.x = 0;
      }
      if (this.position.x < 0) {
        this.position.x = width;
      }
      if (this.position.y > height) {
        this.position.y = 0;
      }
      if (this.position.y < 0) {
        this.position.y = height;
      }
    };
    this.checkKey = function () {
      var angle = this.velocity.heading();
      // if (input[DOWN]) {
      //     this.brake = true;
      // }
      if (input[RIGHT]) {
        if (this.brake !== true) {
          // this.acceleration.add(this.speed,0);
          var force = this.velocity.get();
          force.rotate(PI);
          this.applyForce(force);
        }
      }
      if (input[LEFT]) {
        if (this.brake !== true) {
          // this.acceleration.add(-this.speed,0);
          var force = this.velocity.get();
          force.rotate(-PI);
          this.applyForce(force);
        }
      }
      if (input[UP]) {
        this.brake = false;
      }
      if (input[32]) {
        if (this.speed < this.maxSpeed / 130) {
          this.speed += 0.001;
        }
      }
      //println(this.maxSpeed/10 + " " + this.speed);
      if (input[DOWN]) {
        if (this.speed > 0.001) {
          this.speed -= 0.0001;
        }
      }
      if (this.brake === false) {
        var force = new PVector(0, -0.2);
        this.applyForce2(force);
        if (this.velocity.y > 0.001) {
          this.velocity.set(0, 0);
        }
      } else if (this.brake) {
        var force = new PVector(0, this.speed);
        if (this.velocity.y < 0) {
          this.applyForce2(force);
          if (this.velocity.y > 0.001) {
            this.velocity.set(0, 0);
          }
        }
      }
    };
    this.update = function () {
      if (this.brake !== true) {
        this.velocity.add(this.acceleration);
      }
      this.velocity.limit(this.maxSpeed);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    };
    this.run = function () {
      this.draw();
      //this.update();
      // this.checkKey();
      // this.checkEdges();
    };
  };

  var Car = new vehicle(0.01, 3);
  var Popo = new vehicle(0.01, 3);

  var mover = function (speed, x) {
    this.x = x;
    this.position = new PVector(this.x, random(random(-2000, 0), 0));
    this.velocity = new PVector(0, speed);
    this.acceleration = new PVector(0, 0);
    this.draw = function () {
      pushMatrix();
      translate(this.position.x, this.position.y);
      rotate(90);
      {
        noStroke();
        fill(79, 79, 79);
        rect(-8, -10, 10, 4, 2);
        rect(-8, 10, 10, 4, 2);
        rect(8, -10, 10, 4, 2);
        rect(8, 10, 10, 4, 2);
        fill(255, 0, 0);
        rect(2, 0, 34, 18, 2);
        rect(0, 0, 20, 20);
        fill(202, 247, 246);
        rect(-8, 0, 4, 14);
        rect(8, 0, 4, 14);
        fill(255, 208, 0, 200);
        rect(17, -7, 3, 3, 1);
        rect(17, 6, 3, 3, 1);
        fill(82, 0, 0, 200);
        rect(-14.5, -7, 2, 2, 1);
        rect(-14.5, 7, 2, 2, 1);
      }
      popMatrix();
    };
    this.update = function () {
      this.velocity.add(this.acceleration);
      this.velocity.limit(3);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    };
    this.checkEdges = function () {
      if (this.position.y > 420) {
        this.position.y = random(Car.position.y - 600, Car.position.y - 220);
      }
    };
    this.run = function () {
      this.draw();
      this.update();
      this.checkEdges();
    };
  };

  Mover[0] = new mover(random(0.05, 2), 160);
  Mover[1] = new mover(random(0.05, 2), 105);
  Mover[2] = new mover(random(0.05, 2), 240);
  Mover[3] = new mover(random(0.05, 2), 300);
  Mover[4] = new mover(random(0.05, 2), 260);

  var drawGrass = function () {
    // for (var x = 0; x < 40; x++) {
    //     for (var y = 0; y < 40; y++) {
    //         fill(x/2,x/2,x/2);
    //         rect(x*10+5,y*10+5,10,10);
    //     }
    // }
    fill(23, 186, 11);
    rect(200, 200, width, height);
  };

  var lineYs = [];
  var lineYs2 = [];
  for (var i = 0; i < 26; i++) {
    lineYs.push(i * 16);
    lineYs2.push(i * 16);
  }

  draw = function () {
    rectMode(CENTER);
    background(255, 255, 255);
    drawGrass();
    rect(200, 200, 10, 10);
    pushMatrix();
    translate(-Car.position.x + 200, 200);
    fill(235, 235, 235);
    rect(75, 200, 10, 1000);
    rect(325, 200, 10, 1000);
    fill(54, 54, 54);
    // Road
    rect(130, 0, 100, 400);
    rect(270, 0, 100, 400);
    Popo.run();
    pushMatrix();
    translate(70, -200);
    for (var i = 0; i < lineYs.length; i++) {
      fill(255, 247, 0);
      rect(200, lineYs[i], 4, 10);
      if (Car.brake === false) {
        lineYs[i] += Car.speed * 300;
      }
      if (lineYs[i] >= 400) {
        lineYs[i] = 0;
      }
    }
    popMatrix();
    pushMatrix();
    translate(-70, -200);
    for (var i = 0; i < lineYs2.length; i++) {
      fill(255, 247, 0);
      rect(200, lineYs2[i], 4, 10);
      if (Car.brake === false) {
        lineYs2[i] += Car.speed * 300;
      }
      if (lineYs2[i] >= 400) {
        lineYs2[i] = 0;
      }
    }
    popMatrix();
    for (var i = 0; i < Mover.length; i++) {
      Mover[i].position.y += Car.speed * 300;
      Mover[i].run();
    }
    popMatrix();
    pushMatrix();
    translate(-Car.position.x + 200, -Car.position.y + 200);
    Car.run();
    popMatrix();
  };

}

const vroomVroomGame = {
  PROJECT_NAME: 'Vroom Vroom Game',
  PROJECT_LINK: 'https://www.khanacademy.org/computer-programming/vroom-vroom-wip/4983897019580416',
  main,
}