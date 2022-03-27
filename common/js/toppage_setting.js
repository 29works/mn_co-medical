
        var galleryThumbs = new Swiper('.tab-menu', {
            spaceBetween: 10,
            slidesPerView: 'auto',
            freeMode: false,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slideActiveClass: 'swiper-slide-active'
          });
            galleryThumbs.on('tap', function () {
              var current = galleryTop.activeIndex;
              galleryThumbs.slideTo(current - 2, 500, true);
        });

        var galleryTop = new Swiper('.tab-contents', {
            autoHeight: true,
            thumbs: {
                swiper: galleryThumbs
            }
        });
