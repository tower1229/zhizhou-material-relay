import { Typography } from 'antd';
import React from 'react';
import { createElement } from 'react';
import './index.scss';

const { Link } = Typography;

const ColorfulLink: any = (props: any) => {
  console.warn('ColorfulLink=', props);

  function handleClick(e) {
    if (props.type === 'inside') {
      e.preventDefault();
      console.log(props.route);
    }
  }

  return <Link {...props} onClick={handleClick} />;
};

export default ColorfulLink;
