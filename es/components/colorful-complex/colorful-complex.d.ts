import * as React from 'react';
import './index.scss';
export interface ColorfulComplexProps {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    id: string;
}
declare class Child extends React.Component {
    static defaultProps: {
        btnList: {
            title: string;
            actionList: {
                name: string;
                type: number;
            }[];
            functional: string;
        }[];
        itemList: {
            entityName: {
                apiName: string;
                desc: string;
                enabled: boolean;
                iconId: string;
                id: string;
                name: string;
                structure: string;
            };
            entity: ({
                apiName: string;
                columnConfig: {
                    bachCreateItem: boolean;
                    cascadingDeletionType: any;
                    computeType: any;
                    copyWidthParent: boolean;
                    createNoForExists: boolean;
                    defaultValue: string;
                    encrypted: boolean;
                    endUnMasked: any;
                    fileCount: any;
                    helpText: string;
                    imageCount: any;
                    maxLength: any;
                    multiChoiceType: any;
                    optionSetApiName: string;
                    placeHolder: string;
                    preUnMasked: any;
                    quoteColumnApiName: string;
                    quoteObjectApiName: string;
                    relationObjectApiName: string;
                    scale: any;
                    showTime: boolean;
                    singleChoiceType: string;
                    startNo: number;
                    unique: boolean;
                    userMask: boolean;
                };
                columnType: string;
                columnTypeGroup: string;
                defaultUse: boolean;
                name: string;
                index: number;
            } | {
                apiName: string;
                columnConfig: {
                    bachCreateItem: boolean;
                    cascadingDeletionType: any;
                    computeType: any;
                    copyWidthParent: boolean;
                    createNoForExists: boolean;
                    defaultValue: string;
                    encrypted: boolean;
                    endUnMasked: any;
                    fileCount: any;
                    helpText: string;
                    imageCount: any;
                    maxLength: any;
                    multiChoiceType: string;
                    optionSetApiName: string;
                    placeHolder: string;
                    preUnMasked: any;
                    quoteColumnApiName: string;
                    quoteObjectApiName: string;
                    relationObjectApiName: string;
                    scale: any;
                    showTime: boolean;
                    singleChoiceType: any;
                    startNo: number;
                    unique: boolean;
                    userMask: boolean;
                };
                columnType: string;
                columnTypeGroup: string;
                defaultUse: boolean;
                name: string;
                index: number;
            } | {
                apiName: string;
                columnConfig: {
                    bachCreateItem: boolean;
                    cascadingDeletionType: any;
                    computeType: any;
                    copyWidthParent: boolean;
                    createNoForExists: boolean;
                    defaultValue: string;
                    encrypted: boolean;
                    endUnMasked: any;
                    fileCount: any;
                    helpText: string;
                    imageCount: any;
                    maxLength: number;
                    multiChoiceType: any;
                    optionSetApiName: string;
                    placeHolder: string;
                    preUnMasked: any;
                    quoteColumnApiName: string;
                    quoteObjectApiName: string;
                    relationObjectApiName: string;
                    scale: number;
                    showTime: boolean;
                    singleChoiceType: any;
                    startNo: number;
                    unique: boolean;
                    userMask: boolean;
                };
                columnType: string;
                columnTypeGroup: string;
                defaultUse: boolean;
                name: string;
                index: number;
            })[];
            entityList: ({
                apiName: string;
                columnConfig: {
                    bachCreateItem: boolean;
                    cascadingDeletionType: any;
                    computeType: any;
                    copyWidthParent: boolean;
                    createNoForExists: boolean;
                    defaultValue: string;
                    encrypted: boolean;
                    endUnMasked: any;
                    fileCount: any;
                    helpText: string;
                    imageCount: any;
                    maxLength: any;
                    multiChoiceType: any;
                    optionSetApiName: string;
                    placeHolder: string;
                    preUnMasked: any;
                    quoteColumnApiName: string;
                    quoteObjectApiName: string;
                    relationObjectApiName: string;
                    scale: any;
                    showTime: boolean;
                    singleChoiceType: string;
                    startNo: number;
                    unique: boolean;
                    userMask: boolean;
                };
                columnType: string;
                columnTypeGroup: string;
                defaultUse: boolean;
                name: string;
                index: number;
            } | {
                apiName: string;
                columnConfig: {
                    bachCreateItem: boolean;
                    cascadingDeletionType: any;
                    computeType: any;
                    copyWidthParent: boolean;
                    createNoForExists: boolean;
                    defaultValue: string;
                    encrypted: boolean;
                    endUnMasked: any;
                    fileCount: any;
                    helpText: string;
                    imageCount: any;
                    maxLength: any;
                    multiChoiceType: string;
                    optionSetApiName: string;
                    placeHolder: string;
                    preUnMasked: any;
                    quoteColumnApiName: string;
                    quoteObjectApiName: string;
                    relationObjectApiName: string;
                    scale: any;
                    showTime: boolean;
                    singleChoiceType: any;
                    startNo: number;
                    unique: boolean;
                    userMask: boolean;
                };
                columnType: string;
                columnTypeGroup: string;
                defaultUse: boolean;
                name: string;
                index: number;
            } | {
                apiName: string;
                columnConfig: {
                    bachCreateItem: boolean;
                    cascadingDeletionType: any;
                    computeType: any;
                    copyWidthParent: boolean;
                    createNoForExists: boolean;
                    defaultValue: string;
                    encrypted: boolean;
                    endUnMasked: any;
                    fileCount: any;
                    helpText: string;
                    imageCount: any;
                    maxLength: number;
                    multiChoiceType: any;
                    optionSetApiName: string;
                    placeHolder: string;
                    preUnMasked: any;
                    quoteColumnApiName: string;
                    quoteObjectApiName: string;
                    relationObjectApiName: string;
                    scale: number;
                    showTime: boolean;
                    singleChoiceType: any;
                    startNo: number;
                    unique: boolean;
                    userMask: boolean;
                };
                columnType: string;
                columnTypeGroup: string;
                defaultUse: boolean;
                name: string;
                index: number;
            })[];
        };
        pagesList: any[];
        actionBtnList: ({
            title: string;
            actionList: {
                name: string;
                type: number;
                btnType: number;
                nextActionList: {
                    type: number;
                }[];
            }[];
        } | {
            title: string;
            actionList: {
                name: string;
                type: number;
                nextActionList: {
                    type: number;
                    triggeredType: number;
                    triggeredContent: string;
                }[];
            }[];
        } | {
            title: string;
            actionList: {
                name: string;
                type: number;
                actionCompontent: number;
            }[];
        } | {
            title: string;
            actionList: {
                name: string;
                type: number;
                actionPage: string[];
                nextActionList: any[];
            }[];
        } | {
            title: string;
            actionList: {
                name: string;
                type: number;
            }[];
        })[];
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any, preState: any): void;
    getSingleChoiceOpions(item: any): Promise<void>;
    onSwitchChange(value: any, apiName: any): void;
    onCascaderChange(value: any): void;
    oninpChange(e: any, apiName: any): void;
    actionPageChange(value: any, apiName: any): void;
    SwitchChange(checked: any, apiName: any): void;
    onNumChange(value: any, apiName: any): void;
    btnLineClick(value: any): Promise<void>;
    ChangeSwitch(time: any, apiName: any): void;
    SearClick(): void;
    render(): JSX.Element;
}
export default Child;
