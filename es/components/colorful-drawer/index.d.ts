import * as React from 'react';
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
declare const ColorfulDrawer: React.FC<ColorfulDrawerProps>;
export default ColorfulDrawer;
