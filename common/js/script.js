(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.App = undefined;

var _uiSelect = require('./_ui-select.js');

var _searchForm = require('./_search-form.js');

var _searchSelect = require('./_search-select.js');

var _searchSelectTabs = require('./_search-select-tabs.js');

var _inputMail = require('./_input-mail.js');

var _entryForm = require('./_entry-form.js');

var _miniSearch = require('./_mini-search.js');

var _easySearchBox = require('./_easy-search-box.js');

var _easySearch = require('./_easy-search.js');

var _validator = require('./_validator.js');

var _utils = require('./_utils.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var app = function () {
  function app() {
    _classCallCheck(this, app);

    this._classes = {
      'UISelect': _uiSelect.UISelect,
      'SearchForm': _searchForm.SearchForm,
      'SearchSelect': _searchSelect.SearchSelect,
      'SearchSelectTabs': _searchSelectTabs.SearchSelectTabs,
      'MiniSearch': _miniSearch.MiniSearch,
      'EntryForm': _entryForm.EntryForm,
      'EasySearchBox': _easySearchBox.EasySearchBox,
      'EasySearch': _easySearch.EasySearch,
      'InputMail': _inputMail.InputMail
    };

    this._setAnchor();
    this._setMatchHeight();
    this._setStick();
    this._setPopupWin();
    this._setCover();
    this._setScrollMagic();
    this._setClasses();
  }

  app.prototype._setClasses = function _setClasses() {
    var _this = this;

    $('[data-j-class]').each(function (i, e) {
      if (!$(_this).data('is-init')) {
        var className = $(e).data('j-class');
        if (_this._classes[className]) {
          var instance = new _this._classes[className]($(e));
          instance.init();
        }
      }
    });
  };

  app.prototype._setScrollMagic = function _setScrollMagic() {
    var _this2 = this;

    if ($('.a-emerge').length) {
      $('.a-emerge').each(function (i, e) {
        var $emerge = $(e);
        var emerge = new Emerge($emerge);
        emerge.setScrollMagic(_this2.scrollMagic);
        emerge.build();

        setTimeout(function () {
          emerge.run();
        }, 100);
      });
    }
  };

  app.prototype._setCover = function _setCover() {
    var $cover = $('<div>');
    // $cover.addClass('a-cover');
    // $('body').append($cover);

    // $.subscribe(GHeader.SHOW_SUB_NAV, () => {
    //   $cover.addClass('is-show');
    // });
    // $.subscribe(GHeader.HIDE_SUB_NAV, () => {
    //   $cover.removeClass('is-show');
    // });
  };

  app.prototype._setAnchor = function _setAnchor() {
    if ($('a[href^="#"]').length) {
      $('a[href^="#"]').each(function () {
        if (!$(this).data('click.setAnchor.init')) {
          $(this).data('click.setAnchor.init', true);
          $(this).on({
            'click.setAnchor': function clickSetAnchor(e) {
              var href = $(e.currentTarget).attr('href');
              _utils.Utils.scrollToElement(href);
              return false;
            }
          });
        }
      });
    }
  };

  app.prototype._setStick = function _setStick() {
    if ($('[data-j-stick]').length) {
      $('[data-j-stick]').each(function () {
        var offsetTop = $(this).data('j-stick-offset-top');
        if (offsetTop) {
          $(this).stick_in_parent({
            offset_top: offsetTop
          });
        } else {
          $(this).stick_in_parent();
        }
      });
    }
  };

  app.prototype._setMatchHeight = function _setMatchHeight() {
    if ($('[data-j-mt-group]').length) {
      $('[data-j-mt-group]').each(function () {
        var $children = $(this).find('[data-j-mt-child]');
        var isGroup = false;
        var groups = [];

        if ($children.length) {
          //$children.matchHeight();
          $children.each(function () {
            if ($(this).data('j-mh-child')) {
              isGroup = true;
              if (!groups[$(this).data('j-mh-child')]) {
                groups[$(this).data('j-mh-child')] = [];
              }
              groups[$(this).data('j-mh-child')].push($(this));
            }
          });

          if (isGroup) {
            _.each(groups, function (group) {
              if (group && group.length) {
                $(group).matchHeight();
              }
            });
          } else {
            $children.matchHeight();
          }
        }
      });
    }
  };

  app.prototype._setPopupWin = function _setPopupWin() {
    if ($('[data-j-popup]').length) {
      $('[data-j-popup]').each(function () {
        if (!$(this).data('click.setPopupWin.init')) {
          $(this).data('click.setPopupWin.init', true);
          $(this).on({
            'click.setPopupWin': function clickSetPopupWin() {
              var href = $(this).attr('href');
              var target = $(this).attr('target');

              var sw = window.screen.availWidth;
              var sh = window.screen.availHeight;

              if (!target) target = '_blank';
              var w = $(this).data('j-popup-width');
              var h = $(this).data('j-popup-height');

              if (!w) w = 640;
              if (!h) h = Math.floor(window.screen.availHeight * 0.75);
              var top = sh - h >> 1;
              var left = sw - w >> 1;

              window.open(href, target, 'width=' + w + ',height=' + h + ',top=' + top + ',left=' + left + ',menubar=no,toolbar=no,scrollbars=yes');
              return false;
            }
          });
        }
      });
    }
  };

  return app;
}();

exports.App = app;

},{"./_easy-search-box.js":3,"./_easy-search.js":4,"./_entry-form.js":5,"./_input-mail.js":6,"./_mini-search.js":7,"./_search-form.js":8,"./_search-select-tabs.js":9,"./_search-select.js":10,"./_ui-select.js":11,"./_utils.js":12,"./_validator.js":13}],2:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var base = function () {
  function base($target) {
    _classCallCheck(this, base);

    this.$target = $target;

    this.TRANSITIONEND = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';
    this.BREAKPOINTS = {
      'xsmall': '(max-width: 480px)',
      'small': '(max-width: 767px)',
      'medium': '(max-width: 979px)',
      'large': '(max-width: 1200px)'
    };

    this._isInit = false;
    this._isDestroy = false;
    if (this.$target) {
      this.$target.data('j-instance', this);
    }

    createjs.EventDispatcher.initialize(this);
  }

  base.prototype.init = function init() {
    if (this._isInit) return;
    if (this.$target) this.$target.data('j-is-init', true);

    this._isInit = true;
    this._init();
  };

  base.prototype._init = function _init() {};

  base.prototype.destroy = function destroy() {
    if (this._isDestroy) return;
    this._destroy();
  };

  base.prototype._destroy = function _destroy() {};

  base.prototype.fire = function fire(type, data) {
    this.dispatchEvent({
      type: type,
      target: this,
      data: data
    });
  };

  return base;
}();

