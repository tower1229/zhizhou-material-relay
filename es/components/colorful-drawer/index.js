import _Drawer from "antd/es/drawer";
import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import "./index.scss";

var ColorfulDrawer = function ColorfulDrawer(props) {
  console.warn('ColorfulDrawer=', props);
  var innerProps = {};

  if (props.__designMode === 'design') {
    innerProps.visible = true;
  }

  return /*#__PURE__*/React.createElement(_Drawer, _extends({}, props, innerProps));
};

export default ColorfulDrawer;