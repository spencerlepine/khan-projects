var main = function () {
  /**
    @CEATOR: SPENCER LEPINE ©2017

    @DATE Started on 7/30/17

    @GAME: You have crashed on the moon! Play as an Astronaut and fly through the moons atmosphere while collecting points and ship parts to fly back home to earth!

    @INCLUDES(WILL): Arcade Mode to collect more coins and reach a highscore. Aslo includes levels to play where you collect your lost ship parts in space, and fly back to earth. There is a shop with custom characters, a how to play screen and credits scene.

    @CREDIT: This code is completely original, all lines maunally typed by me. I started by recreatinng a program, then had more ideas to implement - Inspried by Fly Bird - https://www.khanacademy.org/computer-programming//6306911327682560

    @UPDATE Currently developing the game. All Code has been typed by me and all programming methods done by me.

    @STYLE This program uses mostly OOP (OBJECT ORIENTATED PROGRAMMING) and PVectors to simulate gravity.

**/
  // space ship like asteroid game thing and then you dogde asteriods with that
  // Player Variables
  var AstroJumper; // Set a variable for the Jumper function
  var health = 100; // Player health
  var oxygen = 100; // Player oxygen
  var fuel = 250; // Player fuel
  var collided = false;
  var left = true;
  var right = false;
  var thrust = false;
  // Gameplay handling variabes
  var input = [];
  var scene = "menu"; // [intro,menu,levels,shop,arcade,how?,credit,game,end,win]
  var gameStart = false;
  // Arrays and object handling varialbes
  var asteriods = [];
  var debriss = [];
  var debRot = random(8, 15);
  var starSize = 4; // Star size
  var stars = []; // Stars
  // var tCol = color((sin((frameCount*2)))*10+245,0,0);
  var tCol = color(255, 0, 0);
  var tCol2 = color(227, 227, 227);
  // Deaths
  var crashDeath = false;
  var fuelDeath = false;
  // Fonts
  var fnt2 = createFont("verdana");
  var fnt3 = createFont("monospace");
  var decider = floor(random(0, 4)); // Radomizes the rock/star pos
  // Arrays to store different positions for the coins and rocks
  var decider2 = floor(random(-1, 1));
  var astPos = [
    [100, 150, 400, 100, 300, 500, 200, 200],
    [100, 150, 400, 100, 300, 500, 200, 200],
    [100, 150, 400, 100, 300, 500, 200, 200],
    [100, 150, 400, 100, 300, 500, 200, 200]
  ];
  var debPos = [
    [317, 500, 108, 57, 316, 428, 423, 198, 300, 208, 87, 20, 400, 279],
  ];
  var Button = [];
  // Logo varialbes
  {
    var logoX = 99;
    var logoY = -300;
    var introTxtX = -511;
    var introTxtY = 229;
    var introTxtX2 = 450;
    var introTxtY2 = 223;
    var time = 1;
    var fade = 0;
    var fnt = createFont("Trebuchet MS");
    var logoSize = 0;
  }
  // Key functions to handle jumping actions
  keyPressed = function () { input[keyCode] = true; };
  keyReleased = function () { input[keyCode] = false; };
  // System function for debugging
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
  // Logo function that draws it
  var logo = function () {
    this.backgroundDraw = function () {
      var tri1 = color(0, 83, 293);
      var tri2 = color(0, 64, 184);
      var tri3 = color(0, 47, 122);
      rectMode(CENTER);
      noStroke();
      fill(234, 233, 231);
      pushMatrix();
      scale(1.5);
      rect(200, 200, 400, 400);
      // triangles
      {
        // 1
        fill(tri1);
        triangle(14, -18, 65, 29, 103, 200);
        fill(tri2);
        triangle(14, -18, 122, 7, 65, 29);
        fill(tri3);
        triangle(64, 28, 122, 7, 103, 200);
        // 2
        fill(tri1);
        triangle(165, 97, 132, -5, 108, 214);
        fill(tri2);
        triangle(238, 97, 165, 97, 108, 214);
        fill(tri3);
        triangle(238, 97, 132, -5, 165, 97);
        // 3
        fill(tri1);
        triangle(277, 33, 145, 0, 271, 118);
        fill(tri2);
        triangle(388, -6, 277, 33, 271, 118);
        fill(tri3);
        triangle(388, -6, 145, 0, 277, 33);
        // 4
        fill(tri1);
        triangle(378, 90, 400, -7, 281, 118);
        fill(tri2);
        triangle(425, 155, 378, 90, 281, 118);
        fill(tri3);
        triangle(425, 155, 400, -7, 378, 90);
        // 5
        fill(tri1);
        triangle(357, 191, 427, 167, 233, 111);
        fill(tri2);
        triangle(349, 264, 357, 191, 233, 111);
        fill(tri3);
        triangle(349, 264, 427, 167, 357, 191);
        // 6
        fill(tri1);
        triangle(194, 205, 312, 229, 227, 120);
        fill(tri2);
        triangle(60, 263, 194, 205, 227, 120);
        fill(tri3);
        triangle(60, 263, 312, 229, 194, 205);
        // 7
        fill(tri1);
        triangle(49, 192, 99, 218, 16, 5);
        fill(tri2);
        triangle(8, 300, 49, 192, 16, 5);
        fill(tri3);
        triangle(8, 300, 99, 218, 49, 192);
        // 8
        triangle(7, 18, 2, 302, 2, -10);
        // 9
        fill(tri1);
        triangle(81, 310, 186, 255, 50, 273);
        fill(tri2);
        triangle(64, 393, 81, 310, 50, 273);
        fill(tri3);
        triangle(64, 393, 186, 255, 81, 310);
        // 10
        fill(tri1);
        triangle(10, 351, 55, 389, 41, 281);
        fill(tri2);
        triangle(-82, 390, 10, 351, 41, 281);
        fill(tri3);
        triangle(-82, 390, 55, 389, 10, 351);
        // 11
        fill(tri1);
        triangle(172, 373, 302, 411, 196, 253);
        fill(tri2);
        triangle(61, 411, 172, 373, 196, 253);
        fill(tri3);
        triangle(61, 411, 302, 411, 172, 373);
        // 12
        fill(tri1);
        triangle(388, 385, 312, 410, 208, 253);
        fill(tri2);
        triangle(487, 423, 388, 385, 208, 253);
        fill(tri3);
        triangle(487, 423, 312, 410, 388, 385);
        // 13
        fill(tri1);
        triangle(370, 324, 314, 241, 223, 249);
        fill(tri2);
        triangle(484, 411, 370, 324, 223, 249);
        fill(tri3);
        triangle(484, 411, 314, 241, 370, 324);
        // 14
        fill(tri1);
        triangle(388, 251, 408, 325, 355, 271);
        fill(tri2);
        triangle(415, 196, 388, 251, 355, 271);
        fill(tri3);
        triangle(415, 196, 408, 325, 388, 251);
      }
      popMatrix();
    };
    this.draw = function (x, y, w, h, size) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.s = size;
      pushMatrix();
      fill(0, 0, 0);
      this.x -= 10;
      // 1
      triangle(this.x + (this.w / 14.2) * this.s, this.y + (this.h / 25) * this.s, this.x + (this.w / 3.8) * this.s, this.y + (this.h / 25) * this.s, this.x + (this.w / 4.8) * this.s, this.y + (this.h / 4.2) * this.s);
      // 2
      triangle(this.x + (this.w / 14.2857143) * this.s, this.y + (this.h / 25) * this.s, this.x + (this.w / 4.2) * this.s, this.y + (this.h / 7.40) * this.s, this.x + (this.w / 4.8) * this.s, this.y + (this.h / 4.2) * this.s);
      // 3
      triangle(this.x + (this.w / 3.7) * this.s, this.y + (this.h / 13) * this.s, this.x + (this.w / 3.7) * this.s, this.y + (this.h / 3.9) * this.s, this.x + (this.w / 4.8) * this.s, this.y + (this.h / 3.2) * this.s);
      // 4
      triangle(this.x + (this.w / 3.7) * this.s, this.y + (this.h / 6.0) * this.s, this.x + (this.w / 3.7) * this.s, this.y + (this.h / 3.9) * this.s, this.x + (this.w / 4.8) * this.s, this.y + (this.h / 3.2) * this.s);
      // 5
      triangle(this.x + (this.w / 26.666) * this.s, this.y + (this.h / 33.33) * this.s, this.x + (this.w / 5.00) * this.s, this.y + (this.h / 2.87) * this.s, this.x + (this.w / 3.9) * this.s, this.y + (this.h / 1.5) * this.s);
      // 6
      triangle(this.x + (this.w / 26.666) * this.s, this.y + (this.h / 33.33) * this.s, this.x + (this.w / 7.1) * this.s, this.y + (this.h / 2.24) * this.s, this.x + (this.w / 3.9) * this.s, this.y + (this.h / 1.5) * this.s);
      // 7
      triangle(this.x + (this.w / 36.4) * this.s, this.y + (this.h / 2.5) * this.s, this.x + (this.w / 8.4) * this.s, this.y + (this.h / 2.1) * this.s, this.x + (this.w / 36.4) * this.s, this.y + (this.h / 1.5) * this.s);
      // 8
      triangle(this.x + (this.w / 13.6) * this.s, this.y + (this.h / 2.28) * this.s, this.x + (this.w / 8.4) * this.s, this.y + (this.h / 2.1) * this.s, this.x + (this.w / 36.4) * this.s, this.y + (this.h / 1.5) * this.s);// 9
      triangle(this.x + (this.w / 7.4) * this.s, this.y + (this.h / 2.0) * this.s, this.x + (this.w / 4.2) * this.s, this.y + (this.h / 1.5) * this.s, this.x + (this.w / 22.0) * this.s, this.y + (this.h / 1.5) * this.s);
      // 10
      triangle(this.x + (this.w / 11.1) * this.s, this.y + (this.h / 1.7) * this.s, this.x + (this.w / 4.2) * this.s, this.y + (this.h / 1.5) * this.s, this.x + (this.w / 22.0) * this.s, this.y + (this.h / 1.5) * this.s);
      // LETTER TWO
      // 12
      triangle(this.x + (this.w / 3.3) * this.s, this.y + (this.h / 27.5) * this.s, this.x + (this.w / 2.9) * this.s, this.y + (this.h / 5.8) * this.s, this.x + (this.w / 2.9) * this.s, this.y + (this.h / 2.9) * this.s);
      // 12.5
      triangle(this.x + (this.w / 3.3) * this.s, this.y + (this.h / 27.5) * this.s, this.x + (this.w / 3.3) * this.s, this.y + (this.h / 2.2) * this.s, this.x + (this.w / 2.9) * this.s, this.y + (this.h / 2.9) * this.s);
      // 13
      triangle(this.x + (this.w / 3.3) * this.s, this.y + (this.h / 27.5) * this.s, this.x + (this.w / 3.3) * this.s, this.y + (this.h / 2.2) * this.s, this.x + (this.w / 3.04) * this.s, this.y + (this.h / 2.6) * this.s);
      // 14
      triangle(this.x + (this.w / 3.3) * this.s, this.y + (this.h / 1.98) * this.s, this.x + (this.w / 2.9) * this.s, this.y + (this.h / 2.5) * this.s, this.x + (this.w / 3.3) * this.s, this.y + (this.h / 1.5) * this.s);
      // 15
      triangle(this.x + (this.w / 2.9) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.9) * this.s, this.y + (this.h / 2.5) * this.s, this.x + (this.w / 3.3) * this.s, this.y + (this.h / 1.5) * this.s);
      // 16
      triangle(this.x + (this.w / 2.4) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.8) * this.s, this.y + (this.h / 1.86) * this.s, this.x + (this.w / 3.18) * this.s, this.y + (this.h / 1.5) * this.s);
      // 16.5
      triangle(this.x + (this.w / 2.4) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.42) * this.s, this.y + (this.h / 1.78) * this.s, this.x + (this.w / 3.15) * this.s, this.y + (this.h / 1.5) * this.s);
      // 17
      triangle(this.x + (this.w / 2.49) * this.s, this.y + (this.h / 1.5) * this.s, this.x + (this.w / 2.42) * this.s, this.y + (this.h / 1.78) * this.s, this.x + (this.w / 3.15) * this.s, this.y + (this.h / 1.5) * this.s);
      // 18
      triangle(this.x + (this.w / 2.33) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.18) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.42) * this.s, this.y + (this.h / 1.5) * this.s);
      // 19
      triangle(this.x + (this.w / 2.42) * this.s, this.y + (this.h / 1.5) * this.s, this.x + (this.w / 2.18) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.26) * this.s, this.y + (this.h / 1.5) * this.s);
      this.x += 10;
      // scale(0.816326531);
      // 1
      fill(255, 255, 255);
      triangle(this.x + (this.w / 14.2) * this.s, this.y + (this.h / 25) * this.s, this.x + (this.w / 3.8) * this.s, this.y + (this.h / 25) * this.s, this.x + (this.w / 4.8) * this.s, this.y + (this.h / 4.2) * this.s);
      // 2
      fill(235, 235, 235);
      triangle(this.x + (this.w / 14.2857143) * this.s, this.y + (this.h / 25) * this.s, this.x + (this.w / 4.2) * this.s, this.y + (this.h / 7.40) * this.s, this.x + (this.w / 4.8) * this.s, this.y + (this.h / 4.2) * this.s);
      // 3
      fill(255, 255, 255);
      triangle(this.x + (this.w / 3.7) * this.s, this.y + (this.h / 13) * this.s, this.x + (this.w / 3.7) * this.s, this.y + (this.h / 3.9) * this.s, this.x + (this.w / 4.8) * this.s, this.y + (this.h / 3.2) * this.s);
      // 4
      fill(235, 235, 235);
      triangle(this.x + (this.w / 3.7) * this.s, this.y + (this.h / 6.0) * this.s, this.x + (this.w / 3.7) * this.s, this.y + (this.h / 3.9) * this.s, this.x + (this.w / 4.8) * this.s, this.y + (this.h / 3.2) * this.s);
      // 5
      fill(255, 255, 255);
      triangle(this.x + (this.w / 26.666) * this.s, this.y + (this.h / 33.33) * this.s, this.x + (this.w / 5.00) * this.s, this.y + (this.h / 2.87) * this.s, this.x + (this.w / 3.9) * this.s, this.y + (this.h / 1.5) * this.s);
      // 6
      fill(235, 235, 235);
      triangle(this.x + (this.w / 26.666) * this.s, this.y + (this.h / 33.33) * this.s, this.x + (this.w / 7.1) * this.s, this.y + (this.h / 2.24) * this.s, this.x + (this.w / 3.9) * this.s, this.y + (this.h / 1.5) * this.s);
      // 7
      fill(255, 255, 255);
      triangle(this.x + (this.w / 36.4) * this.s, this.y + (this.h / 2.5) * this.s, this.x + (this.w / 8.4) * this.s, this.y + (this.h / 2.1) * this.s, this.x + (this.w / 36.4) * this.s, this.y + (this.h / 1.5) * this.s);
      // 8
      fill(235, 235, 235);
      triangle(this.x + (this.w / 13.6) * this.s, this.y + (this.h / 2.28) * this.s, this.x + (this.w / 8.4) * this.s, this.y + (this.h / 2.1) * this.s, this.x + (this.w / 36.4) * this.s, this.y + (this.h / 1.5) * this.s);// 9
      fill(255, 255, 255);
      triangle(this.x + (this.w / 7.4) * this.s, this.y + (this.h / 2.0) * this.s, this.x + (this.w / 4.2) * this.s, this.y + (this.h / 1.5) * this.s, this.x + (this.w / 22.0) * this.s, this.y + (this.h / 1.5) * this.s);
      // 10
      fill(235, 235, 235);
      triangle(this.x + (this.w / 11.1) * this.s, this.y + (this.h / 1.7) * this.s, this.x + (this.w / 4.2) * this.s, this.y + (this.h / 1.5) * this.s, this.x + (this.w / 22.0) * this.s, this.y + (this.h / 1.5) * this.s);
      // LETTER TWO
      // 12
      fill(255, 255, 255);
      triangle(this.x + (this.w / 3.3) * this.s, this.y + (this.h / 27.5) * this.s, this.x + (this.w / 2.9) * this.s, this.y + (this.h / 5.8) * this.s, this.x + (this.w / 2.9) * this.s, this.y + (this.h / 2.9) * this.s);
      // 12.5
      triangle(this.x + (this.w / 3.3) * this.s, this.y + (this.h / 27.5) * this.s, this.x + (this.w / 3.3) * this.s, this.y + (this.h / 2.2) * this.s, this.x + (this.w / 2.9) * this.s, this.y + (this.h / 2.9) * this.s);
      // 13
      fill(235, 235, 235);
      triangle(this.x + (this.w / 3.3) * this.s, this.y + (this.h / 27.5) * this.s, this.x + (this.w / 3.3) * this.s, this.y + (this.h / 2.2) * this.s, this.x + (this.w / 3.04) * this.s, this.y + (this.h / 2.6) * this.s);
      // 14
      fill(255, 255, 255);
      triangle(this.x + (this.w / 3.3) * this.s, this.y + (this.h / 1.98) * this.s, this.x + (this.w / 2.9) * this.s, this.y + (this.h / 2.5) * this.s, this.x + (this.w / 3.3) * this.s, this.y + (this.h / 1.5) * this.s);
      // 15
      fill(235, 235, 235);
      triangle(this.x + (this.w / 2.9) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.9) * this.s, this.y + (this.h / 2.5) * this.s, this.x + (this.w / 3.3) * this.s, this.y + (this.h / 1.5) * this.s);
      // 16
      fill(255, 255, 255);
      triangle(this.x + (this.w / 2.4) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.8) * this.s, this.y + (this.h / 1.86) * this.s, this.x + (this.w / 3.18) * this.s, this.y + (this.h / 1.5) * this.s);
      // 16.5
      triangle(this.x + (this.w / 2.4) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.42) * this.s, this.y + (this.h / 1.78) * this.s, this.x + (this.w / 3.15) * this.s, this.y + (this.h / 1.5) * this.s);
      // 17
      fill(235, 235, 235);
      triangle(this.x + (this.w / 2.49) * this.s, this.y + (this.h / 1.5) * this.s, this.x + (this.w / 2.42) * this.s, this.y + (this.h / 1.78) * this.s, this.x + (this.w / 3.15) * this.s, this.y + (this.h / 1.5) * this.s);
      // 18
      fill(255, 255, 255);
      triangle(this.x + (this.w / 2.33) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.18) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.42) * this.s, this.y + (this.h / 1.5) * this.s);
      // 19
      fill(235, 235, 235);
      triangle(this.x + (this.w / 2.42) * this.s, this.y + (this.h / 1.5) * this.s, this.x + (this.w / 2.18) * this.s, this.y + (this.h / 1.89) * this.s, this.x + (this.w / 2.26) * this.s, this.y + (this.h / 1.5) * this.s);
      fill(0, 0, 0);
      textFont(fnt);
      textSize(56);
      text("Spencer Lepine Programming", introTxtX, introTxtY, 674, 400);
      fill(255, 255, 255);
      text("Spencer Lepine Programming", introTxtX2, introTxtY2, 674, 400);
      textFont(fnt);
      textSize(10);
      popMatrix();
    };

  };
  // Button handler function
  var button = function (x, y, label, width, target, type) {
    this.x = x;
    this.y = y;
    this.label = label;
    this.width = width;
    this.height = this.width * 0.44;
    this.target = target;
    this.type = type;
    if (this.type === "levelSelector") {
      this.height = this.width;
    }
    this.draw = function () {
      if (this.type === "menu") {
        strokeWeight(0);
        rectMode(CORNER);
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
          fill(227, 227, 227, 100);
          rect(this.x - this.width * 0.025, this.y - this.height * 0.062, this.width * 1.05, this.height * 1.235, this.width * 0.07);
        }
        noStroke();
        fill(242, 233, 233);
        rect(this.x + this.width * 0.06, this.y, this.width * 0.88, this.height * 1.1);
        rect(this.x, this.y + this.width * 0.062, this.width, this.height * 0.8);
        triangle(this.x + this.width - (this.width * 0.06), this.y, this.x + this.width - (this.width * 0.06), this.y + this.width * 0.064, this.x + this.width * 1.001, this.y + this.width * 0.064);
        triangle(this.x + this.width * 0.064, this.y, this.x + this.width * 0.064, this.y + this.width * 0.064, this.x, this.y + this.width * 0.064);
        triangle(this.x + this.width - (this.width * 0.058), this.y + this.height * 1.1, this.x + this.width - (this.width * 0.058), this.y + this.height - (this.height * 0.06), this.x + this.width * 1.002, this.y + this.height - (this.height * 0.06));
        triangle(this.x + this.width * 0.064, this.y + this.height + this.height * 0.102, this.x + this.width * 0.064, this.y + this.height - (this.height * 0.064), this.x, this.y + this.height - (this.height * 0.064));
        noStroke();
        noFill();
        stroke(150, 150, 150, 100);
        strokeWeight(this.width * 0.032);
        strokeJoin(BEVEL);
        rect(this.x + this.width * 0.065, this.y + this.height * 0.16, this.width * 0.88, this.height * 0.78);
        strokeJoin(MITER);
        textFont(fnt);
        textSize(this.width * 0.236);
        fill(0, 0, 0);
        text(this.label, this.x + this.width * 0.5, this.y + this.height * 0.5);
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
          fill(89, 56, 56);
          text(this.label, this.x + this.width * 0.5, this.y + this.height * 0.5);
        }
        textSize(10);
        noStroke();
        rectMode(CENTER);
      }
      if (this.type === "simple") {
        strokeWeight(0);
        rectMode(CORNER);
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
          fill(227, 227, 227, 100);
          rect(this.x - this.width * 0.05, this.y - this.height * 0.1, this.width * 1.1, this.height * 1.2, this.width * 0.07);
        }
        noStroke();
        fill(242, 233, 233);
        rect(this.x, this.y, this.width, this.height, this.width * 0.04);
        noStroke();
        noFill();
        textFont(fnt);
        textSize(this.width * 0.214);
        fill(0, 0, 0);
        text(this.label, this.x + this.width * 0.5, this.y + this.height * 0.5);
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
          fill(89, 56, 56);
          text(this.label, this.x + this.width * 0.5, this.y + this.height * 0.5);
        }
        textSize(10);
        noStroke();
        rectMode(CENTER);
      }
      if (this.type === "red-simple") {
        strokeWeight(0);
        rectMode(CORNER);
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
          fill(138, 43, 43);
          rect(this.x, this.y, this.width, this.height, this.width * 0.1);
        } else {
          noStroke();
          fill(99, 3, 3);
          rect(this.x, this.y, this.width, this.height, this.width * 0.1);
        }
        fill(255, 0, 0);
        rect(this.x + this.width * 0.05, this.y + this.height * 0.1, this.width * 0.9, this.height * 0.8, this.width * 0.1);
        noStroke();
        noFill();
        textFont(fnt);
        textSize(this.width * 0.244);
        fill(252, 249, 249);
        text(this.label, this.x + this.width * 0.5, this.y + this.height * 0.5);
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
          fill(255, 255, 255);
          text(this.label, this.x + this.width * 0.5, this.y + this.height * 0.5);
        }
        textSize(10);
        noStroke();
        rectMode(CENTER);
      }
      if (this.type === "levelSelector") {
        rectMode(CORNER);
        noStroke();
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
          fill(219, 219, 219);
          rect(this.x, this.y, this.width, this.height, this.width * 0.1);
        } else {
          fill(255, 255, 255);
          rect(this.x, this.y, this.width, this.height, this.width * 0.1);
        }
        fill(232, 232, 232);
        rect(this.x + this.width * 0.1, this.y + this.height * 0.1, this.width * 0.8, this.height * 0.8, this.width * 0.1);
        fill(51, 1, 1);
        textFont(fnt2);
        textSize(this.width * 0.4);
        fill(0, 0, 0);
        text(this.label, this.x + this.width / 2, this.y + this.height / 2);
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
          fill(77, 26, 26);
          text(this.label, this.x + this.width / 2, this.y + this.height / 2);
        }
        textSize(10);
        noStroke();
        rectMode(CENTER);
      }
      textSize(10);
    };
    this.mouseCheck = function () {
      if (mouseIsPressed) {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
          scene = this.target;
        }
      }
    };
    this.run = function () {
      this.draw();
      this.mouseCheck();
    };
  };
  Button[0] = new button(24.5, 320, "Levels", 250, "levels", "menu");
  Button[1] = new button(324.5, 320, "Arcade", 250, "game", "menu");
  Button[2] = new button(24.5, 460, "Shop", 250, "shop", "menu");
  Button[3] = new button(324.5, 460, "How?", 250, "how?", "menu");
  Button[4] = new button(400, 262, "Credits", 94, "credits", "simple");
  Button[5] = new button(500, 10, "Back", 94, "menu", "red-simple");
  Button[6] = new button(65, 100, "1", 100, "level1", "levelSelector");
  Button[7] = new button(190, 100, "2", 100, "level2", "levelSelector");
  Button[8] = new button(315, 100, "3", 100, "level3", "levelSelector");
  Button[9] = new button(440, 100, "4", 100, "level4", "levelSelector");
  Button[10] = new button(65, 220, "5", 100, "level5", "levelSelector");
  Button[11] = new button(190, 220, "6", 100, "level6", "levelSelector");
  Button[12] = new button(315, 220, "7", 100, "level7", "levelSelector");
  Button[13] = new button(440, 220, "8", 100, "level8", "levelSelector");
  Button[14] = new button(65, 340, "9", 100, "level9", "levelSelector");
  Button[15] = new button(190, 340, "10", 100, "level10", "levelSelector");
  Button[16] = new button(315, 340, "11", 100, "level11", "levelSelector");
  Button[17] = new button(440, 340, "12", 100, "level12", "levelSelector");
  Button[18] = new button(65, 460, "13", 100, "level13", "levelSelector");
  Button[19] = new button(190, 460, "14", 100, "level14", "levelSelector");
  Button[20] = new button(315, 460, "15", 100, "level15", "levelSelector");
  Button[21] = new button(440, 460, "16", 100, "level16", "levelSelector");
  Button[22] = new button(250, 30, "Next Page", 100, "levelPage2", "simple");
  // Set up the logo function
  var Logo = new logo();
  // Create the jumper cunstructor function
  var astrojumper = function () {
    this.gravity = new PVector(0, 0.18);
    this.position = new PVector(200, height / 2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(1, 0);
    // Applies a force (like wind)
    // this.applyForce = function(force) {
    //     this.acceleration.add(force);
    // };
    // Checks parameters
    this.checkEdges = function () {
      if (this.position.x > width - 10) {
        left = false;
        right = true;
        this.velocity.mult(new PVector(-1, 1));
      }
      if (this.position.x < 10) {
        left = true;
        right = false;
        this.velocity.mult(new PVector(-1, 1));
      }
      if (this.position.y > height + 40) {
        crashDeath = true;
        health = 0;
      }
      if (this.position.y < -40) {
        fuelDeath = true;
        fuel = 0;
      }
    };
    // Display Function to draw Astronaut
    this.display = function () {
      var angle = atan(this.velocity.x * this.velocity.y / 5);
      pushMatrix();
      translate(this.position.x, this.position.y);
      if (left) {
        rotate(angle / 10);
      } else { rotate(0); }
      if (right) {
        rotate(angle / 10);
      } else { rotate(0); }
      rectMode(CENTER);
      noStroke();
      fill(255, 0, 0, 100);
      ellipse(0, 0, 50, 50);
      // Space Jetpack thing
      if (left) {
        if (thrust) {
          fill(255, 230, 0, 200);
          triangle(-12, 24, -13, 9, -8, 8);
          fill(255, 77, 0, 200);
          triangle(-1, 24, -4, 9, 5, 8);
        }
        fill(54, 54, 54);
        rect(-1, 0, 26, 22, 2);
      } else if (right) {
        if (thrust) {
          fill(255, 230, 0, 200);
          triangle(2, 24, 1, 9, -8, 8);
          fill(255, 77, 0, 200);
          triangle(12, 24, 4, 9, 15, 8);
        }
        fill(54, 54, 54);
        rect(0, 0 + this.velocity.y / 2, 26, 22, 2);
      }
      // Arms
      pushMatrix();
      translate(0, 0);
      rotate(-10);
      fill(214, 214, 214);
      rect(9, 0 + this.velocity.y / 2, 6, 15, 2);
      fill(130, 130, 130);
      rect(9, 8 + this.velocity.y / 2, 7, 3, 2);
      popMatrix();
      pushMatrix();
      translate(0, 0);
      rotate(10);
      fill(214, 214, 214);
      rect(-9, 0 + this.velocity.y / 2, 6, 15, 2);
      fill(130, 130, 130);
      rect(-9, 8 + this.velocity.y / 2, 7, 3, 2);
      popMatrix();

      fill(232, 232, 232);
      rect(0, 0, 17, 25, 5);
      ellipse(0, -20, 27, 26);
      fill(202, 207, 110);
      ellipse(0, -20, 19, 18);
      fill(255, 255, 255, 200);
      ellipse(3 - (this.position.x / 100), -24, 5, 5);
      // Legs
      pushMatrix();
      translate(0, 0);
      rotate(-4);
      fill(171, 171, 171);
      rect(4, 19, 7, 20, 2);
      fill(77, 77, 77);
      rect(4, 26 + this.velocity.y / 4, 8, 7, 2);
      popMatrix();
      pushMatrix();
      translate(0, 0);
      rotate(4);
      fill(171, 171, 171);
      rect(-4, 19, 7, 20, 2);
      fill(77, 77, 77);
      rect(-4, 26 + this.velocity.y / 4, 8, 7, 2);
      popMatrix();
      fill(64, 64, 64);
      rect(0, 10 + this.velocity.y / 3, 17, 4, 2);
      fill(199, 199, 199);
      rect(0, 0, 10, 10, 2);
      popMatrix();
    };
    // Update function
    this.update = function () {
      // Make the bird jump
      if (input[UP] || input[87] || mouseIsPressed) {
        this.velocity.y = -4;
        fuel -= 0.08;
        thrust = true;
      } else { thrust = false; }
      // Make the astronaut fall
      this.acceleration.add(this.gravity);
      // Make the astronaut move
      this.velocity.add(this.acceleration);
      // Add the velocity to the position (making it officially move)
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    };
    // Run function to make the magic happen
    this.run = function () {
      this.display();
      this.update();
      this.checkEdges();
    };
  };
  var astropicture = function (x, y, rotation, size) {
    this.rotation = rotation;
    this.position = new PVector(x, y);
    this.size = size;
    // Display Function to draw Astronaut
    this.display = function () {
      pushMatrix();
      translate(this.position.x, this.position.y);
      scale(this.size);
      rotate(this.rotation);
      rectMode(CENTER);
      noStroke();
      // Space Jetpack thing
      rect(0, 0, 26, 22, 2);
      // Arms
      pushMatrix();
      translate(0, 0);
      rotate(-20);
      fill(214, 214, 214);
      rect(9, 0, 6, 15, 2);
      fill(130, 130, 130);
      rect(9, 8, 7, 3, 2);
      popMatrix();
      pushMatrix();
      translate(0, 0);
      rotate(20);
      fill(214, 214, 214);
      rect(-9, 0, 6, 15, 2);
      fill(130, 130, 130);
      rect(-9, 8, 7, 3, 2);
      popMatrix();
      fill(232, 232, 232);
      rect(0, 0, 17, 25, 5);
      ellipse(0, -20, 27, 26);
      fill(202, 207, 110);
      ellipse(0, -20, 19, 18);
      fill(255, 255, 255, 200);
      ellipse(3 - (this.position.x / 100), -24, 5, 5);
      // Legs
      pushMatrix();
      translate(0, 0);
      rotate(-10);
      fill(171, 171, 171);
      rect(4, 19, 7, 20, 2);
      fill(77, 77, 77);
      rect(4, 26, 8, 7, 2);
      popMatrix();
      pushMatrix();
      translate(0, 0);
      rotate(10);
      fill(171, 171, 171);
      rect(-4, 19, 7, 20, 2);
      fill(77, 77, 77);
      rect(-4, 26, 8, 7, 2);
      popMatrix();
      fill(64, 64, 64);
      rect(0, 10, 17, 4, 2);
      fill(199, 199, 199);
      rect(0, 0, 10, 10, 2);
      popMatrix();
    };
    this.update = function () {
      if (decider2 === 0) { decider2 = -1; }
      this.position.x += decider / 4 * decider2;
      this.position.y -= decider / 2 * decider2;
      this.rotation += decider / 50 * decider2;
      if (this.position.x > width + 30) { this.position.x = -20; }
      if (this.position.x < -30) { this.position.x = width; }
      if (this.position.y > height + 30) { this.position.y = -20; }
      if (this.position.y < -30) { this.position.y = height + 30; }
    };
    // Run function to make the magic happen
    this.run = function () {
      this.display();
      this.update();
    };
  };
  // Set up the Jumper function
  AstroJumper = new astrojumper();
  var AstroPicture = new astropicture(42, 62, -6, 1.2);
  // Obstacles
  var asteriod = function (x, y) {
    this.x = x;
    this.y = y;
    this.position = new PVector(this.x, this.y);
    this.distance = dist(this.position.x, this.position.y, AstroJumper.position.x, AstroJumper.position.y);
    // Checks parameters
    this.checkEdges = function () {
      var distance = dist(this.position.x, this.position.y, AstroJumper.position.x, AstroJumper.position.y);
      if (distance <= 45 && distance >= 44) {
        health -= 10;
        collided = true;
      } else { collided = false; }
    };
    // Display Function to draw spikes
    this.display = function () {
      rectMode(CENTER);
      noStroke();
      // Things to draw
      fill(0, 0, 0, 10);
      ellipse(this.position.x, this.position.y, 45, 45);
      fill(171, 171, 171);
      ellipse(this.position.x, this.position.y, 20, 20);
      quad(this.position.x + 9, this.position.y + 18, this.position.x + 20, this.position.y + 5, this.position.x - 24, this.position.y - 5, this.position.x - 12, this.position.y + 15);
      quad(this.position.x - 9, this.position.y - 18, this.position.x - 23, this.position.y - 5, this.position.x + 20, this.position.y + 5, this.position.x + 13, this.position.y - 17);
      fill(156, 156, 156, 200);
      quad(this.position.x - 9, this.position.y + 4, this.position.x + 9, this.position.y + 9, this.position.x + 15, this.position.y - 9, this.position.x - 9, this.position.y - 9);
      fill(133, 133, 133, 100);
      quad(this.position.x - 19, this.position.y + 4, this.position.x + 9, this.position.y + 5, this.position.x - 7, this.position.y + 11, this.position.x - 4, this.position.y + 16);
      fill(186, 186, 186);
      quad(this.position.x + 15, this.position.y - 9, this.position.x - 9, this.position.y - 5, this.position.x - 15, this.position.y - 11, this.position.x + 4, this.position.y - 17);
    };
    // Update function
    this.update = function () {
    };
    // Run function to make the magic happen
    this.run = function () {
      this.checkEdges();
      this.display();
    };
  };
  var debris = function (x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d; // makes a random peice genorator
    this.position = new PVector(this.x, this.y);
    this.col = false;
    // Checks parameters
    this.checkEdges = function () {
      var distance = dist(this.position.x, this.position.y, AstroJumper.position.x, AstroJumper.position.y);
      if (distance <= 22 && distance >= 20) {
        this.col = true;
      }
    };
    // Display Function to draw spikes
    this.display = function () {
      var peice = random(0, 5);
      var drawPeice = random(peice);
      rectMode(CENTER);
      noStroke();
      // Things to draw
      pushMatrix();
      translate(this.position.x, this.position.y);
      rotate(frameCount / debRot);
      fill(252, 252, 252);
      if (this.d === 0) {
        quad(0, 0, -5, 10, -5, -6, 12, -5);
        fill(255, 0, 0);
        quad(0, 0, -5, 10, -5, -6, -12, -5);
      }
      if (this.d === 1) {
        quad(0, 2, -5, 10, -5, -6, 12, -5);
        fill(255, 0, 0);
        quad(0, 0, 10, -17, 0, -14, -12, -5);
      }
      if (this.d === 2) {
        quad(12, 2, -6, 10, -12, 2, 11, -5);
        fill(255, 0, 0);
        quad(12, -4, 10, -18, -8, -12, -12, 2);
      }
      if (this.d === 3) {
        quad(12, 2, -6, 10, -12, 2, 11, -22);
        fill(255, 0, 0);
        quad(12, -9, 10, -25, -8, -12, -17, 2);
      }
      if (this.d === 4) {
        quad(12, 2, 10, 10, -12, 2, 11, -5);
        fill(217, 217, 217);
        quad(12, -4, 10, -6, -8, -12, -12, 2);
        fill(168, 251, 255);
        ellipse(0, 0, 10, 9);
      }
      if (this.d === 5) {
        fill(255, 0, 0);
        quad(14, 2, 10, 10, -12, 2, 11, -5);
        fill(217, 217, 217);
        quad(12, -5, 10, -10, 2, -14, -12, 2);
      }
      popMatrix();
    };
    // Update function
    this.update = function () {
    };
    // Run function to make the magic happen
    this.run = function () {
      this.checkEdges();
    };
  };
  var moon = function () {
    noStroke();
    fill(222, 222, 222);
    ellipse(300, 600, 700, 60);
    // Shadows
    fill(0, 0, 0, 10);
    ellipse(560, 590, 65, 35);
    ellipse(200, 578, 55, 30);
    ellipse(420, 590, 55, 30);
    ellipse(300, 585, 45, 30);
    ellipse(60, 590, 65, 30);
    ellipse(560, 590, 65, 35);
    fill(230, 230, 230);
    ellipse(200, 578, 50, 25);
    fill(181, 181, 181);
    ellipse(200, 578, 40, 15);
    fill(230, 230, 230);
    ellipse(420, 590, 50, 25);
    fill(181, 181, 181);
    ellipse(420, 590, 40, 15);
    fill(230, 230, 230);
    ellipse(300, 585, 40, 25);
    fill(181, 181, 181);
    ellipse(300, 585, 30, 15);
    fill(230, 230, 230);
    ellipse(60, 590, 60, 25);
    fill(181, 181, 181);
    ellipse(60, 590, 50, 15);
    fill(230, 230, 230);
    ellipse(560, 590, 60, 30);
    fill(181, 181, 181);
    ellipse(560, 590, 50, 20);
  };
  var strs = function () {
    for (var i = 0; i < 50; i++) {
      fill(255, 255, 255, i * 10);
      stars.push(random(600));
      ellipse(stars[i], stars[i + 1], starSize, starSize);
    }
  };
  // Loop to set up obstacles
  for (var i = 0; i < 6; i++) {
    //asteriods[i] = new asteriod(astPos[decider][i],astPos[decider][i+2]);
    asteriods[i] = new asteriod(astPos[0][i], astPos[0][i + 2]);
  }
  for (var i = 0; i < 8; i++) {
    // debriss[i] = new debris(debPos[decider][i],debPos[decider][i+2],floor(random(0,5)));
    debriss[i] = new debris(debPos[0][i], debPos[0][i + 1], floor(random(0, 5)));
  }
  // Mouse function to handle scene changes
  var mousePressed = function () {
    if (scene === "end") {
      crashDeath = false;
      fuelDeath = false;
      scene = "menu";
      var health = 100; // Player health
      var oxygen = 100; // Player oxygen
      var fuel = 250; // Player fuel
      var collided = false;
      var left = true;
      var right = false;
      var thrust = false;
    }
  };
  // Scene management function to change all the scenes
  var sceneManagement = function () {
    if (scene === "intro") {
      if (mouseIsPressed) {
        scene = "menu";
      }
      if (time < 240) {
        time++;
        if (time < 200 && logoY < 133) {
          logoY += time * 0.3;
        }
        if (logoSize < 2.6) {
          logoSize += 0.052;
        }
        if (time < 200 && introTxtX2 > -20) {
          introTxtX += time * 0.3;
          introTxtX2 -= time * 0.3;
        }
        if (time > 90) {
          fade += 2;
        }
        if (time > 239) {
          scene = "menu";
        }
      } else {
        time = 0;
      }
      Logo.backgroundDraw();
      Logo.draw(logoX, logoY, 320, 120, logoSize);
      fill(0, 0, 0, fade);
      rect(300, 300, width, height);
    }
    if (scene === "game") {
      if (health < 1 || oxygen < 1 || fuel < 1) {
        scene = "end";
      }
      strs();
      moon();
      if (health > 0) {
        textFont(fnt);
        rectMode(CORNER);
        fill(200, health * 2.5, 0, 200);
        rect(10, 10, health * 5.8, 30, 6);
        fill(237, 237, 237, 50);
        rect(10, 10, 580, 30, 6);
        fill(33, 33, 33);
        rect(6, 568, 116, 39, 10);
        rect(480, 568, 116, 39, 10);
        fill(255, 255, 255, 200);
        textSize(25);
        text(health + "%", (health * 5.8) - 16, 25);
        textSize(18);
        fill(200, oxygen * 2.5, 0, 200);
        text("Oxygen: " + floor(oxygen) + "%", 65, 583);
        fill(200, fuel, 0, 200);
        textSize(19);
        text("Fuel: " + floor(fuel) + "%", 541, 583);
        textFont(fnt);
        textSize(10);
        if (gameStart) {
          AstroJumper.run();
          oxygen -= 0.005;
          if (debriss[0].col && debriss[1].col && debriss[2].col && debriss[3].col && debriss[4].col && debriss[5].col && debriss[6].col && debriss[7].col) {
            scene = "win";
          }
        }
      }
      for (var i = 0; i < asteriods.length; i++) {
        asteriods[i].run();
        rectMode(CENTER);
      }
      for (var i = 0; i < debriss.length; i++) {
        debriss[i].run();
        if (debriss[i].col === false) {
          debriss[i].display();
        }
      }
      if (gameStart === false) {
        if (mouseIsPressed && mouseX > 200 && mouseX < 400 && mouseY > 376 && mouseY < 426) {
          gameStart = true;
        }
        textFont(fnt);
        textSize(33);
        fill(153, 0, 0);
        text("Collect the ship parts to rebuild a\nfly back to earth!! Quick, hurry before \nyour supplies runs out!", 295, 200);
        fill(255, 255, 255);
        text("Collect the ship parts to rebuild a\nfly back to earth!! Quick, hurry before \nyour supplies runs out!", 300, 200);
        rectMode(CORNER);
        textSize(10);
        fill(255, 0, 43);
        rect(200, 376, 200, 50, 15);
        fill(255, 255, 255);
        textFont(fnt2);
        textSize(38);
        text("Start", 300, 400);
        rectMode(CENTER);
        textFont(fnt);
        textSize(10);
      }
    }
    if (scene === "end" && scene !== "menu") {
      for (var i = 0; i < 650; i++) {
        stroke(i * 0.4 - 10, (i + 130) * 0.2 - 100, i * 10 - 10000);
        line(0, i - 50, 600, i - 50);
      }
      textAlign(CENTER, CENTER);
      if (crashDeath) {
        textFont(fnt3);
        textSize(59);
        text("YOU CRASHED\n ON THE MOON!", 300, 125);
      }
      if (fuelDeath) {
        textFont(fnt3);
        textSize(59);
        text("YOU WENT TO FAR &\nRAN OUT OF FUEL!", 300, 125);
      }
      textFont(fnt);
      textSize(99);
      fill(255, 0, 0);
      text("YOU LOST!", (sin(frameCount * 10) * 5) + 300, (sin(frameCount * 5) * 5) + 300);
      fill(255, 255, 255);
      text("YOU LOST!", (-sin(frameCount * 10) * 5) + 300, -(sin(frameCount * 10) * 5) + 300);
      text("Try Again..", 300, 520);
      textFont(fnt);
    }
    else { crashDeath = false; fuelDeath = false; }
    if (scene === "menu") {
      pushMatrix();
      translate(5, 10);
      AstroPicture.run();
      fill(tCol2);
      stroke(tCol2);
      {
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
          triangle(-34, -26, -30, -48, -58, -47);
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
      }
      for (var i = 0; i < 5; i++) {
        Button[i].run();
      }
    }
    if (scene === "levels") {
      noStroke();
      for (var i = 5; i < Button.length; i++) {
        Button[i].run();
      }
      textFont(fnt3);
      textSize(40);
      fill(255, 255, 255);
      text("Levels:", 100, 50);
      textFont(fnt);
      textSize(10);
    }
    if (scene === "arcade") {

    }
    if (scene === "shop") {
      Button[5].run();
    }
    if (scene === "how?") {
      Button[5].run();
    }
    if (scene === "credits") {
      textFont(fnt3);
      textSize(30);
      fill(247, 247, 247);
      text("SPENCER LEPINE ©2017\n\n'Finished' on -/-/-\nLast Updated on 9/24/17\n\nAll credit goes to \nSpencer Lepine.", 0, 0, width, height);
      Button[5].run();
      textSize(10);
    }
    if (scene === "win") {
      fill(255, 0, 0);
      textFont(fnt2);
      textSize(40);
      text("You Won", 300, 300);
      textSize(10);
    }
    system();
  };
  // Draw function that repeats every second
  draw = function () {
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    background(0, 0, 0);
    sceneManagement();
    // noLoop();
  };

}

const AstroJumperGame = {
  PROJECT_NAME: 'AstroJumper Game',
  PROJECT_LINK: 'https://www.khanacademy.org/computer-programming/astrojumper-wip/5389268692434944',
  main,
}