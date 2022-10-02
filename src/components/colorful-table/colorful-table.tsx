import * as React from 'react';
import { createElement } from 'react';
import './index.scss';
import { baseApi } from '../../utils/index.js';
import Bus from '../../utils/eventBus';
import {
  tableBody,
  tableBodyTree,
  delData,
  addPages,
  delDataBatch,
  enableDataBatch,
} from '../../api/pages';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Space,
  Switch,
  Radio,
  Checkbox,
  InputNumber,
  message,
  Upload,
  Modal,
  Table,
  Popconfirm,
  Image,
  Tooltip,
} from 'antd';

type selfProps = {
  getShowClick: Function;
  getUser: Function;
};

export interface ColorfulTableProps {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

class ColorfulTable extends React.Component {
  static defaultProps = {
    // itemList: {
    //   entityName: {  },
    //   entity: [ ],
    //   entityList: [  ],
    // },

    itemList: {
      entityName: {
        apiName: 'student',
        desc: '学生描述',
        enabled: true,
        iconId: '0',
        id: '1555047745306230784',
        name: '学生',
        structure: 'NORMAL',
      },
      entity: [
        {
          apiName: 'name',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 50,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'TEXT',
          defaultUse: true,
          name: '学生姓名',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'province',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: 'province',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: 'DROP_LIST',
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'SINGLE_CHOICE',
          defaultUse: true,
          name: '省份',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'city',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: 'city',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'MULTI_CHOICE_TREE',
          defaultUse: true,
          name: '城市',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'age',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 3,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'INTEGER',
          defaultUse: true,
          name: '年龄',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'birthday',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: true,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'DATE',
          defaultUse: true,
          name: '生日',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'graduated',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: 'false',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'BOOL',
          defaultUse: true,
          name: '已毕业',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'phone',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 11,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '请输入手机号',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: true,
            userMask: false,
          },
          columnType: 'PHONE',
          defaultUse: true,
          name: '联系方式',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'roomId',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: 'PROMPT_NOT_ALLOW',
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: 'room',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'RELATIONSHIP',
          defaultUse: true,
          name: '所属教室',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'roomAddress',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: 'address',
            quoteObjectApiName: 'room',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'QUOTE',
          defaultUse: true,
          name: '所属教室',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'book',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'ITEM_REDUNDANCY',
          defaultUse: true,
          name: '拥有书本',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'studentFile',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: 3,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'FILE',
          defaultUse: true,
          name: '学生文件',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'position',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: 5,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'GEO_POSITION',
          defaultUse: true,
          name: '位置',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'xuefei',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '0.0',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 15,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: 2,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'MONEY',
          defaultUse: true,
          name: '学费',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'shengao',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '0.00',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 15,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: 3,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'DECIMAL',
          defaultUse: true,
          name: '身高',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'l_time',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'TIME',
          defaultUse: true,
          name: '午餐时间',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'xuehao',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'AUTO_NO',
          defaultUse: true,
          name: '学号',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'webSite',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 200,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'WEBSITE',
          defaultUse: true,
          name: '网址',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'email',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 20,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '请输入邮箱',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: true,
            userMask: false,
          },
          columnType: 'EMAIL',
          defaultUse: true,
          name: '邮箱',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'studentImage',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: 3,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'IMAGE',
          defaultUse: true,
          name: '学生图片',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'percent',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 10,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: 2,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'PERCENT',
          defaultUse: true,
          name: '排名百分比',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'id',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'ID',
          defaultUse: true,
          name: '主键',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'enabled',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: 'true',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'BOOL',
          defaultUse: false,
          name: '已启用',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'deleted',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: 'false',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'BOOL',
          defaultUse: false,
          name: '已删除',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'createAt',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: true,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'DATE',
          defaultUse: false,
          name: '创建时间',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'updateAt',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: true,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'DATE',
          defaultUse: true,
          name: '最后修改时间',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'createBy',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: 'PROMPT_NOT_ALLOW',
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: 'sys_user',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'RELATIONSHIP',
          defaultUse: false,
          name: '创建人',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'updateBy',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: 'PROMPT_NOT_ALLOW',
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: 'sys_user',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'RELATIONSHIP',
          defaultUse: false,
          name: '修改人',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'ownerId',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: 'PROMPT_NOT_ALLOW',
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: 'sys_user',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'RELATIONSHIP',
          defaultUse: false,
          name: '所属人',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
      ],
      entityList: [
        {
          apiName: 'name',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 50,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'TEXT',
          defaultUse: true,
          name: '学生姓名',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
          tableName: '学生姓名',
        },
        {
          apiName: 'province',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: 'province',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: 'DROP_LIST',
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'SINGLE_CHOICE',
          defaultUse: true,
          name: '省份',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'city',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: 'city',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'MULTI_CHOICE_TREE',
          defaultUse: true,
          name: '城市',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'age',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 3,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'INTEGER',
          defaultUse: true,
          name: '年龄',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
          format: {
            scale: 1,
            symbol: '%',
            formatTye: 'PERCENTAGE',
            percentageFormat: {
              scale: 1,
              symbol: '%',
            },
          },
        },
        {
          apiName: 'birthday',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: true,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'DATE',
          defaultUse: true,
          name: '生日',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'graduated',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: 'false',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'BOOL',
          defaultUse: true,
          name: '已毕业',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'phone',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 11,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '请输入手机号',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: true,
            userMask: false,
          },
          columnType: 'PHONE',
          defaultUse: true,
          name: '联系方式',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'roomId',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: 'PROMPT_NOT_ALLOW',
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: 'room',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'RELATIONSHIP',
          defaultUse: true,
          name: '所属教室',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'roomAddress',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: 'address',
            quoteObjectApiName: 'room',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'QUOTE',
          defaultUse: true,
          name: '所属教室',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'book',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'ITEM_REDUNDANCY',
          defaultUse: true,
          name: '拥有书本',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'studentFile',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: 3,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'FILE',
          defaultUse: true,
          name: '学生文件',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'position',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: 5,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'GEO_POSITION',
          defaultUse: true,
          name: '位置',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'xuefei',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '0.0',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 15,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: 2,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'MONEY',
          defaultUse: true,
          name: '学费',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'shengao',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '0.00',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 15,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: 3,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'DECIMAL',
          defaultUse: true,
          name: '身高',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'l_time',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'TIME',
          defaultUse: true,
          name: '午餐时间',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'xuehao',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'AUTO_NO',
          defaultUse: true,
          name: '学号',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'webSite',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 200,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'WEBSITE',
          defaultUse: true,
          name: '网址',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'email',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 20,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '请输入邮箱',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: true,
            userMask: false,
          },
          columnType: 'EMAIL',
          defaultUse: true,
          name: '邮箱',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'studentImage',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: 3,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'IMAGE',
          defaultUse: true,
          name: '学生图片',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'percent',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 10,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: 2,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'PERCENT',
          defaultUse: true,
          name: '排名百分比',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'id',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'ID',
          defaultUse: true,
          name: '主键',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'enabled',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: 'true',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'BOOL',
          defaultUse: false,
          name: '已启用',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'deleted',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: 'false',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'BOOL',
          defaultUse: false,
          name: '已删除',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'createAt',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: true,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'DATE',
          defaultUse: false,
          name: '创建时间',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'updateAt',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            scale: null,
            showTime: true,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'DATE',
          defaultUse: true,
          name: '最后修改时间',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'createBy',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: 'PROMPT_NOT_ALLOW',
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: 'sys_user',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'RELATIONSHIP',
          defaultUse: false,
          name: '创建人',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'updateBy',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: 'PROMPT_NOT_ALLOW',
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: 'sys_user',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'RELATIONSHIP',
          defaultUse: false,
          name: '修改人',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
        {
          apiName: 'ownerId',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: 'PROMPT_NOT_ALLOW',
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: 'sys_user',
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'RELATIONSHIP',
          defaultUse: false,
          name: '所属人',
          mainEntityId: '0',
          joinColumnApiName: '',
          entityId: '0',
          objectApiName: 'student',
        },
      ],
    },

