import * as React from 'react';
import "./index.scss";

var ColorfulLinkBox = function ColorfulLinkBox(props) {
  console.warn('ColorfulLinkBox=', props);
  return /*#__PURE__*/React.createElement("div", null, JSON.stringify(props));
};

ColorfulLinkBox.displayName = 'ColorfulLinkBox';
export default ColorfulLinkBox;