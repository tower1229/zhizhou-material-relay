import { Tree } from 'antd';
import React from 'react';
import { createElement } from 'react';
import './index.scss';

const ColorfulTree: any = (props: any) => {
  console.warn('ColorfulTree=', props);

  return <Tree {...props} />;
};

export default ColorfulTree;
