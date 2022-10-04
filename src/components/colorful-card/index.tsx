import * as React from 'react';
import { createElement } from 'react';
import './index.scss';

export interface ColorfulCardProps {
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

const ColorfulCard: React.FC<ColorfulCardProps> = function (props) {
  console.warn('ColorfulCard=', props);

  return <div>{JSON.stringify(props)}</div>;
};

ColorfulCard.displayName = 'ColorfulCard';

export default ColorfulCard;
