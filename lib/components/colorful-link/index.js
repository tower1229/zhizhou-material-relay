"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _typography = _interopRequireDefault(require("antd/lib/typography"));

var _react = _interopRequireDefault(require("react"));

require("./index.scss");

var Link = _typography["default"].Link;

var ColorfulLink = function ColorfulLink(props) {
  console.warn('ColorfulLink=', props);
  return /*#__PURE__*/_react["default"].createElement(Link, props);
};

ColorfulLink.displayName = 'ColorfulLink';
var _default = ColorfulLink;
exports["default"] = _default;