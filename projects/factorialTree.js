var main = function () {
  var WIN_WIDTH = width;
  var WIN_HEIGHT = height;
  var branches = [];
  var startX = WIN_WIDTH / 2;
  var startY = WIN_HEIGHT;
  var ANGLE = 60;
  var magnification = 10 / 16;
  var layers = 4; // factorial

  angleMode = "degrees";

  var fact = function (n) {

    if (n >= 1) {

      return n * fact(n - 1);

    } else { return 1; }

  };


  var branch = function (lens) {

    strokeWeight(0.1 * lens);
    stroke(255, 0, 0, 10 * lens);
    stroke(54, 49, 14, 10 * lens);
    line(0, 0, 0, -lens);

    if (lens >= layers) {

      pushMatrix();
      translate(0, -lens);
      rotate(ANGLE);
      // line(0,0,0,-lens*magnification);
      branch(lens * magnification);
      popMatrix();

      pushMatrix();
      translate(0, -lens);
      rotate(-ANGLE);
      // line(0,0,0,-lens*magnification);
      branch(lens * magnification);
      popMatrix();

    }

  };

  draw = function () {

    background(235, 209, 209);

    stroke(0, 0, 0, 10);
    strokeWeight(2);

    //line(WIN_WIDTH/2, WIN_HEIGHT, WIN_WIDTH/2, WIN_HEIGHT/2);

    pushMatrix();
    translate(startX, startY);
    branch(137);
    popMatrix();

  };

}

const factorialTree = {
  PROJECT_NAME: 'Factorial Tree',
  PROJECT_LINK: 'https://www.khanacademy.org/computer-programming/fractal-tree/5509463901831168',
  main,
}