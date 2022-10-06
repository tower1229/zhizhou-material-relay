import * as React from 'react';
import { createElement } from 'react';
import './index.scss';
import ContentCell from '../colorful-container-cell/';

export interface ColorfulContainerProps {
  /**
   * 类型
   */
  alias?: 'string';
  autoHeight: 'boolean';
  height: number;
  gap: number;
  direction: 'column' | 'row';
  cells: array;
}

const ColorfulContainer: React.FC<ColorfulContainerProps> = function (props) {
  console.warn('ColorfulContainer=', props);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: props.direction || 'row',
        gap: `${props.gap || 0}px`,
        alignItems: 'stretch',
        height: props.autoHeight ? '100%' : props.height || 500,
      }}
    >
      {/* {ratioArray.map((ratio, i) => (
        <ContentCell key={`ContentCell${i}`} flex={ratio} />
      ))} */}
      {props.children}
    </div>
  );
};

ColorfulContainer.displayName = 'ColorfulContainer';

export default ColorfulContainer;
