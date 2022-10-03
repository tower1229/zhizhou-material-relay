import * as React from 'react';
import "./index.scss";
import Iframe from "./iframe";

var ColorfulIframe = function ColorfulIframe(props) {
  var _props$offset, _props$offset2;

  console.warn('ColorfulIframe=', props);
  return /*#__PURE__*/React.createElement(Iframe, {
    src: props.url,
    width: "100%",
    height: props.autoHeight ? '100%' : ((_props$offset = props.offset) === null || _props$offset === void 0 ? void 0 : _props$offset.height) || 500,
    style: {
      marginTop: (((_props$offset2 = props.offset) === null || _props$offset2 === void 0 ? void 0 : _props$offset2.marginTop) || 0) + 'px'
    }
  });
};

ColorfulIframe.displayName = 'ColorfulIframe';
export default ColorfulIframe;