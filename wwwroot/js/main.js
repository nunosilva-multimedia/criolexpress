$(function () {
    $('.cargo .container .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        speed: 1750,
        fade: false,
        prevArrow: 'main .cargo .slider-arrows .left',
        nextArrow: 'main .cargo .slider-arrows .right'
    });
});

$(window).scroll(function () {
    var banner = $('.hp-banner');
    var bannerOffset = banner.offset();

    if (window.pageYOffset > bannerOffset.top) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

var page = $('html, body');

$('header nav ul li a').click(function() {
    page.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});

$('header .container > .btn').click(function(){

    var tl = anime.timeline({
        targets: 'header .container > .btn'
      });
    
    tl.add({
        targets: 'header .container > .btn span',
        update: function(){
            $('header .container > .btn span').addClass('animate');
        },
        duration: 250
    }).add({
        targets: 'header .container > .btn span',
        update: function(){
            $('nav').addClass('open');
        },
        delay: 250
    }).add({
        update: function(){
            $('body > nav .header .btn span.first').addClass('animate');
            $('body > nav .header .btn span.second').addClass('animate');
        },
        delay: 250
    });

});

$('body > nav .header .btn').click(function(){
    
    var tl = anime.timeline({
        targets: 'body > nav .header .btn'
    });
    
    tl.add({
        update: function(){
            $('body > nav .header .btn span.first').removeClass('animate');
            $('body > nav .header .btn span.second').removeClass('animate');
        },
        duration: 100
    }).add({
        targets: 'header .container > .btn span',
        update: function(){
            $('nav').removeClass('open');
        }
    }).add({
        targets: 'header .container > .btn span',
        update: function(){
            $('header .container > .btn span').removeClass('animate');
        }
    });

});
