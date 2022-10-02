import * as React from 'react';
import './index.scss';
export interface ColorfulFormProps {
    color?: 'string';
    style?: 'object';
    entity?: 'array';
    itemList?: 'any';
    wid?: 'string';
    propName: 'any';
    initial: 'any';
    tableData: 'array';
    tableData2: 'array';
    columns: 'any';
    columns2: 'any';
    subEntity: 'any';
}
declare const ColorfulForm: React.FC<ColorfulFormProps>;
export default ColorfulForm;
