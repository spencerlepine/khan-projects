var main = function () {
  /**


         Click and drag to change the image, or release the mouse to invert the colors

                       To invert colors without affecting the picture,
                         click and release without moving the mouse


 **/

  var lineAmount = 63;
  var density = 68;
  var speed = 0.5 * 4;
  var difference = 35;

  var lines = function (l) {
    if (mouseIsPressed) { this.rotation = mouseX; } else {
      this.rotation = (sin(frameCount * speed) * 130);
    }
    stroke(255, 255, 255, 10);
    if (l > lineAmount - difference) {
      stroke(255, 255, 255);
    }
    if (l < lineAmount - difference) {
      stroke(69, 69, 69, 10);
    }
    if (mouseReleased) {
      if (l > lineAmount - difference) {
        stroke(69, 69, 69, 10);
      }
      if (l < lineAmount - difference) {
        stroke(255, 255, 255);
      }
    }

    strokeWeight(2);

    line(0, 0, 0, -l);
    translate(0, -l);

    if (l > 4) {

      pushMatrix();
      rotate(this.rotation);
      lines(l * (2 / 3));
      popMatrix();

      pushMatrix();
      rotate(-this.rotation);
      lines(l * (2 / 3));
      popMatrix();

    }

  };

  var drawLines = function () {
    pushMatrix();
    translate(200, 200);
    lines(density);
    popMatrix();
    pushMatrix();
    translate(200, 200);
    rotate(90);
    lines(density);
    popMatrix();
    pushMatrix();
    translate(200, 200);
    rotate(180);
    lines(density);
    popMatrix();
    pushMatrix();
    translate(200, 200);
    rotate(-90);
    lines(density);
    popMatrix();
  };

  draw = function () {
    // pushMatrix();
    // translate(-100,-100);
    // drawLines();
    // popMatrix();
    // pushMatrix();
    // translate(100,-100);
    // drawLines();
    // popMatrix();
    // pushMatrix();
    // translate(100,100);
    // drawLines();
    // popMatrix();
    // pushMatrix();
    // translate(-100,100);
    // drawLines();
    // popMatrix();
    //background(255, 255, 255);
    drawLines();
  };

}

const recursiveAnimation = {
  PROJECT_NAME: 'Recursive Animation',
  PROJECT_LINK: 'https://www.khanacademy.org/computer-programming/cool-recursive-line-drawing/5736291223928832',
  main,
}