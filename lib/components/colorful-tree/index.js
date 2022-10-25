"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _tree = _interopRequireDefault(require("antd/lib/tree"));

var _react = _interopRequireDefault(require("react"));

require("./index.scss");

var ColorfulTree = function ColorfulTree(props) {
  console.warn('ColorfulTree=', props);
  return /*#__PURE__*/_react["default"].createElement(_tree["default"], props);
};

var _default = ColorfulTree;
exports["default"] = _default;