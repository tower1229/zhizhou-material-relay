import * as React from 'react';
import './index.scss';
export interface ColorfulTabProps {
    /**
     * 类型
     */
    alias?: String;
    tabs: Object[];
    tabType: 'line' | 'card' | 'text' | 'capsule';
    headerExt?: Object[];
}
declare const ColorfulTab: React.FC<ColorfulTabProps>;
export default ColorfulTab;
