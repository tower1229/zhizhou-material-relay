"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _button = _interopRequireDefault(require("antd/lib/button"));

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

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

  function handleBtnClick(actionList) {
    console.warn('handleBtnClick', actionList);
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
    style: {
      flex: 1
    }
  }, props.description ? /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
    title: props.description
  }, /*#__PURE__*/_react["default"].createElement(_icons.QuestionCircleFilled, {
    style: {
      fontSize: '16px',
      color: '#999'
    }
  })) : null), /*#__PURE__*/_react["default"].createElement("div", {
    "class": "colorful-card-header-extra"
  }, Array.isArray(props.headerExt) ? props.headerExt.map(function (btn, idx) {
    return /*#__PURE__*/_react["default"].createElement(_button["default"], {
      key: "btn_" + idx,
      onClick: btn.actionList.find(function (ite) {
        return ite.name === 'onClick';
      }) !== -1 ? function () {
        return handleBtnClick(btn.actionList);
      } : function () {
        return console.log('onClick');
      },
      type: "primary"
    }, btn.title);
  }) : null, props.withCollapse ? /*#__PURE__*/_react["default"].createElement(_button["default"], {
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