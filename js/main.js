(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 350, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    var typed = new Typed("#typed", {
        strings: ['student', 'software developer', 'coder', 'mobile developer', 'full-stack developer', 'web developer'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 700,
        fadeOut: false,
        loop: true,
        loopCount: Infinity,
    });

    // particlesJS.load('particles-js', 'particlesjs-config.json');

})(jQuery); // End of use strict

var mainNavAnim = {
    origin: "top",
    distance: "24px",
    delay: 1000,
    scale: 1.25,
    duration: 1000,
};

var headingAnim = {
    origin: "top",
    duration: 1500,
    // scale: 2,
};

var descrTextAnim = {
    origin: "bottom",
    distance: "30px",
    delay: 500,
    scale: 0.25,
    duration: 1000,
    opacity: 0,
};

var downBtnAnim = {
    delay: 1500,
    origin: "top",
    rotate: {x: 10, y: 100, z: 100},
    duration: 1000
};

window.sr = ScrollReveal();
sr.reveal(".brand-heading", headingAnim);
sr.reveal(".desc-text", descrTextAnim);
sr.reveal("#mainNav", mainNavAnim);
sr.reveal(".downBtn", downBtnAnim);