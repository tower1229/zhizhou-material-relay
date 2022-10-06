import { createElement } from 'react';

export interface ColorfulContainerCellProps {
  /**
   * 类型
   */
  key: number;
  flexNumber: number;
}

const ColorfulContainerCell: React.FC<ColorfulContainerCellProps> = function (props) {
  return <div style={{ flex: props.flexNumber, overflow: 'hidden' }}>{props.children}</div>;
};

ColorfulContainerCell.displayName = 'ColorfulContainerCell';
export default ColorfulContainerCell;