exports.Base = base;

},{}],3:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.EasySearchBox = undefined;

var _searchSelect = require('./_search-select.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easySearchBox = function (_SearchSelect) {
  _inherits(EasySearchBox, _SearchSelect);

  function EasySearchBox($target) {
    _classCallCheck(this, EasySearchBox);

    var _this = _possibleConstructorReturn(this, _SearchSelect.call(this, $target));

    _this.$content = _this.$target.find('[data-j-content]');
    _this.$selectElm = _this.$target.find('[data-j-selected]');

    _this.$btnDecide.off('click');
    _this.$btnDecide.on({
      click: function click() {
        _this.setLabels();
        _this.hide();
        return false;
      }
    });
    return _this;
  }

  EasySearchBox.prototype.setLabels = function setLabels() {
    var _this2 = this;

    this.$inputs.empty();

    var $checkboxes = this.getChecks();
    var labels = [];
    $checkboxes.each(function (i, e) {
      var label = $(e).data('j-label');
      var val = $(e).val();

      //var $clone = $(e).clone(true);
      //if ($clone.attr('type') == 'radio') {
      //  $clone.attr('type', 'checkbox');
      //}
      //_this2.$inputs.append($clone);

      labels.push(label);
    });

    if (labels.length) {
      var labelTxt = labels.join('／');
      this.$selectElm.html(labelTxt);

      this.$content.addClass('is-selected');
    } else {
      this.$content.removeClass('is-selected');
    }
  };

  return EasySearchBox;
}(_searchSelect.SearchSelect);


exports.EasySearchBox = easySearchBox;

},{"./_search-select.js":10}],4:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.EasySearch = undefined;

var _base = require('./_base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easySearch = function (_Base) {
  _inherits(EasySearch, _Base);

  function EasySearch($target) {
    _classCallCheck(this, EasySearch);

    var _this = _possibleConstructorReturn(this, _Base.call(this, $target));

    _this.$submitBtn = _this.$target.find('[data-j-form-submit]');
    _this.$submitBtn.on({
      click: function click() {
        _this.$target.submit();
        return false;
      }
    });
    return _this;
  }

  return EasySearch;
}(_base.Base);