    actionRowList: [
      {
        title: '按钮11',
        actionList: [
          {
            name: 'onClick',
            type: 0,
            btnType: 0,
            nextActionList: [
              {
                type: 2,
                triggeredType: 1,
                triggeredContent: '333',
              },
              {
                name: 'onClick',
                type: 2,
                triggeredType: 0,
                triggeredContent: '得到的',
              },
            ],
          },
        ],
      },
      {
        title: '按钮2',
        actionList: [
          {
            name: 'onClick',
            type: 0,
            btnType: 2,
          },
        ],
      },
    ],
    style: {},
    optionFixed: true,
    closePage: true,
    lineClose: false,
    pageSize: 10,

    // btnList: [ ],

    btnList: [
      {
        title: '新增',
        actionList: [
          {
            name: 'onClick',
            type: 1,
            actionDialog: 0,
            actionDialogId: 'wMaLWS54KFQ-DYtBSkXJH',
            actionDialogParamsList: [
              {
                name: 'id',
                textContent: 'id',
              },
            ],
          },
        ],
      },
      {
        title: '按钮2',
        actionList: [
          {
            name: 'onClick',
            type: 0,
            btnType: 4,
          },
        ],
      },
      {
        title: '按钮3',
        actionList: [
          {
            name: 'onClick',
            type: 2,
            triggeredType: 0,
            triggeredContent: '得到的',
          },
        ],
      },
      {
        title: '按钮4',
        actionList: [
          {
            name: 'onClick',
            type: 0,
          },
        ],
        tooltip: '5555',
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      columns: [],
      oneLineData: {},
      isModalVisible: false,
      querySort: { direction: '', objectApiName: '', columnApiName: '', entityId: '' }, //排序的条件
      itemList: [],
      total: 10,
      current: 1,
      selectedRowKeys: [],
    };
  }

