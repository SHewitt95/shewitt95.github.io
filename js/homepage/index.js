"use strict";

function initiatePage() {
  // Grabs buttons from the document.
  var pr_button = $('#programmer-button'),
      jr_button = $('#journalist-button');

  // Grabs work sections from the document.
  var written = $('#written-work'),
      items = $('#item-box');

  // Grabs year in copyright notice
  var year = $("#year");
  var d = new Date();

  year.text(d.getFullYear());



  // Hides code work section.
  written.hide();

  pr_button.on('click', function() {
    written.fadeOut();
    items.fadeIn(1000);
  })

  jr_button.on('click', function() {
    items.fadeOut();
    written.fadeIn(1000);
  })

  $('#divRss').FeedEk({
    FeedUrl:'http://www.themiamihurricane.com/author/shermanhewitt/feed/',
    MaxCount : 5,
    ShowDesc : true,
    ShowPubDate:true,
    DescCharacterLimit:145,
    TitleLinkTarget:'_blank',
  });
}

$(document).ready(function() {

  initiatePage();

})
