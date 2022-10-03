import * as React from 'react';
import './index.scss';
export interface ColorfulDialogProps {
    key: React.Key;
    visible: boolean;
    name: string;
    width: number;
    title: string;
    footer?: React.ReactElement;
}
declare class ColorfulDialog extends React.Component {
    static getDerivedStateFromProps(props: any, state: any): {
        visible: any;
    };
    constructor(props: any);
    componentDidMount(): void;
    handleOk(): void;
    handleCancel(): void;
    confirmProp(): void;
    cancelProp(): void;
    render(): JSX.Element;
}
export default ColorfulDialog;
