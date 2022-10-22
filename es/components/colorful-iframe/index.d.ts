import * as React from 'react';
import './index.scss';
export interface ColorfulIframeProps {
    /**
     * 类型
     */
    alias?: String;
    url?: String;
    autoHeight: Boolean;
    offset: {
        height: Number;
        marginTop: Number;
    };
}
declare const ColorfulIframe: React.FC<ColorfulIframeProps>;
export default ColorfulIframe;
