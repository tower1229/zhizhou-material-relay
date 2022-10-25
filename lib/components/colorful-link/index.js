"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typography = _interopRequireDefault(require("antd/lib/typography"));

var _react = _interopRequireDefault(require("react"));

require("./index.scss");

var Link = _typography["default"].Link;

var ColorfulLink = function ColorfulLink(props) {
  console.warn('ColorfulLink=', props);

  function handleClick(e) {
    if (props.type === 'inside') {
      e.preventDefault();
      console.log(props.route);
    }
  }

  return /*#__PURE__*/_react["default"].createElement(Link, (0, _extends2["default"])({}, props, {
    onClick: handleClick
  }));
};

var _default = ColorfulLink;
exports["default"] = _default;