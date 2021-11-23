(function ($, window, document, undefined) {
  var __$win = $(window);
  var __$doc = $(document);
  var __$html = $("html");
  var __$body = $("body");

  $(function () {
    __ctrlAnimation();
    __ctrlKeyVisual();
    __checkFavoritContents();
    __ctrlYoutuveMovie();
    //    __ctrlSwiper();
  });

  // 画面内に入ったらアニメーション
  function __ctrlAnimation() {
    // ターゲット要素設定
    var targetElements = [].slice.call(
      document.querySelectorAll('[data-animation]')
    );

    // コールバック設定
    var callback = function (entries, object) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var target = entry.target;
        target.classList.add("play");
        object.unobserve(target);
      });
    };
    var observer = new IntersectionObserver(callback, {
      rootMargin: "2000px 0px -100px",
      threshold: 0
    });

    targetElements.forEach(function (targetElement) {
      observer.observe(targetElement);
    });
  }

  // 画面外のKVを非表示
  function __ctrlKeyVisual() {
    // ターゲット要素設定
    var targetElements = [].slice.call(
      document.querySelectorAll('.mv')
    );
    var $kv = $('.hero-bg');

    // コールバック設定
    var callback = function (entries, object) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          $kv.addClass("hide");
        } else {
          $kv.removeClass("hide");
        }
      });
    };
    var observer = new IntersectionObserver(callback, {
      rootMargin: "0px",
      threshold: 0
    });

    targetElements.forEach(function (targetElement) {
      observer.observe(targetElement);
    });
  }

  // お気に入りブランドのアイテムがあるか監視
  function __checkFavoritContents() {
    const targetBrand = document.querySelectorAll('[data-contents="favoriteBrand"]');
    const targetRanking = document.querySelectorAll('[data-contents="favoriteRanking"]');


    if (targetBrand.length == 0) return;

    // お気に入りブランドリストが空ならランキングに切り替え
    if (hFavoriteBrand.id == "") {
      targetBrand[0].remove();
      targetRanking[0].classList.remove('hide');
      _changeContents();
      return;
    }

    const _START = 0;
    const _LOADED = 1;
    const _END = 2;

    let status = _START;
    const $elm = $('[data-contents="favoriteBrand"]');

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (status == _START) {
          if ($elm.find('[class*=beforeComplete--]').length) {
            status = _LOADED;
          }
        }
        if (status == _LOADED) {
          if ($elm.find('[class*=section-loading--]').length == 0) {
            if ($elm.find('[class*=fade-enter-active--]').length == 1) {
              // console.log('ランキングデータあり');
              observer.disconnect();
              status = _END;
            } else {
              // console.log('ランキングデータなし');
              targetBrand[0].remove();
              targetRanking[0].classList.remove('hide');
              _changeContents();
              status = _END;
            }
          }
        }
      });
    });

    const config = {
      childList: true,
      subtree: true
    };
    observer.observe(targetBrand[0], config);

    // ランキングにコンテンツ差し替え
    function _changeContents() {

      var $elm = $('.section-favorit-ranking');
      var $img = $elm.find('.section-title').find('.imgFluid');
      var src = $img.attr('src');
      var newSrc = src.replace('brand-title.png', 'ranking-title.png');
      var $subtitle1 = $elm.find('.sub-title-text-inner-content').eq(0);
      var $subtitle2 = $elm.find('.sub-title-text-inner-content').eq(1);

      $elm.find('.section-title').removeClass('play').end()
        .find('.sub-title').removeClass('play');

      setTimeout(function () {
        $img.attr('src', newSrc).attr('alt', '人気ランキング');
        $subtitle1.text('ZOZOWEEK対象の');
        $subtitle2.text('人気アイテムランキング');

        $elm.find('.section-title').addClass('play').end()
          .find('.sub-title').addClass('play');
      }, 300);
    }
  }




  /* swiper周り */
  function __ctrlSwiper() {
    const swiper = new Swiper('.swiper-container', {
      speed: 200,
      width: 404,
      loop: true,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    $('.cm-cast')
      .find('[data-toggle="modalbox"]').
      on('click', function () {
        var index = $(this).data('index');
        swiper.slideTo(index, 0);
      });
  }


  // youtubeモーダルコントロール
  function __ctrlYoutuveMovie() {
    _init();

    function _init() {
      __setupYoutubeApi();
      __promoMovie();
    }

    /* Youtubeを使用するための設定 */
    function __setupYoutubeApi() {
      $(function () {
        var firstScript = document.getElementsByTagName("script")[0];
        var youtubeScript = document.createElement("script");

        youtubeScript.setAttribute("charset", "UTF-8");
        youtubeScript.setAttribute("src", "https://www.youtube.com/iframe_api");
        firstScript.parentNode.insertBefore(youtubeScript, firstScript);
      });
    }
    /* プロモーションムービーをモーダルで立ち上げる処理 */
    function __promoMovie() {
      var modalName = "youtube-modal";
      var _eventNamespace = ".__promoMovie";
      var _$modalTarget;
      var _modalTargetSelector = '[data-movie="player"]';
      var _modalTemplate = [
        '<div class="modalSource" data-additional-class="' + modalName + '">',
        '<div class="' + modalName + '-movie" data-embed="movie">',
        '<div class="' + modalName + '-movie-inner">',
        '<div id="' + modalName + '-__movieID__" class="' + modalName + '-movie-object" data-movie="player" data-video-id="__movieID__"></div>',
        "</div>",
        "</div>",
        "</div>",
      ].join("");

      _init();

      function _init() {
        $(function () {
          _registerElements();
          _buildElements();
        });
      }

      function _registerElements() {
        _$modalTarget = $(_modalTargetSelector);
      }

      function _buildElements() {
        _$modalTarget.on("click" + _eventNamespace, function () {
          var movieID = $(this).attr("data-movieid");
          _modalMovieShow(movieID);
        });
      }

      function _modalMovieShow(movieID) {
        var taegetElm = $.parseHTML(
          _modalTemplate.replace(/__movieID__/g, movieID)
        );
        $.modalbox.show({
          width: "sm",
          target: taegetElm
        });
        _buildMovie();
      }

      function _buildMovie() {
        var $movies = $('[data-embed="movie"]');

        $movies.each(function (index) {
          var $movie = $(this);
          var $player = $movie.find('[data-movie="player"]');
          var playerId = $player.attr("id");
          var videoId = $player.data("video-id");
          var player;

          player = new YT.Player(playerId, {
            width: "100%",
            height: "100%",
            videoId: videoId,
            playerVars: {
              autoplay: 1,
              rel: 0,
              showinfo: 0,
              playsinline: 1,
            }
          });
        });
      }
    }
  }





  /* ----------------------------------------
   * コンテンツ描画時にataLayer発生
   * ---------------------------------------- */
  function _viewDataPush() {
    if (!window.requestAnimationFrame === true) return;

    var $targets = $('[data-view-contents]');
    var targetLength = $targets.length;
    var windowTop = __$win.scrollTop();
    var beforeWindowTop = 0;
    var stopScrollCount = 0;
    var currentViewContents = "";
    var posTopArray = [];
    var viewContentsArray = [];
    var sendFlag = false;
    var _request;
    var _stopFlag = false;
    var posTop = 0;

    // 対象コンテンツの位置を取得
    $targets
      .each(function () {
        posTop = $(this).offset().top;
        posTopArray.push(posTop);
      });

    // コンテンツ位置を再取得
    function resetPosition() {
      posTopArray = [];
      $targets
        .each(function () {
          posTop = $(this).offset().top;
          posTopArray.push(posTop);
        });
    }


    function watchViewContents() {
      windowTop = __$win.scrollTop();
      resetPosition();

      // スクロールが止まった瞬間のみデータを送る
      if (beforeWindowTop === windowTop)
        stopScrollCount++;
      else
        sendFlag = false;

      // スクロールが止まった瞬間のみデータを送る
      if (stopScrollCount > 5 && !sendFlag) {
        $targets.each(function (i) {
          var $target = $(this);
          var viewType = $target.attr('data-view-type') ? $target.attr('data-view-type') : 'visible';

          if (viewType == 'visible' && $target.data("view-contents") !== undefined && posTopArray[i] < windowTop + __$win.height()) {
            currentViewContents = $target.data("view-contents");
          }
        });

        if (currentViewContents !== "" && viewContentsArray.indexOf(currentViewContents) < 0) {
          viewContentsArray.push(currentViewContents);
          window.dataLayer.push({
            "event": "zozoweeklp_contents",
            "action": "imp",
            "opt_label": currentViewContents
          });

          if (viewContentsArray.length == targetLength) {
            _stopFlag = true;
          }
        }
        sendFlag = true;
        stopScrollCount = 0;
      }

      beforeWindowTop = windowTop;

      _request = requestAnimationFrame(watchViewContents);

      if (_stopFlag === true) {
        cancelAnimationFrame(_request);
      }
    }

    watchViewContents();
  }

  _viewDataPush();








})(jQuery, window, document);
