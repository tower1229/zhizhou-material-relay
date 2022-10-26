import React from 'react';
import "./index.scss";

var ColorfulLinkBox = function ColorfulLinkBox(props) {
  console.warn('ColorfulLinkBox=', props);

  function handleClick(e) {
    // 自定义事件
    if (Array.isArray(props.clickHandler)) {
      props.clickHandler.forEach(function (handler) {
        Array.isArray(handler.actionList) && handler.actionList.forEach(function (action) {
          console.log('ColorfulLinkBox 自定义事件：', action);
        });
      });
    }

    if (props.type === 'inside') {
      // 内部链接
      e.preventDefault();

      if (props.route) {
        var routeAddress = "" + props.route;

        if (Array.isArray(props.params)) {
          routeAddress += "?" + props.params.map(function (p) {
            return p.key + "=" + p.value;
          }).join('&');
        }

        console.warn('routeAddress=', routeAddress);
        window.open(routeAddress);
      } else {
        console.warn('ColorfulLinkBox route error:', props.route, props.params);
      }
    }
  }

  return /*#__PURE__*/React.createElement("div", {
    onClick: handleClick
  }, props.children);
};

export default ColorfulLinkBox;