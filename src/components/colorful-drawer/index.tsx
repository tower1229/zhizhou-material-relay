import * as React from 'react';
import { createElement } from 'react';
import { Drawer as OriginalDrawer } from 'antd';
import './index.scss';

const ColorfulDrawer: any = (props: any) => {
  console.warn('ColorfulDrawer=', props);
  const innerProps: any = {};
  if (props.__designMode === 'design') {
    innerProps.visible = true;
  }
  return <OriginalDrawer {...props} {...innerProps} />;
};

export default ColorfulDrawer;