  componentDidMount() {
    const list = this.props.itemList ? this.props.itemList : { entity: [], entityList: [] };
    list.entityList.length > 0 && this.getColumn(list);
  }

  componentWillReceiveProps(nextProps, preState) {
    // new Child(nextProps).getColumn();
    const list = nextProps.itemList ? nextProps.itemList : { entity: [], entityList: [] };
    this.getColumn(list);
  }

  //气泡确认框的操作
  confirmProp() {
    const { itemList } = this.props;
    //获取id的key
    let key = `${itemList.entityName.apiName}${itemList.entityList[0].mainEntityId}_id`;

    let mainObjectApiName = `${itemList.entityName.apiName}`;

    delData(mainObjectApiName, this.state.oneLineData[key]).then((res) => {
      // message.success('成功');

      itemList.entityName.structure == 'TREE'
        ? this.getTableTree(itemList, '')
        : this.getTable(itemList);
    });
  }

  cancelProp() {
    message.error('取消');
  }

  async btnClick(value, record) {
    this.setState({
      oneLineData: record,
    });
    const { itemList } = this.props;
    const info = value[0];
    const type = info.type;
    switch (type) {
      case 0:
        if (info.btnType === 3) {
          // await this.delDataBatch();
        } else if (info.btnType === 4) {
          await this.enableDataBatch(true);
        } else if (info.btnType === 5) {
          await this.enableDataBatch(false);
        }
        itemList.entityName.structure == 'TREE'
          ? await this.getTableTree(this.state.itemList, this.state.querySort, this.state.pageNo)
          : await this.getTable(this.state.itemList, this.state.querySort, this.state.pageNo);

        break;
      case 1:
        Bus.emit(info.actionDialogId, { show: true });
        break;
      case 2:
        this.getMessageFuc(info.triggeredType, info.triggeredContent);
        break;
      case 4:
        let id = info.actionPage[info.actionPage.length - 1];
        window.location = `www.test.com?id=${id}`;
        break;
      case 5:
        // info.actionJSNamezheng
        info.actionJSValue();
        break;
      default:
        break;
    }

    if (info.nextActionList) {
      info.nextActionList.map((item) => {
        console.log('await nextActionFuc');
        this.btnClick([item], record);
      });
    }
  }

  getMessageFuc(type, text) {
    switch (type) {
      case 0:
        message.info(text);
        break;
      case 1:
        message.success(text);
        break;
      case 2:
        message.error(text);
        break;
      case 3:
        message.warning(text);
        break;
      case 4:
        message.loading(text);
        break;
      case 5:
        message.warn(text);
        break;
      case 6:
        message.open(text);
        break;
      default:
        break;
    }
  }

