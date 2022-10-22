import React from 'react';
import './index.scss';
export interface ColorfulCardProps {
    /**
     * 类型
     */
    styleTyle: 'normal' | 'transparent';
    title: string;
    subTitle?: string;
    description?: string;
    withBorder: boolean;
    withCollapse: boolean;
    withPadding: boolean;
    headerExt?: Object[];
}
declare const ColorfulCard: React.FC<ColorfulCardProps>;
export default ColorfulCard;
