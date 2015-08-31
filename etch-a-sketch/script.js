var currentColor = "#E74C3C";
var currentSize = 16;

$(document).ready(function() {
  resetGrid(currentSize);

  $(document).on("mouseover", ".square", function() {
    if (currentColor === "random") {
      $(this).css("background-color", getRandomColor());
    } else {
      $(this).css("background-color", currentColor);
    }
  });

  $(".colorSelect").change(function() {
    currentColor = $(".colorSelect").find(":selected").val();
  });

  $(".clearButton").click(function() {
    resetGrid(currentSize);
  });

  $(".changeSizeButton").click(function() {
    var prompt;
    do {
      prompt = window.prompt("Enter Grid Size", 16);
    } while (isNaN(prompt));
    currentSize = prompt;
    resetGrid(currentSize);
  });
})

function resetGrid(size) {
  $(".grid").empty();
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      $(".grid").append('<div class="square"></div>');
    }
  }
  var squareSize = $(".container").width() / size;
  $(".square").css("width", squareSize);
  $(".square").css("height", squareSize);
}

function getRandomColor() {
  var r = getRandomInt(0, 255);
  var g = getRandomInt(0, 255);
  var b = getRandomInt(0, 255);

  return "rgb(" + r + "," + g + "," + b + ")";

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
