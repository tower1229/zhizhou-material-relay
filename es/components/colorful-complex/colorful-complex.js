import _Popconfirm from "antd/es/popconfirm";
import _Button from "antd/es/button";
import _Switch from "antd/es/switch";
import _TimePicker from "antd/es/time-picker";
import _Checkbox from "antd/es/checkbox";
import _Cascader from "antd/es/cascader";
import _Radio from "antd/es/radio";
import _InputNumber from "antd/es/input-number";
import _DatePicker from "antd/es/date-picker";
import _Input from "antd/es/input";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _Select from "antd/es/select";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import * as React from 'react';
import "./index.scss";
var Option = _Select.Option;
import { getOptionListOrTree } from "../../api/pages";

var Child = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Child, _React$Component);

  function Child(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      pagesList: [],
      formVal: {},
      options: {}
    };
    return _this;
  }

  var _proto = Child.prototype;

  _proto.componentDidMount = function componentDidMount() {
    console.log('componentDidMount', this.state); // const { itemList } = this.props;
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
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps, preState) {
    var _itemList$entity,
        _this2 = this;

    var itemList = nextProps.itemList;
    (_itemList$entity = itemList.entity) === null || _itemList$entity === void 0 ? void 0 : _itemList$entity.map(function (item, index) {
      if (item.columnType === 'SINGLE_CHOICE' || item.columnType === 'MULTI_CHOICE' || item.columnType === 'SINGLE_CHOICE_TREE' || item.columnType === 'MULTI_CHOICE_TREE') {
        _this2.getSingleChoiceOpions(item);
      }
    });
  } //级联
  ;

  _proto.getSingleChoiceOpions =
  /*#__PURE__*/
  function () {
    var _getSingleChoiceOpions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(item) {
      var itemList, res, options;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              itemList = this.props.itemList;
              _context.next = 3;
              return getOptionListOrTree({
                objectApiName: itemList.entityName.apiName,
                columnApiName: item.apiName
              });

            case 3:
              res = _context.sent;
              options = this.state.options;
              options[item.apiName] = res.data.options || [];
              this.setState({
                options: options
              }); // return res.data.options || [];
              // this.setState({
              //   singleChoiceOpions: res.data.options || [],
              // });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getSingleChoiceOpions(_x) {
      return _getSingleChoiceOpions.apply(this, arguments);
    }

    return getSingleChoiceOpions;
  }() //时间选择
  ;

  _proto.onSwitchChange = function onSwitchChange(value, apiName) {
    // console.log(`switch to ${value}`, apiName);
    // itemList.entity[index] = value
    // let obj = {}
    // obj[apiName] = moment(value).format('YYYY-MM-DD HH:mm:ss')
    // console.log('dateobj', obj)
    // form.setFieldsValue(obj)
    console.log(value._d);
  } //级联选择
  ;

  _proto.onCascaderChange = function onCascaderChange(value) {
    console.log('选择了级联选择', value); // const { selectData, mainInfo } = this.props;
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
  } //inp框
  ;

  _proto.oninpChange = function oninpChange(e, apiName) {
    var val = e.target.value;
    console.log(val, apiName);
    this.state.formVal[apiName] = val;
    console.log(this.state.formVal);
  } //下拉
  ;

  _proto.actionPageChange = function actionPageChange(value, apiName) {
    console.log(value, apiName); // this.state.formVal[name] =value;
    // console.log(this.state.formVal)
  } //开关
  ;

  _proto.SwitchChange = function SwitchChange(checked, apiName) {
    console.log(checked, apiName);
    this.state.formVal[apiName] = checked;
    console.log(this.state.formVal);
  } //inp数字框
  ;

  _proto.onNumChange = function onNumChange(value, apiName) {
    console.log(value, apiName);
    this.state.formVal[apiName] = value;
    console.log(this.state.formVal);
  } //操作列按钮
  ;

  _proto.btnLineClick =
  /*#__PURE__*/
  function () {
    var _btnLineClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(value) {
      var _this3 = this;

      var itemList, info, type, id;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('点击了新增', value);
              itemList = this.props.itemList;
              info = value[0];
              type = info.type;
              _context2.t0 = type;
              _context2.next = _context2.t0 === 0 ? 7 : _context2.t0 === 1 ? 26 : _context2.t0 === 2 ? 28 : _context2.t0 === 4 ? 30 : _context2.t0 === 5 ? 33 : 35;
              break;

            case 7:
              if (!(info.btnType === 3)) {
                _context2.next = 10;
                break;
              }

              _context2.next = 18;
              break;

            case 10:
              if (!(info.btnType === 4)) {
                _context2.next = 15;
                break;
              }

              _context2.next = 13;
              return this.enableDataBatch(true);

            case 13:
              _context2.next = 18;
              break;

            case 15:
              if (!(info.btnType === 5)) {
                _context2.next = 18;
                break;
              }

              _context2.next = 18;
              return this.enableDataBatch(false);

            case 18:
              if (!(itemList.entityName.structure == 'TREE')) {
                _context2.next = 23;
                break;
              }

              _context2.next = 21;
              return this.getTableTree(this.state.itemList, this.state.querySort, this.state.pageNo);

            case 21:
              _context2.next = 25;
              break;

            case 23:
              _context2.next = 25;
              return this.getTable(this.state.itemList, this.state.querySort, this.state.pageNo);

            case 25:
              return _context2.abrupt("break", 36);

            case 26:
              Bus.emit(info.actionDialogId, {
                show: true
              });
              return _context2.abrupt("break", 36);

            case 28:
              this.getMessageFuc(info.triggeredType, info.triggeredContent);
              return _context2.abrupt("break", 36);

            case 30:
              id = info.actionPage[info.actionPage.length - 1];
              window.location = "www.test.com?id=" + id;
              return _context2.abrupt("break", 36);

            case 33:
              // info.actionJSNamezheng
              info.actionJSValue();
              return _context2.abrupt("break", 36);

            case 35:
              return _context2.abrupt("break", 36);

            case 36:
              this.nextActionFuc();

              if (info.nextActionList) {
                info.nextActionList.map(function (item) {
                  console.log('await nextActionFuc');

                  _this3.btnLineClick();
                });
              }

            case 38:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function btnLineClick(_x2) {
      return _btnLineClick.apply(this, arguments);
    }

    return btnLineClick;
  }() //时间选择
  ;

  _proto.ChangeSwitch = function ChangeSwitch(time, apiName) {
    console.log(time, apiName); // this.state.formVal[apiName]=time;
    // this.state.formVal.key=apiName;
    // console.log(this.state.formVal)
  } // onSelectArrChange() {
  // }
  ;

  _proto.SearClick = function SearClick() {
    console.log(this.state.formVal);
  };

  _proto.render = function render() {
    var _this4 = this;

    var _this$state = this.state,
        pagesList = _this$state.pagesList,
        options = _this$state.options;
    var actionBtnList = this.props.actionBtnList; // console.log('111111', options)

    console.log('actionBtnList', actionBtnList);
    return /*#__PURE__*/React.createElement("div", {
      "class": "complex-flex"
    }, this.props.itemList && this.props.itemList.entityList && this.props.itemList.entityList.map(function (i, index) {
      // console.log('options', options)
      if (i.columnType == "AUTO_NO" || i.columnType == "ID") {
        return;
      }

      return /*#__PURE__*/React.createElement("div", {
        "class": "complex-content"
      }, /*#__PURE__*/React.createElement("div", null, i.name), ' ', /*#__PURE__*/React.createElement("div", {
        "class": "complex-inp"
      }, i.columnTypeGroup === 'TEXT' ? /*#__PURE__*/React.createElement(_Input, {
        maxLength: i.columnConfig.maxLength,
        placeholder: i.columnConfig.placeHolder,
        onChange: function onChange(e) {
          return _this4.oninpChange(e, i.apiName);
        }
      }) : i.columnTypeGroup === 'DATE' ? /*#__PURE__*/React.createElement(_DatePicker, {
        onChange: function onChange(value) {
          return _this4.onSwitchChange(value, i.apiName);
        }
      }) : i.columnTypeGroup === 'NUMBER' ? /*#__PURE__*/React.createElement(_InputNumber, {
        min: -99999999999,
        max: 99999999999,
        precision: 0,
        onChange: function onChange(value) {
          return _this4.onNumChange(value, i.apiName);
        }
      }) : i.columnType === 'SINGLE_CHOICE' ? i.columnConfig.singleChoiceType === 'DROP_LIST' ? /*#__PURE__*/React.createElement(_Select, {
        defaultValue: "",
        style: {
          width: '100%'
        },
        onChange: function onChange(value) {
          return _this4.actionPageChange(value, i.apiName);
        }
      }, options[i.apiName] && options[i.apiName].map(function (item, index) {
        return /*#__PURE__*/React.createElement(Option, {
          value: item.apiName,
          key: index
        }, item.name);
      })) : /*#__PURE__*/React.createElement(_Radio.Group, null, options[i.apiName] && options[i.apiName].map(function (item, index) {
        return /*#__PURE__*/React.createElement(_Radio, {
          value: item.apiName,
          key: index
        }, item.name);
      })) : i.columnType === 'SINGLE_CHOICE_TREE' ? /*#__PURE__*/React.createElement(_Cascader, {
        options: options[i.apiName] || [],
        placeholder: "Please select",
        fieldNames: {
          label: 'name',
          value: 'apiName'
        }
      }) : i.columnType === 'MULTI_CHOICE' ? i.columnConfig.multiChoiceType === 'DROP_LIST' ? /*#__PURE__*/React.createElement(_Select, {
        mode: "multiple",
        allowClear: true,
        style: {
          width: '100%'
        }
      }, options[i.apiName] && options[i.apiName].map(function (item, index) {
        return /*#__PURE__*/React.createElement(Option, {
          value: item.apiName,
          key: index
        }, item.name);
      })) : /*#__PURE__*/React.createElement(_Checkbox.Group, null, options[i.apiName] && options[i.apiName].map(function (field, index) {
        return /*#__PURE__*/React.createElement(_Checkbox, {
          value: field.apiName
        }, field.name);
      })) : i.columnType === 'MULTI_CHOICE_TREE' ? /*#__PURE__*/React.createElement(_Cascader, {
        multiple: true,
        options: options[i.apiName] || [],
        placeholder: "Please select",
        fieldNames: {
          label: 'name',
          value: 'apiName'
        }
      }) : i.columnType === 'TIME' ? /*#__PURE__*/React.createElement(_TimePicker, {
        onChange: function onChange(time) {
          return _this4.ChangeSwitch(time, i.apiName);
        }
      }) : i.columnType === 'BOOL' ? /*#__PURE__*/React.createElement(_Switch, {
        defaultChecked: true,
        onChange: function onChange(checked) {
          return _this4.SwitchChange(checked, i.apiName);
        }
      }) : null));
    }), /*#__PURE__*/React.createElement(_Button, {
      type: "primary",
      className: "btn",
      onClick: function onClick() {
        return _this4.SearClick();
      }
    }, "\u67E5\u8BE2"), /*#__PURE__*/React.createElement("div", {
      className: "btn-line"
    }, actionBtnList && actionBtnList.map(function (i, idx) {
      var Btn = /*#__PURE__*/React.createElement(_Button, {
        key: idx,
        onClick: i.actionList.find(function (ite) {
          return ite.name == 'onClick';
        }) !== -1 ? function () {
          return _this4.btnLineClick(i.actionList);
        } : function () {},
        className: "btn",
        type: "primary"
      }, i.title);
      return i.actionList[0].type == 0 && i.actionList[0].btnType == 3 ? /*#__PURE__*/React.createElement(_Popconfirm, {
        title: "\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F",
        okText: "Yes",
        cancelText: "No",
        onConfirm: function onConfirm() {
          return _this4.confirmDataBatch();
        },
        onCancel: function onCancel() {
          return _this4.cancelProp();
        }
      }, Btn) : i.tooltip ? /*#__PURE__*/React.createElement(Tooltip, {
        placement: "topLeft",
        title: i.tooltip
      }, Btn) : /*#__PURE__*/React.createElement("div", null, Btn);
    })));
  };

  return Child;
}(React.Component);

Child.defaultProps = {
  btnList: [{
    title: '添加按钮',
    actionList: [{
      name: 'onClick',
      type: 1
    }],
    functional: '1544617470050959360'
  }],
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
    "entity": [{
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }],
    "entityList": [{
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }]
  },
  pagesList: [],
  "actionBtnList": [{
    "title": "按钮1",
    "actionList": [{
      "name": "onClick",
      "type": 0,
      "btnType": 0,
      "nextActionList": [{
        "type": 1
      }]
    }]
  }, {
    "title": "按钮2",
    "actionList": [{
      "name": "onClick",
      "type": 1,
      "nextActionList": [{
        "type": 2,
        "triggeredType": 0,
        "triggeredContent": "dd\n"
      }]
    }]
  }, {
    "title": "按钮3",
    "actionList": [{
      "name": "onClick",
      "type": 3,
      "actionCompontent": 0
    }]
  }, {
    "title": "按钮4",
    "actionList": [{
      "name": "onClick",
      "type": 4,
      "actionPage": ["1565609945456443392", "1565609987449815040"],
      "nextActionList": []
    }]
  }, {
    "title": "按钮5",
    "actionList": [{
      "name": "onClick",
      "type": 5
    }]
  }]
};
export default Child;