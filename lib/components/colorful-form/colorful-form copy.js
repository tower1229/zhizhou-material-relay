"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _row = _interopRequireDefault(require("antd/lib/row"));

var _table = _interopRequireDefault(require("antd/lib/table"));

var _col = _interopRequireDefault(require("antd/lib/col"));

var _upload = _interopRequireDefault(require("antd/lib/upload"));

var _button = _interopRequireDefault(require("antd/lib/button"));

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

var _radio = _interopRequireDefault(require("antd/lib/radio"));

var _switch = _interopRequireDefault(require("antd/lib/switch"));

var _datePicker = _interopRequireDefault(require("antd/lib/date-picker"));

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _select = _interopRequireDefault(require("antd/lib/select"));

var _form = _interopRequireDefault(require("antd/lib/form"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _input = _interopRequireDefault(require("antd/lib/input"));

var React = _interopRequireWildcard(require("react"));

require("./index.scss");

var _index2 = _interopRequireDefault(require("../../components/colorful-dialog/index"));

var _pages = require("../../api/pages");

var _excluded = ["title", "editable", "children", "dataIndex", "record", "handleSave"],
    _excluded2 = ["index"],
    _excluded3 = ["color", "wid", "itemList", "subEntity", "columns2", "tableData2", "propName", "initial", "style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TextArea = _input["default"].TextArea; // import { createFromIconfontCN } from '@ant-design/icons';
// const IconFont = createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_3324425_berrts5o6c.js',
// });
// window._eventMap = new Map()
//   window._eventMap.set(key,value)

var EditableContext = /*#__PURE__*/React.createContext(null);

var EditableCell = function EditableCell(_ref) {
  var title = _ref.title,
      editable = _ref.editable,
      children = _ref.children,
      dataIndex = _ref.dataIndex,
      record = _ref.record,
      handleSave = _ref.handleSave,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

  var _useState = (0, React.useState)(false),
      editing = _useState[0],
      setEditing = _useState[1];

  var inputRef = (0, React.useRef)(null);
  var form = (0, React.useContext)(EditableContext);
  (0, React.useEffect)(function () {
    var _form$setFieldsValue;

    // if (editing) {
    // inputRef.current!.focus();
    // }
    dataIndex && form.setFieldsValue((_form$setFieldsValue = {}, _form$setFieldsValue[dataIndex] = record[dataIndex], _form$setFieldsValue));
  }, [editing]); // const toggleEdit = () => {
  //   setEditing(!editing);
  //   form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  // };

  var save = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var values;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return form.validateFields();

            case 3:
              values = _context.sent;
              handleSave((0, _extends2["default"])({}, record, values)); // toggleEdit();

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log('Save failed:', _context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function save() {
      return _ref2.apply(this, arguments);
    };
  }();

  var childNode = children; // if (editable) {
  // childNode = editing ? (

  childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
    style: {
      margin: 0
    },
    name: dataIndex,
    rules: [{
      required: true,
      message: title + " is required."
    }]
  }, /*#__PURE__*/React.createElement(_input["default"], {
    ref: inputRef,
    onPressEnter: save,
    onBlur: save
  })); // ) : (
  //   <div className="editable-cell-value-wrap" style={{ paddingRight: 24, minWidth: 50 }} onClick={toggleEdit}>
  //     {children}
  //   </div>
  // );
  // }

  return /*#__PURE__*/React.createElement("td", restProps, childNode);
};

var EditableRow = function EditableRow(_ref3) {
  var index = _ref3.index,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref3, _excluded2);

  var _Form$useForm = _form["default"].useForm(),
      form = _Form$useForm[0];

  return /*#__PURE__*/React.createElement(_form["default"], {
    form: form,
    component: false
  }, /*#__PURE__*/React.createElement(EditableContext.Provider, {
    value: form
  }, /*#__PURE__*/React.createElement("tr", props)));
};

// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }
var ColorfulForm = function ColorfulForm(_ref4) {
  var color = _ref4.color,
      _ref4$wid = _ref4.wid,
      wid = _ref4$wid === void 0 ? '120px' : _ref4$wid,
      _ref4$itemList = _ref4.itemList,
      itemList = _ref4$itemList === void 0 ? {
    entity: [{
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
        optionSetApiName: null,
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
      columnType: 'ID',
      defaultUse: true,
      name: 'id'
    }, {
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
        optionSetApiName: null,
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
      defaultUse: false,
      name: '创建时间'
    }, {
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
        optionSetApiName: null,
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
      defaultUse: true,
      name: '最后修改时间'
    }, {
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
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'common_user',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: false,
      name: '创建人'
    }, {
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
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'common_user',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: false,
      name: '修改人'
    }, {
      apiName: 'enabled',
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
        optionSetApiName: null,
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
      columnType: 'BOOL',
      defaultUse: false,
      name: '已启用'
    }, {
      apiName: 'deleted',
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
        optionSetApiName: null,
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
      columnType: 'BOOL',
      defaultUse: false,
      name: '已删除'
    }, {
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
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'common_user',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: false,
      name: '所属人'
    }, {
      apiName: 'parentId',
      columnConfig: {
        bachCreateItem: false,
        cascadingDeletionType: 'CLEAN',
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
        optionSetApiName: null,
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
      columnType: 'RELATIONSHIP',
      defaultUse: true,
      name: '父部门'
    }, {
      apiName: 'api1111',
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
        optionSetApiName: null,
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
      columnType: 'ITEM_DETAIL',
      defaultUse: true,
      name: '子级用户'
    }, {
      apiName: 'api2222',
      columnConfig: {
        bachCreateItem: false,
        cascadingDeletionType: 'CLEAN',
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
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'student',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'ITEM_DETAIL',
      defaultUse: true,
      name: '子级学生'
    }, {
      apiName: 'api123123123',
      columnConfig: {
        bachCreateItem: false,
        cascadingDeletionType: 'CLEAN',
        computeType: null,
        copyWidthParent: false,
        createNoForExists: false,
        defaultValue: '',
        encrypted: false,
        endUnMasked: null,
        fileCount: null,
        helpText: '123',
        imageCount: null,
        maxLength: null,
        multiChoiceType: null,
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'common_user',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'ITEM_DETAIL',
      defaultUse: true,
      name: '子级用户123'
    }]
  } : _ref4$itemList,
      _ref4$subEntity = _ref4.subEntity,
      subEntity = _ref4$subEntity === void 0 ? [{
    apiName: 'department',
    columnList: [{
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
        optionSetApiName: null,
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
      columnType: 'ID',
      defaultUse: true,
      name: 'id'
    }, {
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
        optionSetApiName: null,
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
      defaultUse: false,
      name: '创建时间'
    }, {
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
        optionSetApiName: null,
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
      defaultUse: true,
      name: '最后修改时间'
    }, {
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
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'common_user',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: false,
      name: '创建人'
    }, {
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
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'common_user',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: false,
      name: '修改人'
    }, {
      apiName: 'enabled',
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
        optionSetApiName: null,
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
      columnType: 'BOOL',
      defaultUse: false,
      name: '已启用'
    }, {
      apiName: 'deleted',
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
        optionSetApiName: null,
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
      columnType: 'BOOL',
      defaultUse: false,
      name: '已删除'
    }, {
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
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'common_user',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: false,
      name: '所属人'
    }, {
      apiName: 'parentId',
      columnConfig: {
        bachCreateItem: false,
        cascadingDeletionType: 'CLEAN',
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
        optionSetApiName: null,
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
      columnType: 'RELATIONSHIP',
      defaultUse: true,
      name: '父部门'
    }, {
      apiName: 'api1111',
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
        optionSetApiName: null,
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
      columnType: 'ITEM_DETAIL',
      defaultUse: true,
      name: '子级用户'
    }, {
      apiName: 'api2222',
      columnConfig: {
        bachCreateItem: false,
        cascadingDeletionType: 'CLEAN',
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
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'student',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'ITEM_DETAIL',
      defaultUse: true,
      name: '子级学生'
    }, {
      apiName: 'api123123123',
      columnConfig: {
        bachCreateItem: false,
        cascadingDeletionType: 'CLEAN',
        computeType: null,
        copyWidthParent: false,
        createNoForExists: false,
        defaultValue: '',
        encrypted: false,
        endUnMasked: null,
        fileCount: null,
        helpText: '123',
        imageCount: null,
        maxLength: null,
        multiChoiceType: null,
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'common_user',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'ITEM_DETAIL',
      defaultUse: true,
      name: '子级用户123'
    }],
    name: '部门'
  }, {
    apiName: 'Student',
    columnList: [{
      apiName: 'Name',
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
        optionSetApiName: null,
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
      defaultUse: true,
      name: '名称'
    }, {
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
        optionSetApiName: null,
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
      columnType: 'ID',
      defaultUse: true,
      name: 'id'
    }, {
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
        optionSetApiName: null,
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
      defaultUse: false,
      name: '创建时间'
    }, {
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
        optionSetApiName: null,
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
      defaultUse: true,
      name: '最后修改时间'
    }, {
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
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'common_user',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: false,
      name: '创建人'
    }, {
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
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'common_user',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: false,
      name: '修改人'
    }, {
      apiName: 'enabled',
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
        optionSetApiName: null,
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
      columnType: 'BOOL',
      defaultUse: false,
      name: '已启用'
    }, {
      apiName: 'deleted',
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
        optionSetApiName: null,
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
      columnType: 'BOOL',
      defaultUse: false,
      name: '已删除'
    }, {
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
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'common_user',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: false,
      name: '所属人'
    }, {
      apiName: 'xuesheng',
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
        helpText: '帮助',
        imageCount: null,
        maxLength: null,
        multiChoiceType: null,
        optionSetApiName: null,
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
      columnType: 'ITEM_DETAIL',
      defaultUse: true,
      name: '学生字段'
    }, {
      apiName: 'wenben',
      columnConfig: {
        bachCreateItem: false,
        cascadingDeletionType: null,
        computeType: null,
        copyWidthParent: false,
        createNoForExists: false,
        defaultValue: '默认',
        encrypted: true,
        endUnMasked: null,
        fileCount: null,
        helpText: '帮助',
        imageCount: null,
        maxLength: 300,
        multiChoiceType: null,
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: true,
        userMask: false
      },
      columnType: 'TEXT',
      defaultUse: true,
      name: '学生字段文本'
    }, {
      apiName: 'dili',
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
        helpText: '帮助',
        imageCount: null,
        maxLength: null,
        multiChoiceType: null,
        optionSetApiName: null,
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
      columnType: 'GEO_POSITION',
      defaultUse: true,
      name: '地理位置'
    }, {
      apiName: 'guanlian',
      columnConfig: {
        bachCreateItem: false,
        cascadingDeletionType: 'CLEAN',
        computeType: null,
        copyWidthParent: false,
        createNoForExists: false,
        defaultValue: '',
        encrypted: false,
        endUnMasked: null,
        fileCount: null,
        helpText: '帮助',
        imageCount: null,
        maxLength: null,
        multiChoiceType: null,
        optionSetApiName: null,
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
      columnType: 'RELATIONSHIP',
      defaultUse: true,
      name: '关联关系'
    }, {
      apiName: 'xuesheng',
      columnConfig: {
        bachCreateItem: false,
        cascadingDeletionType: 'CLEAN',
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
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'common_user',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'ITEM_DETAIL',
      defaultUse: true,
      name: '学生子级'
    }, {
      apiName: '22',
      columnConfig: {
        bachCreateItem: false,
        cascadingDeletionType: null,
        computeType: null,
        copyWidthParent: false,
        createNoForExists: false,
        defaultValue: '',
        encrypted: true,
        endUnMasked: null,
        fileCount: null,
        helpText: '',
        imageCount: null,
        maxLength: 123,
        multiChoiceType: null,
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: true,
        userMask: false
      },
      columnType: 'TEXT',
      defaultUse: true,
      name: '12'
    }, {
      apiName: 'qqqqq',
      columnConfig: {
        bachCreateItem: false,
        cascadingDeletionType: null,
        computeType: null,
        copyWidthParent: false,
        createNoForExists: false,
        defaultValue: '123',
        encrypted: true,
        endUnMasked: null,
        fileCount: null,
        helpText: '123',
        imageCount: null,
        maxLength: 100,
        multiChoiceType: null,
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: true,
        userMask: false
      },
      columnType: 'TEXT',
      defaultUse: true,
      name: '新wenben'
    }, {
      apiName: '文本api',
      columnConfig: {
        bachCreateItem: false,
        cascadingDeletionType: null,
        computeType: null,
        copyWidthParent: false,
        createNoForExists: false,
        defaultValue: '123123',
        encrypted: true,
        endUnMasked: null,
        fileCount: null,
        helpText: '123',
        imageCount: null,
        maxLength: 12,
        multiChoiceType: null,
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: true,
        userMask: false
      },
      columnType: 'TEXT',
      defaultUse: true,
      name: '文本123'
    }, {
      apiName: 'api22',
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
        helpText: '123',
        imageCount: null,
        maxLength: null,
        multiChoiceType: null,
        optionSetApiName: null,
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'department',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'ITEM_DETAIL',
      defaultUse: true,
      name: '部门子级'
    }],
    name: '学生'
  }] : _ref4$subEntity,
      _ref4$columns = _ref4.columns2,
      columns2 = _ref4$columns === void 0 ? [] : _ref4$columns,
      _ref4$tableData = _ref4.tableData2,
      tableData2 = _ref4$tableData === void 0 ? [// {
    //   api1111: '',
    //   api2222: '',
    //   api123123123: '',
    //   createAt: '',
    //   createBy: '',
    //   deleted: '',
    //   enabled: '',
    //   key: 10,
    //   ownerId: '',
    //   parentId: '',
    //   updateAt: '',
    //   updateBy: '',
    // },
    // {
    //   api1111: '',
    //   api2222: '',
    //   api123123123: '',
    //   createAt: '',
    //   createBy: '',
    //   deleted: '',
    //   enabled: '',
    //   key: 10,
    //   ownerId: '',
    //   parentId: '',
    //   updateAt: '',
    //   updateBy: '',
    // },
  ] : _ref4$tableData,
      _ref4$propName = _ref4.propName,
      propName = _ref4$propName === void 0 ? [{
    title: '按钮111',
    actionList: [{
      name: 'onClick',
      triggeredType: [2],
      type: 3,
      triggeredContent: 'success!!'
    }]
  }, {
    title: '按钮222',
    actionList: [{
      name: 'onClick',
      triggeredType: [0, 2],
      type: 2,
      triggeredContent: 'tooltip!!'
    }]
  }] : _ref4$propName,
      _ref4$initial = _ref4.initial,
      initial = _ref4$initial === void 0 ? [{
    name: 'aaa',
    selectCorrelation: {
      name: '部门名称',
      parent: 'department',
      value: 'name'
    }
  }, {
    name: 'bbb',
    selectCorrelation: {
      type: '2',
      typeName: undefined,
      value: '12',
      name: '12'
    }
  }] : _ref4$initial,
      _ref4$style = _ref4.style,
      style = _ref4$style === void 0 ? {
    alignItems: 'flex-start',
    borderColor: '#50e3c2',
    borderRadius: '8px',
    borderStyle: 'dashed',
    borderWidth: '2px',
    bottom: '16px',
    clear: 'left',
    color: '#4a90e2',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    "float": 'left',
    fontSize: '16px',
    fontWeight: 400,
    height: '500px',
    justifyContent: 'flex-start',
    left: '12px',
    position: 'relative',
    right: '15px',
    textAlign: 'center',
    top: '10xpx',
    width: '800px',
    zIndex: 6
  } : _ref4$style,
      otherProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref4, _excluded3);

  var _useState2 = (0, React.useState)([]),
      subEntityList = _useState2[0],
      setSubEntityList = _useState2[1]; //确保userEffect在弹窗时候执行一次


  (0, React.useEffect)(function () {
    //  let data = {
    //    userName:'sdzz_admin',
    //    password:'Zz@123456',
    //    loginType:'USERNAME'
    //  };
    //   logPages(data).then(res=>{
    //   })
    // let subArr = [];
    // let arr = [];
    // subEntity.forEach((i) => {
    //   console.log('1635', i);
    //   let subObj = {};
    //   subObj.objectApiName = i.apiName;
    //   console.log('1638', subObj);
    //   let arr = i.columnList.filter((item) => {
    //     return item.apiName !== 'id';
    //   });
    //   console.log('1641', arr);
    //   subObj.params = arr;
    //   subArr.push(subObj);
    // });
    // console.log('1652', subArr);
    var colTotal = [];
    subEntity.forEach(function (i) {
      var arr = i.columnList.filter(function (item, idx) {
        return item.apiName !== 'id';
      }); // const arr = i.columnList

      i.objectApiName = i.apiName;
      var col = [];
      var tableObj = {};
      arr.forEach(function (item, index) {
        item.title = item.name;
        item.editable = true;
        item.dataIndex = item.apiName; // col.push(obj);
        // //tableData

        tableObj[item.apiName] = '';
        tableObj.key = 0; // console.log('1669', tableObj);
      });
      console.log('1654', arr);
      i.columnList = arr;
      i.tableData2 = [tableObj]; // i.tableData = [{
      // }]
      // let colObj = {};
      // colObj.columns2 = col;
      // colObj.tableData2 = [tableObj];
      // colTotal.push(colObj);

      return i;
    });
    setSubEntityList(subEntity);
    console.log('1670', subEntity); // columns2 = [
    //   {
    //     title: '部门',
    //     dataIndex: 'name',
    //     editable: true,
    //   },
    //   {
    //     title: '学生',
    //     dataIndex: 'tags',
    //     editable: true,
    //   },
    // ],
    // tableData2 = [
    //   {
    //     key: '0',
    //     name: 'Edward King 0',
    //     tags: '',
    //   },
    // ],
    // subArr.forEach((item) => {
    //   let paramsTemp=[]
    //   item.params.forEach((i, idx) => {
    //     let pa = {};
    //     pa[i.apiName] = '';
    //     // pa.value = '';
    //     paramsTemp.push(pa)
    //   });
    //   item.params = paramsTemp
    // });
    // console.log('1663',subArr)
  }, []);
  console.log('initial', initial);

  var _Form$useForm2 = _form["default"].useForm(),
      form = _Form$useForm2[0];

  var _style = style || {};

  if (color) {
    _style.backgroundColor = color;
  }

  var _otherProps = otherProps || {};

  _otherProps.style = _style; //提交

  var onFinish = function onFinish(values) {
    console.log('Success:', values);
    var formData = new FormData();
    formData.append('objectApiName', 'common_user'); // let obj = {
    //   Name: '11',
    //   createAt: '2022-01-01 01:01:01',
    //   // createBy: undefined,
    //   // deleted: undefined,
    //   // dili: undefined,
    //   // enabled: undefined,
    //   // ownerId: undefined,
    //   // updateAt: '2022-01-10',
    //   // updateBy: undefined,
    //   wenben: '11',
    //   // xuesheng: undefined,
    //   zhengshu: 11,
    // };

    for (var i in values) {
      console.log(1774, values[i]);

      if (values[i]) {
        console.log(values[i]);
        formData.append("params." + i, values[i]);
      }
    } // obj.map((value, index) => {
    //   formData.append(`params[${index}]`, value);
    // });


    console.log(1782, formTableData);

    for (var _i in formTableData) {
      console.log('1783', formTableData[_i]);

      if (formTableData[_i]) {
        formData.append("subs." + _i + ".params", formTableData[_i]); // formData.append(`subs.${i}.objectApiName`, subEntity[i].apiName);
      }
    }

    (0, _pages.addPages)(formData).then(function (res) {});
  };

  var onFinishFailed = function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  var Option = _select["default"].Option; //   const handleChange = (value: any) => {
  //   console.log('value', value);
  // };

  var onChange = function onChange(date, dateString) {
    console.log(date);
    console.log(dateString);
  };

  var onSwitchChange = function onSwitchChange(checked) {
    console.log("switch to " + checked);
  }; // radio


  var _React$useState = React.useState(1),
      value = _React$useState[0],
      setValue = _React$useState[1]; // const onINTEGERChange = (e) => {
  //   console.log('radio checked', e.target.value);
  //   setValue(e.target.value);
  // };
  //  checkbox


  var plainOptions = ['Apple', 'Pear', 'Orange'];

  var onCheckChange = function onCheckChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }; //select array


  var children = [];

  for (var i = 10; i < 36; i++) {
    children.push( /*#__PURE__*/React.createElement(Option, {
      key: i.toString(36) + i
    }, i.toString(36) + i));
  }

  var onSelectArrChange = function onSelectArrChange(value) {
    console.log("selected " + value);
  }; // select


  var handleSelectChange = function handleSelectChange(value) {
    console.log("selected " + value);
  };

  var _useState3 = (0, React.useState)([]),
      columns = _useState3[0],
      setColumns = _useState3[1];

  var _useState4 = (0, React.useState)([]),
      tableData = _useState4[0],
      setTableData = _useState4[1];

  var _useState5 = (0, React.useState)(''),
      inputName = _useState5[0],
      setInputName = _useState5[1];

  var realationClick = function realationClick(item) {
    console.log(item);
    setInputName(item.apiName); // const obj = form.getFieldsValue();
    // obj[item.apiName] = item.columnConfig.relationObjectApiName;
    // console.log('obj', obj);
    // form.setFieldsValue({ ...obj });
    // console.log(form.getFieldsValue());

    (0, _pages.metaInfo)({
      objectApiName: item.columnConfig.relationObjectApiName,
      containsColumn: true
    }).then(function (res) {
      console.log(res.data.mainObject.columnList); // let  columnsTest = res.data.columnList

      var arr = [];
      res.data.mainObject.columnList.forEach(function (item) {
        if (item.apiName == 'name' || item.apiName == 'id') {
          arr.push(item);
        }
      });
      var arr2 = [];
      arr.forEach(function (i) {
        var obj = {};
        obj.title = i.name; // obj.key = i.apiName;

        obj.dataIndex = i.apiName;
        console.log(obj);
        arr2.push(obj);
      });
      console.log(arr2);
      var columnsTest = arr2; // let columnsTest = [
      //   {
      //     title: '姓名',
      //     dataIndex: 'name',
      //     key: 'name',
      //   },
      //   {
      //     title: 'id',
      //     dataIndex: 'id',
      //     key: 'id',
      //   },
      // ];

      setColumns(columnsTest);
    }); // const [currentPage, setCurrentPage] = useState('');
    // const [pageCount, setPageCount] = useState('');
    // const [rowCount, setRowCount] = useState('');

    var data = {
      filters: [{
        metaKey: '',
        filterType: '',
        value: ''
      }],
      mainObjectApiName: 'common_user',
      pageNo: 0,
      pageSize: 5,
      queryColumns: ['id', 'name']
    };
    (0, _pages.dataTable)(data).then(function (res) {
      console.log('tableData', res.data.data);
      res.data.data.forEach(function (item) {
        item.key = item.id;
      });
      console.log('tableData2', res.data.data);
      setTableData(res.data.data); // setCurrentPage(res.data.currentPage);
      // setPageCount(res.data.pageCount);
      // setRowCount(res.data.rowCount);

      setIsModalVisible(true);
    }); // setIsModalVisible(true);
    //打开弹窗
    // setIsModalVisible(true);
  }; //弹窗传值


  var getShow = function getShow(val) {
    setIsModalVisible(val);
  }; //获取选中的用户数据


  var getUser = function getUser(val) {
    console.log('one user', val);
    var inputNameObj = {};
    inputNameObj[inputName] = val[0].name;
    form.setFieldsValue(inputNameObj);
  }; // 提交
  // const submitForm = () => {
  //   console.log('submit');
  // };
  //上传文件


  var props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text'
    },
    onChange: function onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === 'done') {
        _message2["default"].success(info.file.name + " file uploaded successfully");
      } else if (info.file.status === 'error') {
        _message2["default"].error(info.file.name + " file upload failed.");
      }
    }
  };

  var getRules = function getRules(item) {
    switch (item.columnType) {
      case 'TEXT':
        return [{
          required: true,
          message: '名称不能为空'
        } // {
        //   pattern: new RegExp(/^[0-9a-zA-Z_]{1,}$/, 'g'),
        //   message: '名称只允许包含数字、字母和下划线',
        // },
        ];

      case 'TEXTAREA':
        return [{
          required: true,
          message: '文本不能为空'
        }];

      case 'DATE':
        return [{
          required: true,
          message: '时间不能为空'
        }];

      case 'INTEGER':
        return [{
          required: true,
          message: '整数不能为空'
        }, {
          pattern: new RegExp(/^-?[1-9]\d*$/, 'g'),
          message: '请输入整数'
        }];

      case 'DECIMAL':
        return [{
          required: true,
          message: '实数不能为空'
        }, {
          pattern: new RegExp(/ ^(-?\d+)(.\d+|\d+)?$/, 'g'),
          message: '请输入实数'
        }];

      case 'DECISINGLE_CHOICE_TREEMAL':
        return [{
          required: true,
          message: '下拉单选不能为空'
        }];

      case 'MULTI_CHOICE':
        return [{
          required: true,
          message: '下拉多选不能为空'
        }];

      case 'MONEY':
        return [{
          required: true,
          message: '货币不能为空'
        }, {
          pattern: new RegExp(/(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/, 'g'),
          message: '请输入正确的货币数量'
        }];

      case 'ID_CARD':
        return [{
          required: true,
          message: '身份证不能为空'
        }, {
          pattern: new RegExp(/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/, 'g'),
          message: '请输入正确的身份证号'
        }];

      case 'PHONE':
        return [{
          required: true,
          message: '电话不能为空'
        }, {
          pattern: new RegExp(/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/, 'g'),
          message: '请输入数字'
        }];

      case 'WEBSITE':
        return [{
          required: true,
          message: '网址不能为空'
        }, {
          pattern: new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'g'),
          message: '请输入正确的网址'
        }];

      case 'EMAIL':
        return [{
          required: true,
          message: '邮箱不能为空'
        }, {
          pattern: new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+/, 'g'),
          message: '请输入正确的邮箱'
        }];

      default:
        break;
    }
  }; //弹窗


  var _useState6 = (0, React.useState)(false),
      isModalVisible = _useState6[0],
      setIsModalVisible = _useState6[1]; // const [isModalVisible, setIsModalVisible] = useState(false);
  // const showModal = () => {
  //   setIsModalVisible(true);
  // };
  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };
  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };
  //
  // const [parentCount, setParentCountt] = useState<number>(0);
  // const getChildCount = (val: number) => {
  //   setParentCountt(val);
  // };
  //传值给dialog


  var _useState7 = (0, React.useState)([]),
      setTable = _useState7[0]; //测试map按钮以后的点击


  var testMessage = function testMessage(value) {
    console.log(value);
    value.forEach(function (i) {
      switch (i.type) {
        case 0:
          break;

        case 1:
          break;
        //提示

        case 2:
          break;
        //tooltip

        case 3:
          break;

        case 4:
          break;

        case 5:
          break;

        case 6:
          break;

        default:
          break;
      }
    });
  }; //获取数据


  var getPagesListFuc = function getPagesListFuc(params) {
    console.log('api api api');
    (0, _pages.getPagesList)(params).then(function (res) {
      console.log(res);
    });
  };

  var onRadioChange = function onRadioChange() {};

  console.log('form', form); //form里面的table

  var _useState8 = (0, React.useState)([]),
      formTableData = _useState8[0],
      setFormTableData = _useState8[1];

  var components = {
    body: {
      row: EditableRow,
      cell: EditableCell
    }
  };

  var handleSave = function handleSave(row) {
    var newData = [].concat(tableData2);
    var index = newData.findIndex(function (item) {
      return row.key === item.key;
    });
    var item = newData[index];
    newData.splice(index, 1, (0, _extends2["default"])({}, item, row));
    console.log('subs', newData);
    setFormTableData(newData);
  };

  var columnsTable = function columnsTable(list) {
    var arr = list.map(function (col) {
      if (!col.editable) {
        return col;
      }

      return (0, _extends2["default"])({}, col, {
        onCell: function onCell(record) {
          return {
            record: record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: handleSave
          };
        }
      });
    });
    return arr;
  };

  var tableDataAddClick = function tableDataAddClick(item, index) {
    console.log('00000000', item, index);
    var tableObj = {};
    item.columnList.map(function (it, id) {
      tableObj[it.apiName] = '';
      tableObj.key = item.tableData2.length;
      console.log('1669', tableObj);
    });
    item.tableData2.push(tableObj);
    subEntityList[index] = item;
    console.log(subEntityList);
    setSubEntityList(JSON.parse(JSON.stringify(subEntityList)));
  }; // console.log('formTableData', columnsTable);


  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "form-padding"
  }, /*#__PURE__*/React.createElement(_form["default"], {
    style: style,
    name: "basic",
    initialValues: {
      remember: true
    },
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    autoComplete: "off",
    form: form
  }, /*#__PURE__*/React.createElement(_row["default"], {
    gutter: 24
  }, itemList && itemList.entity && itemList.entity.map(function (i, index) {
    if (i.name == 'id' || i.columnType == 'AUTO_NO') {
      return;
    }

    return /*#__PURE__*/React.createElement(_col["default"], {
      key: index,
      span: i.columnConfig.col
    }, /*#__PURE__*/React.createElement(_form["default"].Item, {
      labelCol: {
        style: {
          width: wid
        }
      },
      key: index,
      label: i.name,
      name: i.apiName,
      rules: getRules(i)
    }, i.columnType === 'TEXT' ? /*#__PURE__*/React.createElement(_input["default"], {
      maxLength: i.columnConfig.maxLength,
      placeholder: i.columnConfig.placeHolder
    }) : i.columnType === 'TEXTAREA' ? /*#__PURE__*/React.createElement(TextArea, {
      placeholder: "\u8BF7\u8F93\u5165\u6587\u672C",
      autoSize: true
    }) : i.columnType === 'DATE' ? /*#__PURE__*/React.createElement(_datePicker["default"], {
      onChange: onSwitchChange
    }) : i.columnType === 'RELATIONSHIP' ?
    /*#__PURE__*/
    // <Input
    //   disabled
    //   placeholder="Enter your username"
    //   suffix={<PlusOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
    // />
    React.createElement("div", {
      className: "realation",
      onClick: function onClick() {
        return realationClick(i);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "realation-left"
    }, form.getFieldValue(i.apiName)), /*#__PURE__*/React.createElement("div", null, "+")) : i.columnType === 'BOOL' ? /*#__PURE__*/React.createElement(_switch["default"], {
      onChange: onChange
    }) : i.columnType === 'SINGLE_CHOICE' ? /*#__PURE__*/React.createElement(_radio["default"].Group, {
      onChange: onRadioChange,
      value: value
    }, /*#__PURE__*/React.createElement(_radio["default"], {
      value: 1
    }, "A"), /*#__PURE__*/React.createElement(_radio["default"], {
      value: 2
    }, "B"), /*#__PURE__*/React.createElement(_radio["default"], {
      value: 3
    }, "C"), /*#__PURE__*/React.createElement(_radio["default"], {
      value: 4
    }, "D")) : i.columnType === 'SINGLE_CHOICE_TREE' ? /*#__PURE__*/React.createElement(_select["default"], {
      defaultValue: "",
      style: {
        width: 120
      },
      onChange: handleSelectChange
    }, /*#__PURE__*/React.createElement(Option, {
      value: "jack"
    }, "Jack"), /*#__PURE__*/React.createElement(Option, {
      value: "lucy"
    }, "Lucy"), /*#__PURE__*/React.createElement(Option, {
      value: "disabled",
      disabled: true
    }, "Disabled"), /*#__PURE__*/React.createElement(Option, {
      value: "Yiminghe"
    }, "yiminghe")) : i.columnType === 'MULTI_CHOICE' ? /*#__PURE__*/React.createElement(_checkbox["default"].Group, {
      options: plainOptions,
      defaultValue: ['Apple'],
      onChange: onCheckChange
    }) : i.columnType === 'MULTI_CHOICE_TREE' ? /*#__PURE__*/React.createElement(_select["default"], {
      mode: "multiple",
      allowClear: true,
      style: {
        width: '100%'
      },
      placeholder: "Please select",
      defaultValue: [],
      onChange: onSelectArrChange
    }, children) : i.columnType === 'INTEGER' ? /*#__PURE__*/React.createElement(_inputNumber["default"], {
      min: -99999999999,
      max: 99999999999,
      precision: 0
    }) : i.columnType === 'DECIMAL' ? /*#__PURE__*/React.createElement(_inputNumber["default"], {
      min: -99999999999,
      max: 99999999999,
      precision: 0
    }) : i.columnType === 'MONEY' ? /*#__PURE__*/React.createElement(_inputNumber["default"], {
      prefix: "\uFFE5",
      style: {
        width: '100%'
      }
    }) : i.columnType === 'PHONE' ? /*#__PURE__*/React.createElement(_input["default"], {
      maxLength: 11,
      placeholder: "\u8BF7\u586B\u5199\u63A5\u6536\u4EBA\u624B\u673A\u53F7\u7801"
    }) : i.columnType === 'ID_CARD' ? /*#__PURE__*/React.createElement(_input["default"], {
      maxLength: 18,
      placeholder: "\u8BF7\u586B\u5199\u8EAB\u4EFD\u8BC1\u53F7\u7801"
    }) : i.columnType === 'FILE' ? /*#__PURE__*/React.createElement(_upload["default"], props, /*#__PURE__*/React.createElement(_button["default"], null, "Click to Upload")) : i.columnType === 'WEBSITE' ? /*#__PURE__*/React.createElement(_input["default"], {
      placeholder: "\u8BF7\u586B\u5199\u7F51\u5740"
    }) : i.columnType === 'EMAIL' ? /*#__PURE__*/React.createElement(_input["default"], {
      placeholder: "\u8BF7\u586B\u5199\u90AE\u7BB1"
    }) : i.columnType === 'ITEM_DETAIL' ? /*#__PURE__*/React.createElement(_input["default"], {
      placeholder: "\u8BF7\u586B\u5199\u90AE\u7BB1"
    }) : null));
  }), subEntityList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(_form["default"].Item, {
      key: index,
      name: 1234,
      label: 'test table'
    }, /*#__PURE__*/React.createElement(_table["default"], {
      components: components,
      columns: columnsTable(item.columnList),
      dataSource: item.tableData2,
      pagination: false
    }), /*#__PURE__*/React.createElement(_button["default"], {
      onClick: function onClick() {
        return tableDataAddClick(item, index);
      }
    }, "\u6DFB\u52A0"));
  })), /*#__PURE__*/React.createElement(_form["default"].Item, {
    wrapperCol: {
      offset: 8,
      span: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-line"
  }, propName && propName.map(function (i, idx) {
    return (
      /*#__PURE__*/
      // <Tooltip  placement="topLeft" title={text}>
      React.createElement(_button["default"], {
        key: idx,
        onClick: i.actionList.find(function (ite) {
          return ite.name == 'onClick';
        }) !== -1 ? function () {
          return testMessage(i.actionList);
        } : function () {},
        className: "btn",
        type: "primary"
      }, i.title) // </Tooltip>

    );
  }), /*#__PURE__*/React.createElement(_button["default"], {
    className: "btn",
    type: "primary",
    htmlType: "submit"
  }, "\u63D0\u4EA4"), /*#__PURE__*/React.createElement(_button["default"], {
    className: "btn"
  }, "\u91CD\u7F6E")))), /*#__PURE__*/React.createElement(_index2["default"], {
    getShow: getShow,
    getUser: getUser,
    columns: columns,
    tableData: tableData,
    isModalVisible: isModalVisible
  })));
};

var _default = ColorfulForm;
exports["default"] = _default;