exports.EasySearch = easySearch;

},{"./_base":2}],5:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.EntryForm = undefined;

var _base = require('./_base');

var _validator = require('./_validator');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entryForm = function (_Base) {
  _inherits(EntryForm, _Base);

  function EntryForm($target) {
    _classCallCheck(this, EntryForm);

    var _this = _possibleConstructorReturn(this, _Base.call(this, $target));

    _this.$btnSubmit = _this.$target.find('[data-j-btn-submit]');
    _this.$btnSubmit.on({
      click: function click() {
        if (_this.validate()) {} else {
          $('html,body').stop().animate({
            scrollTop: _this.$target.offset().top - 50
          }, 600, 'easeInOutQuart');
        }

        return false;
      }
    });

    return _this;
  }

  EntryForm.prototype.validate = function validate() {
    var tmpIsValid = void 0;
    var isValid = true;
    var $validTargets = this.$target.find('[data-j-valid]');
    $validTargets.each(function (i, e) {
      tmpIsValid = _validator.Validator.check($(e));
      if (!tmpIsValid) {
        isValid = false;
      }
      return true;
    });

    var $validGroupTargets = this.$target.find('[data-j-valid-group]');
    $validGroupTargets.each(function (i, e) {
      tmpIsValid = _validator.Validator.checkGroup($(e));
      if (!tmpIsValid) {
        isValid = false;
        $(e).addClass('is-error');
      } else {
        $(e).removeClass('is-error');
      }
      return true;
    });

    return isValid;
  };

  return EntryForm;
}(_base.Base);

exports.EntryForm = entryForm;

},{"./_base":2,"./_validator":13}],6:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.InputMail = undefined;

var _base = require('./_base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var inputMail = function (_Base) {
  _inherits(InputMail, _Base);

  function InputMail($target) {
    _classCallCheck(this, InputMail);

    var _this = _possibleConstructorReturn(this, _Base.call(this, $target));

    _this.$input = _this.$target.find('input[type="email"]');
    _this.$confirm = _this.$target.find('[data-j-selector="confirm"]');
    _this.$confirmText = _this.$target.find('[data-j-selector="confirm-text"]');

    _this.$input.on('change blur keyup keydown', function () {
      _this._onChange();
    });
    return _this;
  }

  InputMail.prototype._onChange = function _onChange() {
    var inputVal = this.$input.val();
    if (inputVal && inputVal.length) {
      this.$confirmText.text(inputVal);
    } else {
      this.$confirmText.text('');
    }
  };

  return InputMail;
}(_base.Base);

exports.InputMail = inputMail;

},{"./_base":2}],7:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.MiniSearch = undefined;

var _base = require('./_base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var miniSearch = function (_Base) {
  _inherits(MiniSearch, _Base);

  function MiniSearch($target) {
    _classCallCheck(this, MiniSearch);

    var _this = _possibleConstructorReturn(this, _Base.call(this, $target));

    _this.isShowForm = false;
    _this.isTransition = false;

    _this.$contents = _this.$target.find('[data-j-search-contents]');
    _this.$currentCondition = _this.$target.find('[data-j-current-condition]');
    _this.$form = _this.$target.find('[data-j-sort-form]');

    _this.$btnChangeCondition = _this.$target.find('[data-j-change-condition]');
    _this.$btnChangeCondition.on({
      click: function click() {
        if (_this.isTransition) {
          return false;
        }

        if (_this.isShowForm) {
          _this.isShowForm = false;
          _this.hideForm();
        } else {
          _this.isShowForm = true;
          _this.showForm();
        }
      }
    });

    setTimeout(function () {
      _this.$contents.css({
        height: _this.$currentCondition.height()
      });
    }, 100);
    return _this;
  }

  MiniSearch.prototype.showForm = function showForm() {
    var _this2 = this;

    this.$currentCondition.addClass('is-hide');
    setTimeout(function () {
      _this2._showForm();
    }, 200);
  };

  MiniSearch.prototype._showForm = function _showForm() {
    var _this3 = this;

    if (this.isTransition) {
      return false;
    }

    this.isTransition = true;

    this.$form.addClass('is-show');
    this.$contents.stop().animate({
      height: this.$form.height()
    }, 300, 'easeOutQuart', function () {
      _this3.$contents.css({
        height: 'auto'
      });
      _this3.isTransition = false;
    });
  };

  MiniSearch.prototype.hideForm = function hideForm() {
    var _this4 = this;

    if (this.isTransition) {
      return false;
    }

    this.isTransition = true;

    this.$form.addClass('is-hide');

    this.$contents.stop().css({
      height: this.$form.height()
    }).animate({
      height: this.$currentCondition.height()
    }, 300, 'easeOutQuart', function () {
      _this4.$form.removeClass('is-show');
      _this4.$form.removeClass('is-hide');
      _this4.isTransition = false;
    });

    setTimeout(function () {
      _this4._showCurrentCondition();
    }, 200);
  };

  MiniSearch.prototype._showCurrentCondition = function _showCurrentCondition() {
    this.$currentCondition.removeClass('is-hide');
  };

  return MiniSearch;
}(_base.Base);

