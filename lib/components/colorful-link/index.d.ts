import React from 'react';
import './index.scss';
export interface ColorfulLinkProps {
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
declare const ColorfulLink: React.FC<ColorfulLinkProps>;
export default ColorfulLink;
