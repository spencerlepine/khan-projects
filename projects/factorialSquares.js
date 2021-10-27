var main = function () {
  var WIN_HEIGHT = height;
  var WIN_WIDTH = width;
  var magnification = 1 / 2;
  var ANGLE = 0;

  rectMode(CORNER);
  //rectMode(CENTER);

  var square = function (n) {

    stroke(0, 0, 0, 10 * n * 10);
    strokeWeight(1 - n * 10);
    fill(90, 199, 199, 10 + n * 10);
    rect(0, 0, WIN_WIDTH / 2, WIN_HEIGHT / 2);
    rect(0, WIN_HEIGHT / 2, WIN_WIDTH / 2, WIN_HEIGHT / 2);
    rect(WIN_WIDTH / 2, 0, WIN_WIDTH / 2, WIN_HEIGHT / 2);
    rect(WIN_WIDTH / 2, WIN_HEIGHT / 2, WIN_WIDTH / 2, WIN_HEIGHT / 2);

    if (n >= 1) {

      pushMatrix();
      scale(magnification);
      rotate(-ANGLE * n);
      square(n * magnification);
      popMatrix();

      pushMatrix();
      translate(WIN_WIDTH / 2, WIN_HEIGHT / 2);
      scale(magnification);
      rotate(-ANGLE * n);
      square(n * magnification);
      popMatrix();

      pushMatrix();
      translate(0, WIN_HEIGHT / 2);
      scale(magnification);
      rotate(ANGLE * n);
      square(n * magnification);
      popMatrix();

      pushMatrix();
      translate(WIN_WIDTH / 2, 0);
      scale(magnification);
      rotate(ANGLE * n);
      square(n * magnification);
      popMatrix();

    }

  };

  var draw = function () {

    background(255, 255, 255);
    // Call a square with factorial 5
    square(10);
    // Increase the angle
    ANGLE += 0.2;

  };
}

const factorialSquares = {
  PROJECT_NAME: 'Factorial Squares Animation',
  PROJECT_LINK: 'https://www.khanacademy.org/computer-programming/factorial-squares/6330478439530496',
  main,
}