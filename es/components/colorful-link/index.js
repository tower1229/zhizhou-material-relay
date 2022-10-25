import _Typography from "antd/es/typography";
import React from 'react';
import "./index.scss";
var Link = _Typography.Link;

var ColorfulLink = function ColorfulLink(props) {
  console.warn('ColorfulLink=', props);
  return /*#__PURE__*/React.createElement(Link, props);
};

ColorfulLink.displayName = 'ColorfulLink';
export default ColorfulLink;