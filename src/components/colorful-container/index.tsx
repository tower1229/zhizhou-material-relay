import * as React from 'react';
import { createElement } from 'react';
import './index.scss';

export interface ColorfulContainerProps {
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

const ColorfulContainer: React.FC<ColorfulContainerProps> = function (props) {
  console.warn('ColorfulContainer=', props);

  return <div>{JSON.stringify(props)}</div>;
};

ColorfulContainer.displayName = 'ColorfulContainer';

export default ColorfulContainer;
