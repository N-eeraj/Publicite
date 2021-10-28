$(document).ready(function () {
    
    $('#menu').on('click', function () {
       $('nav ul').toggleClass('open-menu');
       $('#menu hr:first-child').toggleClass('first-hr');
       $('#menu hr:nth-child(2)').toggleClass('second-hr');
       $('#menu hr:last-child').toggleClass('last-hr');
    });

});