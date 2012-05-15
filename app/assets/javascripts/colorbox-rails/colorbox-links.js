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
    $('a[data-colorbox="true"]').live('click', function(e) {
        e.preventDefault();

        $.colorbox(
            { 
                height: $(this).data("colorbox-height") || false,
                width: $(this).data("colorbox-width") || false,
                iframe: $(this).data("colorbox-iframe") || false,
                photo: $(this).data("colorbox-photo") || false,
                innerHeight: $(this).data("colorbox-innerheight") || false,
                innerWidth: $(this).data("colorbox-innerwidth") || false,
                href: $(this).attr('href'),
                opacity: 0.5
            });
    });
});

}) (jQuery);