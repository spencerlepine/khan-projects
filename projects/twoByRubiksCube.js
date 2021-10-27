var main = function () {
  /**
 * Using some object orentated programming, this 2D Rubik's cube proccesses each 'sticker' of the cube
 * Tests positions from a list of face numbers: (0,0,1,0,0,0), and 1-4
 * Gives it x,y coordinates
 * The center caps are stationary
 * Cube notation functions move all of the proper corner stickers
 * Most likely not efficient, but properly continuously cycles pieces
**/

  frameRate(3);
  //frameRate(30);

  // Key functions
  var input = [];
  var Moves = [];

  keyPressed = function () { input[keyCode] = true; };
  keyReleased = function () { input[keyCode] = false; };

  // Colors of the cube
  var palette = [color(255, 255, 255), color(21, 255, 0), color(255, 0, 0), color(0, 10, 255), color(255, 162, 0), color(255, 255, 0)];

  // A sticker(piece) base function
  var sticker = function (indxu, indxf, indxr, indxb, indxl, indxd, c, label) {

    this.lbl = label;

    this.indxu = indxu;
    this.indxf = indxf;
    this.indxr = indxr;
    this.indxb = indxb;
    this.indxl = indxl;
    this.indxd = indxd;

    this.x = 0;
    this.y = 0;

    this.draw = function () {

      stroke(0, 0, 0);
      strokeWeight(1);

      fill(palette[c]);
      rect(this.x, this.y, 45, 45);

      fill(43, 14, 0);
      text(this.lbl, this.x + 12, this.y + 26);
    };


    this.process = function () {

      this.draw();

    };

  };

  // Corners
  var UBR = new sticker(1, 0, 0, 0, 0, 0, 0, "UBR");
  var UBL = new sticker(2, 0, 0, 0, 0, 0, 0, "UBL");
  var UFL = new sticker(3, 0, 0, 0, 0, 0, 0, "UFL");
  var UFR = new sticker(4, 0, 0, 0, 0, 0, 0, "UFR");
  var FUR = new sticker(0, 1, 0, 0, 0, 0, 1, "FUR");
  var FUL = new sticker(0, 2, 0, 0, 0, 0, 1, "FUL");
  var FDL = new sticker(0, 3, 0, 0, 0, 0, 1, "FDL");
  var FDR = new sticker(0, 4, 0, 0, 0, 0, 1, "FDR");
  var RUB = new sticker(0, 0, 1, 0, 0, 0, 2, "RUB");
  var RUF = new sticker(0, 0, 2, 0, 0, 0, 2, "RUF");
  var RDF = new sticker(0, 0, 3, 0, 0, 0, 2, "RDF");
  var RDB = new sticker(0, 0, 4, 0, 0, 0, 2, "RDB");
  var BUL = new sticker(0, 0, 0, 1, 0, 0, 3, "BUL");
  var BUR = new sticker(0, 0, 0, 2, 0, 0, 3, "BUR");
  var BDR = new sticker(0, 0, 0, 3, 0, 0, 3, "BDR");
  var BDL = new sticker(0, 0, 0, 4, 0, 0, 3, "BDL");
  var LUF = new sticker(0, 0, 0, 0, 1, 0, 4, "LUF");
  var LUB = new sticker(0, 0, 0, 0, 2, 0, 4, "LUB");
  var LDB = new sticker(0, 0, 0, 0, 3, 0, 4, "LDB");
  var LDF = new sticker(0, 0, 0, 0, 4, 0, 4, "LDF");
  var DFR = new sticker(0, 0, 0, 0, 0, 1, 5, "DFR");
  var DFL = new sticker(0, 0, 0, 0, 0, 2, 5, "DFL");
  var DBL = new sticker(0, 0, 0, 0, 0, 3, 5, "DBL");
  var DBR = new sticker(0, 0, 0, 0, 0, 4, 5, "DBR");

  var corners = [
    UBL, UBR, UFR, UFL,
    FUL, FUR, FDR, FDL,
    RUF, RUB, RDB, RDF,
    BUL, BUR, BDR, BDL,
    LUF, LUB, LDB, LDF,
    DFR, DFL, DBL, DBR
  ];

  // Draw the corners in the right starting position, based on the [0,0,0,0,0,0] matrix
  var drawTheCube = function () {

    for (var i = 0; i < corners.length; i++) {

      if (corners[i].indxu === 1) { corners[i].x = 155; corners[i].y = 65; }
      if (corners[i].indxu === 2) { corners[i].x = 110; corners[i].y = 65; }
      if (corners[i].indxu === 3) { corners[i].x = 110; corners[i].y = 110; }
      if (corners[i].indxu === 4) { corners[i].x = 155; corners[i].y = 110; }

      if (corners[i].indxf === 1) { corners[i].x = 155; corners[i].y = 155; }
      if (corners[i].indxf === 2) { corners[i].x = 110; corners[i].y = 155; }
      if (corners[i].indxf === 3) { corners[i].x = 110; corners[i].y = 200; }
      if (corners[i].indxf === 4) { corners[i].x = 155; corners[i].y = 200; }

      if (corners[i].indxr === 1) { corners[i].x = 245; corners[i].y = 155; }
      if (corners[i].indxr === 2) { corners[i].x = 200; corners[i].y = 155; }
      if (corners[i].indxr === 3) { corners[i].x = 200; corners[i].y = 200; }
      if (corners[i].indxr === 4) { corners[i].x = 245; corners[i].y = 200; }

      if (corners[i].indxb === 1) { corners[i].x = 335; corners[i].y = 155; }
      if (corners[i].indxb === 2) { corners[i].x = 290; corners[i].y = 155; }
      if (corners[i].indxb === 3) { corners[i].x = 290; corners[i].y = 200; }
      if (corners[i].indxb === 4) { corners[i].x = 335; corners[i].y = 200; }

      if (corners[i].indxl === 1) { corners[i].x = 65; corners[i].y = 155; }
      if (corners[i].indxl === 2) { corners[i].x = 20; corners[i].y = 155; }
      if (corners[i].indxl === 3) { corners[i].x = 20; corners[i].y = 200; }
      if (corners[i].indxl === 4) { corners[i].x = 65; corners[i].y = 200; }

      if (corners[i].indxd === 1) { corners[i].x = 155; corners[i].y = 245; }
      if (corners[i].indxd === 2) { corners[i].x = 110; corners[i].y = 245; }
      if (corners[i].indxd === 3) { corners[i].x = 110; corners[i].y = 290; }
      if (corners[i].indxd === 4) { corners[i].x = 155; corners[i].y = 290; }

    }

  };

  // Execute the function
  drawTheCube();

  // Moving functions
  var uMove = function () {

    // If corner is in U layer, then move the corresponding piece(s) clockwise
    for (var i = 0; i < corners.length; i++) {

      if (corners[i].indxf === 0 && corners[i].indxr === 0 && corners[i].indxb === 0 && corners[i].indxl === 0 && corners[i].indxd === 0) {

        corners[i].indxu -= 1;
        if (corners[i].indxu > 4) { corners[i].indxu -= 4; }
        if (corners[i].indxu < 1) { corners[i].indxu += 4; }

      }

      if (corners[i].indxf === 1) {

        // Fu to Lu
        corners[i].indxf = 0;
        corners[i].indxl = 1;

      }

      else if (corners[i].indxf === 0 && corners[i].indxl === 1) {

        // Fu to Bu
        corners[i].indxl = 0;
        corners[i].indxb = 1;

      }

      else if (corners[i].indxf === 0 && corners[i].indxb === 1) {

        // Fu to Ru
        corners[i].indxb = 0;
        corners[i].indxr = 1;

      }

      else if (corners[i].indxf === 0 && corners[i].indxr === 1) {

        // Fu to Fu
        corners[i].indxr = 0;
        corners[i].indxf = 1;

      }

      if (corners[i].indxf === 2) {

        // Fu to Lu
        corners[i].indxf = 0;
        corners[i].indxl = 2;

      }

      else if (corners[i].indxf === 0 && corners[i].indxl === 2) {

        // Fu to Bu
        corners[i].indxl = 0;
        corners[i].indxb = 2;

      }

      else if (corners[i].indxf === 0 && corners[i].indxb === 2) {

        // Fu to Ru
        corners[i].indxb = 0;
        corners[i].indxr = 2;

      }

      else if (corners[i].indxf === 0 && corners[i].indxr === 2) {

        // Fu to Fu
        corners[i].indxr = 0;
        corners[i].indxf = 2;

      }

      drawTheCube();

    }

  };

  var uMovePrime = function () {

    // If corner is in U layer, then move the corresponding piece(s) counterclockwise
    for (var i = 0; i < corners.length; i++) {

      if (corners[i].indxf === 0 && corners[i].indxr === 0 && corners[i].indxb === 0 && corners[i].indxl === 0 && corners[i].indxd === 0) {

        corners[i].indxu += 1;
        if (corners[i].indxu > 4) { corners[i].indxu -= 4; }
        if (corners[i].indxu < 1) { corners[i].indxu += 4; }

      }

      if (corners[i].indxf === 1) {

        // Fd to Rd
        corners[i].indxf = 0;
        corners[i].indxr = 1;

      }

      else if (corners[i].indxf === 0 && corners[i].indxr === 1) {

        // Fd to Bu
        corners[i].indxr = 0;
        corners[i].indxb = 1;

      }

      else if (corners[i].indxf === 0 && corners[i].indxb === 1) {

        // Fd to Ld
        corners[i].indxb = 0;
        corners[i].indxl = 1;

      }

      else if (corners[i].indxf === 0 && corners[i].indxl === 1) {

        // Fd to Fd
        corners[i].indxl = 0;
        corners[i].indxf = 1;

      }

      if (corners[i].indxf === 2) {

        // Fd to Rd
        corners[i].indxf = 0;
        corners[i].indxr = 2;

      }

      else if (corners[i].indxf === 0 && corners[i].indxr === 2) {

        // Fd to Bu
        corners[i].indxr = 0;
        corners[i].indxb = 2;

      }

      else if (corners[i].indxf === 0 && corners[i].indxb === 2) {

        // Fd to Ld
        corners[i].indxb = 0;
        corners[i].indxl = 2;

      }

      else if (corners[i].indxf === 0 && corners[i].indxl === 2) {

        // Fd to Fd
        corners[i].indxl = 0;
        corners[i].indxf = 2;

      }

      drawTheCube();
    }

  };

  var dMove = function () {

    // If conirer is in D layer, then move the corresponding piece(s) clockwise
    for (var i = 0; i < corners.length; i++) {

      if (corners[i].indxf === 0 && corners[i].indxr === 0 && corners[i].indxb === 0 && corners[i].indxl === 0 && corners[i].indxu === 0) {

        corners[i].indxd -= 1;
        if (corners[i].indxd > 4) { corners[i].indxd -= 4; }
        if (corners[i].indxd < 1) { corners[i].indxd += 4; }

      }

      if (corners[i].indxf === 3) {

        // Fd to Rd
        corners[i].indxf = 0;
        corners[i].indxr = 3;

      }

      else if (corners[i].indxf === 0 && corners[i].indxr === 3) {

        // Fd to Bu
        corners[i].indxr = 0;
        corners[i].indxb = 3;

      }

      else if (corners[i].indxf === 0 && corners[i].indxb === 3) {

        // Fd to Ld
        corners[i].indxb = 0;
        corners[i].indxl = 3;

      }

      else if (corners[i].indxf === 0 && corners[i].indxl === 3) {

        // Fd to Fd
        corners[i].indxl = 0;
        corners[i].indxf = 3;

      }

      if (corners[i].indxf === 4) {

        // Fd to Rd
        corners[i].indxf = 0;
        corners[i].indxr = 4;

      }

      else if (corners[i].indxf === 0 && corners[i].indxr === 4) {

        // Fd to Bu
        corners[i].indxr = 0;
        corners[i].indxb = 4;

      }

      else if (corners[i].indxf === 0 && corners[i].indxb === 4) {

        // Fd to Ld
        corners[i].indxb = 0;
        corners[i].indxl = 4;

      }

      else if (corners[i].indxf === 0 && corners[i].indxl === 4) {

        // Fd to Fd
        corners[i].indxl = 0;
        corners[i].indxf = 4;

      }


      drawTheCube();

    }

  };

  var dMovePrime = function () {

    // If corner is in D layer, then move the corresponding piece(s) counterclockwise
    for (var i = 0; i < corners.length; i++) {

      if (corners[i].indxf === 0 && corners[i].indxr === 0 && corners[i].indxb === 0 && corners[i].indxl === 0 && corners[i].indxd !== 0) {

        corners[i].indxd += 1;
        if (corners[i].indxd > 4) { corners[i].indxd -= 4; }
        if (corners[i].indxd < 1) { corners[i].indxd += 4; }

      }

      if (corners[i].indxf === 3) {

        // Fd to Ld
        corners[i].indxf = 0;
        corners[i].indxl = 3;

      }

      else if (corners[i].indxf === 0 && corners[i].indxl === 3) {

        // Fd to Bu
        corners[i].indxl = 0;
        corners[i].indxb = 3;

      }

      else if (corners[i].indxf === 0 && corners[i].indxb === 3) {

        // Fd to Rd
        corners[i].indxb = 0;
        corners[i].indxr = 3;

      }

      else if (corners[i].indxf === 0 && corners[i].indxr === 3) {

        // Fd to Fd
        corners[i].indxr = 0;
        corners[i].indxf = 3;

      }

      if (corners[i].indxf === 4) {

        // Fd to Ld
        corners[i].indxf = 0;
        corners[i].indxl = 4;

      }

      else if (corners[i].indxf === 0 && corners[i].indxl === 4) {

        // Fd to Bu
        corners[i].indxl = 0;
        corners[i].indxb = 4;

      }

      else if (corners[i].indxf === 0 && corners[i].indxb === 4) {

        // Fd to Rd
        corners[i].indxb = 0;
        corners[i].indxr = 4;

      }

      else if (corners[i].indxf === 0 && corners[i].indxr === 4) {

        // Fd to Fd
        corners[i].indxr = 0;
        corners[i].indxf = 4;

      }

      drawTheCube();

    }

  };

  var fMove = function () {

    // If corner is in F layer, then move the corresponding piece(s) clockwise
    for (var i = 0; i < corners.length; i++) {

      if (corners[i].indxb === 0 && corners[i].indxr === 0 && corners[i].indxd === 0 && corners[i].indxl === 0 && corners[i].indxu === 0) {

        corners[i].indxf -= 1;
        if (corners[i].indxf > 4) { corners[i].indxf -= 4; }
        if (corners[i].indxf < 1) { corners[i].indxf += 4; }

      }

      if (corners[i].indxu === 3) {

        // Uf to Rf
        corners[i].indxu = 0;
        corners[i].indxr = 2;

      }

      else if (corners[i].indxr === 2 && corners[i].indxd === 0) {

        // Rf to Df
        corners[i].indxr = 0;
        corners[i].indxd = 1;

      }

      else if (corners[i].indxd === 1 && corners[i].indxl === 0) {

        // Fd to Fl
        corners[i].indxd = 0;
        corners[i].indxl = 4;

      }

      else if (corners[i].indxl === 4 && corners[i].indxu === 0) {

        // Fl to Fu
        corners[i].indxl = 0;
        corners[i].indxu = 3;

      }

      if (corners[i].indxu === 4) {

        // Uf to Rf
        corners[i].indxu = 0;
        corners[i].indxr = 3;

      }

      else if (corners[i].indxr === 3 && corners[i].indxd === 0) {

        // Rf to Df
        corners[i].indxr = 0;
        corners[i].indxd = 2;

      }

      else if (corners[i].indxd === 2 && corners[i].indxl === 0) {

        // Fd to Fl
        corners[i].indxd = 0;
        corners[i].indxl = 1;

      }

      else if (corners[i].indxl === 1 && corners[i].indxu === 0) {

        // Fl to Fu
        corners[i].indxl = 0;
        corners[i].indxu = 4;

      }

      drawTheCube();

    }

  };

  var fMovePrime = function () {

    // If corner is in F layer, then move the corresponding piece(s) counterclockwise
    for (var i = 0; i < corners.length; i++) {

      if (corners[i].indxb === 0 && corners[i].indxr === 0 && corners[i].indxd === 0 && corners[i].indxl === 0 && corners[i].indxu === 0) {

        corners[i].indxf += 1;
        if (corners[i].indxf > 4) { corners[i].indxf -= 4; }
        if (corners[i].indxf < 1) { corners[i].indxf += 4; }
      }

      if (corners[i].indxu === 3) {

        // Uf to Lf
        corners[i].indxu = 0;
        corners[i].indxl = 4;

      }

      else if (corners[i].indxu === 0 && corners[i].indxl === 4) {

        // Lf to Df
        corners[i].indxl = 0;
        corners[i].indxd = 1;

      }

      else if (corners[i].indxu === 0 && corners[i].indxd === 1) {

        // Df to Rf
        corners[i].indxd = 0;
        corners[i].indxr = 2;

      }

      else if (corners[i].indxu === 0 && corners[i].indxr === 2) {

        // Rf to Uf
        corners[i].indxr = 0;
        corners[i].indxu = 3;

      }

      if (corners[i].indxu === 4) {

        // Uf to Lf
        corners[i].indxu = 0;
        corners[i].indxl = 1;

      }

      else if (corners[i].indxu === 0 && corners[i].indxl === 1) {

        // Lf to Df
        corners[i].indxl = 0;
        corners[i].indxd = 2;

      }

      else if (corners[i].indxu === 0 && corners[i].indxd === 2) {

        // Df to Rf
        corners[i].indxd = 0;
        corners[i].indxr = 3;

      }

      else if (corners[i].indxu === 0 && corners[i].indxr === 3) {

        // Rf to Uf
        corners[i].indxr = 0;
        corners[i].indxu = 4;

      }

      drawTheCube();

    }

  };

  var bMove = function () {

    // If corner is in F layer, then move the corresponding piece(s) clockwise
    for (var i = 0; i < corners.length; i++) {

      if (corners[i].indxf === 0 && corners[i].indxr === 0 && corners[i].indxd === 0 && corners[i].indxl === 0 && corners[i].indxu === 0) {

        corners[i].indxb -= 1;
        if (corners[i].indxb > 4) { corners[i].indxb -= 4; }
        if (corners[i].indxb < 1) { corners[i].indxb += 4; }

      }
      if (corners[i].indxu === 1) {

        // Ub to Lb
        corners[i].indxu = 0;
        corners[i].indxl = 2;

      }

      else if (corners[i].indxl === 2 && corners[i].indxf === 0) {

        // Lb to Db
        corners[i].indxl = 0;
        corners[i].indxd = 3;

      }

      else if (corners[i].indxd === 3 && corners[i].indxf === 0) {

        // Db to Rb
        corners[i].indxd = 0;
        corners[i].indxr = 4;

      }

      else if (corners[i].indxr === 4 && corners[i].indxf === 0) {

        // Rb to Ub
        corners[i].indxr = 0;
        corners[i].indxu = 1;

      }

      if (corners[i].indxu === 2) {

        // Ub to Lb
        corners[i].indxu = 0;
        corners[i].indxl = 3;

      }

      else if (corners[i].indxl === 3 && corners[i].indxf === 0) {

        // Lb to Db
        corners[i].indxl = 0;
        corners[i].indxd = 4;

      }

      else if (corners[i].indxd === 4 && corners[i].indxf === 0) {

        // Db to Rb
        corners[i].indxd = 0;
        corners[i].indxr = 1;

      }

      else if (corners[i].indxr === 1 && corners[i].indxf === 0) {

        // Rb to Ub
        corners[i].indxr = 0;
        corners[i].indxu = 2;

      }

      drawTheCube();

    }

  };

  var bMovePrime = function () {

    // If corner is in F layer, then move the corresponding piece(s) clockwise
    for (var i = 0; i < corners.length; i++) {

      if (corners[i].indxf === 0 && corners[i].indxr === 0 && corners[i].indxd === 0 && corners[i].indxl === 0 && corners[i].indxu === 0) {

        corners[i].indxb += 1;
        if (corners[i].indxb > 4) { corners[i].indxb -= 4; }
        if (corners[i].indxb < 1) { corners[i].indxb += 4; }

      }

      if (corners[i].indxu === 1) {

        // Ub to Rb
        corners[i].indxu = 0;
        corners[i].indxr = 4;

      }

      else if (corners[i].indxr === 4 && corners[i].indxf === 0) {

        // Rb to Db
        corners[i].indxr = 0;
        corners[i].indxd = 3;

      }

      else if (corners[i].indxd === 3 && corners[i].indxf === 0) {

        // Db to Lb
        corners[i].indxd = 0;
        corners[i].indxl = 2;

      }

      else if (corners[i].indxl === 2 && corners[i].indxf === 0) {

        // Lb to Ub
        corners[i].indxl = 0;
        corners[i].indxu = 1;

      }

      if (corners[i].indxu === 2) {

        // Ub to Rb
        corners[i].indxu = 0;
        corners[i].indxr = 1;

      }

      else if (corners[i].indxr === 1 && corners[i].indxf === 0) {

        // Rb to Db
        corners[i].indxr = 0;
        corners[i].indxd = 4;

      }

      else if (corners[i].indxd === 4 && corners[i].indxf === 0) {

        // Db to Lb
        corners[i].indxd = 0;
        corners[i].indxl = 3;

      }

      else if (corners[i].indxl === 3 && corners[i].indxf === 0) {

        // Lb to Ub
        corners[i].indxl = 0;
        corners[i].indxu = 2;

      }

      drawTheCube();


    }

  };

  var rMove = function () {

    // If corner is in R layer, then move the corresponding piece(s) clockwise
    for (var i = 0; i < corners.length; i++) {

      if (corners[i].indxf === 0 && corners[i].indxb === 0 && corners[i].indxd === 0 && corners[i].indxl === 0 && corners[i].indxu === 0) {

        corners[i].indxr -= 1;
        if (corners[i].indxr > 4) { corners[i].indxr -= 4; }
        if (corners[i].indxr < 1) { corners[i].indxr += 4; }

      }

      if (corners[i].indxu === 4) {

        // Ur to Br
        corners[i].indxu = 0;
        corners[i].indxb = 2;

      }

      else if (corners[i].indxb === 2 && corners[i].indxr === 0) {

        // Br to Dr
        corners[i].indxb = 0;
        corners[i].indxd = 4;

      }

      else if (corners[i].indxd === 4 && corners[i].indxr === 0) {

        // Dr to Fr
        corners[i].indxd = 0;
        corners[i].indxf = 4;

      }

      else if (corners[i].indxf === 4 && corners[i].indxr === 0) {

        // Fr to Ur
        corners[i].indxf = 0;
        corners[i].indxu = 4;

      }

      if (corners[i].indxu === 1) {

        // Ur to Br
        corners[i].indxu = 0;
        corners[i].indxb = 3;

      }

      else if (corners[i].indxb === 3 && corners[i].indxr === 0) {

        // Br to Dr
        corners[i].indxb = 0;
        corners[i].indxd = 1;

      }

      else if (corners[i].indxd === 1 && corners[i].indxr === 0) {

        // Dr to Fr
        corners[i].indxd = 0;
        corners[i].indxf = 1;

      }

      else if (corners[i].indxf === 1 && corners[i].indxr === 0) {

        // Fr to Ur
        corners[i].indxf = 0;
        corners[i].indxu = 1;

      }

      drawTheCube();

    }

  };

  var rMovePrime = function () {

    // If corner is in R layer, then move the corresponding piece(s) counterclockwise
    for (var i = 0; i < corners.length; i++) {

      if (corners[i].indxf === 0 && corners[i].indxb === 0 && corners[i].indxd === 0 && corners[i].indxl === 0 && corners[i].indxu === 0) {

        corners[i].indxr += 1;
        if (corners[i].indxr > 4) { corners[i].indxr -= 4; }
        if (corners[i].indxr < 1) { corners[i].indxr += 4; }

      }

      if (corners[i].indxu === 4) {

        // Ur to Fr
        corners[i].indxu = 0;
        corners[i].indxf = 4;

      }

      else if (corners[i].indxf === 4 && corners[i].indxr === 0) {

        // Fr to Dr
        corners[i].indxf = 0;
        corners[i].indxd = 4;

      }

      else if (corners[i].indxd === 4 && corners[i].indxr === 0) {

        // Dr to Br
        corners[i].indxd = 0;
        corners[i].indxb = 2;

      }

      else if (corners[i].indxb === 2 && corners[i].indxr === 0) {

        // Br to Ur
        corners[i].indxb = 0;
        corners[i].indxu = 4;

      }

      if (corners[i].indxu === 1) {

        // Ur to Fr
        corners[i].indxu = 0;
        corners[i].indxf = 1;

      }

      else if (corners[i].indxf === 1 && corners[i].indxr === 0) {

        // Fr to Dr
        corners[i].indxf = 0;
        corners[i].indxd = 1;

      }

      else if (corners[i].indxd === 1 && corners[i].indxr === 0) {

        // Dr to Br
        corners[i].indxd = 0;
        corners[i].indxb = 3;

      }

      else if (corners[i].indxb === 3 && corners[i].indxr === 0) {

        // Br to Ur
        corners[i].indxb = 0;
        corners[i].indxu = 1;

      }

      drawTheCube();

    }

  };

  var lMove = function () {

    // If corner is in L layer, then move the corresponding piece(s) clockwise
    for (var i = 0; i < corners.length; i++) {

      if (corners[i].indxf === 0 && corners[i].indxb === 0 && corners[i].indxd === 0 && corners[i].indxr === 0 && corners[i].indxu === 0) {

        corners[i].indxl -= 1;
        if (corners[i].indxl > 4) { corners[i].indxl -= 4; }
        if (corners[i].indxl < 1) { corners[i].indxl += 4; }

      }

      if (corners[i].indxu === 2) {

        // Ul to Fl
        corners[i].indxu = 0;
        corners[i].indxf = 2;

      }

      else if (corners[i].indxf === 2 && corners[i].indxl === 0) {

        // Fl to Dl
        corners[i].indxf = 0;
        corners[i].indxd = 2;

      }

      else if (corners[i].indxd === 2 && corners[i].indxl === 0) {

        // Dl to Bl
        corners[i].indxd = 0;
        corners[i].indxb = 4;

      }

      else if (corners[i].indxb === 4 && corners[i].indxl === 0) {

        // Fl to Ul
        corners[i].indxb = 0;
        corners[i].indxu = 2;

      }

      if (corners[i].indxu === 3) {

        // Ul to Fl
        corners[i].indxu = 0;
        corners[i].indxf = 3;

      }

      else if (corners[i].indxf === 3 && corners[i].indxl === 0) {

        // Fl to Dl
        corners[i].indxf = 0;
        corners[i].indxd = 3;

      }

      else if (corners[i].indxd === 3 && corners[i].indxl === 0) {

        // Dl to Bl
        corners[i].indxd = 0;
        corners[i].indxb = 1;

      }

      else if (corners[i].indxb === 1 && corners[i].indxl === 0) {

        // Fl to Ul
        corners[i].indxb = 0;
        corners[i].indxu = 3;

      }

      drawTheCube();

    }

  };

  var lMovePrime = function () {

    // If corner is in L layer, then move the corresponding piece(s) counterclockwise
    for (var i = 0; i < corners.length; i++) {

      if (corners[i].indxf === 0 && corners[i].indxb === 0 && corners[i].indxd === 0 && corners[i].indxr === 0 && corners[i].indxu === 0) {

        corners[i].indxl -= 1;
        if (corners[i].indxl > 4) { corners[i].indxl -= 4; }
        if (corners[i].indxl < 1) { corners[i].indxl += 4; }

      }

      if (corners[i].indxu === 2) {

        // Ul to Bl
        corners[i].indxu = 0;
        corners[i].indxb = 4;

      }

      else if (corners[i].indxb === 4 && corners[i].indxl === 0) {

        // Bl to Dl
        corners[i].indxb = 0;
        corners[i].indxd = 2;

      }

      else if (corners[i].indxd === 2 && corners[i].indxl === 0) {

        // Dl to Fl
        corners[i].indxd = 0;
        corners[i].indxf = 2;

      }

      else if (corners[i].indxf === 2 && corners[i].indxl === 0) {

        // Bl to Ul
        corners[i].indxf = 0;
        corners[i].indxu = 2;

      }

      if (corners[i].indxu === 3) {

        // Ul to Bl
        corners[i].indxu = 0;
        corners[i].indxb = 1;

      }

      else if (corners[i].indxb === 1 && corners[i].indxl === 0) {

        // Bl to Dl
        corners[i].indxb = 0;
        corners[i].indxd = 3;

      }

      else if (corners[i].indxd === 3 && corners[i].indxl === 0) {

        // Dl to Fl
        corners[i].indxd = 0;
        corners[i].indxf = 3;

      }

      else if (corners[i].indxf === 3 && corners[i].indxl === 0) {

        // Bl to Ul
        corners[i].indxf = 0;
        corners[i].indxu = 3;

      }

      drawTheCube();

    }

  };

  // Moves in an array, an activated by Moves[this.m]
  Moves[0] = uMove;
  Moves[1] = uMovePrime;
  Moves[2] = dMove;
  Moves[3] = dMovePrime;
  Moves[4] = fMove;
  Moves[5] = fMovePrime;
  Moves[6] = bMove;
  Moves[7] = bMovePrime;
  Moves[8] = rMove;
  Moves[9] = rMovePrime;
  Moves[10] = lMove;
  Moves[11] = lMovePrime;

  var fnt = createFont("monospace");
  var fnt2 = createFont("Comic Sans MS");

  // Button Function
  var button = function (x, y, label, width, move) {

    this.x = x;
    this.y = y;
    this.label = label;
    this.width = width;
    this.height = this.width;
    this.m = move;

    this.draw = function () {

      strokeWeight(3);
      stroke(8, 8, 8);

      if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {

        fill(138, 0, 0, 100);
        rect(this.x - this.width * 0.025, this.y - this.height * 0.062, this.width, this.height * 1, this.width * 0.17);

      }

      noStroke();
      fill(3, 0, 77);
      rect(this.x - this.width * 0.025, this.y - this.height * 0.062, this.width, this.height * 1, this.width * 0.17);
      textFont('monospace');
      textSize(this.width * 0.94);
      fill(255, 255, 255);
      //text(this.label,this.x+this.width*0.1,this.y+this.height*0.65);
      text(this.label, this.x + this.width * 0.07, this.y + this.height * 0.76);

      if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {

        fill(255, 255, 255, 80);
        text(this.label, this.x + this.width * 0.12, this.y + this.height * 0.76);

      }

      textSize(10);
      noStroke();

    };

    this.mouseCheck = function () {

      if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {

        if (mouseIsPressed) {

          Moves[this.m]();
          println("moved the cube!");

        }

      }

    };

    this.run = function () {

      this.draw();
      this.mouseCheck();

    };

  };

  // Moving Buttons
  var uButton = new button(10, 10, "U", 30, 0); //uMove
  var upButton = new button(50, 10, "U'", 30, 1); //uMovePrime
  var dButton = new button(90, 10, "D", 30, 2); //dMove
  var dpButton = new button(130, 10, "D'", 30, 3); //dMovePrime
  var fButton = new button(170, 10, "F", 30, 4); //fMove
  var fpButton = new button(210, 10, "F'", 30, 5); //fMovePrime
  var bButton = new button(250, 10, "B", 30, 6); //bMove
  var bpButton = new button(290, 10, "B'", 30, 7); //bMovePrime
  var rButton = new button(330, 10, "R", 30, 8); //rMove
  var rpButton = new button(370, 10, "R'", 30, 9); //rMovePrime
  var lButton = new button(10, 50, "L", 30, 10); //lMove
  var lpButton = new button(50, 50, "L'", 30, 11); //lMovePrime

  // Handle Keys pressed
  var handleKey = function () {

    if (input[85]) {

      uMove();

    }

    if (input[68]) {

      dMove();

    }

    if (input[70]) {

      fMove();

    }

  };

  // Draw function to process everything
  draw = function () {

    background(227, 246, 255);
    uButton.run();
    upButton.run();
    dButton.run();
    dpButton.run();
    fButton.run();
    fpButton.run();
    bButton.run();
    bpButton.run();
    rButton.run();
    rpButton.run();
    lButton.run();
    lpButton.run();

    // Background
    stroke(0, 0, 0);
    strokeWeight(1);
    fill(0, 0, 0);
    rect(110 - 2, 65 - 2, 90 + 4, 90 + 4, 3);
    rect(110 - 2, 155 - 2, 90 + 4, 90 + 4, 3);
    rect(200 - 2, 155 - 2, 90 + 4, 90 + 4, 3);
    rect(290 - 2, 155 - 2, 90 + 4, 90 + 4, 3);
    rect(20 - 2, 155 - 2, 90 + 4, 90 + 4, 3);
    rect(110 - 2, 245 - 2, 90 + 4, 90 + 4, 3);
    fill(31, 31, 31);
    // U
    rect(110, 65, 90, 90);
    // F
    rect(110, 155, 90, 90);
    // R
    rect(200, 155, 90, 90);
    // B
    rect(290, 155, 90, 90);
    // L
    rect(20, 155, 90, 90);
    // D
    rect(110, 245, 90, 90);

    // Handle Key Press
    handleKey();

    for (var i = 0; i < corners.length; i++) {

      corners[i].process();

    }

  };
}

const twoByRubiksCube = {
  PROJECT_NAME: '2x2 Rubik\'s Cube',
  PROJECT_LINK: 'https://www.khanacademy.org/computer-programming/2x2-rubiks-cube/5452306788745216',
  main,
}