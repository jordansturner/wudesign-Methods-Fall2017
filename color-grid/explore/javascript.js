
$( ".box" ).click(function() {
  $(this).css("background-color", getRandomColor());
});

function getRandomColor() {
  var letters = '789ABCD';
  var color = '#FFFF';
  for (var i = 0; i < 2; i++) {
    color += letters[Math.floor(Math.random() * 7)];
  }
  return color;

}

$(function() {

  var colors = ['red', 'blue', 'green', 'grey'],
    color;

  $('.c3').click(function() {
    var randColor;
    do {
      randColor = colors[Math.floor(Math.random() * colors.length)];
    } while (color == randColor);
    $('.c3').css('background-color', randColor);
    color = randColor;


  });


  $('.c3').hover(function() {
    var randColor;
    do {
      randColor = colors[Math.floor(Math.random() * colors.length)];
    } while (color == randColor);
    $('.c3').css('background-color', randColor);
    color = randColor;
});
});