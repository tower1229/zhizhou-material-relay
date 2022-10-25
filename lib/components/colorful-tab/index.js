"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _button = _interopRequireDefault(require("antd/lib/button"));

var React = _interopRequireWildcard(require("react"));

require("./index.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ColorfulTab = function ColorfulTab(props) {
  console.warn('ColorfulTab=', props);
  var tabBarExtraContent = /*#__PURE__*/React.createElement("div", {
    "class": "colorful-tab-header-extra"
  }, Array.isArray(props.headerExt) ? props.headerExt.map(function (btn, idx) {
    return /*#__PURE__*/React.createElement(_button["default"], {
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
  }) : null);
  var customProps = (0, _extends2["default"])({}, props, {
    onChange: function onChange(activeKey) {
      var targetItem = props.tabs.filter(function (tab) {
        return tab.key === activeKey;
      }).length ? props.tabs.filter(function (tab) {
        return tab.key === activeKey;
      })[0] : null;

      if (targetItem) {
        console.log('Tabs trigger change:', activeKey, targetItem);
      }

      typeof props.onChange === 'function' && props.onChange();
    }
  });
  return /*#__PURE__*/React.createElement(_tabs["default"], (0, _extends2["default"])({}, customProps, {
    tabBarExtraContent: tabBarExtraContent,
    className: props.type && props.type.indexOf('cumstom-') === 0 ? props.type : ''
  }));
};

ColorfulTab.displayName = 'ColorfulTab';
var _default = ColorfulTab;
exports["default"] = _default;