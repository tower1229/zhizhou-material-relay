"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

require("./index.scss");

var _iframe = _interopRequireDefault(require("./iframe"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ColorfulIframe = function ColorfulIframe(props) {
  var _props$offset, _props$offset2;

  console.warn('ColorfulIframe=', props);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: props.autoHeight ? 0 : (((_props$offset = props.offset) === null || _props$offset === void 0 ? void 0 : _props$offset.marginTop) || 0) + "px",
      height: props.autoHeight ? '100%' : ((_props$offset2 = props.offset) === null || _props$offset2 === void 0 ? void 0 : _props$offset2.height) || 500
    }
  }, /*#__PURE__*/React.createElement(_iframe["default"], {
    src: props.url,
    width: "100%",
    height: "100%",
    style: {
      pointerEvents: props.__designMode === 'design' ? 'none' : 'auto'
    }
  }));
};

ColorfulIframe.displayName = 'ColorfulIframe';
var _default = ColorfulIframe;
exports["default"] = _default;