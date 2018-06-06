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

})(jQuery); // End of use strict

var mainNavAnim = {
    origin: "top",
    distance: "24px",
    scale: 1.25,
};

var brandHeadingAnim = {
    origin: "top",
    scale: 10,
};

var introTextAnim = {
    origin: "bottom",
    distance: "100px",
    scale: 0.25,
    opacity: 0,
};

window.sr = ScrollReveal({duration: 1500});
sr.reveal(".brand-heading", brandHeadingAnim);
sr.reveal(".intro-text", {delay: 1500}, introTextAnim);
sr.reveal("#mainNav", {delay: 1500}, mainNavAnim);
sr.reveal("#introBtn", {delay: 2000}, mainNavAnim);