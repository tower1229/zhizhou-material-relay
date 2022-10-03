import * as React from 'react';
import './index.scss';
import type { Moment } from 'moment';
import type { FormInstance } from 'antd/lib/form';
export interface ColorfulFormProps {
    color?: 'string';
    style?: 'object';
    entity?: 'array';
    itemList?: 'any';
    wid?: 'string';
    actionBtnList: 'any';
    initial: 'any';
    tableData: 'array';
    tableData2: 'array';
    tableDataBtn: 'array';
    columns: 'any';
    columnsBtn: 'any';
    columns2: 'any';
    subEntity: 'any';
}
declare class ColorfulForm extends React.Component {
    static contextType: React.Context<FormInstance<any>>;
    static defaultProps: {
        componentAlias: string;
        layout: string;
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
                    required: boolean;
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
                relationList?: undefined;
                indeterminate?: undefined;
                checkAll?: undefined;
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
                    required: boolean;
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
                relationList?: undefined;
                indeterminate?: undefined;
                checkAll?: undefined;
            } | {
                apiName: string;
                columnConfig: {
                    bachCreateItem: boolean;
                    cascadingDeletionType: string;
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
                    required: boolean;
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
                relationList: ({
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
                        required: boolean;
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
                } | {
                    apiName: string;
                    columnConfig: {
                        bachCreateItem: boolean;
                        cascadingDeletionType: string;
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
                        required: boolean;
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
                })[];
                indeterminate: boolean;
                checkAll: boolean;
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
                    fileCount: number;
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
                    required: boolean;
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
                relationList?: undefined;
                indeterminate?: undefined;
                checkAll?: undefined;
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
                    required: boolean;
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
                relationList?: undefined;
                indeterminate?: undefined;
                checkAll?: undefined;
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
                    imageCount: number;
                    maxLength: any;
                    multiChoiceType: any;
                    optionSetApiName: string;
                    placeHolder: string;
                    preUnMasked: any;
                    quoteColumnApiName: string;
                    quoteObjectApiName: string;
                    relationObjectApiName: string;
                    required: boolean;
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
                relationList?: undefined;
                indeterminate?: undefined;
                checkAll?: undefined;
            } | {
                apiName: string;
                columnConfig: {
                    bachCreateItem: boolean;
                    cascadingDeletionType: string;
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
                    required: boolean;
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
                relationList?: undefined;
                indeterminate?: undefined;
                checkAll?: undefined;
            })[];
        };
        subEntity: {
            apiName: string;
            columnList: ({
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
                    required: boolean;
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
                relationList?: undefined;
                indeterminate?: undefined;
                checkAll?: undefined;
            } | {
                apiName: string;
                columnConfig: {
                    bachCreateItem: boolean;
                    cascadingDeletionType: string;
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
                    required: boolean;
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
                relationList?: undefined;
                indeterminate?: undefined;
                checkAll?: undefined;
            } | {
                apiName: string;
                columnConfig: {
                    bachCreateItem: boolean;
                    cascadingDeletionType: string;
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
                    required: boolean;
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
                relationList: ({
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
                        required: boolean;
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
                } | {
                    apiName: string;
                    columnConfig: {
                        bachCreateItem: boolean;
                        cascadingDeletionType: string;
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
                        required: boolean;
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
                })[];
                indeterminate: boolean;
                checkAll: boolean;
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
                    multiChoiceType: any;
                    optionSetApiName: string;
                    placeHolder: string;
                    preUnMasked: any;
                    quoteColumnApiName: string;
                    quoteObjectApiName: string;
                    relationObjectApiName: string;
                    required: boolean;
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
                relationList?: undefined;
                indeterminate?: undefined;
                checkAll?: undefined;
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
                    required: boolean;
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
                relationList?: undefined;
                indeterminate?: undefined;
                checkAll?: undefined;
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
                    fileCount: number;
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
                    required: boolean;
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
                relationList?: undefined;
                indeterminate?: undefined;
                checkAll?: undefined;
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
                    imageCount: number;
                    maxLength: any;
                    multiChoiceType: any;
                    optionSetApiName: string;
                    placeHolder: string;
                    preUnMasked: any;
                    quoteColumnApiName: string;
                    quoteObjectApiName: string;
                    relationObjectApiName: string;
                    required: boolean;
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
                relationList?: undefined;
                indeterminate?: undefined;
                checkAll?: undefined;
            })[];
            entityId: string;
            joinColumnApiName: string;
            name: string;
            allItems: ({
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
                    required: boolean;
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
            } | {
                apiName: string;
                columnConfig: {
                    bachCreateItem: boolean;
                    cascadingDeletionType: string;
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
                    required: boolean;
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
                    multiChoiceType: any;
                    optionSetApiName: string;
                    placeHolder: string;
                    preUnMasked: any;
                    quoteColumnApiName: string;
                    quoteObjectApiName: string;
                    relationObjectApiName: string;
                    required: boolean;
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
                    required: boolean;
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
                    fileCount: number;
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
                    required: boolean;
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
                    imageCount: number;
                    maxLength: any;
                    multiChoiceType: any;
                    optionSetApiName: string;
                    placeHolder: string;
                    preUnMasked: any;
                    quoteColumnApiName: string;
                    quoteObjectApiName: string;
                    relationObjectApiName: string;
                    required: boolean;
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
            })[];
        }[];
        actionBtnList: ({
            title: string;
            actionList: {
                name: string;
                type: number;
                btnType: number;
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
                triggeredType: number;
                triggeredContent: string;
            }[];
        })[];
        initial: {
            name: string;
        }[];
        exposureParameter: {
            title: string;
            actionParamsList: {
                name: string;
                value: string;
            }[];
        }[];
    };
    formRef: React.RefObject<FormInstance<any>>;
    constructor(props: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any, preState: any): void;
    onFinish(): void;
    onFinishFailed(errorInfo: any): void;
    onChange(date: any, dateString: any): void;
    onSwitchChange(value: any, apiName: any): void;
    onCheckChange(checkedValues: any): void;
    onSelectArrChange(value: any): void;
    handleSelectChange(value: any): void;
    relationClick(item: any): Promise<void>;
    getUser(val: any): void;
    getRules(item: any): ({
        required: boolean;
        message: string;
        pattern?: undefined;
    } | {
        pattern: RegExp;
        message: string;
        required?: undefined;
    })[];
    getPagesListFuc(params: any): void;
    onRadioChange(): void;
    onTimeChange(time: Moment, timeString: string, apiName: any): void;
    handleSave(row: any): void;
    tableRelationClick(item: any, record: any, index: any): Promise<void>;
    columnsTable(list: any, index: any, objectApiName: any): any;
    tableDataAddClick(item: any, index: any): void;
    confirmProp(): void;
    cancelProp(): void;
    getShowClick(val: any): void;
    getQuoteName(item: any): Promise<string>;
    getSingleChoiceOpions(item: any): Promise<void>;
    handleFilesChange(file: any, fileList: any, item: any): void;
    handleImageChange(file: any, fileList: any, item: any): void;
    handlePreview(file: any): Promise<void>;
    imgPreviewCancel(): void;
    btnLineClick(value: any): Promise<void>;
    getMessageFuc(type: any, text: any): void;
    resetClick(): void;
    render(): JSX.Element;
}
export default ColorfulForm;
