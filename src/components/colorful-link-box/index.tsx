import * as React from 'react';
import { createElement } from 'react';
import './index.scss';

export interface ColorfulLinkBoxProps {
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

const ColorfulLinkBox: React.FC<ColorfulLinkBoxProps> = function (props) {
  console.warn('ColorfulLinkBox=', props);

  return <div>{JSON.stringify(props)}</div>;
};

ColorfulLinkBox.displayName = 'ColorfulLinkBox';

export default ColorfulLinkBox;
