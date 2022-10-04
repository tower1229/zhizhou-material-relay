import * as React from 'react';
import { createElement } from 'react';
import './index.scss';

export interface ColorfulDrawerProps {
  /**
   * 类型
   */
  alias?: 'string';
  url?: 'string';
  autoHeight: 'boolean';
  offset: {
    height: number;
    marginTop: number;
  };
}

const ColorfulDrawer: React.FC<ColorfulDrawerProps> = function (props) {
  console.warn('ColorfulDrawer=', props);

  return <div>{JSON.stringify(props)}</div>;
};

ColorfulDrawer.displayName = 'ColorfulDrawer';

export default ColorfulDrawer;
