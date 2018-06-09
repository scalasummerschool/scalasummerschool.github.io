$(document).ready(function() {    

    var stickyOffset = 50;

    /* For the sticky navigation */
    $('.js--remove-sticky-nav').waypoint(function(direction) {
        if (direction == "up") {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: stickyOffset + 'px;'
    });

    $('.js--section').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
    }, {
      offset: stickyOffset + 'px;'
    });

    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - stickyOffset
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Mobile navigation */
    function toggleNav() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        } else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }
    }

    $('.js--nav-icon').click(function() {
        toggleNav();        
    });
});
