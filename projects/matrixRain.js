var main = function () {
  /**

    MATRIX RAIN ANIMATION

    Created by: Spencer Lepine (⍟ֆքɛռƈɛʀ ʟɛքɨռɛ⍟)

    Made on: 7/6/17

**/
  // Global Variables
  var yPos = [];
  var xPos = [];
  var speed = random(4, 10);
  // Loops to draw Initial "raindrops"
  for (var i = 0; i < 30; i++) {
    xPos.push(random(0, 380));
    yPos.push(random(-200, -800));
  }
  // Draw function to execute the process
  draw = function () {
    background(0);
    for (var i = 0; i < xPos.length; i++) {
      // I found these sybmols here https://www.branah.com/chinese
      fill(0, 2, 1);
      text("由", xPos[i] + 10, yPos[i] - 36);
      fill(0, 9, 1);
      text("甲", xPos[i] + 10, yPos[i] - 25);
      fill(0, 15, 1);
      text("申", xPos[i] + 10, yPos[i] - 14);
      fill(0, 22, 1);
      text("甴", xPos[i] + 10, yPos[i] - 3);
      fill(0, 29, 1);
      text("田", xPos[i] + 10, yPos[i] + 10);
      fill(0, 36, 2);
      text("由", xPos[i] + 10, yPos[i] + 20);
      fill(0, 43, 3);
      text("甲", xPos[i] + 10, yPos[i] + 34);
      fill(0, 50, 4);
      text("申", xPos[i] + 10, yPos[i] + 44);
      fill(0, 57, 5);
      text("甴", xPos[i] + 10, yPos[i] + 54);
      fill(0, 64, 1);
      text("电", xPos[i] + 10, yPos[i] + 67);
      fill(0, 71, 2);
      text("甶", xPos[i] + 10, yPos[i] + 78);
      fill(0, 78, 3);
      text("男", xPos[i] + 10, yPos[i] + 89);
      fill(0, 85, 4);
      text("甸", xPos[i] + 10, yPos[i] + 100);
      fill(0, 92, 5);
      text("甹", xPos[i] + 10, yPos[i] + 111);
      fill(0, 99, 6);
      text("町", xPos[i] + 10, yPos[i] + 122);
      fill(0, 106, 7);
      text("画", xPos[i] + 10, yPos[i] + 133);
      fill(0, 113, 8);
      text("甼", xPos[i] + 10, yPos[i] + 144);
      fill(0, 120, 9);
      text("甽", xPos[i] + 10, yPos[i] + 155);
      fill(0, 127, 10);
      text("甾", xPos[i] + 10, yPos[i] + 166);
      fill(0, 134, 11);
      text("甿", xPos[i] + 10, yPos[i] + 177);
      fill(0, 141, 12);
      text("畀", xPos[i] + 10, yPos[i] + 188);
      fill(0, 148, 13);
      text("畂", xPos[i] + 10, yPos[i] + 199);
      fill(0, 155, 14);
      text("畃", xPos[i] + 10, yPos[i] + 210);
      fill(0, 162, 15);
      text("畄", xPos[i] + 10, yPos[i] + 221);
      fill(0, 169, 16);
      text("畅", xPos[i] + 10, yPos[i] + 232);
      fill(0, 176, 17);
      text("畆", xPos[i] + 10, yPos[i] + 243);
      fill(0, 183, 17);
      text("畇", xPos[i] + 10, yPos[i] + 254);
      fill(0, 190, 18);
      text("畈", xPos[i] + 10, yPos[i] + 265);
      fill(0, 197, 19);
      text("畉", xPos[i] + 10, yPos[i] + 276);
      fill(0, 204, 20);
      text("畊", xPos[i] + 10, yPos[i] + 287);
      fill(0, 213, 21);
      text("畋", xPos[i] + 10, yPos[i] + 298);
      fill(0, 220, 22);
      text("界", xPos[i] + 10, yPos[i] + 309);
      fill(0, 227, 23);
      text("畍", xPos[i] + 10, yPos[i] + 320);
      fill(0, 234, 24);
      text("畎", xPos[i] + 10, yPos[i] + 331);
      fill(0, 241, 25);
      text("畏", xPos[i] + 10, yPos[i] + 342);
      fill(0, 248, 26);
      text("畐", xPos[i] + 10, yPos[i] + 353);
      fill(0, 255, 26);
      text("畑", xPos[i] + 10, yPos[i] + 364);

      yPos[i] += speed;

      if (yPos[i] > 350) {
        yPos[i] = (random(-400, -800));
        xPos[i] = (random(0, 380));
        speed = random(8, 20);
      }
    }

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

const matrixRain = {
  PROJECT_NAME: 'Matrix Rain Animation',
  PROJECT_LINK: 'https://www.khanacademy.org/computer-programming/matrix-rain-animation/4517691865759744',
  main,
}