var main = function () {
  /**

    MADE BY: SPENCER LEPINE

    Date Started - Finished: 5/26/17 - 7/5/17 (Updated on 3/16/18)

    Comment any glitches/bugs you find!

    Enjoy the game!

    (My Best: 32.46 seconds + 616 points)

**/

  {
    // VARIABLES
    {
      var px = 20;
      var py = 30;
      var gravity = 0;
      var vel = 0;
      var speed = 3;
      var input = [];
      var scene = 1;
      var level = 1;
      var deaths = 0;
      var f = createFont("cursive");
      var f2 = createFont("verdana");
      var f3 = createFont("cursive");
      var keyUnlocked = false;
      var playersize = 34;
      var stryx = 0;
      var score = 0;
      // color
      {
        var redPlayer = color(255, 0, 0);
        var greenPlayer = color(0, 250, 0);
        var bluePlayer = color(0, 72, 255);
        var lightbluePlayer = color(0, 230, 242);
        var purplePlayer = color(238, 0, 255);
        var orangePlayer = color(255, 196, 0);
        var redP = false;
        var greenP = false;
        var blueP = false;
        var lightblueP = false;
        var purpleP = false;
        var orangeP = false;
        var playerColor = playerColor;
      }
      var store = false;
      var doorOpen = getImage("cute/DoorTallOpen");
      var doorClosed = getImage("cute/DoorTallClosed");
      var door;
      var time = 0;
      var padspd = [1, 0, 0];
      var padspdy = [0.75, 0, 0];
      var padx = [2, 100, 0];
      var pady = [200, -10, 0];
      var settings = false;
      var heartUp = false;
      var upscore = false;
      //var on = false;
      var on = false;
      var velo = 0;
      var glitchMode = false;
      var speedtime = 0;
      var TILE_SIZE = 20;
      textAlign(CENTER);
      imageMode(CENTER);
    }

    var tileGrid = [
      [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, "c", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "c", 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, "g", "g", 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, "g", "g", "g", "g", "g", "g", 0, 0, 0, "d", "g", 0, 0, 0, 0, 0, 0, 0],
        [0, 0, "d", "d", "d", "d", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//10
        [0, 0, 0, "s", "d", "d", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, "d", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "g", "g", "g", 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "d", 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      ],
      [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, "co", 0, 0, 0, 0, 0, "g", "w", "g", 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, "g", "g", "g", 0, 0, 0, 0, 0, "w", 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, "d", "d", 0, 0, 0, 0, 0, "w", 0, 0, 0, 0, 0, 0, 0, 0, "g"],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "w", 0, 0, 0, 0, 0, 0, 0, 0, "d"],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "w", 0, 0, 0, 0, 0, 0, 0, "g", "d"],
        [0, 0, 0, 0, 0, "c", 0, 0, 0, 0, "w", 0, 0, 0, 0, 0, 0, 0, "bd", "bd"],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "w", 0, 0, 0, 0, 0, 0, 0, "bd", "bd"],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "w", 0, 0, 0, 0, 0, 0, "g", "bd", "bd"],//10
        ["g", "g", "g", "g", "g", "g", "g", "g", 0, 0, "w", 0, 0, 0, 0, 0, 0, "d", "bd", "bd"],
        ["d", "d", "d", "d", "d", "d", "d", 0, 0, 0, "w", 0, 0, 0, 0, 0, 0, "d", "bd", "s"],
        ["d", "d", "d", "d", "d", 0, 0, 0, 0, 0, "w", 0, "g", "g", "g", "g", "g", "g", "g", "g"],
        ["bd", "bd", "bd", "bd", 0, 0, 0, 0, 0, 0, "w", 0, 0, "bd", "bd", "bd", "bd", "bd", "bd", "bd"],
        ["bd", "bd", "bd", "bd", 0, 0, 0, 0, 0, "w", "w", "w", 0, 0, "bd", "bd", "bd", "bd", "bd", "bd"],
        ["bd", "bd", "bd", 0, 0, 0, 0, 0, "g", "w", "g", "g", "g", 0, 0, "bd", "bd", "bd", "bd", "bd"],
        ["bd", "bd", "bd", 0, 0, 0, 0, 0, 0, "w", "d", "d", 0, 0, 0, "g", "g", "g", "bd", "bd"],
        ["bd", "bd", "bd", 0, 0, 0, 0, 0, 0, "w", 0, 0, 0, 0, 0, 0, "d", "d", "bd", "bd"],
        ["bd", "bd", "bd", 0, 0, 0, 0, 0, 0, "w", 0, 0, 0, 0, 0, 0, 0, "d", "bd", "bd"],
        ["bd", "bd", 0, 0, 0, 0, 0, 0, 0, "w", 0, 0, 0, 0, 0, 0, 0, 0, "bd", "bd"],
      ],
      [
        [0, 0, 0, 0, 0, "s", "bs", "bs", "bs", "bs", "bs", "bs", "s", 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, "s", "bs", "bs", "bs", "bs", "bs", "bs", "s", 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, "s", "bs", "bs", "s", "s", "bs", "bs", "s", 0, 0, 0, 0, 0, 0, 0],
        ["g", "g", "g", 0, 0, "s", "bs", "bs", "bs", "bs", "bs", "s", 0, 0, 0, 0, 0, 0, 0, 0],
        ["d", "d", 0, 0, 0, 0, "s", "bs", "bs", "bs", "s", 0, 0, 0, 0, 0, 0, 0, 0, "co"],
        ["d", 0, 0, 0, 0, 0, 0, "s", "bs", "bs", "s", 0, 0, 0, 0, 0, 0, 0, 0, "g"],
        ["bd", 0, 0, 0, 0, 0, 0, "s", "bs", "bs", 0, 0, 0, 0, 0, 0, 0, 0, "d", "d"],
        [0, 0, 0, 0, 0, 0, 0, 0, "s", 0, 0, 0, 0, 0, 0, 0, "bd", "bd", "bd", "bd"],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "g", "d", "bs", "bs", "s"],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s", "bs", "bs", "bs", "s"],//10
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s", "bs", "bs", "bs", "s"],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s", "bs", "bs", "bs", "s"],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s", "bs", "bs", "bs", "s"],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s", "bs", "bs", "bs", "bs", "s"],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s", "bs", "bs", "bs", "bs", "bs"],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s", "bs", "bs", "bs", "bs", "bs"],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s", "bs", "bs", "bs", "bs", "bs"],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "l", "l", "l", "s", "bs", "bs", "bs", "bs", "bs", "bs"],
        [0, 0, 0, 0, 0, 0, 0, "l", "l", "l", "l", "l", "s", "bs", "bs", "bs", "bs", "bs", "sp", "sp"],
        [0, 0, 0, 0, 0, "l", "l", "s", "s", "s", "s", "l", "l", "l", "s", "s", "s", "s", "s", "s"],
      ],
      [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "co", 0],
        ["s", "s", "s", "s", "s", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, "s", "s", "s", "s", "s", 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, "s", "r", "r", "r", "r", "r", "s", "s", 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, "s", "r", "r2", "r2", "r2", "r", "r", "r", "r", "s", 0, 0, 0],
        [0, 0, 0, 0, 0, 0, "s", "r", "r2", "r2", "r", "r", "r", "r", "s", "s", 0, 0, 0, 0],
        [0, 0, 0, 0, "s", "s", "s", "r", "r", "r", "r", "s", "s", "s", 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, "s", "s", "s", "s", 0, 0, 0, 0, 0, 0, 0, 0, 0],//10
        ["s", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "sp", "sp", "sp"],
        ["r", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s", "s", "s", "s"],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["s", "s", "s", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["r", "r", "r", "s", 0, 0, 0, 0, 0, 0, 0, "s", "s", "s", 0, 0, 0, 0, 0, 0],
        ["r", "r", "r", "r", "s", 0, 0, 0, 0, 0, "s", "r", "r", "r", "s", "s", "s", "s", 0, 0],
        ["r", "r", "r", "r", "r", "s", 0, 0, 0, "s", "r", "r", "r", "r", "r", "r", "r", "r", "s", 0],
        ["r", "r", "r", "r", "r", "s", 0, 0, 0, "s", "r", "r", "r", "r", "r", "r", "r", "r", "r", "s"],
        ["s", "s", "s", "s", 0, 0, 0, 0, 0, 0, "s", "s", "r", "r", "r", "r", "r", "s", "s", "w"],
        ["s", "s", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "s", "s", "s", "s", "s", "w", "w", "w"],
      ],
      [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s", "s", "s"],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "r", "r2"],
        ["s", "s", "s", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["r2", "r", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, "co", 0, 0, "sp", "s", "s", "s", 0, 0, "sp", "sp", 0, 0, 0, 0, 0, 0],//10
        ["s", 0, 0, "s", "s", "s", "s", "r", "r", "r", "s", "s", "s", "s", 0, 0, 0, 0, 0, 0],
        ["r", "s", "s", "r", "r", "s", "s", "s", "s", "s", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["r", "r", "s", "s", "s", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["s", "s", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, "s", "s", "s", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, "fb", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l"],
      ],
      [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, "s", "s", "bl", "bl", 0, 0, 0, 0, 0, 0, 0, 0],
        ["s", "s", "s", "s", 0, 0, 0, 0, "r2", "r", "r", "bl", 0, 0, 0, 0, 0, 0, 0, 0],
        ["r2", "r2", "r", "r", 0, 0, 0, 0, 0, 0, 0, "bl", 0, "s", "s", "s", 0, 0, 0, 0],
        ["r", "r", "r", "r", 0, 0, 0, 0, 0, 0, 0, "bl", 0, "r", "r", 0, 0, 0, 0, 0],
        ["r", "r", "r", 0, 0, 0, 0, "s", "s", "s", 0, "bl", 0, 0, 0, 0, 0, 0, 0, 0],
        ["r", "r", 0, 0, 0, 0, 0, 0, "r", "r", 0, "bl", 0, 0, 0, 0, 0, 0, 0, 0],
        ["r", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "bl", 0, 0, 0, 0, 0, 0, 0, 0],//10
        [0, 0, "s", "sp", 0, 0, 0, 0, 0, 0, 0, "bl", 0, 0, "s", "s", "s", 0, 0, 0],
        [0, 0, "s", "s", "s", 0, 0, 0, 0, 0, 0, "bl", 0, 0, "r", 0, 0, 0, 0, 0],
        [0, 0, "r", "r", 0, 0, 0, 0, 0, 0, 0, "bl", 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, "sp", 0, "bl", 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, "s", "s", "s", 0, "bl", 0, 0, 0, 0, "sp", "sp", "sp", "sp"],
        [0, 0, 0, 0, 0, 0, 0, 0, "r", "r", 0, "bl", 0, 0, 0, 0, "s", "s", "s", "s"],
        [0, 0, 0, 0, "sp", 0, 0, 0, 0, 0, 0, "bl", "co", 0, 0, 0, 0, 0, 0, 0],
        [0, 0, "s", "s", "s", "s", 0, 0, 0, 0, 0, "bl", 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, "r", "r", "r", "r", 0, 0, 0, 0, 0, "bl", 0, 0, 0, 0, 0, 0, "s", "s"],
        [0, 0, "r", "r", "r", 0, 0, 0, 0, "bl", "bl", "bl", "s", "s", "s", "bl", "bl", "bl", "bl"],
      ],
      [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["s", "s", "s", "s", "s", 0, 0, 0, 0, 0, 0, 0, 0, 0, "s", "s", "s", "s", "s", "s"],//10
        ["r", "r", "r", "r", "r2", "s", "s", "s", "s", 0, 0, "s", "s", "s", "r2", "r", "r", "r", "r", "r"],
        [0, 0, 0, 0, 0, 0, "r", "r", "r2", "s", "s", "r", "r", "r", 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, "r", "r", "r", 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    ];

    var system = function () {
      this.mcoords = false;

      if (input[77]) {
        this.mcoords = true;
      } else { this.mcoords = false; }

      if (this.mcoords === true) {
        println("\n\n" + "(" + round(mouseX / 20) + "," + round(mouseY / 20) + ")" + "\n\n\n\n");
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

    // PLAYER COLOR SETTINGS
    {
      if (redP === true) {
        playerColor = redPlayer;
      }
      if (greenP === true) {
        playerColor = greenPlayer;
      }
      if (blueP === true) {
        playerColor = bluePlayer;
      }
      if (lightblueP === true) {
        playerColor = lightbluePlayer;
      }
      if (purpleP === true) {
        playerColor = purplePlayer;
      }
      if (orangeP === true) {
        playerColor = orangePlayer;
      }
    }
    // KEY SETTINGS
    keyPressed = function () { input[keyCode] = true; };
    keyReleased = function () { input[keyCode] = false; };
    // FUNCTIONS
    {
      var button = function (x, y, label, width, target) {
        this.x = x;
        this.y = y;
        this.label = label;
        this.width = width;
        this.height = this.width * 0.44;
        this.target = target;
        this.draw = function () {
          strokeWeight(0);
          rectMode(CORNER);
          textAlign(CENTER, CENTER);
          textMode(CENTER);
          if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
            fill(44, 138, 60);
            rect(this.x, this.y, this.width, this.height, this.width * 0.1);
          } else {
            noStroke();
            fill(4, 97, 13);
            rect(this.x, this.y, this.width, this.height, this.width * 0.1);
          }
          fill(0, 255, 34);
          rect(this.x + this.width * 0.05, this.y + this.height * 0.1, this.width * 0.9, this.height * 0.8, this.width * 0.1);
          noStroke();
          noFill();
          textFont(f);
          textSize(this.width * 0.244);
          fill(0, 0, 0);
          text(this.label, this.x + this.width * 0.5, this.y + this.height * 0.5);
          if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
            fill(255, 255, 255);
            text(this.label, this.x + this.width * 0.5, this.y + this.height * 0.5);
          }
          textSize(10);
          noStroke();
          strokeWeight(1);
          rectMode(CORNER);
          textAlign(CENTER);
        };
        this.mouseCheck = function () {
          if (mouseIsPressed) {
            if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
              scene = this.target;
              store = true;
            }
          }
        };
        this.run = function () {
          this.draw();
          this.mouseCheck();
        };
      };

      var button1 = new button(170, 360, "Skip", 60, 2);

      var drawPlayer3 = function (x, y, color) {
        fill(color);
        noStroke();
        rect(x, y, 20 * 3, 20 * 3, 4 * 3);
        fill(255, 255, 255);
        rect(x + 10, y + 10, 6 * 3, 13 * 3, 4 * 3);
        rect(x + 34, y + 9, 6 * 3, 13 * 3, 4 * 3);
        fill(0, 0, 0);
        rect(x + 13, y + 17, 4 * 3, 7 * 3, 4 * 3);
        rect(x + 36, y + 17, 4 * 3, 7 * 3, 4 * 3);
      };

      var drawPlayer2 = function (x, y, color) {
        fill(color);
        noStroke();
        rect(x, y, 20 * 3, 20 * 3, 4 * 3);
        fill(255, 255, 255);
        rect(x + 10, y + 10, 6 * 3, 13 * 3, 4 * 3);
        rect(x + 34, y + 9, 6 * 3, 13 * 3, 4 * 3);
        fill(0, 0, 0);
        rect(x + 13, y + 17, 4 * 3, 7 * 3, 4 * 3);
        rect(x + 36, y + 17, 4 * 3, 7 * 3, 4 * 3);
      };

      var drawStore = function () {
        var itemColor = color(189, 226, 227);
        fill(1, 100, 107);
        rect(35, 35, 330, 330, 10);
        fill(138, 247, 255);
        rect(40, 40, 320, 320, 5);
        textFont(f, 20);
        noStroke();
        // box one
        fill(itemColor);
        rect(45, 45, 97, 150, 4);
        drawPlayer2(63, 59, redPlayer);
        fill(0, 0, 0);
        text("Red Player", 56, 135, 80, 50);
        // box two
        fill(itemColor);
        rect(150, 45, 97, 150, 4);
        drawPlayer2(169, 59, greenPlayer);
        fill(0, 0, 0);
        text("Green Player", 159, 135, 80, 50);
        // box three
        fill(itemColor);
        rect(255, 45, 97, 150, 4);
        drawPlayer2(274, 59, bluePlayer);
        text("Blue Player", 265, 135, 80, 50);
        // box four
        fill(itemColor);
        rect(45, 203, 97, 150, 4);
        drawPlayer2(63, 218, lightbluePlayer);
        text("Blue Player 2", 56, 293, 80, 50);
        // box five
        fill(itemColor);
        rect(150, 203, 97, 150, 4);
        drawPlayer2(169, 218, purplePlayer);
        text("Purple Player", 159, 293, 80, 50);
        // box six
        fill(itemColor);
        rect(255, 203, 97, 150, 4);
        drawPlayer2(274, 218, orangePlayer);
        text("Orange Player", 265, 293, 80, 50);
        // exit button
        fill(255, 0, 0);
        ellipse(363, 37, 30, 30);
        fill(255, 255, 255);
        ellipse(363, 37, 25, 25);
        textFont(f, 18);
        fill(255, 0, 0);
        text("X", 363, 43);

      };

      var drawSettings = function () {
        stroke(201, 201, 201);
        strokeWeight(4);
        fill(240, 240, 240);
        rect(50, 50, 300, 300, 15);
        fill(247, 247, 247);
        noStroke();
        rect(150, 150, 100, 100);
        ellipse(150, 200, 110, 100);
        ellipse(250, 200, 110, 100);
        strokeWeight(2);
        fill(0);
        text("Developer Mode:", 180, 130);
        if (on === true) {
          fill(230, 230, 230);
          ellipse(150, 200, 110, 110);
          fill(155, 245, 139);
          ellipse(150, 200, 90, 90);
          fill(0);
          textSize(20);
          text("ON", 265, 135);
        } else if (on === false) {
          fill(230, 230, 230);
          ellipse(250, 200, 110, 110);
          fill(245, 139, 139);
          ellipse(250, 200, 90, 90);
          fill(0);
          textSize(25);
          text("OFF", 265, 135);
        }
        textSize(10);
        // Glitch Mode
        stroke(201, 201, 201);
        noStroke();
        fill(247, 247, 247);
        rect(175, 285, 50, 50);
        ellipse(175, 310, 55, 50);
        ellipse(225, 310, 50, 50);
        strokeWeight(2);
        fill(0);
        text("Glitch Mode (Not Recomened)", 200, 275);
        if (glitchMode === true) {
          fill(230, 230, 230);
          ellipse(175, 310, 55, 55);
          fill(155, 245, 139);
          ellipse(175, 310, 45, 45);
          fill(0);
        } else if (glitchMode === false) {
          fill(230, 230, 230);
          ellipse(225, 310, 55, 55);
          fill(245, 139, 139);
          ellipse(225, 310, 45, 45);
          fill(0);
        }
        // exit button
        fill(255, 0, 0);
        ellipse(349, 53, 30, 30);
        fill(255, 255, 255);
        ellipse(349, 53, 25, 25);
        textFont(f, 18);
        fill(255, 0, 0);
        text("X", 349, 59);
      };

      var heart = function (x, y) {
        // first layer
        fill(0, 0, 0);
        rect(x + 4, y, 2, 2);
        rect(x + 6, y, 2, 2);
        rect(x + 12, y, 2, 2);
        rect(x + 14, y, 2, 2);
        // second layer
        fill(0, 0, 0);
        rect(x + 2, y + 2, 2, 2);
        rect(x + 16, y + 2, 2, 2);
        rect(x + 8, y + 2, 2, 2);
        rect(x + 10, y + 2, 2, 2);
        fill(255, 0, 0);
        rect(x + 4, y + 2, 4, 2);
        rect(x + 12, y + 2, 4, 2);
        // third layer
        fill(0, 0, 0);
        rect(x, y + 4, 2, 2);
        rect(x + 18, y + 4, 2, 2);
        fill(255, 0, 0);
        rect(x + 2, y + 4, 16, 2);
        // fourth layer
        fill(0, 0, 0);
        rect(x, y + 6, 2, 2);
        rect(x + 18, y + 6, 2, 2);
        fill(255, 0, 0);
        rect(x + 2, y + 6, 16, 2);
        // fifth layer
        fill(0, 0, 0);
        rect(x, y + 8, 2, 2);
        rect(x + 18, y + 8, 2, 2);
        fill(255, 0, 0);
        rect(x + 2, y + 8, 16, 2);
        // sixth layer
        fill(0, 0, 0);
        rect(x + 2, y + 10, 2, 2);
        rect(x + 16, y + 10, 2, 2);
        fill(255, 0, 0);
        rect(x + 4, y + 10, 12, 2);
        // seventh layer
        fill(0, 0, 0);
        rect(x + 4, y + 12, 2, 2);
        rect(x + 14, y + 12, 2, 2);
        fill(255, 0, 0);
        rect(x + 6, y + 12, 8, 2);
        // eighth layer
        fill(0, 0, 0);
        rect(x + 6, y + 14, 2, 2);
        rect(x + 12, y + 14, 2, 2);
        fill(255, 0, 0);
        rect(x + 8, y + 14, 4, 2);
        // ninth layer
        fill(0, 0, 0);
        rect(x + 8, y + 16, 2, 2);
        rect(x + 10, y + 16, 2, 2);
        // tenth layer
        fill(0, 0, 0);
        rect(x + 9, y + 18, 2, 2);
      };

      var heartup = function (x, y) {
        // first layer
        fill(0, 0, 0);
        rect(x + 4, y, 2, 2);
        rect(x + 6, y, 2, 2);
        rect(x + 12, y, 2, 2);
        rect(x + 14, y, 2, 2);
        // second layer
        fill(0, 0, 0);
        rect(x + 2, y + 2, 2, 2);
        rect(x + 16, y + 2, 2, 2);
        rect(x + 8, y + 2, 2, 2);
        rect(x + 10, y + 2, 2, 2);
        fill(255, 0, 0);
        rect(x + 4, y + 2, 4, 2);
        rect(x + 12, y + 2, 4, 2);
        // third layer
        fill(0, 0, 0);
        rect(x, y + 4, 2, 2);
        rect(x + 18, y + 4, 2, 2);
        fill(255, 0, 0);
        rect(x + 2, y + 4, 16, 2);
        // fourth layer
        fill(0, 0, 0);
        rect(x, y + 6, 2, 2);
        rect(x + 18, y + 6, 2, 2);
        fill(255, 0, 0);
        rect(x + 2, y + 6, 16, 2);
        // fifth layer
        fill(0, 0, 0);
        rect(x, y + 8, 2, 2);
        rect(x + 18, y + 8, 2, 2);
        fill(255, 0, 0);
        rect(x + 2, y + 8, 16, 2);
        // sixth layer
        fill(0, 0, 0);
        rect(x + 2, y + 10, 2, 2);
        rect(x + 16, y + 10, 2, 2);
        fill(255, 0, 0);
        rect(x + 4, y + 10, 12, 2);
        // seventh layer
        fill(0, 0, 0);
        rect(x + 4, y + 12, 2, 2);
        rect(x + 14, y + 12, 2, 2);
        fill(255, 0, 0);
        rect(x + 6, y + 12, 8, 2);
        // eighth layer
        fill(0, 0, 0);
        rect(x + 6, y + 14, 2, 2);
        rect(x + 12, y + 14, 2, 2);
        fill(255, 0, 0);
        rect(x + 8, y + 14, 4, 2);
        // ninth layer
        fill(0, 0, 0);
        rect(x + 8, y + 16, 2, 2);
        rect(x + 10, y + 16, 2, 2);
        // tenth layer
        fill(0, 0, 0);
        rect(x + 9, y + 18, 2, 2);
        if (px + 17 > x && px < x + 17 && py + 17 > y && py < y + 17 && deaths > 0) {
          //playSound(getSound("rpg/battle-spell"));
          heartUp = true;
          deaths -= 1;
        }
        if (px + 17 > x && px < x + 17 && py + 17 > y && py < y + 17 && deaths === 0) {
          textFont("verdana");
          textSize(11);
          fill(255, 224, 227, 200);
          rect(118, 7, 65, 20, 4);
          fill(255, 0, 0);
          text("full health", 150, 20);
        }
      };

      var coin = function (x, y) {
        if (upscore === false) {
          fill(255, 238, 0);
          ellipse(x + 10, y + 10, 17, 19);
          fill(237, 222, 14);
          ellipse(x + 10, y + 10, 14, 16);
          fill(255, 238, 0);
          ellipse(x + 10, y + 10, 11, 13);
          fill(242, 222, 5);
          rect(x + 8.5, y + 7, 3, 8, 2);
        }
        if (px + 17 > x && px < x + 17 && py + 17 > y && py < y + 17) {
          if (upscore === false) {
            //playSound(getSound("rpg/coin-jingle"));
            upscore = true;
            score += 1;
          }
        }
      };

      var grass = function (x, y) {
        fill(99, 66, 6);
        rect(x, y, 20, 20);
        fill(66, 44, 5);
        ellipse(x + 14, y + 15, 7, 7);
        ellipse(x + 6, y + 13, 9, 9);
        fill(10, 166, 31);
        rect(x - 1, y - 1, 22, 5, 3);
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

      var pad = function (x, y, speedx, speedy) {
        fill(194, 157, 93);
        rect(x, y, 20, 20);
        fill(92, 69, 2);
        rect(x, y + 3, 20, 2);
        rect(x, y + 7, 20, 2);
        rect(x, y + 11, 20, 2);
        rect(x, y + 15, 20, 2);
        if (px + 20 > x && px < x + 20 && py + 20 > y && py < y + 20) {
          // block is above
          if (py + 20 > y && py + 20 < y + 10 && gravity >= 0) {
            py = y - 20; gravity = 0;
            px += (speedx * 2);
            py += (speedy * 2);
          }
          // block is below
          if (py < y + 20 && py > y + 10 && gravity < 0) {
            py = y + 20; gravity = 0.1;
          }
          // block hits sides
          if (py + 18 > y && py < y + 18) {
            if (py + 20 > y && py + 20 < y + 10 && gravity >= 0) {
              py = y - 20; gravity = 0;
            }
            if (px + 20 > x && px + 20 < x + 5) {
              vel = 0; px = x - 21; // THESE NEED TO BE x+21 not 20
            }
            if (px < x + 20 && px > x + 15) {
              vel = 0; px = x + 21; // THESE NEED TO BE x+21 not 20
            }
          }
        }
      };

      var water = function (x, y) {
        fill(29, 92, 163);
        rect(x, y, 6.6, 20);
        fill(63, 69, 184);
        rect(x + 13.3, y, 6.6, 20);
        fill(57, 41, 176);
        rect(x + 6.6, y, 6.6, 20);

      };

      var stone = function (x, y) {
        fill(179, 179, 179);
        rect(x, y, 20, 20);
        fill(156, 156, 156);
        rect(x + 3, y + 3, 14, 14, 2);
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

      var blankstone = function (x, y) {
        fill(156, 156, 156);
        rect(x, y, 20, 20);
      };

      var rock2 = function (x, y) {
        fill(156, 156, 156);
        rect(x, y, 20, 20);
        fill(186, 186, 186);
        rect(x, y, 8, 12, 1);
        fill(191, 191, 191);
        rect(x + 8, y, 12, 8, 1);
        fill(191, 191, 191);
        rect(x, y + 12, 12, 8, 1);
        fill(176, 176, 176);
        rect(x + 8, y + 8, 12, 4, 1);
        fill(181, 181, 181);
        rect(x + 12, y + 12, 8, 8, 1);
      };

      var rock = function (x, y) {
        fill(181, 179, 181);
        rect(x, y, 20, 20);
      };

      var dirt = function (x, y) {
        fill(99, 66, 6);
        rect(x, y, 20, 20);
        fill(66, 44, 5);
        ellipse(x + 14, y + 15, 7, 7);
        ellipse(x + 6, y + 13, 9, 9);
        fill(74, 53, 16);
        ellipse(x + 11, y + 5, 9, 9);
      };

      var lava = function (x, y) {
        fill(255, 170, 33);
        rect(x, y, 20, 20);
        fill(217, 45, 26);
        rect(x + 3, y + 3, 14, 14, 2);
        fill(171, 48, 0);
        ellipse(x + 14, y + 8, 5, 5);
        ellipse(x + 8, y + 13, 7, 7);
        if (px + 20 > x && px < x + 20 && py + 20 > y && py < y + 20) {
          px = 20;
          py = 40;
          //playSound((getSound("rpg/water-bubble")));
          deaths++;
          keyUnlocked = false;
        }
      };

      var blanklava = function (x, y) {
        fill(255, 170, 33);
        rect(x, y, 20, 20);
        fill(217, 45, 26, 100);
        rect(x + 3, y + 3, 14, 14, 2);
        if (px + 20 > x && px < x + 20 && py + 20 > y && py < y + 20) {
          px = 20;
          py = 40;
          //playSound((getSound("rpg/water-bubble")));
          deaths++;
          keyUnlocked = false;
        }
      };

      var fireball = function (x, y) {
        var dis = dist((sin(frameCount * 2) * 55) + x, -((cos(frameCount * 2) * 70)) + y, px, py);
        fill(255, 119, 0);
        ellipse((sin(frameCount * 2) * 55) + x, -((cos(frameCount * 2) * 70)) + y, 18, 18);
        fill(255, 208, 0);
        ellipse((sin(frameCount * 2) * 55) + x, -((cos(frameCount * 2) * 69)) + y, 15, 15);
        fill(255, 89, 0, 100);
        ellipse((sin(frameCount * 2) * 55) + x, -((cos(frameCount * 2) * 71)) + y, 10, 10);
        fill(255, 68, 0, 150);
        ellipse((sin(frameCount * 1.99) * 62) + x, -((cos(frameCount * 1.99) * 80)) + y, 3, 4);
        fill(255, 68, 0, 150);
        ellipse((sin(frameCount * 2) * 45) + x, -((cos(frameCount * 2) * 60)) + y, 3, 4);
        if (dis < 20) {
          px = 20;
          py = 40;
          //playSound((getSound("retro/boom2")));
          deaths++;
          keyUnlocked = false;
        }
      };

      var spike = function (x, y) {
        fill(156, 156, 156);
        rect(x, y, 20, 20);
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
          //play((getSound("rpg/metal-clink")));
          deaths++;
          keyUnlocked = false;
        }
      };

      var cloud = function (x, y) {
        fill(255, 255, 255);
        ellipse(x + (TILE_SIZE / 2), y + (TILE_SIZE), (TILE_SIZE * 0.9), (TILE_SIZE * 0.8));
        ellipse(x + (TILE_SIZE * 0.9), y + (TILE_SIZE * 0.5), (TILE_SIZE * 0.9), (TILE_SIZE * 0.55));
        fill(251, 251, 251);
        ellipse(x + (TILE_SIZE * 0.9), y + (TILE_SIZE), (TILE_SIZE * 0.7), (TILE_SIZE * 0.6));
        ellipse(x + (TILE_SIZE * 1.4), y + (TILE_SIZE * 0.75), (TILE_SIZE * 0.9), (TILE_SIZE * 0.8));
        ellipse(x + (TILE_SIZE * 1.25), y + (TILE_SIZE * 1.255), (TILE_SIZE * 1.255), (TILE_SIZE * 0.6));
        fill(249, 249, 249);
        ellipse(x + (TILE_SIZE * 1.85), y + (TILE_SIZE), (TILE_SIZE * 0.7), (TILE_SIZE * 0.6));
      };

      var blankdirt = function (x, y) {
        fill(99, 66, 6);
        rect(x, y, 20, 20);
      };

      var tileHandle = function (level) {
        for (var y = 0; y < 20; y++) {
          for (var x = 0; x < 20; x++) {
            if (tileGrid[level - 1][y][x] === "g") {
              grass((x * 20), (y * 20));
            }
            else if (tileGrid[level - 1][y][x] === "s") {
              stone((x * 20), (y * 20));
            }
            else if (tileGrid[level - 1][y][x] === "bs") {
              blankstone((x * 20), (y * 20));
            }
            else if (tileGrid[level - 1][y][x] === "r") {
              rock((x * 20), (y * 20));
            }
            else if (tileGrid[level - 1][y][x] === "r2") {
              rock2((x * 20), (y * 20));
            }
            else if (tileGrid[level - 1][y][x] === "d") {
              dirt((x * 20), (y * 20));
            }
            else if (tileGrid[level - 1][y][x] === "sp") {
              spike((x * 20), (y * 20));
            }
            else if (tileGrid[level - 1][y][x] === "l") {
              lava((x * 20), (y * 20));
            }
            else if (tileGrid[level - 1][y][x] === "bl") {
              blanklava((x * 20), (y * 20));
            }
            else if (tileGrid[level - 1][y][x] === "w") {
              water((x * 20), (y * 20));
            }
            else if (tileGrid[level - 1][y][x] === "h") {
              heart((x * 20), (y * 20));
            }
            else if (tileGrid[level - 1][y][x] === "c") {
              cloud((x * 20), (y * 20));
            }
            else if (tileGrid[level - 1][y][x] === "bd") {
              blankdirt((x * 20), (y * 20));
            }
            else if (tileGrid[level - 1][y][x] === "co") {
              coin((x * 20), (y * 20));
            }
            else if (tileGrid[level - 1][y][x] === "fb") {
              fireball((x * 20), (y * 20));
            }
          }
        }
      };

      var displayStats = function () {
        noStroke();
        {
          textMode(CENTER);
          textSize(15);
          textFont(f, 15);
          fill(0, 0, 0);

          if (deaths === 0) {
            for (var i = 0; i < 5; i++) {
              heart((i * 22) + 5, 5);
            }
          }
          else if (deaths === 1) {
            for (var i = 0; i < 4; i++) {
              heart((i * 22) + 5, 5);
            }
          } else if (deaths === 2) {
            for (var i = 0; i < 3; i++) {
              heart((i * 22) + 5, 5);
            }
          } else if (deaths === 3) {
            for (var i = 0; i < 2; i++) {
              heart((i * 22) + 5, 5);
            }
          } else if (deaths === 4) {
            for (var i = 0; i < 1; i++) {
              heart((i * 22) + 5, 5);
            }
          }
          else if (deaths === 5) {
            scene = 10;
          }
        }
        text("Level " + level, width - 30, height - 8);
        fill(230, 230, 230, 240);
        rect(90, 370, 50, 25, 4);
        fill(0, 0, 0);
        text(score, 107, 387);
        fill(255, 238, 0);
        ellipse(130, 372 + 10, 17, 19);
        fill(237, 222, 14);
        ellipse(130, 372 + 10, 14, 16);
        fill(255, 238, 0);
        ellipse(130, 372 + 10, 11, 13);
        fill(242, 222, 5);
        rect(129, 372 + 7, 3, 8, 2);
        fill(96, 250, 82);
        rect(10, 370, 70, 25, 4);
        fill(0, 0, 0);
        text("Player", 45, 387);
        // settings
        fill(235, 235, 235);
        rect(325, 5, 70, 25, 4);
        fill(0, 0, 0);
        text("Settings", 360, 22);
      };

      var displaySettings = function () {
        var posx = floor(px);
        var posy = floor(py);
        var velocity = floor(vel);
        var grav = floor(gravity);
        var lev = scene - 1;
        textSize(10);
        fill(255, 0, 0);
        text("Position: " + posx + ", " + posy, 355, 42);
        text("Deaths: " + deaths, 369, 54);
        text("Scene: " + scene, 371, 66);
        text("Gravity: " + grav, 365, 78);
        text("Level: " + lev, 366, 90);
        text("KeyCode: " + keyCode, 370, 102);
      };

      var levelEnd = function (x, y) {
        imageMode(CENTER);
        stroke(0, 0, 0);
        strokeWeight(0.5);
        if (keyUnlocked === true) {
          door = doorOpen;
        } else if (keyUnlocked === false) {
          door = doorClosed;
        }
        image(door, x, y, 20, 35);
        if (px + 17 > x && px < x + 17 && py + 17 > y && py < y + 35 && keyUnlocked === true) {
          px = 30;
          py = 10;
          scene++;
          level++;
          keyUnlocked = false;
          heartUp = false;
          upscore = false;
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
          playSound(getSound("rpg/battle-swing"));
          keyUnlocked = true;
        }
      };

      var drawEnd = function () {
        textAlign(CENTER);
        textMode(CENTER);
        var fscore = floor((score / (speedtime / 100000000)));
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
          image(getImage("cute/GemBlue"), (i * 30) + 10, 26, 16, 24);
        }
        for (var i = 0; i < 14; i++) {
          noStroke();
          fill(0, 37, 140);
          rect((i * 30), 360, 20, 20, 3);
          fill(82, 110, 189);
          rect((i * 30) + 2, 362, 16, 16, 3);
          image(getImage("cute/GemBlue"), (i * 30) + 10, 366, 16, 24);
        }
        fill(26, 0, 255);
        text("YOU WON!", 59, 176, 300, 200);
        fill(255, 0, 0);
        text("YOU WON!", 59, 178, 300, 200);
        textSize(20);
        fill(0, 0, 0);
        textFont(f, 12);
        text("Click anywhere to restart", 119, 270, 167, 50);
        text("Completed in:" + " " + (speedtime / 10000) + " secs", 200, 115);
        text("Scored:" + " " + fscore + " points!", 200, 90);
        /**
        textFont(f2, 16);
        text("Stats:",119,80,167,50);
        text("Stats:",119.3,80,167,50);
        textFont(f,12);
        text("Deaths: " + deaths,119,120,167,50);
        **/
      };

      var drawDead = function () {
        textAlign(CENTER);
        textMode(CENTER);
        var f = createFont("cursive");
        var f2 = createFont("verdana");
        textFont(f, 15);
        textSize(49);
        background(189, 248, 255);
        // background
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
          image(getImage("cute/GemBlue"), (i * 30) + 10, 25, 16, 24);
        }
        for (var i = 0; i < 14; i++) {
          noStroke();
          fill(0, 37, 140);
          rect((i * 30), 360, 20, 20, 3);
          fill(82, 110, 189);
          rect((i * 30) + 2, 362, 16, 16, 3);
          image(getImage("cute/GemBlue"), (i * 30) + 10, 366, 16, 24);
        }
        fill(26, 0, 255);
        text("YOU DIED", 59, 176, 300, 200);
        fill(255, 0, 0);
        text("YOU DIED", 59, 178, 300, 200);
        textSize(20);
        fill(0, 0, 0);
        textFont(f, 12);
        text("Click anywhere to restart", 119, 270, 167, 50);
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
        textFont(f, 15);
        textSize(49);
        background(189, 248, 255);
        fill(9, 240, 198);
        ellipse(200, 200, 600, 600);
        fill(61, 255, 197);
        ellipse(200, 200, 550, 550);
        fill(84, 255, 170);
        ellipse(200, 200, 500, 500);
        fill(99, 255, 169);
        ellipse(200, 200, 450, 450);
        fill(133, 255, 151);
        ellipse(200, 200, 400, 400);
        fill(145, 255, 162);
        ellipse(200, 200, 350, 350);
        fill(158, 255, 169);
        ellipse(200, 200, 300, 300);
        fill(173, 255, 178);
        ellipse(200, 200, 250, 250);
        fill(186, 255, 193);
        ellipse(200, 200, 200, 200);
        fill(196, 255, 206);
        ellipse(200, 200, 150, 150);
        fill(214, 255, 217);
        ellipse(200, 200, 100, 100);
        fill(237, 250, 238);
        ellipse(200, 200, 50, 50);

        for (var i = 0; i < 14; i++) {
          noStroke();
          fill(0, 138, 16);
          rect((i * 30), 20, 20, 20, 3);
          fill(92, 189, 83);
          rect((i * 30) + 2, 22, 16, 16, 3);
          image(getImage("cute/GemGreen"), (i * 30) + 10, 24, 16, 24);
        }
        for (var i = 0; i < 14; i++) {
          noStroke();
          fill(0, 138, 21);
          rect((i * 30), 360, 20, 20, 3);
          fill(83, 189, 99);
          rect((i * 30) + 2, 362, 16, 16, 3);
          image(getImage("cute/GemGreen"), (i * 30) + 10, 366, 16, 24);
        }

        textFont(f, 58);
        fill(13, 6, 199);
        text("Find The Treasure", 59, 100, 300, 200);
        fill(15, 10, 97);
        text("Find The Treasure", 59, 102, 300, 200);
        textSize(20);
        fill(0, 53, 56);
        text("By Spencer Lepine", 207, 69);
        fill(0, 216, 227);
        text("By Spencer Lepine", 209, 69);
        // start game button
        textFont(f, 58);
        fill(0, 153, 15);
        rect(111, 241, 173, 35, 5);
        fill(0, 255, 13);
        rect(114, 244, 173, 35, 5);
        textFont(f2, 23);
        fill(255, 255, 255);
        text("Click To Start", 114, 250, 167, 50);
        fill(1, 13, 33);
        textFont(f2, 23);
        text("Click To Start", 116, 252, 167, 50);
        // how to play
        textFont(f, 58);
        fill(0, 153, 15);
        rect(111, 297, 173, 35, 5);
        fill(0, 255, 13);
        rect(114, 300, 173, 35, 5);
        textFont(f2, 23);
        fill(255, 255, 255);
        text("How To Play", 114, 305, 167, 50);
        fill(1, 13, 33);
        textFont(f2, 23);
        text("How To Play", 116, 307, 167, 50);

      };

      var drawPlayer = function (px, py) {
        fill(0, 0, 0, 30);
        rect(px - 1, py - 1, 22, 22, 4);
        noStroke();
        fill(playerColor);
        rect(px, py, 20, 20, 4);
        fill(255, 255, 255);
        rect(px + 2, py + 4, 6, 13, 4);
        rect(px + 12, py + 4, 6, 13, 4);
        fill(0, 0, 0);
        rect(px + 3, py + 6, 4, 7, 4);
        rect(px + 13, py + 6, 4, 7, 4);
      };

      var howToPlay = function () {
        textMode(CORNER);
        background(174, 245, 169);
        textSize(25);
        fill(247, 247, 247);
        text("ＨＯＷ ＴＯ ＰＬＡＹ:", 202, 29);
        fill(8, 29, 143);
        text("ＨＯＷ ＴＯ ＰＬＡＹ:", 200, 29);
        fill(34, 18, 112);
        rect(70, 33, 260, 5);
        textSize(15);
        text("Grab the Key, and open the door to the next level.", 200, 61);
        textSize(22);
        fill(0, 0, 0);
        text("= Grass Block", 133, 107);
        grass(20, 90);
        fill(0, 0, 0);
        text("= Stone Block", 133, 164);
        stone(20, 150);
        fill(0, 0, 0);
        text("= Lava Block", 133, 220);
        lava(20, 200);
        fill(0, 0, 0);
        text("= Spikes", 123, 273);
        spike(20, 250);
        heart(20, 300);
        textSize(19);
        text("=  Extra Life", 60, 305, 121, 60);
        coin(20, 340);
        fill(0, 0, 0);
        textSize(19);
        text("=  Coin", 42, 342, 121, 60);


        textSize(22);
        fill(213, 235, 237);
        rect(262, 82, 45, 45, 2);
        fill(0, 0, 0);
        text("↑", 287, 114);
        text("= Jump", 350, 111);
        fill(213, 235, 237);
        rect(262, 135, 45, 45, 2);
        fill(0, 0, 0);
        text(" ←", 283, 167);
        text("= Left", 350, 164);
        fill(213, 235, 237);
        rect(262, 189, 45, 45, 2);
        fill(0, 0, 0);
        text("→", 285, 220);
        text("= Right", 350, 220);
        fill(213, 235, 237);
        rect(213, 244, 94, 45, 2);
        fill(0, 0, 0);
        text("SPACE", 260, 277);
        text("= Jump", 350, 273);
        fill(213, 235, 237);
        rect(244, 297, 45, 45, 2);
        fill(0, 0, 0);
        text("R", 266, 329);
        text("= Reset", 342, 328);
        textMode(CENTER);

        // back button
        fill(79, 207, 132);
        rect(166, 371, 70, 25, 4);
        fill(255, 255, 255);
        textSize(19);
        text("Back", 200, 391);

      };

      var drawStory = function () {
        textSize(17);
        time++;
        stryx += 0.5;
        if (stryx > 400) {
        }
        if (time < 250 && time > 1) {
          textSize(20);
          fill(212, 249, 255);
          rect(10, 10, 380, 380, 5);
          fill(0, 0, 0);
          text("In an adventurous land, \n you destine to find treasure!", 198, 199);
          image(getImage("cute/GemBlue"), 300, 285, 57, 83);
          image(getImage("cute/GemGreen"), 100, 285, 57, 83);
        }
        if (time > 250 && time < 450) {
          textSize(18);
          fill(212, 249, 255);
          rect(10, 10, 380, 380, 5);
          fill(0, 0, 0);
          text("It is hidden in a cave far away..", 200, 200);
          image(getImage("cute/GemOrange"), 300, 285, 57, 83);
          image(getImage("cute/DoorTallClosed"), 100, 285, 57, 83);
        }
        if (time > 450 && time < 850) {
          textSize(18);
          fill(212, 249, 255);
          rect(10, 10, 380, 380, 5);
          fill(0, 0, 0);
          text("Grab the keys and Guide your\n character to find the final treasure!", 200, 200);
          image(getImage("cute/Key"), 300, 285, 57, 83);
          image(getImage("cute/ChestClosed"), 100, 285, 57, 83);
        }
        drawPlayer3(stryx, 80, color(255, 0, 0));
        button1.run();
        if (time > 900) {
          scene += 0.5;
          store = true;
        }


      };

      mouseClicked = function () {
        if (scene === 1) {
          if (mouseX > 111 && mouseX < 284 && mouseY > 241 && mouseY < 275) {
            scene += 0.5;
          }
        }
        // END SCREEN?
        /**
        if (scene === 7) {
        scene = 1;
        }
        **/
        if (scene === 10 || scene === 9) {
          Program.restart();
        }
        if (store === true && mouseX > 343 && mouseX < 383 && mouseY > 17 && mouseY < 57) {
          store = false;
        }
        if (store === true && mouseX > 45 && mouseX < 142 && mouseY > 45 && mouseY < 195) {
          playerColor = redPlayer; store = false;
        }
        if (store === true && mouseX > 150 && mouseX < 247 && mouseY > 45 && mouseY < 195) {
          playerColor = greenPlayer; store = false;
        }
        if (store === true && mouseX > 255 && mouseX < 352 && mouseY > 45 && mouseY < 195) {
          playerColor = bluePlayer; store = false;
        }
        if (store === true && mouseX > 45 && mouseX < 142 && mouseY > 203 && mouseY < 353) {
          playerColor = lightbluePlayer; store = false;
        }
        if (store === true && mouseX > 150 && mouseX < 247 && mouseY > 203 && mouseY < 353) {
          playerColor = purplePlayer; store = false;
        }
        if (store === true && mouseX > 255 && mouseX < 353 && mouseY > 203 && mouseY < 353) {
          playerColor = orangePlayer; store = false;
        }
        if (scene === 1 && mouseX > 114 && mouseX < 287 && mouseY > 300 && mouseY < 335) {
          scene--;
        }
        if (scene === 0 && mouseX > 166 && mouseX < 236 && mouseY > 371 && mouseY < 396) {
          scene++;
        }
        // settings
        if (settings === true && mouseX > 339 && mouseX < 369 && mouseY > 33 && mouseY < 76) {
          settings = false;
        }
        if (settings === true && mouseX > 200 && mouseX < 300 && mouseY > 150 && mouseY < 250) {
          on = true;
        }
        if (settings === true && mouseX > 100 && mouseX < 200 && mouseY > 150 && mouseY < 250) {
          on = false;
        }
        if (settings === true && mouseX > 200 && mouseX < 270 && mouseY > 250 && mouseY < 320) {
          settings = false;
          glitchMode = true;
        }
        if (settings === true && mouseX > 145 && mouseX < 190 && mouseY > 280 && mouseY < 320) {
          glitchMode = false;
        }
      };

      mousePressed = function () {
        if (scene > 1 && mouseX > 10 && mouseX < 80 && mouseY > 370 && mouseY < 395) {

          store = true;

        }
        if (scene > 1 && scene < 10 && mouseX > 325 && mouseX < 395 && mouseY > 5 && mouseY < 30) {

          settings = true;

        }
      };

      draw = function () {
        // Handle Player
        {
          if (py < 0 && gravity < 0) {
            py = 0; gravity = 0.1;
          }
          if (px > width - 20) {
            //vel = 0;
            px = width - 20; // THESE NEED TO BE x+21 not 20
          }
          if (px < 0) {
            //vel = 0;
            px = 0; // THESE NEED TO BE x+21 not 20
          }
        }
        noStroke();
        // if (glitchMode === false) {
        //     //background(229, 244, 255);
        // }
        background(229, 244, 255);
        // SCENES
        {
          if (scene === 0) {
            howToPlay();
          } else if (scene === 1) {
            drawStart();
          } else if (scene === 1.5) {
            drawStory();
          }
          else if (scene === 2) { // level 1
            py += gravity;
            gravity += 0.1;
            px += round(vel);
            tileHandle(1);
            drawPlayer(px, py);
            if (keyUnlocked === false) {
              levelKey(190, sin((frameCount * 2)) + 120);
            }
            if (heartUp === false) {
              heartup(100, sin((frameCount * 2)) + 140);
            }
            levelEnd(330, 204);
          }
          else if (scene === 3) { // level 2
            py += gravity;
            gravity += 0.1;
            px += round(vel);
            tileHandle(2);
            drawPlayer(px, py);
            if (keyUnlocked === false) {
              levelKey(320, sin((frameCount * 2)) + 300);
            }
            levelEnd(190, sin((frameCount * 2)) + 30);
          }
          else if (scene === 4) { // level 3
            py += gravity;
            gravity += 0.1;
            px += round(vel);
            tileHandle(3);
            drawPlayer(px, py);
            {
              pad((padx[0]), 200, padspd[0], padspdy[1]);
              pad((padx[0]) + 20, 200, padspd[0], padspdy[1]);
              pad((padx[0]) + 40, 200, padspd[0], padspdy[1]);
            }
            padx[0] = padx[0] + padspd[0];
            if (padx[0] > 240) {
              padspd[0] = -1;
            }
            if (padx[0] < 60) {
              padspd[0] = 1;
            }
            if (heartUp === false) {
              heartup(280, sin((frameCount * 2)) + 240);
            }
            levelEnd(330, 365);
            if (keyUnlocked === false) {
              levelKey(170, sin((frameCount * 2)) + 20);
            }
          }
          else if (scene === 5) { // level 4
            fill(156, 156, 156);
            rect(0, 0, width, height);
            py += gravity;
            gravity += 0.1;
            px += round(vel);
            tileHandle(4);
            drawPlayer(px, py);
            if (keyUnlocked === false) {
              levelKey(364, sin((frameCount * 2)) + 294);
            }
            levelEnd(90, 143);
            /**
            if (padx > 240) {
            padspeed = -1;
            }
            if (padx < 60) {
            padspeed = 1;
            }
            **/
          }
          else if (scene === 6) { // level 5
            py += gravity;
            gravity += 0.1;
            fill(156, 156, 156);
            rect(0, 0, width, height);
            px += round(vel);
            tileHandle(5);
            drawPlayer(px, py);
            // PADS
            {
              pad(padx[1], 80, padspd[0], padspdy[1]);
              pad(padx[1] + 20, 80, padspd[0], padspd[1]);
              pad(padx[1] + 40, 80, padspd[0], padspdy[1]);

              pad(padx[1], 320, padspd[0], padspdy[1]);
              pad(padx[1] + 20, 320, padspd[0], padspd[1]);
              pad(padx[1] + 40, 320, padspd[0], padspd[1]);

              pad(320, 80 + pady[1], padspd[1], padspdy[0]);
              pad(340, 80 + pady[1], padspd[1], padspdy[0]);
              pad(360, 80 + pady[1], padspd[1], padspdy[0]);
            }
            if (heartUp === false) {
              heartup(380, sin((frameCount * 2)) + 20);
            }
            if (keyUnlocked === false) {
              levelKey(40, sin((frameCount * 2)) + 320);
            }
            levelEnd(10, 65);
            // PAD TESTING
            // padx[0] = padx[0] + padspd[0];
            padx[1] = padx[1] + padspd[0];
            // pady[0] = pady[0] + padspd[0];
            if (padx[1] > 240) {
              padspd[0] = -1;
            }
            if (padx[1] < 80) {
              padspd[0] = 1;
            }
            pady[1] = pady[1] + padspdy[0];
            if (pady[1] > 240) {
              padspdy[0] = -0.5;
            }
            if (pady[1] < 30) {
              padspdy[0] = 0.5;
            }
          }
          else if (scene === 7) { // level 6
            py += gravity;
            gravity += 0.1;
            px += round(vel);
            fill(156, 156, 156);
            rect(0, 0, width, height);
            tileHandle(6);
            drawPlayer(px, py);
            if (keyUnlocked === false) {
              levelKey(40, sin((frameCount * 2)) + 320);
            }
            levelEnd(390, 350);
          }
          else if (scene === 8) { // level 7
            py += gravity;
            gravity += 0.1;
            px += round(vel);
            fill(156, 156, 156);
            rect(0, 0, width, height);
            tileHandle(7);
            // IMAGES FOR TREASURE
            {
              image(getImage("cute/GemOrange"), 191, 206, 18, 28);
              image(getImage("cute/GemGreen"), 210, 206, 18, 28);
              image(getImage("cute/GemGreen"), 210, 188, 18, 28);
              image(getImage("cute/GemBlue"), 191, 188, 21, 28);
              image(getImage("cute/ChestClosed"), 232, 186, 18, 28);
              image(getImage("cute/ChestClosed"), 251, 186, 18, 28);
              image(getImage("cute/GemOrange"), 271, 186, 18, 28);
              image(getImage("cute/ChestClosed"), 171, 186, 18, 28);
              image(getImage("cute/GemBlue"), 152, 186, 18, 28);
            }
            fill(255);
            textSize(25);
            text("YOU FOUND THE TREASURE!!", 200, 300);
            drawPlayer(px, py);
            if (keyUnlocked === false) {
              levelKey(20, sin((frameCount * 2)) + 160);
            }
            levelEnd(350, 170);
          }
          else if (scene === 9) {
            noStroke();
            background(245, 250, 249);
            drawEnd();
          }
          else if (scene === 10) {
            noStroke();
            background(245, 250, 249);
            drawDead();
          }
          if (scene > 1 && scene < 9 && on === true) {
            displaySettings();
          }
        }
        // KEYS
        {
          if (input[LEFT]) {
            //vel-=0.2;
            px -= speed;
            velo += 0.2;
          }
          if (input[83]) {
            frameRate(30);
          } else if (true) {
            frameRate(60);
          }
          if (input[RIGHT]) {
            //vel+=0.2;
            px += speed;
            velo += 0.2;
          }
          if (input[UP] && gravity === 0) {
            gravity = -3.5;
          }
          if (input[32] && gravity === 0) {
            gravity = -3.5;
            playSound(getSound("retro/jump1"));
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
        if (scene > 1.5 && scene < 9) {
          displayStats();
        } // display points
        if (store === true) {
          drawStore();
        } // draws the store
        if (settings === true) {
          drawSettings();
        } // opens the settings
        vel = constrain(vel, -2, 2);
        if (vel > 0) {
          vel -= 0.1;
        }
        if (py > 450) {
          py = 40;
          px = 10;
        }
        vel = constrain(vel, -2, 2);
        if (vel > 0) { vel -= 0.1; }
        if (vel < 0) { vel += 0.1; }
        if (py > 420) {
          py = 10;
          px = 20;
          playSound(getSound("retro/boom1"));
          deaths++;
          keyUnlocked = false;
        }
        fill(255);
        if (scene >= 2 && scene < 9 && store === false) { speedtime += 100; }
      };
    }
  }

  /**
  ╔═══╗╔═══╗╔═══╗╔═╗─╔╗╔═══╗╔═══╗╔═══╗     ╔╗───╔═══╗╔═══╗╔══╗╔═╗─╔╗╔═══╗
  ║╔═╗║║╔═╗║║╔══╝║║╚╗║║║╔═╗║║╔══╝║╔═╗║     ║║───║╔══╝║╔═╗║╚╣─╝║║╚╗║║║╔══╝
  ║╚══╗║╚═╝║║╚══╗║╔╗╚╝║║║─╚╝║╚══╗║╚═╝║     ║║───║╚══╗║╚═╝║─║║─║╔╗╚╝║║╚══╗
  ╚══╗║║╔══╝║╔══╝║║╚╗║║║║─╔╗║╔══╝║╔╗╔╝     ║║─╔╗║╔══╝║╔══╝─║║─║║╚╗║║║╔══╝
  ║╚═╝║║║───║╚══╗║║─║║║║╚═╝║║╚══╗║║║╚╗     ║╚═╝║║╚══╗║║───╔╣─╗║║─║║║║╚══╗
  ╚═══╝╚╝───╚═══╝╚╝─╚═╝╚═══╝╚═══╝╚╝╚═╝     ╚═══╝╚═══╝╚╝───╚══╝╚╝─╚═╝╚═══╝
  **/
}

const findTheTreasure = {
  PROJECT_NAME: 'Find The Treasure',
  PROJECT_LINK: 'https://www.khanacademy.org/computer-programming/find-the-treasure/4707992621350912',
  main,
}