exports.MiniSearch = miniSearch;

},{"./_base":2}],8:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.SearchForm = undefined;

var _base = require('./_base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchForm = function (_Base) {
  _inherits(SearchForm, _Base);

  function SearchForm($target) {
    _classCallCheck(this, SearchForm);

    var _this = _possibleConstructorReturn(this, _Base.call(this, $target));

    _this.$inputs = _this.$target.find('input[type="radio"], input[type="checkbox"]').not('[name="clear"]');
    _this.$inputKw = _this.$target.find('input[name="kw"]');

    _this.$submitBtn = _this.$target.find('[data-j-form-submit]');

    _this.$submitBtn.on({
      click: function click() {
        _this.$target.submit();
        return false;
      }
    });

    _this.$checkClear = _this.$target.find('[data-j-checks-clear]');
    _this.$checkClear.on({
      change: function change() {
        if (_this.$checkClear.prop('checked')) {
          _this.clearAllChecks();
        }
      }
    });

    _this.$inputs.on({
      'change.searchForm': function changeSearchForm(e) {
        var $t = $(e.currentTarget);
        if ($t.prop('checked')) {
          _this.$checkClear.prop('checked', false);
        }
      }
    });

    _this.$inputKw.on({
      'change.searchForm, keypress.searchForm, keyup.searchForm': function changeSearchFormKeypressSearchFormKeyupSearchForm(e) {
        var inputTxt = _this.$inputKw.val();
        if (inputTxt && inputTxt.length) {
          _this.$checkClear.prop('checked', false);
        }
      }
    });

    $.subscribe('iryokaigo.searchSelectTabs.inputChecked', function () {
      _this.$checkClear.prop('checked', false);
    });
    return _this;
  }

  SearchForm.prototype.clearAllChecks = function clearAllChecks() {
/*
    this.$inputs.prop('checked', false);
    this.$inputKw.val('');

    $.publish("iryokaigo.searchForm.checkClear");
*/
  };

  return SearchForm;
}(_base.Base);

exports.SearchForm = searchForm;

},{"./_base":2}],9:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.SearchSelectTabs = undefined;

