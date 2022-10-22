import * as React from 'react';
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
declare const ColorfulContainer: React.FC<ColorfulContainerProps>;
export default ColorfulContainer;
