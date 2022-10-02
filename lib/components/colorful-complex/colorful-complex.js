"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _button = _interopRequireDefault(require("antd/lib/button"));

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

var _datePicker = _interopRequireDefault(require("antd/lib/date-picker"));

var _input = _interopRequireDefault(require("antd/lib/input"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = _interopRequireWildcard(require("react"));

require("./index.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Child = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(Child, _React$Component);

  function Child(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = Child.prototype;

  _proto.componentDidMount = function componentDidMount() {
    console.log('componentDidMount', this.props);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps, preState) {} //时间选择
  ;

  _proto.onSwitchChange = function onSwitchChange(value, apiName) {// console.log(`switch to ${value}`, apiName);
    // itemList.entity[index] = value
    // let obj = {}
    // obj[apiName] = moment(value).format('YYYY-MM-DD HH:mm:ss')
    // console.log('dateobj', obj)
    // form.setFieldsValue(obj)
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
  } //
  ;

  _proto.actionPageChange = function actionPageChange(value, option) {};

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("div", {
      "class": "complex-flex"
    }, this.props.itemList && this.props.itemList.entityList && this.props.itemList.entityList.map(function (i, index) {
      return /*#__PURE__*/React.createElement("div", {
        "class": "complex-content"
      }, /*#__PURE__*/React.createElement("div", null, i.name), ' ', /*#__PURE__*/React.createElement("div", null, i.columnTypeGroup === 'TEXT' ? /*#__PURE__*/React.createElement(_input["default"], {
        maxLength: i.columnConfig.maxLength,
        placeholder: i.columnConfig.placeHolder
      }) : i.columnTypeGroup === 'DATE' ? /*#__PURE__*/React.createElement(_datePicker["default"], {
        onChange: function onChange(value) {
          return onSwitchChange(value, i.apiName);
        }
      }) : i.columnTypeGroup === 'NUMBER' ? /*#__PURE__*/React.createElement(_inputNumber["default"], {
        min: -99999999999,
        max: 99999999999,
        precision: 0
      }) : // :i.columnTypeGroup === 'CHOICE' ? (
      //   <Cascader
      //   fieldNames={{ label: 'name', value: 'id', children: 'children' }}
      //   options={pagesList}
      //   style={{ width: '80%' }}
      //   onChange={(value, option) => this.actionPageChange(value, option)}
      // />
      // )
      null));
    }), /*#__PURE__*/React.createElement(_button["default"], {
      type: "primary",
      className: "btn"
    }, "\u67E5\u8BE2"));
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
  itemList: {
    entityName: {
      apiName: 'student',
      desc: '学生描述',
      enabled: true,
      iconId: '0',
      id: '1555047745306230784',
      name: '学生',
      structure: 'NORMAL'
    },
    entity: [{
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
        userMask: false
      },
      columnType: 'TEXT',
      columnTypeGroup: 'TEXT',
      defaultUse: true,
      name: '学生姓名',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student',
      index: 0
    }, {
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
        userMask: false
      },
      columnType: 'SINGLE_CHOICE',
      columnTypeGroup: 'CHOICE',
      defaultUse: true,
      name: '省份',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student',
      index: 1
    }, {
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
        userMask: false
      },
      columnType: 'MULTI_CHOICE_TREE',
      columnTypeGroup: 'CHOICE',
      defaultUse: true,
      name: '城市',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student',
      index: 2
    }, {
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
        userMask: false
      },
      columnType: 'INTEGER',
      columnTypeGroup: 'NUMBER',
      defaultUse: true,
      name: '年龄',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student',
      index: 3
    }, {
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
        userMask: false
      },
      columnType: 'DATE',
      columnTypeGroup: 'DATE',
      defaultUse: true,
      name: '生日',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student',
      index: 4
    }],
    entityList: [{
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
        userMask: false
      },
      columnType: 'TEXT',
      columnTypeGroup: 'TEXT',
      defaultUse: true,
      name: '学生姓名',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student',
      index: 0
    }, {
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
        userMask: false
      },
      columnType: 'SINGLE_CHOICE',
      columnTypeGroup: 'CHOICE',
      defaultUse: true,
      name: '省份',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student',
      index: 1
    }, {
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
        userMask: false
      },
      columnType: 'MULTI_CHOICE_TREE',
      columnTypeGroup: 'CHOICE',
      defaultUse: true,
      name: '城市',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student',
      index: 2
    }, {
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
        userMask: false
      },
      columnType: 'INTEGER',
      columnTypeGroup: 'NUMBER',
      defaultUse: true,
      name: '年龄',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student',
      index: 3
    }, {
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
        userMask: false
      },
      columnType: 'DATE',
      columnTypeGroup: 'DATE',
      defaultUse: true,
      name: '生日',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student',
      index: 4
    }]
  },
  pagesList: []
};
var _default = Child;
exports["default"] = _default;