var _base = require('./_base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchSelectTabs = function (_Base) {
  _inherits(SearchSelectTabs, _Base);

  function SearchSelectTabs($target) {
    _classCallCheck(this, SearchSelectTabs);

    var _this = _possibleConstructorReturn(this, _Base.call(this, $target));

    _this.isNoSubmit = _this.$target.data('j-no-submit');

    _this.modalId = _this.$target.data('j-modal-id');
    _this.modalIds = _this.modalId.split(',');

    _this.$btnChange = _this.$target.find('[data-j-btn-chage]');

    _this.$labelsList = _this.$target.find('[data-j-labels-list]');
    _this.$inputs = _this.$target.find('[data-j-inputs]');
    _this.$sortForm = $('[data-j-sort-form]');

    _this.currentTabId = null;

    _this.$tabs = _this.$target.find('[data-j-tab-btn]');
    _this.tabsById = {};
    _this.$tabs.each(function (i, e) {
      var tabId = $(e).data('j-tab-id');

      _this.tabsById[tabId] = $(e);

      if ($(e).hasClass('is-current')) {
        _this.currentTabId = tabId;
      }
    });

    _this.$tabs.on({
      click: function click(e) {
        var $e = $(e.currentTarget);
        var tabId = $e.data('j-tab-id');
        _this.changeTab(tabId);
        return false;
      }
    });

    _this.$btnChange.on({
      click: function click() {
        _this.show();
        return false;
      }
    });

    _this.modals = [];
    _this.modalsById = {};
    for (var i = 0; i < _this.modalIds.length; i++) {
      var tmpId = _this.modalIds[i];
      var $modal = $('[data-j-modal-id="modal-' + tmpId + '"]');
      _this.modals.push($modal);
      _this.modalsById[tmpId] = $modal;
    }

    _this.setCurrentModal();
    _this.setLabels();

    $.subscribe("iryokaigo.searchForm.checkClear", function () {
      _this.clearAllChecks();
    });
    return _this;
  }

  SearchSelectTabs.prototype.clearAllChecks = function clearAllChecks() {
    for (var i = 0; i < this.modals.length; i++) {
      var $modal = this.modals[i];
      var $modalForm = $modal.find('[data-j-modal-form]');
      $modalForm.find('input').prop('checked', false);
      this.setLabels($modalForm);
    }
  };

  SearchSelectTabs.prototype.changeTab = function changeTab(tabId) {
    if (tabId == this.currentTabId) {
      return false;
    }

    this.$tabs.removeClass('is-current');
    var $tab = this.tabsById[tabId];
    $tab.addClass('is-current');

    this.currentTabId = tabId;

    this.setCurrentModal();
    this.setLabels();
  };

  SearchSelectTabs.prototype.addCloseEventForOut = function addCloseEventForOut() {
    var _this2 = this;

    if (this.$modalContent.length) {
      $(document).on({
        'click.modal-close': function clickModalClose(e) {
          if (!$.contains(_this2.$modalContent[0], e.target)) {
            _this2.close();
          }
        }
      });
    }
  };

  SearchSelectTabs.prototype.removeCloseEventForOut = function removeCloseEventForOut() {
    $(document).off('click.modal-close');
  };

  SearchSelectTabs.prototype.resetCheckboxes = function resetCheckboxes() {
    //this.$modalForm.find('input').prop('checked', false);
    if (this.firstCheckboxes.length) {
      this.firstCheckboxes.prop('checked', true);
    }

    this.setLabels();
  };

  SearchSelectTabs.prototype.addModalAnyEvents = function addModalAnyEvents() {
    var _this3 = this;

    if (this.$modal.data('isAddEvents')) {
      return false;
    }

    this.$modal.data('isAddEvents', true);

    var $btnDecide = this.$modal.find('[data-j-sort-decide]');
    var $checkClear = this.$modal.find('[data-j-checks-clear]');

    $btnDecide.on({
      'click.modal': function clickModal() {
        if (_this3.isNoSubmit) {
          _this3.hide();
        } else {
          _this3.setLabels();
          _this3.$sortForm.submit();
        }

        return false;
      }
    });

/*
    this.$modalForm.find('input').on({
      'change.modal': function changeModal() {
        var $checkedBoxes = _this3.getChecks();
        if ($checkedBoxes.length) {
          $checkClear.prop('checked', false);
          $.publish("iryokaigo.searchSelectTabs.inputChecked");
        }

        _this3.setLabels();
      }
    });
*/

/*
    $checkClear.on({
      change: function change() {
        if ($checkClear.prop('checked')) {
          _this3.$modalForm.find('input').prop('checked', false);
          _this3.setLabels();
        }
      }
    });
*/
  };

  SearchSelectTabs.prototype.getChecks = function getChecks() {
    var $checkboxes = null;
    if (this.$modalForm) {
      $checkboxes = this.$modalForm.find('input:checked');
    }

    return $checkboxes;
  };

  SearchSelectTabs.prototype.setLabels = function setLabels() {
    var _this4 = this;

    var $opModal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    var $modal = null;
    if ($opModal) {
      $modal = $opModal;
    } else {
      $modal = this.$modal;
    }

    var $modalLabelsList = $modal.find('[data-j-labels-list]');

/**** 2017.6.19.ポップアップ直後の「選択中」の内容が削除される為、コメントアウト
    $modalLabelsList.empty();

    this.$labelsList.empty();
    this.$inputs.empty();
//2017.6.19
*/

/*
    var $checkboxes = this.getChecks();
    $checkboxes.each(function (i, e) {
      var label = $(e).data('j-label');
      var val = $(e).val();

      var labelData = _this4.createLabel();
      var $labelItem = labelData['labelItem'];
      var $label = labelData['label'];
      $label.text(label);

      _this4.$inputs.append($(e).clone());

      _this4.$labelsList.append($labelItem);
      $modalLabelsList.append($labelItem.clone(true));
    });
*/
  };

  SearchSelectTabs.prototype.createLabel = function createLabel() {
    var $labelItem = $('<li class="ik-m-labels__item"></li>');
    var $label = $('<span class="ik-a-label"></span>');
    $labelItem.append($label);
    return {
      labelItem: $labelItem,
      label: $label
    };
  };

  SearchSelectTabs.prototype.setCurrentModal = function setCurrentModal() {
    var $modal = this.modalsById[this.currentTabId];
    this.$modal = $modal;
    this.$modalContent = this.$modal.find('[data-j-modal-content]');
    this.$modalForm = this.$modal.find('[data-j-modal-form]');

    this.addModalAnyEvents();
  };

  SearchSelectTabs.prototype.close = function close() {
    this.resetCheckboxes();
    this.removeCloseEventForOut();
    this.$modal.removeClass('is-show');
  };

  SearchSelectTabs.prototype.show = function show() {
    this.setCurrentModal();
    this.setLabels();
    this.firstCheckboxes = this.getChecks();

    this.$modal.addClass('is-show');
    this.addCloseEventForOut();
  };

  SearchSelectTabs.prototype.hide = function hide() {
    this.removeCloseEventForOut();
    this.setLabels();
    this.$modal.removeClass('is-show');
  };

  return SearchSelectTabs;
}(_base.Base);

