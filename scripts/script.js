var $ = jQuery;

// top-navigation function
var windowScrolled = () => {
    function checkScroll() {
        if ($(window).scrollTop() >= 50) {
            $(".top-navigation").addClass("scrolled");
        } else {
            $(".top-navigation").removeClass("scrolled");
        }
    }

    // function checkWPadmin() {
    //     if ($("#wpadminbar").length) {
    //         var wpAdminBar = $("#wpadminbar").height();

    //         $(".top-navigation").css("top",wpAdminBar+"px");
    //     }
    // }

    $(document).ready(function() {
        checkScroll();
        // checkWPadmin();
        $(window).scroll(checkScroll);
    });
}

// responsive menus
var responsiveMenu = () => {
    if ($(".top-navigation .sub-menu").length) {
        $(".top-navigation .sub-menu").each(function() {
            $(this).prev().click(function(e) {
                e.preventDefault();
            });

            $(this).parent().click(function() {
                $(".top-navigation .navbar-nav > li").removeClass("show-submenu");
                $(this).addClass("show-submenu");
            })
        })

        $(".top-navigation .navbar-toggler").click(function() {
            if ($(this).hasClass("collapsed")) {
                $(".top-navigation .navbar-nav > li").removeClass("show-submenu");
            }
        });
    }
}

// home page - parallax auto margin-top
var parallaxMargin = () => {
    var topNavHeight = $(".top-navigation").height();
  
    if ($(".page-home").length) {
        if ($("body").hasClass("admin-bar")) {
            var heroHeight = $(".hero").outerHeight();
            var topNavHeightAdjusted = $(".top-navigation").offset().top;
            var autoHeight = topNavHeightAdjusted + heroHeight - 5;

            if ($(window).width() < 783) {
                if ($(window).width() < 768) {
                    var autoHeightMobile = topNavHeightAdjusted + heroHeight - 40;
    
                    $(".page-home").css("margin-top", autoHeightMobile+"px");
                }

                else {
                    var autoHeightTab = topNavHeightAdjusted + heroHeight - 20;
    
                    $(".page-home").css("margin-top", autoHeightTab+"px");
                }
            }

            else {
                $(".page-home").css("margin-top", autoHeight+"px");
            }
        }

        else {
            var heroHeight = $(".hero").outerHeight();
            var autoHeight = topNavHeight + heroHeight - 5;

            $(".page-home").css("margin-top", autoHeight+"px");
        }
    }
  
    else {
        $("main").css("margin-top", topNavHeight+"px");
    }
}

// contact form 7 adjustments
var contactForm7 = () => {
    if ($(".wpcf7-spinner").length) {
        $(".wpcf7-spinner").each(function() {
            $(this).remove();
        });
    }
}

  
// initialize the functions
windowScrolled();
  
$(document).ready(function() {
    responsiveMenu();
    parallaxMargin();
    contactForm7();
});
  
$(window).resize(function() {
    parallaxMargin();
});
  
window.onload = function() {
    responsiveMenu();
    contactForm7();
}
  