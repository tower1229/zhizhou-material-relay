import React from 'react';
import { createElement } from 'react';
import './index.scss';

const ColorfulLinkBox: any = (props: any) => {
  console.warn('ColorfulLinkBox=', props);

  function handleClick(e) {
    // 自定义事件
    if (Array.isArray(props.clickHandler)) {
      props.clickHandler.forEach((handler) => {
        Array.isArray(handler.actionList) &&
          handler.actionList.forEach((action) => {
            console.log('ColorfulLinkBox 自定义事件：', action);
          });
      });
    }
    if (props.type === 'inside') {
      // 内部链接
      e.preventDefault();

      if (props.route) {
        let routeAddress = `${props.route}`;

        if (Array.isArray(props.params)) {
          routeAddress += `?${props.params.map((p) => `${p.key}=${p.value}`).join('&')}`;
        }

        console.warn('routeAddress=', routeAddress);
        window.open(routeAddress);
      } else {
        console.warn('ColorfulLinkBox route error:', props.route, props.params);
      }
    }
  }

  return <div onClick={handleClick}>{props.children}</div>;
};

export default ColorfulLinkBox;