exports.SearchSelectTabs = searchSelectTabs;

},{"./_base":2}],10:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.SearchSelect = undefined;

var _base = require('./_base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchSelect = function (_Base) {
  _inherits(SearchSelect, _Base);

  function SearchSelect($target) {
    _classCallCheck(this, SearchSelect);

    var _this = _possibleConstructorReturn(this, _Base.call(this, $target));

    _this.modalId = _this.$target.data('j-modal-id');
    _this.$modal = $('[data-j-modal-id="modal-' + _this.modalId + '"]');
    _this.$modalContent = _this.$modal.find('[data-j-modal-content]');
    _this.$modalForm = _this.$modal.find('[data-j-modal-form]');

    _this.$btnChange = _this.$target.find('[data-j-btn-chage]');

    //this.$modalClose = this.$modal.find('[data-j-modal-close]');
    _this.$btnDecide = _this.$modal.find('[data-j-sort-decide]');
    _this.$checkClear = _this.$modal.find('[data-j-checks-clear]');

    _this.$modalLabelsList = _this.$modal.find('[data-j-labels-list]');
    _this.$labelsList = _this.$target.find('[data-j-labels-list]');
    _this.$inputs = _this.$target.find('[data-j-inputs]');

    _this.$sortForm = $('[data-j-sort-form]');

    _this.$btnChange.on({
      click: function click() {
        _this.show();
        return false;
      }
    });

    _this.$btnDecide.on({
      click: function click() {
        _this.setLabels();
        //_this.$sortForm.submit();
        //this.hide();
        return false;
      }
    });


/*
    _this.$modalForm.find('input').on({
      'change.modal': function changeModal() {
        var $checkedBoxes = _this.getChecks();
        if ($checkedBoxes.length) {
          _this.$checkClear.prop('checked', false);
        }

        _this.setLabels();
      }
    });
*/

/*
    _this.$checkClear.on({
      change: function change() {
        if (_this.$checkClear.prop('checked')) {
          _this.clearChecks();
        }
      }
    });
*/

    $.subscribe("iryokaigo.searchForm.checkClear", function () {
      _this.clearChecks();
    });
    return _this;
  }

  SearchSelect.prototype._init = function _init() {
    _Base.prototype._init.call(this);
    this.setLabels();
  };

  SearchSelect.prototype.clearChecks = function clearChecks() {
    this.$modalForm.find('input').prop('checked', false);
    this.setLabels();
  };

  SearchSelect.prototype.resetCheckboxes = function resetCheckboxes() {

    //2017.6.19 市区町村選択時、エリアのチェックが外れてしまう問題あるのでコメントアウト
    //this.$modalForm.find('input').prop('checked', false);
    ////2017.6.19

    if (this.firstCheckboxes.length) {
//      this.firstCheckboxes.prop('checked', true);
    }

    this.setLabels();
  };

  SearchSelect.prototype.addCloseEventForOut = function addCloseEventForOut() {
    var _this2 = this;

    if (this.$modalContent.length) {
      $(document).on({
        'click.modal-close': function clickModalClose(e) {
          if (!$.contains(_this2.$modalContent[0], e.target)) {
            _this2.close();
          }
        }
      });
    }
  };

  SearchSelect.prototype.removeCloseEventForOut = function removeCloseEventForOut() {
    $(document).off('click.modal-close');
  };

  SearchSelect.prototype.getChecks = function getChecks() {
    var $checkboxes = this.$modalForm.find('input:checked');
    return $checkboxes;
  };

  SearchSelect.prototype.setLabels = function setLabels() {
    var _this3 = this;

    //2017.6.19
    //this.$modalLabelsList.empty();
    ////2017.6.19

    /* 2017.6.20.現在の検索内容が消えてしまうのでコメントアウト
    this.$labelsList.empty();
    this.$inputs.empty();
    */

/* 2017.6.19.重複チェックボックスの原因となる為コメントアウト
    var $checkboxes = this.getChecks();
    $checkboxes.each(function (i, e) {
      var label = $(e).data('j-label');
      var val = $(e).val();

      var labelData = _this3.createLabel();
      var $labelItem = labelData['labelItem'];
      var $label = labelData['label'];
      $label.html(label);

      _this3.$inputs.append($(e).clone());

      _this3.$labelsList.append($labelItem);
      _this3.$modalLabelsList.append($labelItem.clone(true));
    });
////2017.6.19
*/
  };

  SearchSelect.prototype.createLabel = function createLabel() {
    var $labelItem = $('<li class="ik-m-labels__item"></li>');
    var $label = $('<span class="ik-a-label"></span>');
    $labelItem.append($label);
    return {
      labelItem: $labelItem,
      label: $label
    };
  };

  SearchSelect.prototype.close = function close() {
    this.resetCheckboxes();
    this.removeCloseEventForOut();
    this.$modal.removeClass('is-show');
  };

  SearchSelect.prototype.show = function show() {
    this.firstCheckboxes = this.getChecks();

    this.addCloseEventForOut();
    this.$modal.addClass('is-show');
  };

  SearchSelect.prototype.hide = function hide() {
    this.removeCloseEventForOut();
    this.setLabels();
    this.$modal.removeClass('is-show');
  };

  return SearchSelect;
}(_base.Base);

