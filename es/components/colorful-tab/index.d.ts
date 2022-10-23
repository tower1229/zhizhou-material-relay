import * as React from 'react';
import './index.scss';
export interface ColorfulTabProps {
    /**
     * 类型
     */
    alias?: String;
    tabs: Object[];
    type: 'line' | 'card' | 'cumstom-text' | 'cumstom-capsule';
    headerExt?: Object[];
}
declare const ColorfulTab: React.FC<ColorfulTabProps>;
export default ColorfulTab;
