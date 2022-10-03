"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.bizCssPrefix = exports.ColorfulTable = exports.ColorfulPage = exports.ColorfulInput = exports.ColorfulIframe = exports.ColorfulForm = exports.ColorfulDialog = exports.ColorfulComplex = exports.ColorfulButton = void 0;

var _pages = require("./api/pages");

var _colorfulButton = _interopRequireDefault(require("./components/colorful-button"));

exports.ColorfulButton = _colorfulButton["default"];

var _colorfulInput = _interopRequireDefault(require("./components/colorful-input"));

exports.ColorfulInput = _colorfulInput["default"];

var _colorfulForm = _interopRequireDefault(require("./components/colorful-form"));

exports.ColorfulForm = _colorfulForm["default"];

var _colorfulPage = _interopRequireDefault(require("./components/colorful-page"));

exports.ColorfulPage = _colorfulPage["default"];

var _colorfulDialog = _interopRequireDefault(require("./components/colorful-dialog"));

exports.ColorfulDialog = _colorfulDialog["default"];

var _colorfulIframe = _interopRequireDefault(require("./components/colorful-iframe"));

exports.ColorfulIframe = _colorfulIframe["default"];

var _colorfulTable = _interopRequireDefault(require("./components/colorful-table"));

exports.ColorfulTable = _colorfulTable["default"];

var _colorfulComplex = _interopRequireDefault(require("./components/colorful-complex"));

exports.ColorfulComplex = _colorfulComplex["default"];
var data = {
  userName: 'sdzz',
  password: 'Zz@123456',
  loginType: 'USERNAME'
};
(0, _pages.logPages)(data).then(function (res) {});
var bizCssPrefix = 'bizpack';
exports.bizCssPrefix = bizCssPrefix;