exports.SearchSelect = searchSelect;

},{"./_base":2}],11:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.UISelect = undefined;

var _base = require('./_base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var uiSelect = function (_Base) {
  _inherits(UISelect, _Base);

  function UISelect($target) {
    _classCallCheck(this, UISelect);

    var _this = _possibleConstructorReturn(this, _Base.call(this, $target));

    _this.$current = _this.$target.find('[data-j-selector="current"]');
    _this._findSelect();
    return _this;
  }

  UISelect.prototype._findSelect = function _findSelect() {
    var _this2 = this;

    if (this.$select && this.$select.length) {
      this.$select.off('change');
      this.$select = null;
    }

    this.$select = this.$target.find('select');
    this.$select.on({
      change: function change() {
        _this2._onChange();
      }
    });

    this.$select.trigger('change');
  };

  UISelect.prototype._onChange = function _onChange() {
    var selectText = null;
    if (this.$select) {
      selectText = this.$select.children('option:selected').text();
    } else {
      selectText = null;
    }

    this.$current.text(selectText);

    // if(selectText && selectText != '選択'){
    //   this.$target.addClass('is-complete');
    // }else{
    //   this.$target.removeClass('is-complete');
    // }
  };

  return UISelect;
}(_base.Base);

exports.UISelect = uiSelect;

},{"./_base":2}],12:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utils = function () {
  function utils() {
    _classCallCheck(this, utils);
  }

  utils.getDocHeight = function getDocHeight() {
    return Math.max($(document).height(), $(window).height(), document.documentElement.clientHeight);
  };

  utils.scrollTo = function scrollTo(targetOffset) {
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;
    var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'easeInOutQuart';

    var ah = utils.getDocHeight() - $(window).height();
    var h = null;
    if (targetOffset > ah) {
      h = ah;
    } else {
      h = targetOffset;
    }
    $('html, body').stop().animate({
      scrollTop: h
    }, time, easing);
  };

  utils.scrollToElement = function scrollToElement(elementId) {
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;
    var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'easeInOutQuart';

    var offset = 0;
    try {
      if ($(elementId).length) {
        var $t = $(elementId);
        offset = $(elementId).offset().top;
        var pt = 0;
        if ($t.data('sc')) {
          pt = $t.data('sc');
        }
        offset = offset + pt;
      } else {
        offset = 0;
      }
    } catch (e) {
      offset = 0;
    }

    utils.scrollTo(offset, time, easing);
  };

  utils.getHeadAndBody = function getHeadAndBody(data) {
    var $head = null;
    var $body = null;

    if (data) {
      if (/<html/i.test(data)) {
        $head = $(data.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]);
        $body = $(data.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]);
      } else {
        $head = $body = $(data);
      }
    }

    var result = {
      head: $head,
      body: $body
    };

    return result;
  };

  utils.findAll = function findAll(elems, selector) {
    return elems.filter(selector).add(elems.find(selector));
  };

  return utils;
}();

