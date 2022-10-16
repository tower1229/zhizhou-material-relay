import * as React from 'react';
import { createElement } from 'react';
import './index.scss';

export interface ColorfulContainerProps {
  /**
   * 类型
   */
  alias?: String;
  autoHeight: Boolean;
  height: Number;
  gap: Number;
  direction: 'column' | 'row';
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
      {props.children}
    </div>
  );
};

ColorfulContainer.displayName = 'ColorfulContainer';

export default ColorfulContainer;
