document.onmousemove = readMouseMove;

var xpos, ypos, e, x, y;
var eye = $(".circle2, .circle4 ");
var eyewhite = $(".circle1, .circle3");

function readMouseMove(e) {
  x = e.clientX;
  y = e.clientY;
  xpos = document.getElementById("x_result");
  ypos = document.getElementById("y_result");
  xpos.innerHTML = x;
  ypos.innerHTML = y;

  if (x > 900 && y < 200) {
    // speech bubble
    $(".speech").addClass("show");
    $(".speech > .content").removeClass("show");
    $(".speech > .content.sad").addClass("show");
    // expression
    $(".expression").addClass("sad");
    $("p").removeClass("open");
    $("p.sad").addClass("open");
    $(".expression").removeClass("surprised");
  } else if (x < 400 && y < 200) {
    $(".speech").addClass("show");
    $(".speech > .content").removeClass("show");
    $(".speech > .content.surprised").addClass("show");
    $(".expression").removeClass("sad");
    $(".expression").addClass("surprised");
    $("p").removeClass("open");
    $("p.surprised").addClass("open");
  } else if (x > 900 && y > 650) {
    $(".speech").addClass("show");
    $("p").removeClass("open");
    $("p.home").addClass("open");
    $(".speech > .content").removeClass("show");
    $(".speech > .content.home").addClass("show");
  } else if (x < 1000 || y > 200) {
    $("p").removeClass("open");
    $(".expression").removeClass("sad");
    $(".speech").removeClass("show");
    $(".expression").removeClass("surprised");
  }

  /* Mouse tracking */
  var currentMousePos = { x: -1, y: -1 };
  var frameDimensions = { width: 0, height: 0 };
  var dirVector = { x: 0, y: 0 };
  var lookAmount = 70;

  currentMousePos.x = e.pageX;
  currentMousePos.y = e.pageY;

  frameDimensions.width = $(document).width();
  frameDimensions.height = $(document).height();

  dirVector.x = currentMousePos.x / frameDimensions.width;
  dirVector.y = currentMousePos.y / frameDimensions.height;

  eye.css(
    "transform",
    "translate(" +
      (dirVector.x * lookAmount - 15) +
      "px," +
      (dirVector.y * lookAmount - 10) +
      "px)"
  );
  
  eye.css(
    "transform",
    "translate(" +
      (dirVector.x * lookAmount - 15) +
      "px," +
      (dirVector.y * lookAmount - 10) +
      "px)"
  );
}