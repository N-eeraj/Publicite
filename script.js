$(document).ready(function () {
    
    window.onscroll = function() {
        var nav = document.getElementById('nav');
        if (window.pageYOffset > 60)
            $('nav').addClass('nav-scroll');
        else
            $('nav').removeClass('nav-scroll');
    }

    $('#menu').on('click', menuToggle);
    $('nav a').on('click', function() {
        $('.active-nav').removeClass('active-nav');
        $(this).addClass('active-nav');
        menuToggle();
    });

    $('#service button').on('click', function () {
        $('.active-service').removeClass('active-service');
        $('.carousel-active').removeClass('carousel-active');
        $(this).addClass('active-service');
        $(`div[data-carousel='${this.innerText}']`).addClass('carousel-active');
    });

});

window.onload = () => $('#loader').css('transform', 'translateY(-100vh)');

const menuToggle = () => {
    $('nav ul').toggleClass('open-menu');
    $('#menu hr:first-child').toggleClass('first-hr');
    $('#menu hr:nth-child(2)').toggleClass('second-hr');
    $('#menu hr:last-child').toggleClass('last-hr');
}