  getLineData(type, text, record, obj) {
    // console.log('text1111', type, text, record, obj);
    // return 'ddddd'
    const { itemList } = this.props;
    let id = `${itemList.entityName.apiName}${itemList.entityList[0].mainEntityId}_id`;
    switch (type) {
      case 'SINGLE_CHOICE':
        return <span>{text && text.name}</span>;

      case 'MULTI_CHOICE':
        return (
          text &&
          text.map((item, index) => {
            return <span>{item && item.name}</span>;
          })
        );

      case 'BOOL':
        return <span>{text ? '是' : '否'}</span>;

      case 'GEO_POSITION':
        return (
          <div>
            <span>经度：{(text && text.lat) || ''}</span>
            <span>纬度：{(text && text.lng) || ''}</span>
          </div>
        );
      case 'FILE':
        // return <div>11111</div>
        return text
          ? text.map((item, index) => {
              return (
                <div>
                  <a
                    download
                    href={`${baseApi}/api/v1/attach?objectApiName=${obj.objectApiName}&columnApiName=${obj.columnApiName}&dataId=${record[id]}&fileId=${item.id}`}
                  >
                    {item.originalFilename}
                  </a>
                </div>

                // <div>
                //   <a href="">{item.originalFilename}</a>
                // </div>
              );
            })
          : '';
      // return <div>{text&&text.length}</div>
      case 'IMAGE':
        return text ? (
          <Image.PreviewGroup>
            {text.map((item, index) => {
              return (
                <div style={{ margin: '10px 0' }}>
                  <Image
                    style={{ objectFit: 'cover' }}
                    width={200}
                    height={50}
                    src={`${baseApi}/api/v1/attach?objectApiName=${obj.objectApiName}&columnApiName=${obj.columnApiName}&dataId=${record[id]}&fileId=${item.id}`}
                  />
                </div>
              );
            })}
          </Image.PreviewGroup>
        ) : (
          ''
        );
      case 'MULTI_CHOICE_TREE':
        return text
          ? text.map((item, index) => {
              return (
                <span>
                  {item.name}
                  {index < text.length - 1 && ','}
                </span>
              );
            })
          : '';
      default:
        return text || '';
    }
  }

  getColumn(itemList) {
    let arrColumn = [];
    // const { itemList } = this.props;
    if (itemList.entityList && itemList.entityList.length > 0) {
      itemList.entityList.forEach((col) => {
        let index = `${col.objectApiName}${col.entityId}_${col.apiName}`;
        let obj = {
          key: `${col.objectApiName}${col.entityId}_${col.apiName}`,
          dataIndex: index,
          title: col.name,
          width: col.width && col.width * 1,
          objectApiName: col.objectApiName,
          columnApiName: col.apiName,
          entityId: col.entityId,

          sorter: () => {},
          render: (text, record, index) => (
            <div>{this.getLineData(col.columnType, text, record, obj)}</div>
          ),
        };

        arrColumn.push(obj);
      });

      let opt = {
        title: '操作',
        key: 'operation',
        fixed: this.props.optionFixed ? 'right' : '',
        width: 100,
        render: (record) => (
          <div class="option">
            {this.props.actionRowList &&
              this.props.actionRowList.map((i, idx) => {
                let Btn = (
                  <Button
                    key={idx}
                    onClick={
                      i.actionList.find((ite) => ite.name == 'onClick') !== -1
                        ? () => this.btnClick(i.actionList, record)
                        : () => {}
                    }
                    className="btn"
                    type="primary"
                    // type="link"
                  >
                    {i.title}
                  </Button>
                );
                return i.actionList[0].type == 0 && i.actionList[0].type == 3 ? (
                  <Popconfirm
                    title="是否确认删除？"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => this.confirmProp()}
                    onCancel={() => this.cancelProp()}
                  >
                    {Btn}
                  </Popconfirm>
                ) : i.tooltip ? (
                  <Tooltip placement="topLeft" title={i.tooltip}>
                    {Btn}
                  </Tooltip>
                ) : (
                  <div>{Btn}</div>
                );
              })}

            {/* <a onClick={() => this.edit(record)}>编辑</a>
            <Popconfirm
              title="确认删除?"
              onConfirm={() => this.confirm(record)}
              onCancel={() => this.cancel()}
              okText="确认"
              cancelText="取消"
            >
              <a href="#">删除</a>
            </Popconfirm> */}
          </div>
        ),
      };
      arrColumn.push(opt);
    } else {
    }
    // setColumns(arrColumn);
    if (arrColumn.length > 0) {
      itemList.entityName.structure == 'TREE'
        ? this.getTableTree(itemList, '')
        : this.getTable(itemList);
    }

