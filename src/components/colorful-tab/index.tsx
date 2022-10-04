import * as React from 'react';
import { createElement } from 'react';
import './index.scss';

export interface ColorfulTabProps {
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

const ColorfulTab: React.FC<ColorfulTabProps> = function (props) {
  console.warn('ColorfulTab=', props);

  return <div>{JSON.stringify(props)}</div>;
};

ColorfulTab.displayName = 'ColorfulTab';

export default ColorfulTab;
