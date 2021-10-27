var main = function () {
  // This is a simple space 'simulation' project with Alien and Rocket ships flying around.

  // There are 3 objects, the Attractor (planets), the Alien ship, and the Rocket ship

  // The planets use simulated gravitation pull to attract the ships closer

  var stars = []; // Stars
  var rShips = []; // Rocket Ships
  var aShips = []; // Alien Ships
  var starSize = 4;
  angleMode = "radians";
  // Attractor Object
  var attractor = function (x, y, m, fc1, fc2) {
    this.fc1 = fc1; // Fill Color 1
    this.fc2 = fc2; // Fill Color 2
    this.x = x;
    this.y = y;
    this.position = new PVector(this.x, this.y);
    this.mass = m;
    this.G = 1;
  };
  attractor.prototype.draw = function () {
    ellipseMode(CENTER);
    fill(this.fc1);
    ellipse(this.position.x, this.position.y, this.mass * 4, this.mass * 4);
    fill(this.fc2);
    ellipse(this.position.x + (this.mass * 0.6), this.position.y + (this.mass * 1.0), this.mass * 1.3, this.mass * 1.3);
    ellipse(this.position.x + (this.mass * 0.7), this.position.y - (this.mass * 1.0), this.mass * 1, this.mass * 1);
    ellipse(this.position.x - (this.mass * 0.8), this.position.y + (this.mass * 0.0), this.mass * 2, this.mass * 2);
  };
  attractor.prototype.calcAttraction = function (mover) {

    var force = PVector.sub(this.position, mover.position);

    var distance = force.mag();

    distance = constrain(distance, 10, 60);

    force.normalize();

    var strength = (this.G * this.mass * mover.mass) / (distance * distance);

    force.mult(strength);
    // velocity.add(acceleration);
    return force;
  };

  // Alien Ship Object
  var alienShip = function () {
    this.position = new PVector(random(width), random(height));
    this.velocity = new PVector(random(-1, 1), random(-1, 1));
    this.acceleration = new PVector(0, 0);
    this.mass = 1;
  };
  alienShip.prototype.applyForce = function (force) {
    var t = PVector.div(force, this.mass);
    this.acceleration.add(t);
  };
  alienShip.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.acceleration.limit(7);
    /** Potential checkEdges parameters **/
    // if (this.position.x > 600 || this.position.y > 600) {
    // this.position = new PVector(random(width),random(height));
    // this.acceleration = 0;
    // } else if (this.position.x < -200 || this.position.y < -200) {
    // this.position = new PVector(random(width),random(height));
    // this.acceleration = 0;
    // }
  };
  alienShip.prototype.draw = function () {
    fill(255, 255, 255);
    ellipse(this.position.x, this.position.y + 8, 20, 9);
    fill(114, 232, 200);
    ellipse(this.position.x, this.position.y, 20, 20);
    fill(130, 130, 130);
    ellipse(this.position.x, this.position.y + 6, 43, 10);
    fill(217, 217, 217);
    rect(this.position.x - 3, this.position.y + 5, 6, 2);
  };

  // Rocket Ship Object
  var rocketShip = function () {
    this.position = new PVector(random(width), random(height));
    this.velocity = new PVector(random(-1, 1), random(-1, 1));
    this.acceleration = new PVector(0, 0);
    this.mass = 1.5;
  };
  rocketShip.prototype.applyForce = function (force) {
    var t = PVector.div(force, this.mass);
    this.acceleration.add(t);
  };
  rocketShip.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.acceleration.limit(7);
    /** Potential checkEdges parameters **/
    // if (this.position.x > 600 || this.position.y > 600) {
    // this.position = new PVector(random(width),random(height));
    // this.acceleration = 0;
    // } else if (this.position.x < -200 || this.position.y < -200) {
    // this.position = new PVector(random(width),random(height));
    // this.acceleration = 0;
    // }
  };
  rocketShip.prototype.draw = function () {
    var angle = this.velocity.heading();
    pushMatrix();
    translate(this.position.x, this.position.y);
    rotate(angle);
    // Fins
    fill(255);
    arc(-13, -2, 13, -12, 0, 3);
    arc(-13, 2, 13, 12, 0, 3);
    // Main Shape
    fill(255, 0, 0);
    arc(4, 0, 38, 14, 0, 180);
    arc(4, 1, 38, -15, 0, 180);
    // Window
    fill(161, 253, 255);
    ellipse(10, 0, 9, 9);
    // Line
    fill(115, 0, 0);
    rect(2, -6, 2, 13);
    popMatrix();
  };
  // Loop to make Ship objects
  for (var i = 0; i < 3; i++) {
    aShips[i] = new alienShip();
    rShips[i] = new rocketShip();
  }
  // Attractor objects
  var planet1 = new attractor(width / 2, height / 2, 30, color(207, 39, 101), color(179, 20, 67));
  var planet2 = new attractor(332, 64, 10, color(79, 89, 232), color(47, 45, 163));
  var planet3 = new attractor(100, 371, 18, color(55, 130, 33), color(75, 166, 84));

  draw = function () {
    noStroke();
    background(0);
    // Make a Loop to draw starts
    for (var i = 0; i < 106; i++) {
      fill(255, 255, 255, i * 10);
      stars.push(random(400));
      ellipse(stars[i], stars[i + 1], starSize, starSize);
    }
    // Draw Planets (Attractors)
    planet1.draw();
    planet2.draw();
    planet3.draw();
    // Make a loop to draw/handle Alien Ships
    for (var i = 0; i < aShips.length; i++) {
      var orbit = planet1.calcAttraction(aShips[i]);
      var orbit2 = planet2.calcAttraction(aShips[i]);
      var orbit3 = planet3.calcAttraction(aShips[i]);
      aShips[i].applyForce(orbit);
      aShips[i].applyForce(orbit2);
      aShips[i].applyForce(orbit3);
      aShips[i].update();
      aShips[i].draw();
    }
    // Make a loop to draw/handle Rocket Ships
    for (var i = 0; i < rShips.length; i++) {
      var orbit = planet1.calcAttraction(rShips[i]);
      var orbit2 = planet2.calcAttraction(rShips[i]);
      var orbit3 = planet3.calcAttraction(rShips[i]);
      rShips[i].applyForce(orbit);
      rShips[i].applyForce(orbit2);
      rShips[i].applyForce(orbit3);
      rShips[i].update();
      rShips[i].draw();
    }
  };
}

const spaceAnimation = {
  PROJECT_NAME: 'Space Animation',
  PROJECT_LINK: 'https://www.khanacademy.org/computer-programming/spin-off-of-project-creature-colonies/4709439248334848',
  main,
}