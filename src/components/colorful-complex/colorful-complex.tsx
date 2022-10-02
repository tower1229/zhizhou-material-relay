import * as React from 'react';
import { createElement, useEffect } from 'react';
import './index.scss';
import { baseApi } from '../../utils/index.js';
// import { Input } from '@alifd/next';

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
  Cascader,
  TimePicker,
} from 'antd';

const { Option } = Select;

import { useState } from 'react';

import { tableBody, tableBodyTree, delData, addPages, getOptionListOrTree } from '../../api/pages';

type selfProps = {
  getShowClick: Function;
  getUser: Function;
};

export interface ColorfulComplexProps {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  id: string;
}

class Child extends React.Component {
  static defaultProps = {
    btnList: [
      {
        title: '添加按钮',
        actionList: [
          {
            name: 'onClick',
            type: 1,
          },
        ],
        functional: '1544617470050959360',
      },
    ],
    "itemList": {
      "entityName": {
        "apiName": "student",
        "desc": "学生描述",
        "enabled": false,
        "iconId": "0",
        "id": "1564517573381324800",
        "name": "学生",
        "structure": "NORMAL"
      },
      "entity": [
        {
          "apiName": "name",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": 50,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "TEXT",
          "columnTypeGroup": "TEXT",
          "defaultUse": true,
          "name": "学生姓名",
          "index": 0
        },
        {
          "apiName": "province",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "province",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": "DROP_LIST",
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "SINGLE_CHOICE",
          "columnTypeGroup": "CHOICE",
          "defaultUse": true,
          "name": "省份",
          "index": 1
        },
        {
          "apiName": "city",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": "DROP_LIST",
            "optionSetApiName": "city",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "MULTI_CHOICE",
          "columnTypeGroup": "CHOICE",
          "defaultUse": true,
          "name": "城市",
          "index": 2
        },
        {
          "apiName": "age",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": 3,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "INTEGER",
          "columnTypeGroup": "NUMBER",
          "defaultUse": true,
          "name": "年龄",
          "index": 3
        },
        {
          "apiName": "birthday",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": true,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "DATE",
          "columnTypeGroup": "DATE",
          "defaultUse": true,
          "name": "生日",
          "index": 4
        },
        {
          "apiName": "graduated",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "false",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "BOOL",
          "columnTypeGroup": "OTHER",
          "defaultUse": true,
          "name": "已毕业",
          "index": 5
        },
        {
          "apiName": "phone",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": 11,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "请输入手机号",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": true,
            "userMask": false
          },
          "columnType": "PHONE",
          "columnTypeGroup": "TEXT",
          "defaultUse": true,
          "name": "联系方式",
          "index": 6
        },
        {
          "apiName": "xuefei",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "0.0",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": 15,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": 2,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "MONEY",
          "columnTypeGroup": "NUMBER",
          "defaultUse": true,
          "name": "学费",
          "index": 12
        },
        {
          "apiName": "shengao",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "0.00",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": 15,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": 3,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "DECIMAL",
          "columnTypeGroup": "NUMBER",
          "defaultUse": true,
          "name": "身高",
          "index": 13
        },
        {
          "apiName": "l_time",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "TIME",
          "columnTypeGroup": "OTHER",
          "defaultUse": true,
          "name": "午餐时间",
          "index": 14
        },
        {
          "apiName": "xuehao",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "AUTO_NO",
          "columnTypeGroup": "OTHER",
          "defaultUse": true,
          "name": "学号",
          "index": 15
        },
        {
          "apiName": "webSite",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": 200,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "WEBSITE",
          "columnTypeGroup": "TEXT",
          "defaultUse": true,
          "name": "网址",
          "index": 16
        },
        {
          "apiName": "email",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": 20,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "请输入邮箱",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": true,
            "userMask": false
          },
          "columnType": "EMAIL",
          "columnTypeGroup": "TEXT",
          "defaultUse": true,
          "name": "邮箱",
          "index": 17
        },
        {
          "apiName": "percent",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": 10,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": 2,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "PERCENT",
          "columnTypeGroup": "NUMBER",
          "defaultUse": true,
          "name": "排名百分比",
          "index": 19
        },
        {
          "apiName": "id",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "ID",
          "columnTypeGroup": "OTHER",
          "defaultUse": true,
          "name": "主键",
          "index": 20
        },
        {
          "apiName": "enabled",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "true",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "BOOL",
          "columnTypeGroup": "OTHER",
          "defaultUse": false,
          "name": "已启用",
          "index": 21
        },
        {
          "apiName": "deleted",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "false",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "BOOL",
          "columnTypeGroup": "OTHER",
          "defaultUse": false,
          "name": "已删除",
          "index": 22
        },
        {
          "apiName": "createAt",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": true,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "DATE",
          "columnTypeGroup": "DATE",
          "defaultUse": false,
          "name": "创建时间",
          "index": 23
        },
        {
          "apiName": "updateAt",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": true,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "DATE",
          "columnTypeGroup": "DATE",
          "defaultUse": true,
          "name": "最后修改时间",
          "index": 24
        },
        {
          "apiName": "book",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "ITEM_REDUNDANCY",
          "columnTypeGroup": "OTHER",
          "defaultUse": true,
          "name": "拥有书本",
          "index": 9
        }
      ],
      "entityList": [
        {
          "apiName": "name",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": 50,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "TEXT",
          "columnTypeGroup": "TEXT",
          "defaultUse": true,
          "name": "学生姓名",
          "index": 0
        },
        {
          "apiName": "province",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "province",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": "DROP_LIST",
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "SINGLE_CHOICE",
          "columnTypeGroup": "CHOICE",
          "defaultUse": true,
          "name": "省份",
          "index": 1
        },
        {
          "apiName": "city",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": "DROP_LIST",
            "optionSetApiName": "city",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "MULTI_CHOICE",
          "columnTypeGroup": "CHOICE",
          "defaultUse": true,
          "name": "城市",
          "index": 2
        },
        {
          "apiName": "age",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": 3,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "INTEGER",
          "columnTypeGroup": "NUMBER",
          "defaultUse": true,
          "name": "年龄",
          "index": 3
        },
        {
          "apiName": "birthday",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": true,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "DATE",
          "columnTypeGroup": "DATE",
          "defaultUse": true,
          "name": "生日",
          "index": 4
        },
        {
          "apiName": "graduated",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "false",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "BOOL",
          "columnTypeGroup": "OTHER",
          "defaultUse": true,
          "name": "已毕业",
          "index": 5
        },
        {
          "apiName": "phone",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": 11,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "请输入手机号",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": true,
            "userMask": false
          },
          "columnType": "PHONE",
          "columnTypeGroup": "TEXT",
          "defaultUse": true,
          "name": "联系方式",
          "index": 6
        },
        {
          "apiName": "xuefei",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "0.0",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": 15,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": 2,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "MONEY",
          "columnTypeGroup": "NUMBER",
          "defaultUse": true,
          "name": "学费",
          "index": 12
        },
        {
          "apiName": "shengao",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "0.00",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": 15,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": 3,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "DECIMAL",
          "columnTypeGroup": "NUMBER",
          "defaultUse": true,
          "name": "身高",
          "index": 13
        },
        {
          "apiName": "l_time",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "TIME",
          "columnTypeGroup": "OTHER",
          "defaultUse": true,
          "name": "午餐时间",
          "index": 14
        },
        {
          "apiName": "xuehao",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "AUTO_NO",
          "columnTypeGroup": "OTHER",
          "defaultUse": true,
          "name": "学号",
          "index": 15
        },
        {
          "apiName": "webSite",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": 200,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "WEBSITE",
          "columnTypeGroup": "TEXT",
          "defaultUse": true,
          "name": "网址",
          "index": 16
        },
        {
          "apiName": "email",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": 20,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "请输入邮箱",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": true,
            "userMask": false
          },
          "columnType": "EMAIL",
          "columnTypeGroup": "TEXT",
          "defaultUse": true,
          "name": "邮箱",
          "index": 17
        },
        {
          "apiName": "percent",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": 10,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": 2,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "PERCENT",
          "columnTypeGroup": "NUMBER",
          "defaultUse": true,
          "name": "排名百分比",
          "index": 19
        },
        {
          "apiName": "id",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "ID",
          "columnTypeGroup": "OTHER",
          "defaultUse": true,
          "name": "主键",
          "index": 20
        },
        {
          "apiName": "enabled",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "true",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "BOOL",
          "columnTypeGroup": "OTHER",
          "defaultUse": false,
          "name": "已启用",
          "index": 21
        },
        {
          "apiName": "deleted",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "false",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": false,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "BOOL",
          "columnTypeGroup": "OTHER",
          "defaultUse": false,
          "name": "已删除",
          "index": 22
        },
        {
          "apiName": "createAt",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": true,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "DATE",
          "columnTypeGroup": "DATE",
          "defaultUse": false,
          "name": "创建时间",
          "index": 23
        },
        {
          "apiName": "updateAt",
          "columnConfig": {
            "bachCreateItem": false,
            "cascadingDeletionType": null,
            "computeType": null,
            "copyWidthParent": false,
            "createNoForExists": false,
            "defaultValue": "",
            "encrypted": false,
            "endUnMasked": null,
            "fileCount": null,
            "helpText": "",
            "imageCount": null,
            "maxLength": null,
            "multiChoiceType": null,
            "optionSetApiName": "",
            "placeHolder": "",
            "preUnMasked": null,
            "quoteColumnApiName": "",
            "quoteObjectApiName": "",
            "relationObjectApiName": "",
            "scale": null,
            "showTime": true,
            "singleChoiceType": null,
            "startNo": 0,
            "unique": false,
            "userMask": false
          },
          "columnType": "DATE",
          "columnTypeGroup": "DATE",
          "defaultUse": true,
          "name": "最后修改时间",
          "index": 24
        }
      ]
    },
    pagesList: [],
    "actionBtnList": [
      {
        "title": "按钮1",
        "actionList": [
          {
            "name": "onClick",
            "type": 0,
            "btnType": 0,
            "nextActionList": [
              {
                "type": 1
              }
            ]
          }
        ]
      },
      {
        "title": "按钮2",
        "actionList": [
          {
            "name": "onClick",
            "type": 1,
            "nextActionList": [
              {
                "type": 2,
                "triggeredType": 0,
                "triggeredContent": "dd\n"
              }
            ]
          }
        ]
      },
      {
        "title": "按钮3",
        "actionList": [
          {
            "name": "onClick",
            "type": 3,
            "actionCompontent": 0
          }
        ]
      },
      {
        "title": "按钮4",
        "actionList": [
          {
            "name": "onClick",
            "type": 4,
            "actionPage": [
              "1565609945456443392",
              "1565609987449815040"
            ],
            "nextActionList": []
          }
        ]
      },
      {
        "title": "按钮5",
        "actionList": [
          {
            "name": "onClick",
            "type": 5
          }
        ]
      }
    ]
    
  };

  constructor(props) {
    super(props);
    this.state = {
      pagesList: [],
      formVal: {},
      options: {}
    };
  }

  componentDidMount() {
    console.log('componentDidMount', this.state);
    // const { itemList } = this.props;
    // let objectApiName = `${itemList.entityName.apiName}`;
    // let columnApiName = `${itemList.entity[1].apiName}`;

    // pullInp(objectApiName,columnApiName).then(res=>{
    //   console.log(res.data)   
    //   this.setState({
    //     pagesList : res.data
    //   })  
    // })

    // this.state.pagesList()   
    // this.getPagesList('')


  }

  componentWillReceiveProps(nextProps, preState) {
    const { itemList } = nextProps;
    itemList.entity?.map((item, index) => {
      if (
        item.columnType === 'SINGLE_CHOICE' ||
        item.columnType === 'MULTI_CHOICE'  ||
        item.columnType === 'SINGLE_CHOICE_TREE' ||
        item.columnType === 'MULTI_CHOICE_TREE'
      ) {
        this.getSingleChoiceOpions(item);
      }
    });
  }

  //级联
  async getSingleChoiceOpions(item) {
    const { itemList } = this.props;
    let res = await getOptionListOrTree({
      objectApiName: itemList.entityName.apiName,
      columnApiName: item.apiName,
    });
    let options = this.state.options;
    options[item.apiName] = res.data.options || [];

    this.setState({
      options,
    });

    // return res.data.options || [];

    // this.setState({
    //   singleChoiceOpions: res.data.options || [],
    // });
  }
  //时间选择
  onSwitchChange(value, apiName) {
    // console.log(`switch to ${value}`, apiName);
    // itemList.entity[index] = value
    // let obj = {}
    // obj[apiName] = moment(value).format('YYYY-MM-DD HH:mm:ss')
    // console.log('dateobj', obj)
    // form.setFieldsValue(obj)
    console.log(value._d)
  }

  //级联选择
  onCascaderChange(value) {
    console.log('选择了级联选择', value);

    // const { selectData, mainInfo } = this.props;

    // const mainArr = selectData.filter((item) => {
    //   return item.apiName == value[0];
    // });

    // console.log('7777777', mainArr);

    // const singleArr = mainArr[0].columnList.filter((i) => {
    //   return i.apiName == value[1];
    // });

    // console.log(99999999, singleArr);

    // const selectOneData = singleArr[0];
    // selectOneData.mainEntityId = mainInfo.entityId;
    // selectOneData.entityId = mainArr[0].entityId;
    // selectOneData.objectApiName = mainArr[0].oldApiName;

    // selectOneData.joinColumnApiName = mainArr[0].joinColumnApiName;

    // console.log(333333333, selectOneData);
    // let selectObj = _.assign({}, this.state.field, selectOneData);

    // console.log('222222', selectObj);

    // // if(!selectObj.tableName){
    // //   selectObj.tableName = selectObj.name;

    // // }

    // this.props.lineDataChange(selectObj, this.props.index);
  }
  //inp框
  oninpChange(e, apiName) {
    var val = e.target.value
    console.log(val, apiName)
    this.state.formVal[apiName] = val;
    console.log(this.state.formVal)

  }
  //下拉
  actionPageChange(value,apiName) {
    console.log(value,apiName)
    // this.state.formVal[name] =value;
    // console.log(this.state.formVal)
  }
  //开关
  SwitchChange(checked, apiName) {
    console.log(checked, apiName)
    this.state.formVal[apiName] = checked;

    console.log(this.state.formVal)


  }

  //inp数字框
  onNumChange(value, apiName) {
    console.log(value, apiName)
    this.state.formVal[apiName] = value;
    console.log(this.state.formVal)


  }

  //操作列按钮
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
    this.nextActionFuc();

    if (info.nextActionList) {
      info.nextActionList.map((item) => {
        console.log('await nextActionFuc');
        this.btnLineClick();
      });
    }
  }
  //时间选择
  ChangeSwitch(time, apiName) {
    console.log(time, apiName)
    // this.state.formVal[apiName]=time;
    // this.state.formVal.key=apiName;
    // console.log(this.state.formVal)


  }

  // onSelectArrChange() {

  // }
  SearClick() {
    console.log(this.state.formVal)

  }
  render() {
    const { pagesList, options } = this.state
    const { actionBtnList} =this.props
    // console.log('111111', options)
    console.log('actionBtnList', actionBtnList);

    return (
      <div class="complex-flex">
        {this.props.itemList &&
          this.props.itemList.entityList &&
          this.props.itemList.entityList.map((i, index) => {
            // console.log('options', options)
            if (i.columnType == "AUTO_NO" || i.columnType == "ID") {
              return;
            }
            return (
              <div class="complex-content">
                <div>{i.name}</div>{' '}
                <div class='complex-inp'>
                  {i.columnTypeGroup === 'TEXT' ? (
                    <Input
                      maxLength={i.columnConfig.maxLength}
                      placeholder={i.columnConfig.placeHolder}
                      onChange={(e) => this.oninpChange(e, i.apiName)}
                    />
                  ) : i.columnTypeGroup === 'DATE' ? (
                    <DatePicker onChange={(value) => this.onSwitchChange(value, i.apiName)} />
                  ) : i.columnTypeGroup === 'NUMBER' ? (
                    <InputNumber min={-99999999999} max={99999999999} precision={0}
                      onChange={(value) => this.onNumChange(value, i.apiName)}
                    />
                  ) : i.columnType === 'SINGLE_CHOICE' ? (
                    i.columnConfig.singleChoiceType === 'DROP_LIST' ? (
                      <Select
                              defaultValue=""
                              style={{ width: '100%' }}
                              onChange={(value) => this.actionPageChange(value,i.apiName)}
                            >
                              {options[i.apiName] &&
                                options[i.apiName].map((item, index) => {
                                  return (
                                    <Option value={item.apiName} key={index}>
                                      {item.name}
                                    </Option>
                                  );
                                })}
                            </Select>
                          ) : (
                            <Radio.Group>
                              {options[i.apiName] &&
                                options[i.apiName].map((item, index) => {
                                  return (
                                    <Radio value={item.apiName} key={index}>
                                      {item.name}
                                    </Radio>
                                  );
                                })}
                            </Radio.Group>
                          )
                        ) : i.columnType === 'SINGLE_CHOICE_TREE' ? (
                          <Cascader
                            options={options[i.apiName] || []}
                            placeholder="Please select"
                            fieldNames={{
                              label: 'name',
                              value: 'apiName',
                            }}
                          />
                        ) : i.columnType === 'MULTI_CHOICE' ? (
                          i.columnConfig.multiChoiceType === 'DROP_LIST' ? (
                            <Select mode="multiple" allowClear style={{ width: '100%' }}>
                              {options[i.apiName] &&
                                options[i.apiName].map((item, index) => {
                                  return (
                                    <Option value={item.apiName} key={index}>
                                      {item.name}
                                    </Option>
                                  );
                                })}
                            </Select>
                          ) : (
                            <Checkbox.Group>
                              {options[i.apiName] &&
                                options[i.apiName].map((field, index) => (
                                  <Checkbox value={field.apiName}>{field.name}</Checkbox>
                                ))}
                            </Checkbox.Group>
                          )
                        ) : i.columnType === 'MULTI_CHOICE_TREE' ? (
                          <Cascader
                            multiple
                            options={options[i.apiName] || []}
                            placeholder="Please select"
                            fieldNames={{
                              label: 'name',
                              value: 'apiName',
                            }}
                          />


                  ) : i.columnType === 'TIME' ? (
                    <TimePicker onChange={(time) => this.ChangeSwitch(time, i.apiName)} />
                  ) : i.columnType === 'BOOL' ? (
                    <Switch defaultChecked onChange={(checked) => this.SwitchChange(checked, i.apiName)} />
                  )
                    : null}
                </div>
              </div>
              
            );
          })}

        <Button type="primary" className="btn" onClick={() => this.SearClick()}>查询</Button>
        <div className="btn-line">
          {actionBtnList &&
            actionBtnList.map((i, idx) => {
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
      </div>
    );
  }
}

export default Child;
