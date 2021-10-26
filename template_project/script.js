var sketchProc = function (processingInstance) {
  with (processingInstance) {
    size(400, 400);
    frameRate(30);

    // CODE_HERE
  }
};

// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas");
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc);