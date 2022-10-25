import _extends from "@babel/runtime/helpers/extends";
import _Typography from "antd/es/typography";
import React from 'react';
import "./index.scss";
var Link = _Typography.Link;

var ColorfulLink = function ColorfulLink(props) {
  console.warn('ColorfulLink=', props);

  function handleClick(e) {
    if (props.type === 'inside') {
      e.preventDefault();
      console.log(props.route);
    }
  }

  return /*#__PURE__*/React.createElement(Link, _extends({}, props, {
    onClick: handleClick
  }));
};

export default ColorfulLink;