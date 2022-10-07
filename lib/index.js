"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.bizCssPrefix = exports.ColorfulTable = exports.ColorfulTab = exports.ColorfulPage = exports.ColorfulLinkBox = exports.ColorfulLink = exports.ColorfulInput = exports.ColorfulIframe = exports.ColorfulForm = exports.ColorfulDrawer = exports.ColorfulDialog = exports.ColorfulContainerCell = exports.ColorfulContainer = exports.ColorfulComplex = exports.ColorfulCard = exports.ColorfulButton = void 0;

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

var _colorfulTable = _interopRequireDefault(require("./components/colorful-table"));

exports.ColorfulTable = _colorfulTable["default"];

var _colorfulComplex = _interopRequireDefault(require("./components/colorful-complex"));

exports.ColorfulComplex = _colorfulComplex["default"];

var _colorfulIframe = _interopRequireDefault(require("./components/colorful-iframe"));

exports.ColorfulIframe = _colorfulIframe["default"];

var _colorfulContainer = _interopRequireDefault(require("./components/colorful-container"));

exports.ColorfulContainer = _colorfulContainer["default"];

var _colorfulContainerCell = _interopRequireDefault(require("./components/colorful-container-cell"));

exports.ColorfulContainerCell = _colorfulContainerCell["default"];

var _colorfulCard = _interopRequireDefault(require("./components/colorful-card"));

exports.ColorfulCard = _colorfulCard["default"];

var _colorfulTab = _interopRequireDefault(require("./components/colorful-tab"));

exports.ColorfulTab = _colorfulTab["default"];

var _colorfulLinkBox = _interopRequireDefault(require("./components/colorful-link-box"));

exports.ColorfulLinkBox = _colorfulLinkBox["default"];

var _colorfulDrawer = _interopRequireDefault(require("./components/colorful-drawer"));

exports.ColorfulDrawer = _colorfulDrawer["default"];

var _colorfulLink = _interopRequireDefault(require("./components/colorful-link"));

exports.ColorfulLink = _colorfulLink["default"];
var data = {
  userName: 'sdzz',
  password: 'Zz@123456',
  loginType: 'USERNAME'
};
(0, _pages.logPages)(data).then(function (res) {});
var bizCssPrefix = 'bizpack';
exports.bizCssPrefix = bizCssPrefix;