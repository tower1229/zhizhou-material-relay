import * as React from 'react';
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
declare const ColorfulTab: React.FC<ColorfulTabProps>;
export default ColorfulTab;
