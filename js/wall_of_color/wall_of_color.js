"use strict";

$(document).ready(function() {
  var boxes = $('.box');

  boxes.on('click', function() {
    var $self = $(this);
    var $myColor = $("#color");

    var number = Math.random()*255;

    var messyHex = number.toString(16);

    var realHex = '#' + messyHex.slice(3,9);

    $self.css('background-color', realHex);
    $myColor.css("color", realHex);
  })
})
