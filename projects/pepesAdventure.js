var main = function () {
  /**
    ╔═╗───╔═╗───╔═╗     ─────╔╗────────────╔╗──────────
    ║╬║╔═╗║╬║╔═╗║═╣     ╔═╗─╔╝║╔═╦═╗╔═╗╔═╦╗║╚╗╔╦╗╔╦╗╔═╗
    ║╔╝║╩╣║╔╝║╩╣╠═║     ║╬╚╗║╬║╚╗║╔╝║╩╣║║║║║╔╣║║║║╔╝║╩╣
    ╚╝─╚═╝╚╝─╚═╝╚═╝     ╚══╝╚═╝─╚═╝─╚═╝╚╩═╝╚═╝╚═╝╚╝─╚═╝

    MADE BY SPENCER LEPINE
    Date Started - Finished: 5/22/17 - 5/26/17

    Comment any glitches/bugs you find!
    Tell me what you thought off the game too!

    I simply wanted to learn how to make a platformer game, but could not do it by myself. I finnally found a god template to use and I used a lot of the code to startmy own platformer, but now I understand the physics and basics of the game. I hope you enjoy playing this yourself and feel free to spin this off and make your own game!!

    MADE WITH THE HELP OF PLATFORMER TEMPLATE MADE BY: GameChief999

    FOLLOW ME ON TWITTER: spencer_lepine

**/

  {
    var px = 10;
    var py = 30;
    var gravity = 0;
    var vel = 0;
    var speed = 3;
    var input = [];
    var scene = 1;
    var level = 1;
    var points = 0;
    var deaths = 0;
    var f = createFont("cursive");
    var keyUnlocked = false;
    var playersize = 34;
    textAlign(CENTER);

    keyPressed = function () { input[keyCode] = true; };
    keyReleased = function () { input[keyCode] = false; };

    var drawPepe = function (px, py) {
      // scale = 20 times as large
      var width = playersize;
      var height = playersize;
      noStroke();
      fill(82, 135, 71);
      ellipse(px + 0.365, py + 0.25, width * 0.28, height * 0.315);
      ellipse(px + 0.62, py + 0.25, width * 0.28, height * 0.315);
      fill(41, 138, 81);
      ellipse(px + 0.5425, py + 0.5425, width * 0.685, height * 0.385);
      ellipse(px + 0.4125, py + 0.3425, width * 0.3675, height * 0.2175);
      ellipse(px + 0.6775, py + 0.275, width * 0.3675, height * 0.2175);
      ellipse(px + 0.6175, py + 0.28, width * 0.3675, height * 0.2175);
      ellipse(px + 0.24, py + 0.49, width * 0.2375, height * 0.4425);
      ellipse(px + 0.3875, py + 0.7025, width * 0.3675, height * 0.1025);
      ellipse(px + 0.4325, py + 0.7375, width * 0.4025, height * 0.085);
      fill(255, 255, 255);
      stroke(2, 2, 2);
      strokeWeight(1);
      ellipse(px + 0.6775, py + 0.3425, width * 0.2975, height * 0.14);
      ellipse(px + 0.4125, py + 0.3425, width * 0.2825, height * 0.14);
      noStroke();
      fill(0, 0, 0);
      ellipse(px + 0.4125, py + 0.345, width * 0.1325, height * 0.1325);
      ellipse(px + 0.6875, py + 0.345, width * 0.1325, height * 0.1325);
      fill(255, 196, 196);
      rect(px + 0.375, py + 0.515, width * 0.4975, height * 0.0925, playersize * 0.85);
      fill(199, 151, 151);
      rect(px + 0.375, py + 0.555, width * 0.4975, height * 0.02, playersize * 0.85);

      // body
      fill(28, 140, 73);
      rect(px + 0.2575, py + 0.775, width * 0.05, height * 0.13, playersize * 0.3);
      rect(px + 0.5375, py + 0.775, width * 0.05, height * 0.13, playersize * 0.3);

      rect(px + 0.3225, py + 0.8625, width * 0.08, height * 0.13, playersize * 0.3);
      rect(px + 0.45, py + 0.8625, width * 0.08, height * 0.13, playersize * 0.3);

      fill(32, 161, 84);
      rect(px + 0.3, py + 0.75, width * 0.25, height * 0.13, playersize * 0.3);



    };

    var drawPepeJump = function (px, py) {
      // scale = 20 times as large
      var width = playersize;
      var height = playersize;
      noStroke();
      fill(97, 171, 80);
      ellipse(px + 10, py + 5, 15, 11);
      fill(247, 247, 247);
      ellipse(px + 8, py + 3, 5, 4);
      ellipse(px + 12, py + 3, 5, 4);
      fill(0, 0, 0);
      ellipse(px + 8, py + 3, 2, 1);
      ellipse(px + 12, py + 3, 2, 1);
      fill(93, 191, 69);
      rect(px + 7, py + 8, 5, 7, 2);
      rect(px + 3, py + 14, 6, 2, 1);
      rect(px + 10, py + 14, 6, 2, 1);
      fill(77, 168, 54);
      rect(px + 4, py + 10, 4, 2, 1);
      rect(px + 12, py + 10, 4, 2, 1);
      fill(247, 172, 231);
      rect(px + 8, py + 6, 5, 2, 1);
    };

    var drawPepeUser = function (px, py) {
      // scale = 20 times as large
      var width = playersize;
      var height = playersize;
      noStroke();
      fill(97, 171, 80);
      ellipse(px + 10, py + 5, 15, 11);
      fill(247, 247, 247);
      ellipse(px + 8, py + 3, 5, 4);
      ellipse(px + 12, py + 3, 5, 4);
      fill(0, 0, 0);
      ellipse(px + 8, py + 3, 2, 1);
      ellipse(px + 12, py + 3, 2, 1);
      fill(93, 191, 69);
      rect(px + 7, py + 8, 5, 7, 2);
      rect(px + 7, py + 14, 2, 6, 1);
      rect(px + 10, py + 14, 2, 6, 1);
      fill(77, 168, 54);
      rect(px + 6, py + 10, 2, 4, 1);
      rect(px + 11, py + 10, 2, 4, 1);
      fill(247, 172, 231);
      rect(px + 8, py + 6, 5, 2, 1);
    };

    var block = function (x, y) {
      fill(5, 69, 0);
      rect(x, y, 20, 20);
      fill(0, 97, 5);
      rect(x + 3, y + 3, 14, 14, 2);
      fill(0, 89, 9);
      rect(x + 6, y + 6, 8, 8, 2);
      fill(4, 107, 9);
      triangle(x, y, x, y + 18, x + 18, y + 18);
      if (px + 20 > x && px < x + 20 && py + 20 > y && py < y + 20) {
        // block is above
        if (py + 20 > y && py + 20 < y + 10 && gravity >= 0) {
          py = y - 20; gravity = 0;
        }
        // block is below
        if (py < y + 20 && py > y + 10 && gravity < 0) {
          py = y + 20; gravity = 0.1;
        }
        // block hits sides
        if (py + 18 > y && py < y + 18) {

          if (px + 20 > x && px + 20 < x + 5) {
            vel = 0; px = x - 21; // THESE NEED TO BE x+21 not 20
          }
          if (px < x + 20 && px > x + 15) {
            vel = 0; px = x + 21; // THESE NEED TO BE x+21 not 20
          }
        }
      }
    };

    var lava = function (x, y) {
      fill(255, 170, 33);
      rect(x, y, 20, 20);
      fill(217, 45, 26);
      rect(x + 3, y + 3, 14, 14, 2);

      if (px + 20 > x && px < x + 20 && py + 20 > y && py < y + 20) {
        px = 20;
        py = 40;
        //playSound((getSound("rpg/water-bubble")));
        deaths++;
        points--;
        keyUnlocked = false;
      }
    };

    var spike = function (x, y) {
      // spike 1
      fill(201, 201, 201);
      triangle(x, y + 20, x + 2.5, y + 20, x + 2.5, y);
      fill(87, 87, 87);
      triangle(x + 2.5, y + 20, x + 5, y + 20, x + 2.5, y);
      // spike 2
      fill(201, 201, 201);
      triangle(x + 5, y + 20, x + 7.5, y + 20, x + 7.5, y);
      fill(87, 87, 87);
      triangle(x + 7.5, y + 20, x + 10, y + 20, x + 7.5, y);
      // spike 3
      fill(201, 201, 201);
      triangle(x + 10, y + 20, x + 12.5, y + 20, x + 12.5, y);
      fill(87, 87, 87);
      triangle(x + 12.5, y + 20, x + 15, y + 20, x + 12.5, y);
      // spike 4
      fill(201, 201, 201);
      triangle(x + 15, y + 20, x + 17.5, y + 20, x + 17.5, y);
      fill(87, 87, 87);
      triangle(x + 17.5, y + 20, x + 20, y + 20, x + 17.5, y);

      if (px + 20 > x && px < x + 20 && py + 20 > y && py < y + 20) {
        px = 20;
        py = 40;
        //playSound((get("rpg/metal-clink")));
        deaths++;
        points -= 10;
        keyUnlocked = false;
      }
    };

    var displayPoints = function () {
      textMode(CENTER);
      textSize(15);
      textFont(f, 15);
      fill(0, 0, 0);
      text("Points: " + points, width - 357, height - 385);
      text("Deaths: " + deaths, 130, height - 385);
      text("Level " + level, width - 30, height - 8);
    };

    var levelEnd = function (x, y) {
      stroke(0, 0, 0);
      strokeWeight(0.5);
      var cw = 20;
      var ch = 20;
      fill(0, 255, 34);
      ellipse(x, y, 17, 17);
      noStroke();
      fill(3, 145, 29);
      ellipse(x, y, cw * 0.4, ch * 0.4);
      if (px + 17 > x && px < x + 17 && py + 17 > y && py < y + 17 && keyUnlocked === true) {
        px = 30;
        py = 10;
        scene++;
        points += 100;
        level++;
        keyUnlocked = false;
      }
      if (px + 17 > x && px < x + 17 && py + 17 > y && py < y + 17 && keyUnlocked === false) {
        textFont("verdana");
        textSize(11);
        fill(255, 224, 227, 200);
        rect(120, 175, 160, 30, 4);
        fill(255, 0, 0);
        text("You haven't unlocked the key!!", 200, 195);
      }
    };

    var levelKey = function (x, y) {
      noStroke();
      fill(255, 208, 0);
      rect(x + 10, y + 2, 3, 17);
      fill(186, 149, 0);
      rect(x + 8, y + 10, 2, 1);
      rect(x + 8, y + 12, 2, 1);
      rect(x + 8, y + 14, 2, 1);
      rect(x + 8, y + 16, 2, 1);
      fill(255, 208, 0);
      ellipse(x + 10, y + 2, 7, 7);
      fill(191, 179, 11);
      ellipse(x + 10, y + 2, 4, 4);
      if (px + 17 > x && px < x + 17 && py + 17 > y && py < y + 17) {
        //playSound(getSound("rpg/metal-chime"));
        if (points <= scene * 100) {
          points += 100;
        }
        keyUnlocked = true;
      }
    };

    var drawEnd = function () {
      textAlign(CENTER);
      textMode(CENTER);
      var f = createFont("cursive");
      var f2 = createFont("verdana");
      textFont(f, 15);
      textSize(49);
      background(189, 248, 255);
      fill(9, 176, 242);
      ellipse(200, 200, 600, 600);
      fill(61, 200, 255);
      ellipse(200, 200, 550, 550);
      fill(84, 204, 255);
      ellipse(200, 200, 500, 500);
      fill(99, 208, 255);
      ellipse(200, 200, 450, 450);
      fill(112, 212, 255);
      ellipse(200, 200, 400, 400);
      fill(143, 221, 255);
      ellipse(200, 200, 350, 350);
      fill(156, 225, 255);
      ellipse(200, 200, 300, 300);
      fill(173, 230, 255);
      ellipse(200, 200, 250, 250);
      fill(184, 233, 255);
      ellipse(200, 200, 200, 200);
      fill(196, 236, 255);
      ellipse(200, 200, 150, 150);
      fill(212, 241, 255);
      ellipse(200, 200, 100, 100);

      fill(237, 247, 252);
      ellipse(200, 200, 50, 50);



      for (var i = 0; i < 14; i++) {
        noStroke();
        fill(0, 37, 140);
        rect((i * 30), 20, 20, 20, 3);
        fill(82, 110, 189);
        rect((i * 30) + 2, 22, 16, 16, 3);
        image(getImage("cute/GemBlue"), (i * 30) + 2, 14, 16, 24);
      }
      for (var i = 0; i < 14; i++) {
        noStroke();
        fill(0, 37, 140);
        rect((i * 30), 360, 20, 20, 3);
        fill(82, 110, 189);
        rect((i * 30) + 2, 362, 16, 16, 3);
        image(getImage("cute/GemBlue"), (i * 30) + 2, 354, 16, 24);
      }
      fill(26, 0, 255);
      text("YOU WON!", 59, 176, 300, 200);
      fill(255, 0, 0);
      text("YOU WON!", 59, 178, 300, 200);
      textSize(20);
      fill(0, 0, 0);
      textFont(f, 14);
      text("Click anywhere to restart", 119, 270, 167, 50);
      textFont(f2, 16);
      text("Stats:", 119, 80, 167, 50);
      text("Stats:", 119.3, 80, 167, 50);
      textFont(f, 18);
      text("Points: " + points, 119, 110, 167, 50);
      text("Deaths: " + deaths, 119, 130, 167, 50);
    };

    var drawPepeKey = function (x, y) {
      noStroke();
      fill(82, 135, 71);
      ellipse(x + 146, y + 100, 112, 126);
      ellipse(x + 248, y + 100, 112, 126);
      fill(41, 138, 81);
      ellipse(x + 207, y + 215, 274, 154);
      ellipse(x + 165, y + 137, 147, 87);
      ellipse(x + 271, y + 137, 147, 87);
      ellipse(x + 148, y + 110, 147, 87);
      ellipse(x + 247, y + 112, 147, 87);
      ellipse(x + 96, y + 196, 95, 177);
      ellipse(x + 155, y + 281, 147, 41);
      ellipse(x + 173, y + 292, 161, 34);
      fill(255, 255, 255);
      stroke(2, 2, 2);
      strokeWeight(1);
      ellipse(x + 271, y + 137, 119, 56);
      ellipse(x + 165, y + 137, 113, 56);
      noStroke();
      fill(0, 0, 0);
      ellipse(x + 165, y + 138, 53, 53);
      ellipse(x + 275, y + 138, 53, 53);
      fill(255, 196, 196);
      rect(x + 150, y + 206, 199, 37, 19);
      fill(199, 151, 151);
      rect(x + 150, y + 222, 199, 8, 19);
    };

    var drawStart = function () {
      textAlign(CENTER);
      textMode(CENTER);
      var f = createFont("cursive");
      var f2 = createFont("verdana");
      textFont(f, 15);
      textSize(49);
      background(189, 248, 255);
      fill(9, 176, 242);
      ellipse(200, 200, 600, 600);
      fill(61, 200, 255);
      ellipse(200, 200, 550, 550);
      fill(84, 204, 255);
      ellipse(200, 200, 500, 500);
      fill(99, 208, 255);
      ellipse(200, 200, 450, 450);
      fill(112, 212, 255);
      ellipse(200, 200, 400, 400);
      fill(143, 221, 255);
      ellipse(200, 200, 350, 350);
      fill(156, 225, 255);
      ellipse(200, 200, 300, 300);
      fill(173, 230, 255);
      ellipse(200, 200, 250, 250);
      fill(184, 233, 255);
      ellipse(200, 200, 200, 200);
      fill(196, 236, 255);
      ellipse(200, 200, 150, 150);
      fill(212, 241, 255);
      ellipse(200, 200, 100, 100);

      fill(237, 247, 252);
      ellipse(200, 200, 50, 50);



      for (var i = 0; i < 14; i++) {
        noStroke();
        fill(0, 37, 140);
        rect((i * 30), 20, 20, 20, 3);
        fill(82, 110, 189);
        rect((i * 30) + 2, 22, 16, 16, 3);
        image(getImage("cute/GemBlue"), (i * 30) + 2, 14, 16, 24);
      }
      for (var i = 0; i < 14; i++) {
        noStroke();
        fill(0, 37, 140);
        rect((i * 30), 360, 20, 20, 3);
        fill(82, 110, 189);
        rect((i * 30) + 2, 362, 16, 16, 3);
        image(getImage("cute/GemBlue"), (i * 30) + 2, 354, 16, 24);
      }
      fill(4, 201, 30);
      text("Pepe's Adventure", 59, 110, 300, 200);
      fill(0, 255, 34);
      text("Pepe's Adventure", 59, 112, 300, 200);
      textSize(20);
      fill(0, 53, 56);
      text("By Spencer Lepine", 207, 69);
      fill(0, 216, 227);
      text("By Spencer Lepine", 209, 69);
      fill(0, 92, 153);
      rect(111, 269, 173, 35, 5);
      fill(0, 149, 255);
      rect(114, 272, 173, 35, 5);
      textFont(f2, 23);
      fill(255, 255, 255);
      text("Click To Start", 114, 277, 167, 50);
      fill(1, 13, 33);
      textFont(f2, 23);
      text("Click To Start", 116, 277, 167, 50);
      textFont(f, 8);
      text("RAWR XD", 119, 260, 167, 50);

    };

    var displayLevel1 = function () {
      // level outline
      {
        for (var i = 0; i < 20; i++) {

          block(i * 20, -20);

        }
      }
      // BLOCKS
      {
        // spawn platform
        for (var i = 0; i < 10; i++) {

          block((i * 60) + 10, (-i * 30) + 345);

        }
        // key platform
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 130, 180);

        }
        for (var i = 0; i < 3; i++) {

          block((i * 20) + 300, 100);

        }
        // blocker wall
        for (var i = 0; i < 4; i++) {

          block((i / 20) + 300, (i * 20) + 20);

        }
      }
      textSize(10);
      fill(184, 243, 252);
      rect(10, 20, 150, 30, 4);
      rect(10, 60, 100, 30, 4);
      fill(0, 0, 0);
      text("USE ARROW KEYS TO MOVE", 85, 37);
      text("Press R to Restart", 60, 77);
    };

    var displayLevel2 = function () {
      // level outline
      {
        for (var i = 0; i < 20; i++) {

          block(i * 20, -20);

        }
      }
      // BLOCKS
      {
        // spawn platform
        for (var i = 0; i < 4; i++) {

          block(i * 20, 60);

        }
        // spawn platform
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 380, 60);

        }

        // end platform
        for (var i = 0; i < 1; i++) {

          block((i / 20) + 240, (i * 20) + 140);

        }
        // second platform
        for (var i = 0; i < 4; i++) {

          block((i * 20) + 180, 60);

        }
        for (var i = 0; i < 4; i++) {

          block((i / 20) + 260, (i * 20) + 180);

        }
        for (var i = 0; i < 5; i++) {

          block((i / 20) + 260, (i * 20) + 60);

        }
        for (var i = 0; i < 3; i++) {

          block((i * 20) + 280, 240);

        }
        for (var i = 0; i < 3; i++) {

          block((i * 20) + 40, 340);

        }
        for (var i = 0; i < 1; i++) {

          block((i * 20), 280);

        }
        // second to last jump
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 40, 220);

        }
        //last jump
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 160, 160);

        }
      }
      // LAVA
      {
        // first lava jump
        for (var i = 0; i < 5; i++) {

          lava((i * 20) + 80, 60);

        }
      }
      // spikes
      {
        // next to first lava
        for (var i = 0; i < 1; i++) {

          spike((i * 20) + 200, 40);

        }
        // down the drop
        for (var i = 0; i < 3; i++) {

          spike((i * 20) + 280, 220);

        }
        // before the last jump
        for (var i = 0; i < 1; i++) {

          spike((i * 20) + 60, 320);

        }
      }
    };

    var displayLevel3 = function () {
      // level outline
      {
        for (var i = 0; i < 20; i++) {

          block(i * 20, -20);

        }
      }
      // BLOCKS
      {
        // tall drop wall
        for (var i = 0; i < 8; i++) {

          block((i / 20) + 280, (i * 20) + 100);

        }
        // spawn platform
        for (var i = 0; i < 4; i++) {

          block(i * 20, 60);

        }
        // down the dro[
        for (var i = 0; i < 4; i++) {

          block((i * 20) + 300, 320);

        }
        // spawn platform
        for (var i = 0; i < 4; i++) {

          block((i * 20) + 380, 260);

        }
        // second platform
        for (var i = 0; i < 4; i++) {

          block((i * 20) + 180, 60);

        }
        // third platform
        for (var i = 0; i < 2; i++) {

          block((i * 20) + 320, 60);

        }
        // little drop
        for (var i = 0; i < 3; i++) {

          block((i * 20) + 340, 160);

        }
        // third platform
        for (var i = 0; i < 6; i++) {

          block((i * 20) + 20, 340);

        }
      }
      // LAVA
      {
        // first jump
        for (var i = 0; i < 5; i++) {

          lava((i * 20) + 80, 60);

        }
        // second jump
        for (var i = 0; i < 3; i++) {

          lava((i * 20) + 260, 60);

        }
      }
      // spikes
      {
        // next to first lava
        for (var i = 0; i < 1; i++) {

          spike((i * 20) + 200, 40);

        }
        // last jump
        for (var i = 0; i < 1; i++) {

          spike((i * 20) + 80, 320);

        }
        // little drop
        for (var i = 0; i < 1; i++) {

          spike((i * 20) + 380, 140);

        }
        // little drop
        for (var i = 0; i < 1; i++) {

          spike((i * 20) + 360, 300);

        }
      }
    };

    var displayLevel4 = function () {
      // level outline
      {
        for (var i = 0; i < 6; i++) {

          block((i / 20) - 20, (i * 20) - 20);

        }
      }
      // BLOCKS
      {
        // spawn platform
        for (var i = 0; i < 3; i++) {

          block((i * 20), 60);

        }
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 40, 180);

        }
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 80, 100);

        }
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 140, 140);

        }
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 80, 260);

        }
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 120, 200);

        }
        for (var i = 0; i < 2; i++) {

          block((i * 20), 120);

        }
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 260, 200);

        }
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 300, 240);

        }
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 340, 180);

        }
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 360, 60);

        }
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 380, 120);

        }
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 300, 120);

        }
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 200, 300);

        }
      }
      // LAVA
      {
        // second jump
        for (var i = 0; i < 10; i++) {

          lava((i * 20) + 100, 60);

        }
      }
      // spikes
      {
        // middle spike
        for (var i = 0; i < 1; i++) {

          spike((i * 20) + 200, 280);

        }
      }
    };

    var displayLevel5 = function () {
      // level outline
      {
        for (var i = 0; i < 7; i++) {

          block((i * 20) + 160, -20);

        }
        for (var i = 0; i < 4; i++) {

          block((i * 20) + 60, -20);

        }
      }
      // BLOCKS
      {
        // spawn platform
        for (var i = 0; i < 11; i++) {

          block(i * 20, 60);

        }
        for (var i = 0; i < 10; i++) {

          block((i * 20) + 220, 120);

        }
        // underneath spawn
        for (var i = 0; i < 5; i++) {

          block(i * 20, 140);

        }
        // long vertical collumn
        for (var i = 0; i < 11; i++) {

          block((i / 20.1) + 140, (i * 20) + 120);

        }
        for (var i = 0; i < 9; i++) {

          block((i / 20) + 200, (i * 20) + 120);

        }
        // 20,205
        for (var i = 0; i < 3; i++) {

          block((i * 20) + 40, 200);

        }
        for (var i = 0; i < 5; i++) {

          block(i * 20, 270);

        }
        for (var i = 0; i < 3; i++) {

          block((i * 20) + 100, 380);

        }
        for (var i = 0; i < 6; i++) {

          block((i / 20) + 20, (i * 20) + 290);

        }
        // 2 high - bottom right corner
        for (var i = 0; i < 2; i++) {

          block((i / 20) + 320, (i * 20) + 360);

        }
        // bottom right corner
        for (var i = 0; i < 5; i++) {

          block((i * 20) + 220, 380);

        }
        // third to last platform
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 220, 300);

        }
        // second to last platform
        for (var i = 0; i < 1; i++) {

          block((i * 20) + 280, 240);

        }
        // level end platform
        for (var i = 0; i < 3; i++) {

          block((i * 20) + 300, 180);

        }
        // first wall
        for (var i = 0; i < 3; i++) {

          block((i / 20) - 20, (i * 20));

        }
      }
      // LAVA
      {
        // first jump
        for (var i = 0; i < 1; i++) {

          lava((i * 20) + 80, 40);

        }
        // secon block
        for (var i = 0; i < 1; i++) {

          lava((i * 20) + 140, 0);

        }
        // down the drop
        for (var i = 0; i < 2; i++) {

          lava((i * 20) + 160, 280);

        }
        // second jump
        for (var i = 0; i < 3; i++) {

          lava((i * 20) + 220, 60);

        }
        // down the zig zag
        for (var i = 0; i < 2; i++) {

          lava((i * 20) + 100, 200);

        }
        // bottom left corner
        for (var i = 0; i < 3; i++) {

          lava((i * 20) + 40, 380);

        }
        // bottom right corner
        for (var i = 0; i < 3; i++) {

          lava((i * 20) + 340, 380);

        }
        // near the end
        for (var i = 0; i < 2; i++) {

          lava((i * 20) + 220, 180);

        }
        // end jump
        for (var i = 0; i < 1; i++) {

          lava((i * 20) + 200, 300);

        }
        // skinny part
        for (var i = 0; i < 1; i++) {

          lava((i * 20) + 120, 320);

        }
        // underneath spawn
        for (var i = 0; i < 3; i++) {

          lava((i / 20) + 20, (i * 20) + 80);

        }
      }
      // spikes
      {
        // next to first lava
        for (var i = 0; i < 1; i++) {

          spike((i * 20) + 200, 40);

        }
        // underneath spawn
        for (var i = 0; i < 1; i++) {

          spike((i * 20) + 80, 120);

        }
        // next to first lava
        for (var i = 0; i < 1; i++) {

          spike((i * 20), 250);

        }
      }
    };

    mouseClicked = function () {
      if (scene === 1) {
        scene++;
      }
      if (scene === 7) {
        scene = 1;
      }
    };

    draw = function () {
      background(217, 245, 247);
      if (scene === 1) {
        drawStart();
      }
      else if (scene === 2) { // LEVEL 1
        py += gravity;
        gravity += 0.1;
        px += round(vel);
        displayLevel1();
        if (keyUnlocked === false) {
          levelKey(130, 160);
        }
        levelEnd(335, 90);
      }
      else if (scene === 3) { // level 2
        py += gravity;
        gravity += 0.1;
        px += round(vel);
        displayLevel2();
        if (keyUnlocked === false) {
          levelKey(380, 40);
        }
        levelEnd(250, 130);
      }
      else if (scene === 4) {
        py += gravity;
        gravity += 0.1;
        px += round(vel);
        displayLevel3();
        levelEnd(50, 330);
        if (keyUnlocked === false) {
          levelKey(380, 240);
        }
      }
      else if (scene === 5) {
        py += gravity;
        gravity += 0.1;
        px += round(vel);
        displayLevel4();
        if (keyUnlocked === false) {
          levelKey(360, 40);
        }
        levelEnd(20, 90);
      }
      else if (scene === 6) {
        py += gravity;
        gravity += 0.1;
        px += round(vel);
        displayLevel5();
        if (keyUnlocked === false) {
          levelKey(50, 120);
        }
        levelEnd(331, 164);
      }
      else if (scene === 7) {
        noStroke();
        background(245, 250, 249);
        drawEnd();
      }

      // KEYS
      {
        if (input[LEFT]) {
          vel -= 0.2; px -= speed;
        }
        if (input[RIGHT]) {
          vel += 0.2; px += speed;
        }
        if (input[UP] && keyIsPressed && gravity < 1 && scene < 7) {
          drawPepeJump(px, py);
        } else if (input && scene < 7 && scene > 1) {
          drawPepeUser(px, py);
        }
        if (input[UP] && gravity === 0) {
          gravity = -3.5;
          //playSound(getSound("retro/jump1"));
        }
        if (input[32] && gravity === 0) {
          gravity = -3.5;
          //playSound(getSound("retro/jump1"));
        }
        if (input[82]) { // reset button
          px = 20;
          py = 30;
          keyUnlocked = false;
        }
        if (input[80]) {
          drawPepeKey(5, 36);
        }
      }
      if (scene > 1 && scene < 7) {
        displayPoints();
      } // display points
      vel = constrain(vel, -2, 2);
      if (vel > 0) { vel -= 0.1; }
      if (vel < 0) { vel += 0.1; }
      if (py > 450) { py = 40; px = 10; }
      vel = constrain(vel, -2, 2);
      if (vel > 0) { vel -= 0.1; }
      if (vel < 0) { vel += 0.1; }
      if (py > 420) {
        py = 40;
        px = 20;
        //play(getSound("retro/boom1"));
        deaths++;
        if (points > 0) {
          points -= 50;
        }
        keyUnlocked = false;
      }
      fill(255);


    };

    /**
    ╔═══╗╔═══╗╔═══╗╔═╗─╔╗╔═══╗╔═══╗╔═══╗     ╔╗───╔═══╗╔═══╗╔══╗╔═╗─╔╗╔═══╗
    ║╔═╗║║╔═╗║║╔══╝║║╚╗║║║╔═╗║║╔══╝║╔═╗║     ║║───║╔══╝║╔═╗║╚╣─╝║║╚╗║║║╔══╝
    ║╚══╗║╚═╝║║╚══╗║╔╗╚╝║║║─╚╝║╚══╗║╚═╝║     ║║───║╚══╗║╚═╝║─║║─║╔╗╚╝║║╚══╗
    ╚══╗║║╔══╝║╔══╝║║╚╗║║║║─╔╗║╔══╝║╔╗╔╝     ║║─╔╗║╔══╝║╔══╝─║║─║║╚╗║║║╔══╝
    ║╚═╝║║║───║╚══╗║║─║║║║╚═╝║║╚══╗║║║╚╗     ║╚═╝║║╚══╗║║───╔╣─╗║║─║║║║╚══╗
    ╚═══╝╚╝───╚═══╝╚╝─╚═╝╚═══╝╚═══╝╚╝╚═╝     ╚═══╝╚═══╝╚╝───╚══╝╚╝─╚═╝╚═══╝
    **/
  }

}

const pepesAdventure = {
  PROJECT_NAME: 'Pepe\'s Adventure Game',
  PROJECT_LINK: 'https://www.khanacademy.org/computer-programming/pepes-adventure/6665567663357952',
  main,
}