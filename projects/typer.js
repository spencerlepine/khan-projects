var main = function () {
  // Starting text position
  var textX = 5;
  var textY = 13;
  // Array for key Input that eventually displays the text
  var input = [];
  var fnt = createFont("monospace", 10);

  draw = function () {
    background(0, 0, 0);
    textMode(CENTER);
    textFont(fnt);
    // Draw Text
    fill(0, 255, 13);
    textSize(16);
    // display the array, and a loop positions every key.
    for (var x = 0; x < 39; x++) {
      text(input[x], (x * 10) + 5, textY);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 40], (x * 10) + 5, textY + 15);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 80], (x * 10) + 5, textY + 30);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 120], (x * 10) + 5, textY + 45);
    }
    for (var x = 0; x < 39; x++) {
      textSize(16);
      text(input[x + 160], (x * 10) + 5, textY + 60);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 200], (x * 10) + 5, textY + 75);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 240], (x * 10) + 5, textY + 90);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 280], (x * 10) + 5, textY + 105);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 320], (x * 10) + 5, textY + 120);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 360], (x * 10) + 5, textY + 135);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 400], (x * 10) + 5, textY + 150);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 440], (x * 10) + 5, textY + 165);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 480], (x * 10) + 5, textY + 180);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 520], (x * 10) + 5, textY + 195);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 560], (x * 10) + 5, textY + 210);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 600], (x * 10) + 5, textY + 225);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 640], (x * 10) + 5, textY + 240);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 680], (x * 10) + 5, textY + 255);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 720], (x * 10) + 5, textY + 270);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 760], (x * 10) + 5, textY + 285);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 800], (x * 10) + 5, textY + 300);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 840], (x * 10) + 5, textY + 315);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 880], (x * 10) + 5, textY + 330);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 920], (x * 10) + 5, textY + 345);
    }
    for (var x = 0; x < 39; x++) {
      text(input[x + 960], (x * 10) + 5, textY + 360);
    }

    // Key Pressed Function
    keyPressed = function () {
      // Put a .pop() function to get rid of the last key
      if (keyPressed && keyCode === 8) {
        input.pop();
      }
      // If keys are pressed, add a string a.k.a the letter, to the array
      // If the key is 16 that is shift, so it doesn't input it
      if (keyCode !== 8 && keyCode !== 16) {
        input.push(key);
      }
    };
    textSize(10);
    text("Characters: " + input.length, 4, height - 5);
  };
}

const typer = {
  PROJECT_NAME: 'Typer',
  PROJECT_LINK: 'https://www.khanacademy.org/computer-programming/typer/6751589343494144',
  main,
}