exports.Utils = utils;

},{}],13:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.Validator = undefined;

var _base = require('./_base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var validator = function () {
  function Validator() {
    _classCallCheck(this, Validator);
  }

  Validator.check = function check($elem, validAttr) {
    if (validAttr == null) {
      validAttr = 'j-valid';
    }
    if ($elem.data('j-valid-disactive')) {
      return true;
    }

    var validType = $elem.data(validAttr);
    var validTypes = validType.split('|');

    var $tmpElemData = Validator.getValByElem($elem);
    var $tmpElem = $tmpElemData['elem'];
    var $tmpVal = $tmpElemData['val'];

    var isValid = true;
    if (validTypes && validTypes.length) {

      for (var i = 0; i < validTypes.length; i++) {
        var val = validTypes[i];
        switch (val) {
          case 'required':
            var tmpIsValid = Validator.checkRequired($tmpVal);
            if (!tmpIsValid) {
              isValid = false;
            }
            break;
          case 'email':
            tmpIsValid = Validator.checkEMail($tmpVal);
            if (!tmpIsValid) {
              isValid = false;
            }
            break;
          default:
            isValid = true;
        }
      }
    }

    if (isValid) {
      $elem.removeClass('is-error');
      $tmpElem.removeClass('is-error');
    } else {
      $elem.addClass('is-error');
      $tmpElem.addClass('is-error');
    }

    return isValid;
  };

  Validator.getValByElem = function getValByElem($elem) {
    var tagName = $elem.prop('tagName');
    if (tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'textarea') {
      if (tagName === 'INPUT') {
        var inputType = $elem.attr('type');
        if (inputType === 'checkbox') {
          return this.getCheckBoxVal($elem);
        } else if (inputType === 'radio') {
          return this.getCheckBoxVal($elem);
        }
      }
      return {
        elem: $elem,
        val: $elem.val()
      };
    } else {
      var $tmpElem = $elem.find('input,select,textarea');
      return Validator.getValByElem($tmpElem);
    }
  };

  Validator.getCheckBoxVal = function getCheckBoxVal($elem) {
    var inputName = $elem.attr('name');
    var $inputs = $('[name="' + inputName + '"]');
    if ($inputs.length) {
      var checklist = [];
      $inputs.each(function (i, e) {
        if ($(e).prop('checked')) {
          return checklist.push($(e).val());
        }
      });
      if (checklist.length) {
        return {
          elem: $elem,
          val: checklist.join(',')
        };
      }
    }

    return {
      elem: $elem,
      val: ''
    };
  };

  Validator.checkGroup = function checkGroup($elem) {
    var isValid = true;
    var $children = $elem.find('[data-j-valid-child]');
    $children.each(function (i, e) {
      var tmpIsValid = Validator.check($(e), 'j-valid-child');
      if (!tmpIsValid) {
        isValid = false;
      }
      return true;
    });

    return isValid;
  };

  Validator.checkRequired = function checkRequired(val) {
    var tmpVal = val;
    if (tmpVal) {
      tmpVal = tmpVal.replace(/^\s+|\s+$/g, '');

      if (tmpVal) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  Validator.checkEMail = function checkEMail(val) {
    var tmpVal = val;
    if (tmpVal) {
      tmpVal = tmpVal.match(/.+@.+\..+/);
      if (tmpVal) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return Validator;
}();

exports.Validator = validator;

},{"./_base":2}],14:[function(require,module,exports){
'use strict';

var _app = require('./_app');

$(function () {
  new _app.App();
});

},{"./_app":1}]},{},[14]);