    this.setState({
      columns: arrColumn,
      itemList,
    });
  }

  //获取表体
  async getTable(itemList, querySort, current) {
    let queryColumns = [];

    itemList.entityList.forEach((i) => {
      let obj = {
        objectApiName: i.objectApiName,
        columnApiName: i.apiName,
        joinColumnApiName: i.joinColumnApiName,
        entityId: i.entityId,
        format: i.format,
      };
      queryColumns.push(obj);
    });

    const querySortNew = querySort ? querySort : this.state.querySort;

    let data = {
      queryColumns,
      mainObjectApiName: itemList.entityName.apiName,
      querySort: querySortNew.direction ? querySortNew : undefined,
      pageNo: current ? current - 1 : this.state.current - 1,
      pageSize: this.props.pageSize,
    };

    const res = await tableBody(data);

    let arrTable = res.data.data;
    let id = `${itemList.entityName.apiName}${itemList.entityList[0].mainEntityId}_id`;
    arrTable.map((item, index) => {
      item.key = item[id];
    });

    this.setState({
      dataSource: arrTable,
      current: res.data.currentPage + 1,
      total: res.data.totalSize,
    });

    console.log('getTable');
  }

  async getTableTree(itemList, parentId) {
    let queryColumns = [];

    itemList.entityList.forEach((i) => {
      let obj = {
        objectApiName: i.objectApiName,
        columnApiName: i.apiName,
        joinColumnApiName: i.joinColumnApiName,
        entityId: i.entityId,
      };
      queryColumns.push(obj);
    });

    let data = {
      queryColumns,
      mainObjectApiName: itemList.entityName.apiName,
      pageNo: this.state.current,
      pageSize: 10,
      lazy: true,
      parentId: parentId,
    };

    const res = await tableBodyTree(data);

    let arrTable = res.data.data;
    let id = `${itemList.entityName.apiName}${itemList.entityList[0].mainEntityId}_id`;
    arrTable.map((item, index) => {
      item.key = item[id];
    });

    this.setState({
      dataSource: arrTable,
    });
  }

  //点击展开
  async getMore(expanded, record) {
    // console.log(11111112222112211, expanded, record);
    // console.log(22233223322,this.props.itemList)

    const itemList = this.props.itemList;
    let id = `${itemList.entityName.apiName}${itemList.entityList[0].mainEntityId}_id`;

    // console.log(963,id)

    let parentId = record[id];

    let queryColumns = [];

    itemList.entityList.forEach((i) => {
      let obj = {
        objectApiName: i.objectApiName,
        columnApiName: i.apiName,
        joinColumnApiName: i.joinColumnApiName,
        entityId: i.entityId,
      };
      queryColumns.push(obj);
    });
    // console.log('itemList33333333', itemList);

    let data = {
      queryColumns,
      mainObjectApiName: itemList.entityName.apiName,
      pageNo: 0,
      pageSize: 10,
      lazy: true,
      parentId: parentId,
    };
    // console.log(986,data)

    const res = await tableBodyTree(data);

    let arrTable = res.data.data;

    arrTable.map((item, index) => {
      item.key = index + '';
    });

    let arr = JSON.parse(JSON.stringify(this.state.dataSource));

    arr.forEach((item) => {
      if (item[id] == record[id]) {
        item.children = arrTable;
      }
    });

    this.setState({
      dataSource: arr,
    });
  }

  //翻页
  pageChange(value) {
    this.setState({
      current: value,
    });
  }

  //操作按钮列
  async btnLineClick(value) {
    console.log('点击了新增', value);
    const { itemList } = this.props;
    const info = value[0];

    const type = info.type;
    switch (type) {
      //
      case 0:
        if (info.btnType === 3) {
          // await this.delDataBatch();
        } else if (info.btnType === 4) {
          await this.enableDataBatch(true);
        } else if (info.btnType === 5) {
          await this.enableDataBatch(false);
        }

        itemList.entityName.structure == 'TREE'
          ? await this.getTableTree(this.state.itemList, this.state.querySort, this.state.pageNo)
          : await this.getTable(this.state.itemList, this.state.querySort, this.state.pageNo);

        break;
      case 1:
        Bus.emit(info.actionDialogId, { show: true });
        break;
      case 2:
        this.getMessageFuc(info.triggeredType, info.triggeredContent);
        break;
      case 4:
        let id = info.actionPage[info.actionPage.length - 1];
        window.location = `www.test.com?id=${id}`;
        break;
      case 5:
        // info.actionJSNamezheng
        info.actionJSValue();
        break;
      default:
        break;
    }
    // this.nextActionFuc();

    if (info.nextActionList) {
      info.nextActionList.map(async (item) => {
        console.log('await nextActionFuc');
        await this.btnLineClick([item]);
      });
    }
  }

  nextActionFuc() {
    console.log('await nextActionFuc');
  }

  // 批量删除
  async confirmDataBatch() {
    const { itemList } = this.props;
    const { selectedRowKeys } = this.state;
    let mainObjectApiName = `${itemList.entityName.apiName}`;
    const res = await delDataBatch({
      mainObjectApiName,
      ids: selectedRowKeys.join(','),
    });

    if (res.status === 1) {
      itemList.entityName.structure == 'TREE'
        ? this.getTableTree(this.state.itemList, this.state.querySort, this.state.pageNo)
        : this.getTable(this.state.itemList, this.state.querySort, this.state.pageNo);
    }
  }

  async enableDataBatch(enabled) {
    const { itemList } = this.props;
    const { selectedRowKeys } = this.state;
    let mainObjectApiName = `${itemList.entityName.apiName}`;
    const res = await enableDataBatch({
      mainObjectApiName,
      ids: selectedRowKeys.join(','),
      enabled,
    });
  }

  //增加一条数据，提交
  submitOneLine() {
    const formData = new FormData();
    formData.append('objectApiName', 'common_user');

    addPages(formData).then((res) => {});
  }

  handleOk() {
    this.setState({ isModalVisible: false });
  }

  handleCancel() {
    this.setState({ isModalVisible: false });
  }

  //table change
  talbeOnChange(pagination, filters, sorter, extra) {
    console.log('pagination', pagination);
    let querySort = {
      direction:
        sorter.order == 'ascend' ? 'ASC' : sorter.order == 'descend' ? 'DESC' : sorter.order,
      objectApiName: sorter.column && sorter.column.objectApiName,
      columnApiName: sorter.column && sorter.column.columnApiName,
      entityId: sorter.column && sorter.column.entityId,
    };

    this.setState({
      querySort: querySort,
    });

    this.getTable(this.state.itemList, querySort, pagination.current);
  }

  onSelectChange(newSelectedRowKeys: React.Key[]) {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    this.setState({
      selectedRowKeys: newSelectedRowKeys,
    });
  }

  render() {
    const { columns, dataSource, selectedRowKeys } = this.state;
    const { btnList, lineClose, style } = this.props;

    console.log('btnList', btnList);

    const rowSelection = !lineClose
      ? {
          selectedRowKeys,
          onChange: (newSelectedRowKeys) => this.onSelectChange(newSelectedRowKeys),
        }
      : undefined;

    return (
      <div style={style}>
        <div className="btn-line">
          {btnList &&
            btnList.map((i, idx) => {
              let Btn = (
                <Button
                  key={idx}
                  onClick={
                    i.actionList.find((ite) => ite.name == 'onClick') !== -1
                      ? () => this.btnLineClick(i.actionList)
                      : () => {}
                  }
                  className="btn"
                  type="primary"
                >
                  {i.title}
                </Button>
              );
              return i.actionList[0].type == 0 && i.actionList[0].btnType == 3 ? (
                <Popconfirm
                  title="是否确认删除？"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => this.confirmDataBatch()}
                  onCancel={() => this.cancelProp()}
                >
                  {Btn}
                </Popconfirm>
              ) : i.tooltip ? (
                <Tooltip placement="topLeft" title={i.tooltip}>
                  {Btn}
                </Tooltip>
              ) : (
                <div>{Btn}</div>
              );
            })}
        </div>

        <Table
          onChange={(pagination, filters, sorter, extra) =>
            this.talbeOnChange(pagination, filters, sorter, extra)
          }
          onExpand={(expanded, record) => this.getMore(expanded, record)}
          dataSource={dataSource}
          columns={columns}
          scroll={{ x: 'max-content' }}
          rowSelection={rowSelection}
          pagination={
            this.props.closePage
              ? {
                  current: this.state.current,
                  total: this.state.total,
                  pageSize: this.props.pageSize,
                  onChange: (value) => this.pageChange(value),
                }
              : false
          }
        />
      </div>
    );
  }
}

export default ColorfulTable;
