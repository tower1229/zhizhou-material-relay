import * as React from 'react';
import "./index.scss";
import Iframe from "./iframe";

var ColorfulIframe = function ColorfulIframe(props) {
  var _props$offset, _props$offset2;

  console.warn('ColorfulIframe=', props);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: props.autoHeight ? 0 : (((_props$offset = props.offset) === null || _props$offset === void 0 ? void 0 : _props$offset.marginTop) || 0) + "px",
      height: props.autoHeight ? '100%' : ((_props$offset2 = props.offset) === null || _props$offset2 === void 0 ? void 0 : _props$offset2.height) || 500
    }
  }, /*#__PURE__*/React.createElement(Iframe, {
    src: props.url,
    width: "100%",
    height: "100%",
    style: {
      pointerEvents: props.__designMode === 'design' ? 'none' : 'auto'
    }
  }));
};

ColorfulIframe.displayName = 'ColorfulIframe';
export default ColorfulIframe;