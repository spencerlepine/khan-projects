var main = function () {
  /**
    @CEATOR: SPENCER LEPINE ©2017

    @DATE Made: 8/14/17

    @LOGO - This is the logo for a game I made : https://www.khanacademy.org/computer-programming/-/5389268692434944

**/

  var tCol = color((sin((frameCount * 2))) * 10 + 245, 0, 0);
  var tCol2 = color(252, 252, 252);
  var lines = 1;

  draw = function () {
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    background(196, 196, 196);

    pushMatrix();
    translate(5, 10);
    fill(tCol2);
    stroke(tCol2);
    // A LETTER
    {
      strokeWeight(2);
      beginShape();
      vertex(130, 79);
      bezierVertex(126, 38, 168, 184, 188, 150);
      bezierVertex(196, 161, 175, 106, 143, 51);
      endShape();
      beginShape();
      vertex(130, 79);
      bezierVertex(193, 25, 87, 204, 111, 184);
      bezierVertex(88, 102, 155, 67, 143, 51);
      endShape();
      beginShape();
      vertex(142, 51);
      bezierVertex(73, 152, 119, 228, 106, 159);
      endShape();
      beginShape();
      vertex(142, 51);
      bezierVertex(254, 212, 135, 143, 183, 139);
      endShape();
      triangle(173, 164, 193, 157, 191, 144);
      triangle(173, 164, 156, 122, 186, 157);
      // 2
      triangle(108, 187, 105, 164, 130, 179);
      triangle(121, 93, 111, 173, 130, 179);
      triangle(147, 70, 111, 149, 124, 156);
      pushMatrix();
      rotate(-17);
      translate(94, 172);
      rect(0, 0, 54, 16);
      popMatrix();
    }
    // S LETTER
    {
      beginShape();
      noFill();
      textSize(138);
      pushMatrix();
      translate(234, 90);
      strokeWeight(22);
      line(10, 6, -18, -7);
      strokeCap(SQUARE);
      arc(-8, 16, 50, 66, 73, 181);
      strokeCap(ROUND);
      arc(-4, 25, 48, 47, -48, 95);
      strokeCap(SQUARE);
      arc(1, -15, 50, 66, -98, -4);
      strokeCap(ROUND);
      arc(4, -25, 67, 47, -225, -102);
      endShape();
      popMatrix();
      fill(tCol2);
      textSize(10);
    }
    // T LETTER
    {
      textSize(134);
      pushMatrix();
      translate(318, 86);
      rotate(2);
      rect(0, -37, 73, 22, 5);
      triangle(-34, -26, -34, -47, -58, -47);
      rect(0, 9, 22, 76, 5);
      popMatrix();
      textSize(10);
    }
    // R LETTER
    {
      textSize(116);
      pushMatrix();
      translate(395, 89);
      rotate(5);
      rect(-24, 2, 20, 92);
      rect(-11, 1, -24, 16);
      rect(-11, -37, -24, 15);
      pushMatrix();
      translate(13, 21);
      rotate(55);
      rect(0, 0, 55, 15);
      popMatrix();
      triangle(41, 51, 33, 38, 21, 48);
      strokeWeight(14);
      noFill();
      arc(1, -19, 41, 35, -92, 88);
      fill(tCol2);
      popMatrix();
      textSize(10);
    }
    // O LETTER
    {
      pushMatrix();
      translate(465, 104);
      rotate(4);
      strokeWeight(25);
      noFill();
      ellipse(0, 0, 44, 60);
      popMatrix();
      fill(tCol2);
    }
    // J LETTER
    {
      pushMatrix();
      translate(145, 198);
      rotate(-19);
      rect(1, -9, 61, 17);
      popMatrix();
      triangle(118, 208, 100, 197, 113, 191);
      triangle(169, 171, 191, 182, 174, 187);
      strokeWeight(21);
      strokeCap(SQUARE);
      noFill();
      arc(132, 229, 44, 108, -37, 154);
      fill(tCol2);
    }
    // U LETTER
    {
      noFill();
      strokeWeight(19);
      strokeCap(PROJECT);
      pushMatrix();
      translate(218, 183);
      rotate(-8);
      arc(0, 0, 46, 128, -7, 189);
      popMatrix();
      strokeCap(ROUND);
      fill(tCol2);
    }
    // M LETTER
    {
      strokeWeight(19);
      pushMatrix();
      translate(293, 201);
      rotate(-5);
      rect(-23, -6, 1, 75);
      rect(30, -9, 1, 69);
      pushMatrix();
      rotate(-51);
      rect(23, -26, 0, 33);
      popMatrix();
      pushMatrix();
      rotate(44);
      rect(-12, -32, 0, 37);
      popMatrix();
      popMatrix();
      strokeCap(ROUND);
    }
    // P LETTER
    {
      noFill();
      strokeWeight(14);
      strokeCap(PROJECT);
      pushMatrix();
      translate(357, 168);
      rotate(-3);
      arc(0, 0, 46, 35, -90, 90);
      fill(tCol2);
      rect(-12, 17, 0, 83);
      popMatrix();
      strokeCap(ROUND);
    }
    // E LETTER
    {
      strokeWeight(14);
      pushMatrix();
      translate(414, 156);
      rotate(2);
      rect(-17, 27, 0, 80);
      rect(-1, -5, 21, 2);
      rect(-1, 25, 11, 1);
      rect(-1, 59, 21, 2);
      popMatrix();
      strokeCap(ROUND);
      noStroke();
    }
    // R LETTER
    {
      textSize(116);
      pushMatrix();
      translate(469, 195);
      rotate(5);
      rect(-24, -6, 15, 77);
      rect(-14, -1, -24, 12);
      rect(-11, -38, -24, 12);
      pushMatrix();
      translate(9, 12);
      rotate(55);
      rect(0, 0, 36, 11);
      popMatrix();
      triangle(31, 35, 23, 23, 15, 30);
      strokeWeight(12);
      stroke(tCol2);
      noFill();
      arc(1, -20, 41, 36, -92, 88);
      fill(tCol2);
      popMatrix();
      textSize(10);
    }
    popMatrix();
    // A LETTER
    {
      strokeWeight(2);
      fill(tCol);
      stroke(tCol);
      beginShape();
      vertex(130, 79);
      bezierVertex(126, 38, 168, 184, 188, 150);
      bezierVertex(196, 161, 175, 106, 143, 51);
      endShape();
      beginShape();
      vertex(130, 79);
      bezierVertex(193, 25, 87, 204, 111, 184);
      bezierVertex(88, 102, 155, 67, 143, 51);
      endShape();
      beginShape();
      vertex(142, 51);
      bezierVertex(73, 152, 119, 228, 106, 159);
      endShape();
      beginShape();
      vertex(142, 51);
      bezierVertex(254, 212, 135, 143, 183, 139);
      endShape();
      triangle(173, 164, 193, 157, 191, 144);
      triangle(173, 164, 156, 122, 186, 157);
      // 2
      triangle(108, 187, 105, 164, 130, 179);
      triangle(121, 93, 111, 173, 130, 179);
      triangle(147, 70, 111, 149, 124, 156);
      pushMatrix();
      rotate(-17);
      translate(94, 172);
      rect(0, 0, 54, 16);
      popMatrix();
    }
    // S LETTER
    {
      beginShape();
      textSize(138);
      noFill();
      pushMatrix();
      translate(234, 90);
      stroke(tCol);
      strokeWeight(22);
      line(10, 6, -18, -7);
      strokeCap(SQUARE);
      arc(-8, 16, 50, 66, 73, 181);
      strokeCap(ROUND);
      arc(-4, 25, 48, 47, -48, 95);
      strokeCap(SQUARE);
      arc(1, -15, 50, 66, -98, -4);
      strokeCap(ROUND);
      arc(4, -25, 67, 47, -225, -102);
      endShape();
      popMatrix();
      noStroke();
      textSize(10);
    }
    // T LETTER
    {
      fill(tCol);
      textSize(134);
      pushMatrix();
      translate(318, 86);
      rotate(2);
      rect(0, -37, 73, 22, 5);
      triangle(-34, -26, -34, -47, -58, -47);
      rect(0, 9, 22, 76, 5);
      popMatrix();
      textSize(10);
    }
    // R LETTER
    {
      fill(tCol);
      textSize(116);
      pushMatrix();
      translate(395, 89);
      rotate(5);
      rect(-24, 2, 20, 92);
      rect(-11, 1, -24, 16);
      rect(-11, -37, -24, 15);
      pushMatrix();
      translate(13, 21);
      rotate(55);
      rect(0, 0, 55, 15);
      popMatrix();
      triangle(41, 51, 33, 38, 21, 48);
      stroke(tCol);
      strokeWeight(14);
      noFill();
      arc(1, -19, 41, 35, -92, 88);
      popMatrix();
      noStroke();
      textSize(10);
    }
    // O LETTER
    {
      pushMatrix();
      translate(465, 104);
      rotate(4);
      noFill();
      strokeWeight(25);
      stroke(tCol);
      ellipse(0, 0, 44, 60);
      noStroke();
      popMatrix();
    }
    // J LETTER
    {
      pushMatrix();
      translate(145, 198);
      rotate(-19);
      fill(tCol);
      rect(1, -9, 61, 17);
      popMatrix();
      triangle(118, 208, 100, 197, 113, 191);
      triangle(169, 171, 191, 182, 174, 187);
      noFill();
      stroke(tCol);
      strokeWeight(21);
      strokeCap(SQUARE);
      arc(132, 229, 44, 108, -37, 154);
      noStroke();
    }
    // U LETTER
    {
      noFill();
      stroke(tCol);
      strokeWeight(19);
      strokeCap(PROJECT);
      pushMatrix();
      translate(218, 183);
      rotate(-8);
      arc(0, 0, 46, 128, -7, 189);
      popMatrix();
      strokeCap(ROUND);
      noStroke();
    }
    // M LETTER
    {
      noFill();
      stroke(tCol);
      strokeWeight(19);
      pushMatrix();
      translate(293, 201);
      rotate(-5);
      fill(tCol);
      rect(-23, -6, 1, 75);
      rect(30, -9, 1, 69);
      pushMatrix();
      rotate(-51);
      rect(23, -26, 0, 33);
      popMatrix();
      pushMatrix();
      rotate(44);
      rect(-12, -32, 0, 37);
      popMatrix();
      popMatrix();
      strokeCap(ROUND);
      noStroke();
    }
    // P LETTER
    {
      noFill();
      stroke(tCol);
      strokeWeight(14);
      strokeCap(PROJECT);
      pushMatrix();
      translate(357, 168);
      rotate(-3);
      arc(0, 0, 46, 35, -90, 90);
      rect(-12, 17, 0, 83);
      popMatrix();
      strokeCap(ROUND);
      noStroke();
    }
    // E LETTER
    {
      noFill();
      stroke(tCol);
      strokeWeight(14);
      pushMatrix();
      translate(414, 156);
      rotate(2);
      rect(-17, 27, 0, 80);
      rect(-1, -5, 21, 2);
      rect(-1, 25, 11, 1);
      rect(-1, 59, 21, 2);
      popMatrix();
      strokeCap(ROUND);
      noStroke();
    }
    // R LETTER
    {
      fill(tCol);
      textSize(116);
      pushMatrix();
      translate(469, 195);
      rotate(5);
      rect(-24, -6, 15, 77);
      rect(-14, -1, -24, 12);
      rect(-11, -38, -24, 12);
      pushMatrix();
      translate(9, 12);
      rotate(55);
      rect(0, 0, 36, 11);
      popMatrix();
      triangle(31, 35, 23, 23, 15, 30);
      stroke(tCol);
      strokeWeight(12);
      noFill();
      arc(1, -20, 41, 36, -92, 88);
      popMatrix();
      noStroke();
      textSize(10);
    }
    // Outlines/Guidelines
    {
      if (lines > 0) {
        strokeWeight(2);
        stroke(0, 0, 0);
        line(10, 20, 589, 20);
        line(10, 303, 585, 303);
        noFill();
        arc(289, 217, 665, 370, -120, -17);
        pushMatrix();
        translate(315, 322);
        rotate(-4);
        arc(0, 0, 681, 370, -124, -31);
        popMatrix();
        pushMatrix();
        translate(323, 423);
        rotate(-12);
        arc(0, 0, 714, 370, -120, -17);
        popMatrix();
        line(100, 0, 100, 319);
        line(191, 0, 192, 154);
        line(500, 0, 500, 319);
        line(106, 188, 194, 158);
        line(365, 0, 365, 133);
        line(276, 0, 276, 137);
        line(432, 0, 432, 144);
        // Second Word
        line(189, 153, 189, 287);
        line(257, 142, 257, 255);
        line(332, 138, 332, 240);
        line(391, 137, 391, 231);
        line(445, 147, 445, 232);
        line(300, 0, 300, 600);
        line(10, 450, 590, 450);
      }
    }
  };

  var mouseClicked = function () {
    lines *= -1;
  };
}

const AstroJumperGameLogo = {
  PROJECT_NAME: 'AstroJumper Game Logo',
  PROJECT_LINK: 'https://www.khanacademy.org/computer-programming/astrojumper-logo/5653563149844480',
  main,
}