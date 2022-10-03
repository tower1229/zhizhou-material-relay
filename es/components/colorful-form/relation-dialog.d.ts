import * as React from 'react';
import './index.scss';
declare class RelationDialog extends React.Component {
    static defaultProps: {};
    constructor(props: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any, preState: any): void;
    getList: () => void;
    handleOk(): void;
    handleCancel(): void;
    onSearch(value: string): void;
    render(): JSX.Element;
}
export default RelationDialog;
