// show pagetop
$('#page-top').hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $('#page-top').fadeIn(1000);
  } else {
    $('#page-top').fadeOut(300);
  }
});

// show floating
$('.floating').hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.floating').fadeIn(1000);
  } else {
    $('.floating').fadeOut(300);
  }
});

// uservoice swiper-slide
$(function () {
  var voice = new Swiper('.uservoice .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      767: {
        slidesPerView: 1.5,
      },
    },
  });
});

// joboffer swiper-slide
var scaleWindowW = function () {
  var w = window.innerWidth || document.documentElement.clientWidth || 0;
  return w;
};
window.addEventListener(
  'DOMContentLoaded',
  function () {
    var swiperjob = undefined;
    var swiperEl = document.querySelector('.joboffer-slider .swiper-container');
    var swiperWrapper = document.getElementsByClassName('swiper-wrapper');
    var swiperSlide = document.getElementsByClassName('swiper-slide');

    var initSwiper = function () {
      if (scaleWindowW() < 767 && swiperjob == undefined) {
        swiperjob = new Swiper(swiperEl, {
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          loop: false,
          slidesPerView: 1.2,
          spaceBetween: 20,
          centeredSlides: false,
        });
      } else if (scaleWindowW() >= 767 && swiperjob != undefined) {
        swiperjob.destroy();
        swiperjob = undefined;
        for (var i = 0; i < swiperWrapper.length; i++) {
          swiperWrapper[i].removeAttribute('style');
        }
        for (var i = 0; i < swiperSlide.length; i++) {
          swiperSlide[i].removeAttribute('style');
        }
      }
    };
    initSwiper();

    window.addEventListener('resize', initSwiper);
  },
  false
);

// smooth scroll
$(function () {
  $('a[href^="#"]').click(function () {
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({ scrollTop: position }, 500, 'swing');
    return false;
  });
});

$(function () {
  // TOP ttl
  ScrollReveal().reveal('.mv-balloon', {
    distance: '100px',
    origin: 'top',
    duration: '2000',
  });
  // TOP
  ScrollReveal().reveal('.mv-ttl', {
    distance: '50px',
    origin: 'bottom',
    duration: '2000',
    delay: '1000',
  });
  // CTA btn
  ScrollReveal().reveal('.cta .btn-entry', {
    distance: '50px',
    origin: 'bottom',
    duration: '1000',
  });
   // joboffer-slider
  ScrollReveal().reveal('.joboffer-slider', {
    distance: '50px',
    origin: 'bottom',
    viewFactor: '0.4',
    duration: '500',
    easing: 'linear',
  });
  // Flow
  ScrollReveal().reveal('.steplist', {
    distance: '50px',
    origin: 'bottom',
    viewFactor: '0.4',
    duration: '500',
    easing: 'linear',
  });
});

// motion animation
var EffectH = 100;
$(window).on('scroll load', function () {
  var scTop = $(this).scrollTop();
  var scBottom = scTop + $(this).height();
  var effectPos = scBottom - EffectH;
  $('.js-scroll').each(function () {
    var thisPos = $(this).offset().top;
    if (thisPos < effectPos) {
      $.when($(this).addClass('show')).done(function () {
        $(this)
          .delay(500)
          .queue(function () {
            $(this).addClass('done');
          });
      });
    }
  });
});

// accordion
$(function () {
  var cardBody = '.card-body';

  $(window).on('resize', function () {
    if (scaleWindowW() > 767) {
      $(cardBody).addClass('is-pc');
    } else {
      $(cardBody).removeClass('is-pc');
    }
  });

  $('.card-head').click(function () {
    if (scaleWindowW() < 768) {
      $(this).toggleClass('active').next(cardBody).fadeToggle();
    }
  });
});
