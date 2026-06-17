(function ($) {
    "use strict";

    // Navbar scroll effect
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-scrolled').css('box-shadow', '0 10px 30px rgba(0,0,0,0.3)');
        } else {
            $('.navbar').removeClass('navbar-scrolled').css('box-shadow', 'none');
        }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a, .hero-buttons a, .footer-links a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 80
            }, 1000, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).addClass('active');
            }
        }
    });

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 60,
            backSpeed: 30,
            smartBackspace: true,
            loop: true
        });
    }

    // Scroll to Bottom indicator
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });

    // Portfolio isotope and filter
    $(window).on('load', function () {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $('.portfolio-filter-btn').on('click', function () {
            $('.portfolio-filter-btn').removeClass('active');
            $(this).addClass('active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
        });
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000, 'easeInOutExpo');
        return false;
    });

    // Active link update on scroll
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop() + 100;
        
        // Assign active class to nav links while scrolling
        $('div[id]').each(function(i, item) {
            if ($(item).offset().top <= scrollDistance) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a').eq(i).addClass('active');
            }
        });
    }).scroll();

    // Contact form form validation/handling
    if ($('#contactForm input, #contactForm textarea').jqBootstrapValidation) {
        $('#contactForm input, #contactForm textarea').jqBootstrapValidation({
            preventSubmit: true,
            submitError: function ($form, event, errors) {
                // additional error messages or events
            },
            submitSuccess: function ($form, event) {
                event.preventDefault();
                submitContactForm();
            },
            filter: function () {
                return $(this).is(":visible");
            },
        });
    } else {
        // Fallback standard submit listener
        $('#contactForm').on('submit', function(e) {
            e.preventDefault();
            submitContactForm();
        });
    }

    function submitContactForm() {
        var $submitButton = $("#sendMessageButton");
        $submitButton.prop("disabled", true);
        $submitButton.html("<i class='fa fa-spinner fa-spin mr-2'></i>Sending...");

        // Simulate form submission for premium local experience
        setTimeout(function() {
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#success > .alert-success')
                .append("<strong>Your message has been sent successfully! </strong>");
            $('#success > .alert-success')
                .append('</div>');
            $('#contactForm').trigger("reset");
            $submitButton.prop("disabled", false);
            $submitButton.html("<i class='fa fa-paper-plane mr-2'></i>Send Message");
        }, 1000);
    }

    // Credentials copy button logic
    $('.copy-btn').click(function() {
        var textToCopy = $(this).data('copy');
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(textToCopy).select();
        document.execCommand("copy");
        $temp.remove();
        
        var $btn = $(this);
        var originalHtml = $btn.html();
        $btn.html("<i class='fa fa-check text-success mr-1'></i>Copied!");
        $btn.addClass('btn-success').css('color', '#ffffff');
        setTimeout(function() {
            $btn.html(originalHtml);
            $btn.removeClass('btn-success').css('color', '');
        }, 1500);
    });

})(jQuery);
