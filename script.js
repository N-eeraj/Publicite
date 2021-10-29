$(document).ready(function () {
    
    window.onscroll = function() {
        var nav = document.getElementById('nav');
        if (window.pageYOffset > 60)
            $('nav').addClass('nav-scroll');
        else
            $('nav').removeClass('nav-scroll');
    }

    $('#menu').on('click', menuToggle);
    $('nav a').on('click', menuToggle);

    $('#loader').css('display', 'none');

});

const menuToggle = () => {
    $('nav ul').toggleClass('open-menu');
    $('#menu hr:first-child').toggleClass('first-hr');
    $('#menu hr:nth-child(2)').toggleClass('second-hr');
    $('#menu hr:last-child').toggleClass('last-hr');
}