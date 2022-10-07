import * as React from 'react';
import "./index.scss";

var ColorfulDrawer = function ColorfulDrawer(props) {
  console.warn('ColorfulDrawer=', props);
  return /*#__PURE__*/React.createElement("div", null, JSON.stringify(props));
};

ColorfulDrawer.displayName = 'ColorfulDrawer';
export default ColorfulDrawer;