// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

(function($){

$(document).ready(function() {

    $('a[data-colorbox="true"]').colorbox(
            { 
                height: function() { return $(this).data("colorbox-height") || false },
                width: function() { return $(this).data("colorbox-width") || false },
		maxWidth: function() { return $(this).data("colorbox-max-width") || false },
		maxHeight: function() { return $(this).data("colorbox-max-height") || false },
                iframe: function() { return $(this).data("colorbox-iframe") || false },
                photo: function() { return $(this).data("colorbox-photo") || false },
                innerHeight: function() { return $(this).data("colorbox-innerheight") || false },
                innerWidth: function() { return $(this).data("colorbox-innerwidth") || false },
                title: function() { return $(this).data("colorbox-title") || false },
                className: function() { return $(this).data("colorbox-class-name") || false },
                href: function() { return $(this).attr('href') },
                opacity: 0.5
            });
});

}) (jQuery);
