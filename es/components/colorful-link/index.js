import _extends from "@babel/runtime/helpers/extends";
import _Typography from "antd/es/typography";
import React from 'react';
import "./index.scss";
var Link = _Typography.Link;

var ColorfulLink = function ColorfulLink(props) {
  console.warn('ColorfulLink=', props);

  function handleClick(e) {
    // 自定义事件
    if (Array.isArray(props.clickHandler)) {
      props.clickHandler.forEach(function (handler) {
        Array.isArray(handler.actionList) && handler.actionList.forEach(function (action) {
          console.log('ColorfulLink 自定义事件：', action);
        });
      });
    }

    if (props.type === 'inside') {
      // 内部链接
      e.preventDefault();
      console.log('ColorfulLink route:', props.route);
    }
  }

  return /*#__PURE__*/React.createElement(Link, _extends({}, props, {
    onClick: handleClick
  }));
};

export default ColorfulLink;