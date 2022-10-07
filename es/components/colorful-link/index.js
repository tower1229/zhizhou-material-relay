import * as React from 'react';
import "./index.scss";

var ColorfulLink = function ColorfulLink(props) {
  console.warn('ColorfulLink=', props);
  return /*#__PURE__*/React.createElement("div", null, JSON.stringify(props));
};

ColorfulLink.displayName = 'ColorfulLink';
export default ColorfulLink;