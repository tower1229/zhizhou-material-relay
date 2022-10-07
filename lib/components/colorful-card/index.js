"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

var _colorfulButton = _interopRequireDefault(require("../colorful-button/"));

require("./index.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ColorfulCard = function ColorfulCard(props) {
  console.warn('ColorfulCard=', props);

  var _useState = (0, _react.useState)(true),
      visible = _useState[0],
      toggleVisible = _useState[1];

  function handleToggleButtonClick() {
    toggleVisible(!visible);
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    "class": "colorful-card colorful-card-" + props.styleTyle + " " + (props.withBorder ? 'colorful-card-bordered' : '') + " " + (props.withPadding ? 'colorful-card-padding' : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "colorful-card-header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "colorful-card-header-title"
  }, props.title, props.subTitle ? /*#__PURE__*/_react["default"].createElement("div", {
    "class": "colorful-card-header-subtitle"
  }, props.subTitle) : null), /*#__PURE__*/_react["default"].createElement("div", {
    "class": "colorful-card-header-extra"
  }, Array.isArray(props.headerExt) ? props.headerExt.map(function (ext) {
    return /*#__PURE__*/_react["default"].createElement(_colorfulButton["default"], {
      key: ext.key,
      onClick: ext.onClick || function () {
        return null;
      }
    }, ext.text);
  }) : null, props.withCollapse ? /*#__PURE__*/_react["default"].createElement(_colorfulButton["default"], {
    onClick: handleToggleButtonClick
  }, visible ? '收起' : '展开', /*#__PURE__*/_react["default"].createElement(_icons.DownOutlined, {
    "class": "colorful-card-toggle-btn colorful-card-toggle-" + (visible ? 'show' : 'hide')
  })) : null)), /*#__PURE__*/_react["default"].createElement("div", {
    "class": "colorful-card-body colorful-card-body-" + (visible ? 'show' : 'hide')
  }, props.children));
};

ColorfulCard.displayName = 'ColorfulCard';
var _default = ColorfulCard;
exports["default"] = _default;