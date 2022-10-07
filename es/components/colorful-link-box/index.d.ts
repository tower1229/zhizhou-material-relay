import * as React from 'react';
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
declare const ColorfulLinkBox: React.FC<ColorfulLinkBoxProps>;
export default ColorfulLinkBox;
