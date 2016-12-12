"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColorStateModel = function () {
  function ColorStateModel() {
    _classCallCheck(this, ColorStateModel);

    this.color = {
      showPicker: false,
      rgba: { r: 0, g: 0, b: 0, a: 1 }
    };
  }

  _createClass(ColorStateModel, [{
    key: "rgba",
    value: function rgba(_rgba) {
      this.color.rgba = _rgba;
      return this;
    }
  }, {
    key: "showPicker",
    value: function showPicker(_showPicker) {
      this.color.showPicker = _showPicker;
      return this;
    }
  }, {
    key: "gen",
    value: function gen() {
      return this.color;
    }
  }]);

  return ColorStateModel;
}();

exports.default = ColorStateModel;