import { Typography } from 'antd';
import React from 'react';
import { createElement } from 'react';
import './index.scss';

const { Link } = Typography;

const ColorfulLink: any = (props: any) => {
  console.warn('ColorfulLink=', props);

  function handleClick(e) {
    // 自定义事件
    if (Array.isArray(props.clickHandler)) {
      props.clickHandler.forEach((handler) => {
        Array.isArray(handler.actionList) &&
          handler.actionList.forEach((action) => {
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

  return <Link {...props} onClick={handleClick} />;
};

export default ColorfulLink;
