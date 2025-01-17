
$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    // $('#menu li a').on('click', function (event) {
    //     event.preventDefault
    //     $('.nav #menu li a').removeClass('active');
    //     $(this).addClass('active');
    // });

 
    // navigation starts here
    $("#toggle").click(function () {
        $(this).toggleClass('on');
        $("#resize").toggleClass("active");
    });
    $("#resize ul li a").click(function () {
        $(this).toggleClass('on');
        $("#resize").toggleClass("active");
    });

    $(".close-btn").click(function () {
        $(this).toggleClass('on');
        $("#resize").toggleClass("active");
    });

});
var elm = document.querySelector('#main-header');
var ms = new MenuSpy(elm);
new WOW().init();

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(
                        ":focus"
                    )) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex',
                            '-1'
                        ); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

