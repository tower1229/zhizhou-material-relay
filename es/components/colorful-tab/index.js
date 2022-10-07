import * as React from 'react';
import "./index.scss";

var ColorfulTab = function ColorfulTab(props) {
  console.warn('ColorfulTab=', props);
  return /*#__PURE__*/React.createElement("div", null, JSON.stringify(props));
};

ColorfulTab.displayName = 'ColorfulTab';
export default ColorfulTab;