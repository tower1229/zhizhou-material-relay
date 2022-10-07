import * as React from 'react';
import './index.scss';
export interface ColorfulIframeProps {
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
declare const ColorfulIframe: React.FC<ColorfulIframeProps>;
export default ColorfulIframe;
