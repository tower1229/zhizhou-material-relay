import * as React from 'react';
import './index.scss';
export interface DataTable {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}
declare class Child extends React.Component {
    static defaultProps: {
        itemList: {
            entityName: string;
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
                    optionSetApiName: any;
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
                defaultUse: boolean;
                name: string;
                joinColumnApiName: string;
                entityId: string;
                objectApiName: string;
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
                    optionSetApiName: any;
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
                defaultUse: boolean;
                name: string;
                joinColumnApiName: string;
                entityId: string;
                objectApiName: string;
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
                    optionSetApiName: any;
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
                defaultUse: boolean;
                name: string;
                joinColumnApiName: string;
                entityId: string;
                objectApiName: string;
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
                    optionSetApiName: any;
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
                defaultUse: boolean;
                name: string;
                joinColumnApiName: string;
                entityId: string;
                objectApiName: string;
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
                    optionSetApiName: any;
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
                defaultUse: boolean;
                name: string;
                joinColumnApiName: string;
                entityId: string;
                objectApiName: string;
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
                    optionSetApiName: any;
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
                defaultUse: boolean;
                name: string;
                joinColumnApiName: string;
                entityId: string;
                objectApiName: string;
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
                    optionSetApiName: any;
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
                defaultUse: boolean;
                name: string;
                joinColumnApiName: string;
                entityId: string;
                objectApiName: string;
                tableName: string;
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
                    optionSetApiName: any;
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
                defaultUse: boolean;
                name: string;
                joinColumnApiName: string;
                entityId: string;
                objectApiName: string;
                tableName: string;
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
                    optionSetApiName: any;
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
                defaultUse: boolean;
                name: string;
                joinColumnApiName: string;
                entityId: string;
                objectApiName: string;
                tableName: string;
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
                    optionSetApiName: any;
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
                defaultUse: boolean;
                name: string;
                joinColumnApiName: string;
                entityId: string;
                objectApiName: string;
                tableName: string;
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
                    optionSetApiName: any;
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
                defaultUse: boolean;
                name: string;
                joinColumnApiName: string;
                entityId: string;
                objectApiName: string;
                tableName: string;
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
                    optionSetApiName: any;
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
                defaultUse: boolean;
                name: string;
                joinColumnApiName: string;
                entityId: string;
                objectApiName: string;
                tableName: string;
            })[];
        };
    };
    constructor(props: any);
    componentDidMount(): void;
    getColumn(): void;
    getTable(): Promise<void>;
    render(): JSX.Element;
}
export default Child;
