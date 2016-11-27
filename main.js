/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {



// Question #1
$(".changeColor").click(function() {
  $("li:nth-child(3)").addClass("altClass");
});

// Question #2
$("li:nth-child(4)").click(function() {
  $("li:nth-child(5)").removeClass("fourthLi");
});


// Question #3
$("#removeLi").click(function() {
  $("li:nth-child(2)").hide();
});

// Question #4
$("li:nth-child(5)").click(function() {
  $("li:nth-child(5)").css("font-size", "40px");
  $("li:nth-child(1)").hide();
  $("li:nth-child(2)").hide();
  $("li:nth-child(3)").hide();
  $("li:nth-child(4)").hide();
});

// Question #5
$(".cute").click(function() {
  $(this).clone(true).appendTo(".clones");
});

  // Question #6
$("body").dblclick(function() {
  $("#makeSquare").css("width", "100px");
  $("#makeSquare").css("length", "100px");
});
//*****************************************need help. Tried to just use addClass but didn't work

// Question #7
$("swatches.black swatch").click(function() {
  $("html").css("background-color","black");
  $(".black swatch").css("border-color", "white");
});

//******************************************************

  // Question #8
$("#hover").hover(function() {
  $(this).css("background-color", "red");
});

//******************************************need help with 8a
$("#hover").click(function() {
  $(this).toggleClass("green");
});





});
