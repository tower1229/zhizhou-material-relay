import _Tree from "antd/es/tree";
import React from 'react';
import "./index.scss";

var ColorfulTree = function ColorfulTree(props) {
  console.warn('ColorfulTree=', props);
  return /*#__PURE__*/React.createElement(_Tree, props);
};

export default ColorfulTree;