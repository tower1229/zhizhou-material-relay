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
    } else if (props.type === 'outside') {
      // 外部链接
      if (props.href) {
        if (props.target === '_blank') {
          window.open(props.href);
        } else {
          window.location.href = props.href;
        }
      } else {
        console.warn('ColorfulLinkBox href error:', props.href, props.target);
      }
    }
  }

  return /*#__PURE__*/React.createElement("div", {
    onClick: handleClick
  }, props.children);
};

export default ColorfulLinkBox;