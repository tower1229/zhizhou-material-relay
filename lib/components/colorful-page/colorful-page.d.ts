import * as React from 'react';
import './index.scss';
declare class ColorfulPage extends React.Component {
    static defaultProps: {
        id: string;
        componentAlias: string;
        initial: {
            name: string;
            textContent: string;
        }[];
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Readonly<{}>, nextContext: any): void;
    existKey(key: any): any[];
    handleOk(): void;
    handleCancel(): void;
    render(): JSX.Element;
}
export default ColorfulPage;
