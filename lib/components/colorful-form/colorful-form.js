"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

var _popconfirm = _interopRequireDefault(require("antd/lib/popconfirm"));

var _row = _interopRequireDefault(require("antd/lib/row"));

var _table = _interopRequireDefault(require("antd/lib/table"));

var _col = _interopRequireDefault(require("antd/lib/col"));

var _modal = _interopRequireDefault(require("antd/lib/modal"));

var _timePicker = _interopRequireDefault(require("antd/lib/time-picker"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _upload = _interopRequireDefault(require("antd/lib/upload"));

var _button = _interopRequireDefault(require("antd/lib/button"));

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

var _cascader = _interopRequireDefault(require("antd/lib/cascader"));

var _radio = _interopRequireDefault(require("antd/lib/radio"));

var _switch = _interopRequireDefault(require("antd/lib/switch"));

var _datePicker = _interopRequireDefault(require("antd/lib/date-picker"));

var _form = _interopRequireDefault(require("antd/lib/form"));

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _select = _interopRequireDefault(require("antd/lib/select"));

var _input = _interopRequireDefault(require("antd/lib/input"));

var React = _interopRequireWildcard(require("react"));

require("./index.scss");

var _moment = _interopRequireDefault(require("moment"));

var _eventBus = _interopRequireDefault(require("../../utils/eventBus"));

var _icons = require("@ant-design/icons");

var _relationDialog = _interopRequireDefault(require("./relation-dialog"));

var _pages = require("../../api/pages");

var _excluded = ["index"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TextArea = _input["default"].TextArea;
var Option = _select["default"].Option; // import { createFromIconfontCN } from '@ant-design/icons';
// const IconFont = createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_3324425_berrts5o6c.js',
// });
// window._eventMap = new Map()
//   window._eventMap.set(key,value)

var EditableContext = /*#__PURE__*/React.createContext(null);

var EditableCell = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(EditableCell, _React$Component);

  function EditableCell(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      editing: false,
      value: '',
      option: [],
      relationVisible: false,
      tabelColumnsBtn: [],
      tableRealtaionData: [],
      relationDataList: {}
    }; // this.form = useContext(EditableContext)!;

    return _this;
  }

  var _proto = EditableCell.prototype;

  _proto.componentDidMount = /*#__PURE__*/function () {
    var _componentDidMount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var columnType;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              columnType = this.props.field.columnType; // console.log('EditableContext', this.context);
              // dataIndex && form.setFieldsValue({ [dataIndex]: record[dataIndex] });

              if (!(columnType === 'SINGLE_CHOICE' || columnType === 'MULTI_CHOICE' || columnType === 'SINGLE_CHOICE_TREE' || columnType === 'MULTI_CHOICE_TREE')) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return this.getSingleChoiceOpions(this.props.field, this.props.objectApiName);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function componentDidMount() {
      return _componentDidMount.apply(this, arguments);
    }

    return componentDidMount;
  }();

  _proto.componentWillReceiveProps = /*#__PURE__*/function () {
    var _componentWillReceiveProps = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(nextProps, preState) {
      var columnType;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // console.log('nextProps', nextProps)
              // new Child(nextProps).getColumn();
              // dataIndex && form.setFieldsValue({ [dataIndex]: record[dataIndex] });
              columnType = nextProps.field.columnType;

              if (!(columnType === 'SINGLE_CHOICE' || columnType === 'MULTI_CHOICE' || columnType === 'SINGLE_CHOICE_TREE' || columnType === 'MULTI_CHOICE_TREE')) {
                _context2.next = 4;
                break;
              }

              _context2.next = 4;
              return this.getSingleChoiceOpions(nextProps.field, nextProps.objectApiName);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function componentWillReceiveProps(_x, _x2) {
      return _componentWillReceiveProps.apply(this, arguments);
    }

    return componentWillReceiveProps;
  }();

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.setState = function () {
      return false;
    };
  };

  _proto.getFormDataFuc = /*#__PURE__*/function () {
    var _getFormDataFuc = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
      var res;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _pages.getFormData)(data);

            case 2:
              res = _context3.sent;
              console.log('getFormDataFuc', res);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function getFormDataFuc(_x3) {
      return _getFormDataFuc.apply(this, arguments);
    }

    return getFormDataFuc;
  }();

  _proto.getSingleChoiceOpions = /*#__PURE__*/function () {
    var _getSingleChoiceOpions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(item, objectApiName) {
      var itemList, res;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              itemList = this.props.itemList;
              _context4.next = 3;
              return (0, _pages.getOptionListOrTree)({
                objectApiName: objectApiName,
                columnApiName: item.apiName
              });

            case 3:
              res = _context4.sent;
              this.setState({
                option: res.data.options || []
              }); // let options = this.state.options;
              // options[item.apiName] = res.data.options || [];
              // this.setState({
              //   options,
              // });

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getSingleChoiceOpions(_x4, _x5) {
      return _getSingleChoiceOpions.apply(this, arguments);
    }

    return getSingleChoiceOpions;
  }();

  _proto.save = /*#__PURE__*/function () {
    var _save = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      var values;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.context.validateFields();

            case 2:
              values = _context5.sent;
              // console.log(this.props.record, values);
              this.props.handleSave((0, _extends2["default"])({}, this.props.record, values)); // toggleEdit();

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function save() {
      return _save.apply(this, arguments);
    }

    return save;
  }() //子表格的时间选择
  ;

  _proto.onSwitchTableChange =
  /*#__PURE__*/
  function () {
    var _onSwitchTableChange = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(value) {
      var values;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return this.context.validateFields();

            case 3:
              values = _context6.sent;
              // console.log(record, values);
              this.props.handleSave((0, _extends2["default"])({}, record, values)); // toggleEdit();

              _context6.next = 9;
              break;

            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](0);

            case 9:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this, [[0, 7]]);
    }));

    function onSwitchTableChange(_x6) {
      return _onSwitchTableChange.apply(this, arguments);
    }

    return onSwitchTableChange;
  }() //子表格的switchs
  ;

  _proto.onChangeTable = function onChangeTable() {// console.log('onChangeTable');
  } //子表格的单选
  ;

  _proto.onRadioTableChange = function onRadioTableChange() {// console.log('onRadioTableChange');
  } //SINGLE_CHOICE_TREE
  ;

  _proto.handleSelectTableChange = function handleSelectTableChange() {// console.log('handleSelectTableChange');
  } //MULTI_CHOICE
  ;

  _proto.onCheckTableChange = function onCheckTableChange() {// console.log('onCheckTableChange');
  } //MULTI_CHOICE_TREE'
  ;

  _proto.onSelectArrTableChange = function onSelectArrTableChange() {// console.log('onSelectArrTableChange');
  } // 按钮弹窗传值
  ;

  _proto.getShowTableClick = function getShowTableClick(val) {
    this.setState({
      relationVisible: val
    });
  };

  _proto.getTableRealtaionList = function getTableRealtaionList(val) {
    console.log('one user', val, this.context, this.props);
    var _this$state = this.state,
        tableInputName = _this$state.tableInputName,
        tableRelationItem = _this$state.tableRelationItem;
    var field = this.props.field;
    var inputNameObj = {};
    var name = tableRelationItem.columnConfig.relationObjectApiName + "0_name";
    var id = tableRelationItem.columnConfig.relationObjectApiName + "0_id"; // console.log('ddddddd', name, id);

    inputNameObj[tableInputName + "_name"] = val[0][name];
    inputNameObj[tableInputName] = val[0][id]; // console.log('88888888', inputNameObj, this.formRef.current);

    this.context.setFieldsValue(inputNameObj);
    var relationDataList = this.state.relationDataList;
    relationDataList[tableRelationItem.columnConfig.relationObjectApiName] = val[0];
    console.log('relationDataList', relationDataList);
    this.setState({
      relationDataList: JSON.parse(JSON.stringify(relationDataList))
    });
    this.save(); // subEntityList[tableIndex].tableData2[tableLineIndex] = {
    //   ...subEntityList[tableIndex].tableData2[tableLineIndex],
    //   ...inputNameObj,
    // };
    // console.log('subEntityList', subEntityList);
    // this.setState({
    //   subEntityList: JSON.parse(JSON.stringify(subEntityList)),
    // });
  };

  _proto.relationClick = /*#__PURE__*/function () {
    var _relationClick = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(item) {
      var _item$relationList, _item$relationList2;

      var column, queryColumns, data, res, list;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              console.log('21231', item);

              if (item.relationList) {
                _context7.next = 4;
                break;
              }

              _message2["default"].warning('请先配置关联对象表格选项');

              return _context7.abrupt("return");

            case 4:
              column = [];
              (_item$relationList = item.relationList) === null || _item$relationList === void 0 ? void 0 : _item$relationList.forEach(function (i) {
                var obj = {};
                obj.title = i.name;
                obj.key = i.apiName;
                obj.dataIndex = item.columnConfig.relationObjectApiName + "0_" + i.apiName;
                obj.width = 100;
                column.push(obj);
              });
              this.setState({
                tabelColumnsBtn: column
              });
              queryColumns = [];
              (_item$relationList2 = item.relationList) === null || _item$relationList2 === void 0 ? void 0 : _item$relationList2.forEach(function (i) {
                var obj = {
                  objectApiName: item.columnConfig.relationObjectApiName,
                  columnApiName: i.apiName,
                  joinColumnApiName: i.joinColumnApiName,
                  entityId: i.entityId,
                  format: i.format
                };
                queryColumns.push(obj);
              });
              data = {
                // filters: [
                //   {
                //     metaKey: '',
                //     filterType: '',
                //     value: '',
                //   },
                // ],
                mainObjectApiName: item.columnConfig.relationObjectApiName,
                pageNo: 0,
                pageSize: 10,
                queryColumns: queryColumns
              };
              _context7.next = 12;
              return (0, _pages.dataTable)(data);

            case 12:
              res = _context7.sent;
              list = res.data.data;
              list.forEach(function (e) {
                var id = item.columnConfig.relationObjectApiName + "0_id";
                e.key = e[id];
              });
              this.setState({
                relationVisible: true,
                tableRealtaionData: list,
                tableInputName: item.apiName,
                tableRelationItem: item // tableIndex: index,
                // tableLineIndex: record.key,

              });

            case 16:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function relationClick(_x7) {
      return _relationClick.apply(this, arguments);
    }

    return relationClick;
  }();

  _proto.render = function render() {
    var _this2 = this,
        _this$context;

    var _this$props = this.props,
        children = _this$props.children,
        dataIndex = _this$props.dataIndex,
        columnType = _this$props.columnType,
        field = _this$props.field,
        record = _this$props.record;
    var _this$state2 = this.state,
        value = _this$state2.value,
        option = _this$state2.option,
        relationVisible = _this$state2.relationVisible,
        tabelColumnsBtn = _this$state2.tabelColumnsBtn,
        tableRealtaionData = _this$state2.tableRealtaionData,
        relationDataList = _this$state2.relationDataList; // console.log('record', record)

    var childNode = children; // if (editable) {
    // childNode = editing ? (
    //子表格区别

    switch (columnType) {
      case 'TEXT':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0,
            width: 100
          },
          name: dataIndex,
          rules: []
        }, /*#__PURE__*/React.createElement(_input["default"], {
          onPressEnter: function onPressEnter() {
            return _this2.save();
          },
          onBlur: function onBlur() {
            return _this2.save();
          }
        }));
        break;

      case 'TEXTAREA':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        }, /*#__PURE__*/React.createElement(TextArea, {
          placeholder: "\u8BF7\u8F93\u5165\u6587\u672C",
          autoSize: true,
          onBlur: function onBlur() {
            return _this2.save();
          }
        }));
        break;

      case 'DATE':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0,
            width: 200
          },
          name: dataIndex,
          rules: []
        }, /*#__PURE__*/React.createElement(_datePicker["default"], {
          onChange: function onChange() {
            return _this2.save();
          }
        }));
        break;

      case 'RELATIONSHIP':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        }, /*#__PURE__*/React.createElement("div", {
          className: "relation",
          onClick: function onClick() {
            return _this2.relationClick(field, record.key);
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "relation-left"
        }, (_this$context = this.context) === null || _this$context === void 0 ? void 0 : _this$context.getFieldValue(dataIndex + "_name")), /*#__PURE__*/React.createElement("div", null, "+")), /*#__PURE__*/React.createElement(_relationDialog["default"], {
          getShowClick: function getShowClick() {
            return _this2.getShowTableClick();
          },
          getUser: function getUser(val) {
            return _this2.getTableRealtaionList(val);
          },
          columns: tabelColumnsBtn,
          tableData: tableRealtaionData,
          isModalVisible: relationVisible
        }));
        break;

      case 'QUOTE':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        }, /*#__PURE__*/React.createElement("div", null, relationDataList[field.columnConfig.quoteObjectApiName] && relationDataList[field.columnConfig.quoteObjectApiName][field.columnConfig.quoteObjectApiName + "0_" + field.columnConfig.quoteColumnApiName]));
        break;

      case 'BOOL':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        }, /*#__PURE__*/React.createElement(_switch["default"], {
          onChange: function onChange() {
            return _this2.save();
          }
        }));
        break;

      case 'SINGLE_CHOICE':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        }, field.columnConfig.singleChoiceType === 'DROP_LIST' ? /*#__PURE__*/React.createElement(_select["default"], {
          defaultValue: "",
          style: {
            minWidth: 200
          }
        }, option && option.map(function (item, index) {
          return /*#__PURE__*/React.createElement(Option, {
            value: item.apiName,
            key: index
          }, item.name);
        })) : /*#__PURE__*/React.createElement(_radio["default"].Group, null, option && option.map(function (item, index) {
          return /*#__PURE__*/React.createElement(_radio["default"], {
            value: item.apiName,
            key: index
          }, item.name);
        })));
        break;

      case 'SINGLE_CHOICE_TREE':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        }, /*#__PURE__*/React.createElement(_cascader["default"], {
          style: {
            minWidth: 200
          },
          options: option || [],
          placeholder: "Please select",
          fieldNames: {
            label: 'name',
            value: 'apiName'
          }
        }));
        break;

      case 'MULTI_CHOICE':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        }, field.columnConfig.multiChoiceType === 'DROP_LIST' ? /*#__PURE__*/React.createElement(_select["default"], {
          mode: "multiple",
          allowClear: true,
          style: {
            minWidth: 200,
            maxWidth: 300
          }
        }, option && option.map(function (item, index) {
          return /*#__PURE__*/React.createElement(Option, {
            value: item.apiName,
            key: index
          }, item.name);
        })) : /*#__PURE__*/React.createElement(_checkbox["default"].Group, null, option && option.map(function (field, index) {
          return /*#__PURE__*/React.createElement(_checkbox["default"], {
            value: field.apiName
          }, field.name);
        })));
        break;

      case 'MULTI_CHOICE_TREE':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        }, /*#__PURE__*/React.createElement(_cascader["default"], {
          style: {
            minWidth: 200
          },
          multiple: true,
          options: option || [],
          placeholder: "Please select",
          fieldNames: {
            label: 'name',
            value: 'apiName'
          }
        }));
        break;

      case 'INTEGER':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        }, /*#__PURE__*/React.createElement(_inputNumber["default"], {
          onBlur: function onBlur() {
            return _this2.save();
          },
          precision: 0
        }));
        break;

      case 'DECIMAL':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        }, /*#__PURE__*/React.createElement(_inputNumber["default"], {
          onBlur: function onBlur() {
            return _this2.save();
          },
          precision: 0
        }));
        break;

      case 'MONEY':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        }, /*#__PURE__*/React.createElement(_inputNumber["default"], {
          onBlur: function onBlur() {
            return _this2.save();
          },
          prefix: "\uFFE5",
          style: {
            width: '100%'
          }
        }));
        break;

      case 'PHONE':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        }, /*#__PURE__*/React.createElement(_input["default"], {
          onBlur: function onBlur() {
            return _this2.save();
          },
          maxLength: 11,
          placeholder: "\u8BF7\u586B\u5199" + dataIndex
        }));
        break;

      case 'ID_CARD':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        }, /*#__PURE__*/React.createElement(_input["default"], {
          onBlur: function onBlur() {
            return _this2.save();
          },
          maxLength: 18,
          placeholder: "\u8BF7\u586B\u5199" + dataIndex
        }));
        break;

      case 'FILE':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        }, /*#__PURE__*/React.createElement(_upload["default"], this.props, /*#__PURE__*/React.createElement(_button["default"], null, "\u4E0A\u4F20\u6587\u4EF6")));
        break;

      case 'WEBSITE':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        }, /*#__PURE__*/React.createElement(_input["default"], {
          onBlur: function onBlur() {
            return _this2.save();
          },
          placeholder: "\u8BF7\u586B\u5199" + dataIndex
        }));
        break;

      case 'EMAIL':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        }, /*#__PURE__*/React.createElement(_input["default"], {
          onBlur: function onBlur() {
            return _this2.save();
          },
          placeholder: "\u8BF7\u586B\u5199" + dataIndex
        }));
        break;

      case 'ITEM_DETAIL':
        childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
          style: {
            margin: 0
          },
          name: dataIndex,
          rules: []
        });
        break;

      default:
        break;
    }

    return /*#__PURE__*/React.createElement("td", null, childNode);
  };

  return EditableCell;
}(React.Component);

EditableCell.contextType = EditableContext;

var EditableRow = function EditableRow(_ref) {
  var index = _ref.index,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

  var _Form$useForm = _form["default"].useForm(),
      form = _Form$useForm[0];

  var resetForm = function resetForm() {
    form.resetFields();
  };

  return /*#__PURE__*/React.createElement(_form["default"], {
    form: form,
    component: false
  }, /*#__PURE__*/React.createElement(EditableContext.Provider, {
    value: form
  }, /*#__PURE__*/React.createElement("tr", props)));
};

var getBase64 = function getBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
};

var ColorfulForm = /*#__PURE__*/function (_React$Component2) {
  (0, _inheritsLoose2["default"])(ColorfulForm, _React$Component2);

  function ColorfulForm(props) {
    var _this3;

    _this3 = _React$Component2.call(this, props) || this;
    _this3.formRef = /*#__PURE__*/React.createRef();
    _this3.state = {
      subEntityList: [],
      radioValue: 1,
      columns: [],
      tableData: [],
      columnsBtn: [],
      tableDataBtn: [],
      inputName: '',
      formTableData: [],
      isClickVisible: false,
      relationItem: {},
      fileList: [],
      previewOpen: false,
      previewImage: '',
      singleChoiceOpions: [],
      filesList: {},
      imgFileList: {},
      options: {},
      relationDataList: {},
      isTableVisible: false
    }; // this.formRef = React.createRef();

    return _this3;
  }

  var _proto2 = ColorfulForm.prototype;

  _proto2.componentDidMount = function componentDidMount() {
    var subEntity = this.props.subEntity;
    var colTotal = [];
    subEntity.forEach(function (i, ind) {
      var arr = i.columnList.filter(function (item, idx) {
        return item.apiName !== 'id';
      }); // const arr = i.columnList

      i.objectApiName = i.apiName;
      var col = [];
      var tableObj = {};
      arr.forEach(function (item, index) {
        item.title = item.name;
        item.editable = true;
        item.dataIndex = item.apiName;
        tableObj[item.apiName] = '';
        tableObj.key = 0;
        tableObj.tableIndex = ind;
      }); // console.log('1654', arr);

      i.columnList = arr;
      i.tableData2 = [tableObj];
      return i;
    });
    this.setState({
      subEntityList: subEntity,
      defaultSubEntity: subEntity
    });
  };

  _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps, preState) {
    var _itemList$entity,
        _this4 = this;

    var subEntity = nextProps.subEntity,
        itemList = nextProps.itemList;
    (_itemList$entity = itemList.entity) === null || _itemList$entity === void 0 ? void 0 : _itemList$entity.map(function (item, index) {
      if (item.columnType === 'SINGLE_CHOICE' || item.columnType === 'MULTI_CHOICE' || item.columnType === 'SINGLE_CHOICE_TREE' || item.columnType === 'MULTI_CHOICE_TREE') {
        _this4.getSingleChoiceOpions(item);
      }
    });
    subEntity.forEach(function (i, ind) {
      var arr = i.columnList.filter(function (item, idx) {
        return item.apiName !== 'id';
      }); // const arr = i.columnList

      i.objectApiName = i.apiName;
      var col = [];
      var tableObj = {};
      arr.forEach(function (item, index) {
        item.title = item.name;
        item.editable = true;
        item.dataIndex = item.apiName;
        tableObj[item.apiName] = '';
        tableObj.key = 0;
        tableObj.tableIndex = ind;
      }); // console.log('1654', arr);

      i.columnList = arr;
      i.tableData2 = [tableObj]; // this[`table${ind}Ref`] = React.createRef()

      return i;
    });
    this.setState({
      subEntityList: subEntity,
      defaultSubEntity: subEntity
    });
  } // console.log('initial', initial);
  // const _style = style || {};
  // if (color) {
  //   _style.backgroundColor = color;
  // }
  // const _otherProps = otherProps || {};
  // _otherProps.style = _style;
  //提交
  ;

  _proto2.onFinish = function onFinish() {
    var _this$formRef$current, _this$formRef$current2;

    console.log('Success:', (_this$formRef$current = this.formRef.current) === null || _this$formRef$current === void 0 ? void 0 : _this$formRef$current.getFieldsValue());
    var values = (_this$formRef$current2 = this.formRef.current) === null || _this$formRef$current2 === void 0 ? void 0 : _this$formRef$current2.getFieldsValue();
    var itemList = this.props.itemList;
    var _this$state3 = this.state,
        subEntityList = _this$state3.subEntityList,
        imgFileList = _this$state3.imgFileList,
        filesList = _this$state3.filesList;
    var formData = new FormData();
    formData.append('objectApiName', itemList.entityName.apiName); // console.log(itemList.entity);

    var dateResult = itemList.entity.filter(function (item) {
      return item.columnType === 'DATE';
    });
    var timeResult = itemList.entity.filter(function (item) {
      return item.columnType === 'TIME';
    }); // const imageResult = itemList.entity.filter((item) => {
    //   return item.columnType === 'IMAGE';
    // });
    // console.log('result', result);

    var _loop = function _loop(i) {
      console.log(1774, i);

      if (values[i]) {
        // console.log(values[i]);
        // imageResult.forEach((element) => {
        //   if (element.apiName == i) {
        //     return;
        //     // console.log('33333333', values[i]);
        //     // values[i]
        //   }
        // });
        dateResult.forEach(function (element) {
          if (element.apiName == i) {
            // console.log('33333333', values[i]);
            values[i] = (0, _moment["default"])(values[i]).format('YYYY-MM-DD HH:mm:ss');
          }
        });
        timeResult.forEach(function (element) {
          if (element.apiName == i) {
            // console.log('33333333', values[i]);
            values[i] = (0, _moment["default"])(values[i]).format('HH:mm:ss');
          }
        }); // if()

        formData.append("params." + i, values[i]);
        imgFileList[i] && imgFileList[i].map(function (item, index) {
          console.log('imgFileList', item); // formData.append(`params.${i}`, undefined);

          formData["delete"]("params." + i);
          formData.append("params." + i + "[" + index + "]", item.originFileObj);
        });
        filesList[i] && filesList[i].map(function (item, index) {
          console.log('filesList', item); // formData.append(`params.${i}`, undefined);

          formData["delete"]("params." + i);
          formData.append("params." + i + "[" + index + "]", item.originFileObj);
        });
      }
    };

    for (var i in values) {
      _loop(i);
    } // console.log(1782, subEntityList);


    for (var _i in subEntityList) {
      // console.log('1783', subEntityList[i]);
      var result2 = subEntityList[_i].columnList.filter(function (i) {
        return i.columnType === 'DATE';
      });

      if (subEntityList[_i]) {
        var arr = subEntityList[_i].tableData2; //如果子表没有数据，这里就判断一下
        // console.log(1367, arr);

        if (arr.length != 0) {
          formData.append("subs[" + _i + "].objectApiName", subEntityList[_i].apiName);
        }

        var _loop2 = function _loop2(r) {
          var obj = subEntityList[_i].tableData2[r]; // console.log('obj', obj);

          var _loop3 = function _loop3(t) {
            if (t != 'key' && t != 'tableIndex' && obj[t]) {
              result2.forEach(function (it) {
                if (it.apiName == t) {
                  obj[t] = (0, _moment["default"])(obj[t]).format('YYYY-MM-DD HH:mm:ss');
                }
              });
              formData.append("subs[" + _i + "].params[" + r + "]." + t, obj[t]); // console.log(t, subEntityList[i].tableData2[r][t]);
            }
          };

          for (var t in obj) {
            _loop3(t);
          }
        };

        for (var r in arr) {
          _loop2(r);
        }
      }
    }

    (0, _pages.addPages)(formData).then(function (res) {});
  };

  _proto2.onFinishFailed = function onFinishFailed(errorInfo) {// console.log('Failed:', errorInfo);
  };

  _proto2.onChange = function onChange(date, dateString) {// console.log(date);
    // console.log(dateString);
  };

  _proto2.onSwitchChange = function onSwitchChange(value, apiName) {} //  checkbox
  ;

  _proto2.onCheckChange = function onCheckChange(checkedValues) {// console.log('checked = ', checkedValues);
  } //select array
  ;

  _proto2.onSelectArrChange = function onSelectArrChange(value) {// console.log(`selected ${value}`);
  } // select
  ;

  _proto2.handleSelectChange = function handleSelectChange(value) {// console.log(`selected ${value}`);
  };

  _proto2.relationClick = /*#__PURE__*/function () {
    var _relationClick2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(item) {
      var _item$relationList3, _item$relationList4;

      var column, queryColumns, data, res, list;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (item.relationList) {
                _context8.next = 3;
                break;
              }

              _message2["default"].warning('请先配置关联对象表格选项');

              return _context8.abrupt("return");

            case 3:
              column = [];
              (_item$relationList3 = item.relationList) === null || _item$relationList3 === void 0 ? void 0 : _item$relationList3.forEach(function (i) {
                var obj = {};
                obj.title = i.name;
                obj.key = i.apiName;
                obj.dataIndex = item.columnConfig.relationObjectApiName + "0_" + i.apiName;
                obj.width = 100;
                column.push(obj);
              });
              this.setState({
                columnsBtn: column
              });
              queryColumns = [];
              (_item$relationList4 = item.relationList) === null || _item$relationList4 === void 0 ? void 0 : _item$relationList4.forEach(function (i) {
                var obj = {
                  objectApiName: item.columnConfig.relationObjectApiName,
                  columnApiName: i.apiName,
                  joinColumnApiName: i.joinColumnApiName,
                  entityId: i.entityId,
                  format: i.format
                };
                queryColumns.push(obj);
              });
              data = {
                // filters: [
                //   {
                //     metaKey: '',
                //     filterType: '',
                //     value: '',
                //   },
                // ],
                mainObjectApiName: item.columnConfig.relationObjectApiName,
                pageNo: 0,
                pageSize: 10,
                queryColumns: queryColumns
              };
              _context8.next = 11;
              return (0, _pages.dataTable)(data);

            case 11:
              res = _context8.sent;
              list = res.data.data;
              list.forEach(function (e) {
                var id = item.columnConfig.relationObjectApiName + "0_id";
                e.key = e[id];
              });
              this.setState({
                isClickVisible: true,
                tableDataBtn: list,
                inputName: item.apiName,
                relationItem: item
              }); //打开弹窗

            case 15:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function relationClick(_x8) {
      return _relationClick2.apply(this, arguments);
    }

    return relationClick;
  }() //获取选中的用户数据
  ;

  _proto2.getUser = function getUser(val) {
    console.log('one user', val);
    var _this$state4 = this.state,
        inputName = _this$state4.inputName,
        relationItem = _this$state4.relationItem;
    var inputNameObj = {}; // let id = `${item.columnConfig.relationObjectApiName}0_id`;

    var name = relationItem.columnConfig.relationObjectApiName + "0_name";
    var id = relationItem.columnConfig.relationObjectApiName + "0_id";
    inputNameObj[inputName + "_name"] = val[0][name];
    inputNameObj[inputName] = val[0][id];
    console.log('88888888', inputNameObj, this.formRef.current);
    this.formRef.current.setFieldsValue(inputNameObj);
    var relationDataList = this.state.relationDataList;
    relationDataList[relationItem.columnConfig.relationObjectApiName] = val[0];
    console.log('relationDataList', relationDataList);
    this.setState({
      relationDataList: JSON.parse(JSON.stringify(relationDataList))
    });
  };

  _proto2.getRules = function getRules(item) {
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
        } // {
        //   pattern: new RegExp(/ ^(-?\d+)(.\d+|\d+)?$/, 'g'),
        //   message: '请输入实数',
        // },
        ];

      case 'SINGLE_CHOICE':
        return [{
          required: true,
          message: '下拉单选不能为空'
        }];

      case 'MULTI_CHOICE':
        return [{
          required: true,
          message: '下拉多选不能为空'
        }];

      case 'SINGLE_CHOICE_TREE':
        return [{
          required: true,
          message: '下拉单选树不能为空'
        }];

      case 'MULTI_CHOICE_TREE':
        return [{
          required: true,
          message: '下拉多选树不能为空'
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
          pattern: new RegExp(/^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i, // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'g'),
          message: '请输入正确的网址'
        }];

      case 'EMAIL':
        return [{
          required: true,
          message: '邮箱不能为空'
        }, {
          pattern: new RegExp(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/, 'g'),
          message: '请输入正确的邮箱'
        }];

      default:
        break;
    }
  } //获取数据
  ;

  _proto2.getPagesListFuc = function getPagesListFuc(params) {
    // console.log('api api api');
    (0, _pages.getPagesList)(params).then(function (res) {// console.log(res);
    });
  };

  _proto2.onRadioChange = function onRadioChange() {};

  _proto2.onTimeChange = function onTimeChange(time, timeString, apiName) {
    var inputNameObj = {};
    inputNameObj[apiName] = timeString;
    this.formRef.current.setFieldsValue(inputNameObj);
  } // console.log('form', form);
  //form里面的table
  ;

  _proto2.handleSave = function handleSave(row) {
    var subEntityList = this.state.subEntityList;
    console.log('row', row); // const newData = [...tableData2];
    // const index = newData.findIndex((item) => row.key === item.key);
    // const item = newData[index];
    // newData.splice(index, 1, {
    //   ...item,
    //   ...row,
    // });
    // console.log('subs', row);

    subEntityList[row.tableIndex].tableData2[row.key] = row; // // console.log('subEntityList', subEntityList);

    this.setState({
      subEntityList: JSON.parse(JSON.stringify(subEntityList))
    }); // setSubEntityList(subEntity);
  };

  _proto2.tableRelationClick = /*#__PURE__*/function () {
    var _tableRelationClick = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(item, record, index) {
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    function tableRelationClick(_x9, _x10, _x11) {
      return _tableRelationClick.apply(this, arguments);
    }

    return tableRelationClick;
  }();

  _proto2.columnsTable = function columnsTable(list, index, objectApiName) {
    var _this5 = this;

    var arr = list.map(function (col) {
      if (!col.editable) {
        return col;
      }

      return (0, _extends2["default"])({}, col, {
        // width: "200px",
        textWrap: 'word-break',
        onCell: function onCell(record) {
          return {
            record: record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: function handleSave(row) {
              return _this5.handleSave(row);
            },
            columnType: col.columnType,
            field: col,
            objectApiName: objectApiName,
            relationClick: function relationClick(i) {
              return _this5.tableRelationClick(i, record, index);
            }
          };
        }
      });
    });
    return arr;
  } //  添加一行子表格
  ;

  _proto2.tableDataAddClick = function tableDataAddClick(item, index) {
    // console.log('00000000', item, index);
    var subEntityList = this.state.subEntityList;
    var tableObj = {};
    item.columnList.map(function (it, id) {
      tableObj[it.apiName] = '';
      tableObj.key = item.tableData2.length;
      tableObj.tableIndex = index; // console.log('1669', tableObj);
    });
    item.tableData2.push(tableObj);
    subEntityList[index] = item; // console.log(subEntityList);

    this.setState({
      subEntityList: JSON.parse(JSON.stringify(subEntityList))
    });
  } //气泡确认框的操作
  ;

  _proto2.confirmProp = function confirmProp() {
    _message2["default"].success('提交成功');
  };

  _proto2.cancelProp = function cancelProp() {
    _message2["default"].error('取消提交');
  } // 按钮弹窗传值
  ;

  _proto2.getShowClick = function getShowClick(val) {
    this.setState({
      isClickVisible: val
    });
  } // 获取引用类型数据name
  ;

  _proto2.getQuoteName =
  /*#__PURE__*/
  function () {
    var _getQuoteName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(item) {
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", 'w3333');

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    function getQuoteName(_x12) {
      return _getQuoteName.apply(this, arguments);
    }

    return getQuoteName;
  }();

  _proto2.getSingleChoiceOpions = /*#__PURE__*/function () {
    var _getSingleChoiceOpions2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(item) {
      var itemList, res, options;
      return _regenerator["default"].wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              itemList = this.props.itemList;
              _context11.next = 3;
              return (0, _pages.getOptionListOrTree)({
                objectApiName: itemList.entityName.apiName,
                columnApiName: item.apiName
              });

            case 3:
              res = _context11.sent;
              options = this.state.options;
              options[item.apiName] = res.data.options || [];
              this.setState({
                options: options
              });

            case 7:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function getSingleChoiceOpions(_x13) {
      return _getSingleChoiceOpions2.apply(this, arguments);
    }

    return getSingleChoiceOpions;
  }();

  _proto2.handleFilesChange = function handleFilesChange(file, fileList, item) {
    fileList.map(function (item) {
      item.status = 'done';
    });
    var filesList = this.state.filesList;
    filesList[item.apiName] = fileList;
    this.setState({
      filesList: filesList
    });
  };

  _proto2.handleImageChange = function handleImageChange(file, fileList, item) {
    fileList.map(function (item) {
      item.status = 'done';
    });
    var imgFileList = this.state.imgFileList;
    imgFileList[item.apiName] = fileList;
    this.setState({
      imgFileList: imgFileList
    });
  };

  _proto2.handlePreview = /*#__PURE__*/function () {
    var _handlePreview = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(file) {
      return _regenerator["default"].wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              if (!(!file.url && !file.preview)) {
                _context12.next = 4;
                break;
              }

              _context12.next = 3;
              return getBase64(file.originFileObj);

            case 3:
              file.preview = _context12.sent;

            case 4:
              this.setState({
                previewImage: file.url || file.preview,
                previewOpen: true
              }); // setPreviewImage(file.url || (file.preview as string));
              // setPreviewOpen(true);
              // setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));

            case 5:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function handlePreview(_x14) {
      return _handlePreview.apply(this, arguments);
    }

    return handlePreview;
  }();

  _proto2.imgPreviewCancel = function imgPreviewCancel() {
    this.setState({
      previewOpen: false,
      previewImage: ''
    });
  } //操作按钮
  ;

  _proto2.btnLineClick =
  /*#__PURE__*/
  function () {
    var _btnLineClick = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(value) {
      var _this6 = this;

      var info, type, id;
      return _regenerator["default"].wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              console.log('点击了新增', value);
              info = value[0];
              type = info.type;
              _context14.t0 = type;
              _context14.next = _context14.t0 === 0 ? 6 : _context14.t0 === 1 ? 13 : _context14.t0 === 2 ? 15 : _context14.t0 === 4 ? 17 : _context14.t0 === 5 ? 20 : 22;
              break;

            case 6:
              if (!(info.btnType === 0)) {
                _context14.next = 11;
                break;
              }

              _context14.next = 9;
              return this.onFinish();

            case 9:
              _context14.next = 12;
              break;

            case 11:
              if (info.btnType === 1) {// await this.enableDataBatch(true);
              } else if (info.btnType === 2) {// await this.enableDataBatch(false);
              }

            case 12:
              return _context14.abrupt("break", 23);

            case 13:
              _eventBus["default"].emit(info.actionDialogId, {
                show: true
              });

              return _context14.abrupt("break", 23);

            case 15:
              this.getMessageFuc(info.triggeredType, info.triggeredContent);
              return _context14.abrupt("break", 23);

            case 17:
              id = info.actionPage[info.actionPage.length - 1];
              window.location = "www.test.com?id=" + id;
              return _context14.abrupt("break", 23);

            case 20:
              // info.actionJSNamezheng
              info.actionJSValue();
              return _context14.abrupt("break", 23);

            case 22:
              return _context14.abrupt("break", 23);

            case 23:
              // this.nextActionFuc();a
              if (info.nextActionList) {
                info.nextActionList.map( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(item) {
                    return _regenerator["default"].wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            console.log('await nextActionFuc');
                            _context13.next = 3;
                            return _this6.btnLineClick([item]);

                          case 3:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  }));

                  return function (_x16) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              }

            case 24:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function btnLineClick(_x15) {
      return _btnLineClick.apply(this, arguments);
    }

    return btnLineClick;
  }();

  _proto2.getMessageFuc = function getMessageFuc(type, text) {
    switch (type) {
      case 0:
        _message2["default"].info(text);

        break;

      case 1:
        _message2["default"].success(text);

        break;

      case 2:
        _message2["default"].error(text);

        break;

      case 3:
        _message2["default"].warning(text);

        break;

      case 4:
        _message2["default"].loading(text);

        break;

      case 5:
        _message2["default"].warn(text);

        break;

      case 6:
        _message2["default"].open(text);

        break;

      default:
        break;
    }
  };

  _proto2.resetClick = function resetClick() {
    var _this$formRef$current3,
        _this7 = this;

    (_this$formRef$current3 = this.formRef.current) === null || _this$formRef$current3 === void 0 ? void 0 : _this$formRef$current3.resetFields();
    var defaultSubEntity = this.state.defaultSubEntity;
    this.setState({
      subEntityList: []
    });
    setTimeout(function () {
      _this7.setState({
        subEntityList: defaultSubEntity
      });
    }, 1); // console.log('EditableRow', EditableRow.form)
    // subEntityList.map((item, index) => {
    //   console.log(this[`table${index}Ref`])
    // })
  };

  _proto2.render = function render() {
    var _this8 = this;

    var _this$state5 = this.state,
        radioValue = _this$state5.radioValue,
        tableDataBtn = _this$state5.tableDataBtn,
        isClickVisible = _this$state5.isClickVisible,
        columnsBtn = _this$state5.columnsBtn,
        fileList = _this$state5.fileList,
        previewOpen = _this$state5.previewOpen,
        previewImage = _this$state5.previewImage,
        singleChoiceOpions = _this$state5.singleChoiceOpions,
        subEntityList = _this$state5.subEntityList,
        imgFileList = _this$state5.imgFileList,
        options = _this$state5.options,
        relationDataList = _this$state5.relationDataList,
        filesList = _this$state5.filesList,
        tabelColumnsBtn = _this$state5.tabelColumnsBtn,
        tableRealtaionData = _this$state5.tableRealtaionData,
        isTableVisible = _this$state5.isTableVisible;
    var _this$props2 = this.props,
        itemList = _this$props2.itemList,
        style = _this$props2.style,
        wid = _this$props2.wid,
        actionBtnList = _this$props2.actionBtnList,
        layout = _this$props2.layout;
    var children = [];

    for (var i = 10; i < 36; i++) {
      children.push( /*#__PURE__*/React.createElement(Option, {
        key: i.toString(36) + i
      }, i.toString(36) + i));
    }

    var components = {
      body: {
        row: EditableRow,
        cell: EditableCell
      }
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "form-padding"
    }, /*#__PURE__*/React.createElement(_form["default"], {
      ref: this.formRef,
      style: style,
      name: "basic",
      initialValues: {
        remember: true
      },
      onFinish: function onFinish(values) {
        return _this8.onFinish(values);
      },
      onFinishFailed: function onFinishFailed() {
        return _this8.onFinishFailed();
      },
      autoComplete: "off" // form={form}

    }, /*#__PURE__*/React.createElement(_row["default"], {
      gutter: 24
    }, itemList && itemList.entity && itemList.entity.map(function (i, index) {
      var _this8$formRef$curren;

      if (i.columnType == 'ID' || i.columnType == 'AUTO_NO') {
        return;
      }

      var text = _this8.getQuoteName(i); // i.columnType === 'SINGLE_CHOICE' && this.getSingleChoiceOpions(i);
      // let list = [];
      // if (i.columnType === 'SINGLE_CHOICE') {
      //   list = this.getSingleChoiceOpions(i);
      // }
      // console.log('ppppppppp', text, list);


      return /*#__PURE__*/React.createElement(_col["default"], {
        key: index,
        span: layout ? layout : undefined
      }, /*#__PURE__*/React.createElement(_form["default"].Item, {
        labelCol: {
          style: {
            width: wid
          }
        },
        key: index,
        label: i.name,
        name: i.apiName,
        rules: i.columnConfig.required && _this8.getRules(i)
      }, i.columnType === 'TEXT' ? /*#__PURE__*/React.createElement(_input["default"], {
        maxLength: i.columnConfig.maxLength,
        placeholder: i.columnConfig.placeHolder
      }) : i.columnType === 'TEXTAREA' ? /*#__PURE__*/React.createElement(TextArea, {
        placeholder: "\u8BF7\u8F93\u5165\u6587\u672C",
        autoSize: true
      }) : i.columnType === 'DATE' ? /*#__PURE__*/React.createElement(_datePicker["default"], {
        style: {
          width: '100%'
        },
        onChange: function onChange(value) {
          return _this8.onSwitchChange(value, i.apiName);
        }
      }) : i.columnType === 'RELATIONSHIP' ?
      /*#__PURE__*/
      // <Input
      //   disabled
      //   placeholder="Enter your username"
      //   suffix={<PlusOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
      // />
      React.createElement("div", {
        className: "relation",
        onClick: function onClick() {
          return _this8.relationClick(i);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "relation-left"
      }, (_this8$formRef$curren = _this8.formRef.current) === null || _this8$formRef$curren === void 0 ? void 0 : _this8$formRef$curren.getFieldValue(i.apiName + "_name")), /*#__PURE__*/React.createElement("div", null, "+")) : i.columnType === 'BOOL' ? /*#__PURE__*/React.createElement(_switch["default"], {
        onChange: function onChange() {
          return _this8.onChange();
        }
      }) : i.columnType === 'SINGLE_CHOICE' ? i.columnConfig.singleChoiceType === 'DROP_LIST' ? /*#__PURE__*/React.createElement(_select["default"], {
        defaultValue: "",
        style: {
          width: '100%'
        },
        onChange: function onChange() {
          return _this8.handleSelectChange();
        }
      }, options[i.apiName] && options[i.apiName].map(function (item, index) {
        return /*#__PURE__*/React.createElement(Option, {
          value: item.apiName,
          key: index
        }, item.name);
      })) : /*#__PURE__*/React.createElement(_radio["default"].Group, null, options[i.apiName] && options[i.apiName].map(function (item, index) {
        return /*#__PURE__*/React.createElement(_radio["default"], {
          value: item.apiName,
          key: index
        }, item.name);
      })) : i.columnType === 'SINGLE_CHOICE_TREE' ? /*#__PURE__*/React.createElement(_cascader["default"], {
        options: options[i.apiName] || [],
        placeholder: "Please select",
        fieldNames: {
          label: 'name',
          value: 'apiName'
        }
      }) : i.columnType === 'MULTI_CHOICE' ? i.columnConfig.multiChoiceType === 'DROP_LIST' ? /*#__PURE__*/React.createElement(_select["default"], {
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
      })) : /*#__PURE__*/React.createElement(_checkbox["default"].Group, null, options[i.apiName] && options[i.apiName].map(function (field, index) {
        return /*#__PURE__*/React.createElement(_checkbox["default"], {
          value: field.apiName
        }, field.name);
      })) : i.columnType === 'MULTI_CHOICE_TREE' ? /*#__PURE__*/React.createElement(_cascader["default"], {
        multiple: true,
        options: options[i.apiName] || [],
        placeholder: "Please select",
        fieldNames: {
          label: 'name',
          value: 'apiName'
        }
      }) : // <Select
      //   mode="multiple"
      //   allowClear
      //   style={{ width: '100%' }}
      //   placeholder="Please select"
      //   defaultValue={[]}
      //   onChange={() => this.onSelectArrChange()}
      // >
      //   {options[i.apiName] &&
      //     options[i.apiName].map((item, index) => {
      //       return (
      //         <Option value={item.apiName} key={index}>
      //           {item.name}
      //         </Option>
      //       );
      //     })}
      // </Select>
      i.columnType === 'INTEGER' ? /*#__PURE__*/React.createElement(_inputNumber["default"], {
        style: {
          width: '100%'
        },
        precision: 0
      }) : i.columnType === 'DECIMAL' ? /*#__PURE__*/React.createElement(_inputNumber["default"], {
        style: {
          width: '100%'
        },
        precision: 0
      }) : i.columnType === 'MONEY' ? /*#__PURE__*/React.createElement(_inputNumber["default"], {
        prefix: "\uFFE5",
        style: {
          width: '100%'
        }
      }) : i.columnType === 'PERCENT' ? /*#__PURE__*/React.createElement(_inputNumber["default"], {
        addonAfter: "%",
        style: {
          width: '100%'
        }
      }) : i.columnType === 'PHONE' ? /*#__PURE__*/React.createElement(_input["default"], {
        maxLength: 11,
        placeholder: "\u8BF7\u586B\u5199\u63A5\u6536\u4EBA\u624B\u673A\u53F7\u7801"
      }) : i.columnType === 'ID_CARD' ? /*#__PURE__*/React.createElement(_input["default"], {
        maxLength: 18,
        placeholder: "\u8BF7\u586B\u5199\u8EAB\u4EFD\u8BC1\u53F7\u7801"
      }) : i.columnType === 'FILE' ? /*#__PURE__*/React.createElement(_upload["default"], {
        onChange: function onChange(_ref3) {
          var file = _ref3.file,
              fileList = _ref3.fileList,
              event = _ref3.event;
          return _this8.handleFilesChange(file, fileList, i);
        }
      }, /*#__PURE__*/React.createElement(_button["default"], null, "\u4E0A\u4F20\u6587\u4EF6")) : i.columnType === 'WEBSITE' ? /*#__PURE__*/React.createElement(_input["default"], {
        placeholder: "\u8BF7\u586B\u5199\u7F51\u5740"
      }) : i.columnType === 'EMAIL' ? /*#__PURE__*/React.createElement(_input["default"], {
        placeholder: "\u8BF7\u586B\u5199\u90AE\u7BB1"
      }) : i.columnType === 'ITEM_DETAIL' ? /*#__PURE__*/React.createElement(_input["default"], {
        placeholder: "\u8BF7\u586B\u5199\u90AE\u7BB1"
      }) : i.columnType === 'GEO_POSITION' ? /*#__PURE__*/React.createElement("div", null, "lat\uFF1A ", /*#__PURE__*/React.createElement(_input["default"], {
        placeholder: "\u8BF7\u586B\u5199\u7ECF\u5EA6"
      }), "lng\uFF1A", /*#__PURE__*/React.createElement(_input["default"], {
        placeholder: "\u8BF7\u586B\u5199\u7EAC\u5EA6"
      })) : i.columnType === 'QUOTE' ? /*#__PURE__*/React.createElement("div", null, relationDataList[i.columnConfig.quoteObjectApiName] && relationDataList[i.columnConfig.quoteObjectApiName][i.columnConfig.quoteObjectApiName + "0_" + i.columnConfig.quoteColumnApiName]) : i.columnType === 'TIME' ? /*#__PURE__*/React.createElement(_timePicker["default"], {
        style: {
          width: '100%'
        },
        defaultOpenValue: (0, _moment["default"])('00:00:00', 'HH:mm:ss')
      }) : i.columnType === 'IMAGE' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_upload["default"], {
        accept: "image/*",
        listType: "picture-card",
        fileList: imgFileList[i.apiName] // beforeUpload={(file) => this.beforeUpload(file)}
        ,
        onPreview: function onPreview(file) {
          return _this8.handlePreview(file);
        },
        onChange: function onChange(_ref4) {
          var file = _ref4.file,
              fileList = _ref4.fileList,
              event = _ref4.event;
          return _this8.handleImageChange(file, fileList, i);
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_icons.PlusOutlined, null), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 8
        }
      }, "Upload"))), /*#__PURE__*/React.createElement(_modal["default"], {
        visible: previewOpen // title={previewTitle}
        ,
        footer: null,
        onCancel: function onCancel() {
          return _this8.imgPreviewCancel();
        }
      }, /*#__PURE__*/React.createElement("img", {
        alt: "example",
        style: {
          width: '100%'
        },
        src: previewImage
      }))) : null));
    }), subEntityList && subEntityList.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_col["default"], {
        key: index,
        span: layout ? layout : undefined
      }, /*#__PURE__*/React.createElement(_form["default"].Item, {
        key: index,
        label: item.name
      }, /*#__PURE__*/React.createElement(_table["default"], {
        style: {
          width: '100%'
        },
        rowKey: function rowKey(record) {
          return record.apiName;
        } // ref={th}
        ,
        ref: _this8["table" + index + "Ref"],
        components: components,
        columns: _this8.columnsTable(item.columnList, index, item.apiName),
        dataSource: item.tableData2,
        pagination: false,
        scroll: {
          x: 'max-content'
        }
      }), /*#__PURE__*/React.createElement(_button["default"], {
        onClick: function onClick() {
          return _this8.tableDataAddClick(item, index);
        }
      }, "\u6DFB\u52A0")));
    })), /*#__PURE__*/React.createElement(_form["default"].Item, {
      wrapperCol: {
        offset: 8,
        span: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "btn-line"
    }, actionBtnList && actionBtnList.map(function (i, idx) {
      var Btn = /*#__PURE__*/React.createElement(_button["default"], {
        key: idx,
        onClick: i.actionList.find(function (ite) {
          return ite.name == 'onClick';
        }) !== -1 ? function () {
          return _this8.btnLineClick(i.actionList);
        } : function () {},
        className: "btn",
        type: "primary"
      }, i.title);
      return i.actionList[0].type == 0 && i.actionList[0].btnType == 3 ? /*#__PURE__*/React.createElement(_popconfirm["default"], {
        title: "\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F",
        okText: "Yes",
        cancelText: "No",
        onConfirm: function onConfirm() {
          return _this8.confirmDataBatch();
        },
        onCancel: function onCancel() {
          return _this8.cancelProp();
        }
      }, Btn) : i.tooltip ? /*#__PURE__*/React.createElement(_tooltip["default"], {
        placement: "topLeft",
        title: i.tooltip
      }, Btn) : /*#__PURE__*/React.createElement("div", null, Btn);
    }), /*#__PURE__*/React.createElement(_button["default"], {
      className: "btn",
      onClick: function onClick() {
        return _this8.resetClick();
      }
    }, "\u91CD\u7F6E"))))), /*#__PURE__*/React.createElement(_relationDialog["default"], {
      getShowClick: function getShowClick() {
        return _this8.getShowClick();
      },
      getUser: function getUser(val) {
        return _this8.getUser(val);
      },
      columns: columnsBtn,
      tableData: tableDataBtn,
      isModalVisible: isClickVisible
    }));
  };

  return ColorfulForm;
}(React.Component);

ColorfulForm.contextType = EditableContext;
ColorfulForm.defaultProps = {
  componentAlias: '',
  layout: '24',
  itemList: {
    entityName: {
      apiName: 'student',
      desc: '学生描述',
      enabled: false,
      iconId: '0',
      id: '1564517573381324800',
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
        required: false,
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
        required: false,
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
        multiChoiceType: 'DROP_LIST',
        optionSetApiName: 'city',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'MULTI_CHOICE',
      columnTypeGroup: 'CHOICE',
      defaultUse: true,
      name: '城市',
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
        required: false,
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
        required: false,
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
      index: 4
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'BOOL',
      columnTypeGroup: 'OTHER',
      defaultUse: true,
      name: '已毕业',
      index: 5
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: true,
        userMask: false
      },
      columnType: 'PHONE',
      columnTypeGroup: 'TEXT',
      defaultUse: true,
      name: '联系方式',
      index: 6
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '所属教室',
      index: 7,
      relationList: [{
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
          required: false,
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
        name: '教室名称'
      }, {
        apiName: 'address',
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
          maxLength: 300,
          multiChoiceType: null,
          optionSetApiName: '',
          placeHolder: '',
          preUnMasked: null,
          quoteColumnApiName: '',
          quoteObjectApiName: '',
          relationObjectApiName: '',
          required: false,
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
        name: '教室位置'
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
          optionSetApiName: '',
          placeHolder: '',
          preUnMasked: null,
          quoteColumnApiName: '',
          quoteObjectApiName: '',
          relationObjectApiName: '',
          required: false,
          scale: null,
          showTime: false,
          singleChoiceType: null,
          startNo: 0,
          unique: false,
          userMask: false
        },
        columnType: 'ID',
        columnTypeGroup: 'OTHER',
        defaultUse: true,
        name: '主键'
      }, {
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
          required: false,
          scale: null,
          showTime: false,
          singleChoiceType: null,
          startNo: 0,
          unique: false,
          userMask: false
        },
        columnType: 'BOOL',
        columnTypeGroup: 'OTHER',
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
          required: false,
          scale: null,
          showTime: false,
          singleChoiceType: null,
          startNo: 0,
          unique: false,
          userMask: false
        },
        columnType: 'BOOL',
        columnTypeGroup: 'OTHER',
        defaultUse: false,
        name: '已删除'
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
          optionSetApiName: '',
          placeHolder: '',
          preUnMasked: null,
          quoteColumnApiName: '',
          quoteObjectApiName: '',
          relationObjectApiName: '',
          required: false,
          scale: null,
          showTime: true,
          singleChoiceType: null,
          startNo: 0,
          unique: false,
          userMask: false
        },
        columnType: 'DATE',
        columnTypeGroup: 'DATE',
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
          optionSetApiName: '',
          placeHolder: '',
          preUnMasked: null,
          quoteColumnApiName: '',
          quoteObjectApiName: '',
          relationObjectApiName: '',
          required: false,
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
          optionSetApiName: '',
          placeHolder: '',
          preUnMasked: null,
          quoteColumnApiName: '',
          quoteObjectApiName: '',
          relationObjectApiName: 'sys_user',
          required: false,
          scale: null,
          showTime: false,
          singleChoiceType: null,
          startNo: 0,
          unique: false,
          userMask: false
        },
        columnType: 'RELATIONSHIP',
        columnTypeGroup: 'FORBIDDEN',
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
          optionSetApiName: '',
          placeHolder: '',
          preUnMasked: null,
          quoteColumnApiName: '',
          quoteObjectApiName: '',
          relationObjectApiName: 'sys_user',
          required: false,
          scale: null,
          showTime: false,
          singleChoiceType: null,
          startNo: 0,
          unique: false,
          userMask: false
        },
        columnType: 'RELATIONSHIP',
        columnTypeGroup: 'FORBIDDEN',
        defaultUse: false,
        name: '修改人'
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
          optionSetApiName: '',
          placeHolder: '',
          preUnMasked: null,
          quoteColumnApiName: '',
          quoteObjectApiName: '',
          relationObjectApiName: 'sys_user',
          required: false,
          scale: null,
          showTime: false,
          singleChoiceType: null,
          startNo: 0,
          unique: false,
          userMask: false
        },
        columnType: 'RELATIONSHIP',
        columnTypeGroup: 'FORBIDDEN',
        defaultUse: false,
        name: '所属人'
      }],
      indeterminate: false,
      checkAll: true
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'QUOTE',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '所属教室名称',
      index: 8
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'ITEM_REDUNDANCY',
      columnTypeGroup: 'OTHER',
      defaultUse: true,
      name: '拥有书本',
      index: 9
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'FILE',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '学生文件',
      index: 10
    }, {
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
        required: false,
        scale: 5,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'GEO_POSITION',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '位置',
      index: 11
    }, {
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
        required: false,
        scale: 2,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'MONEY',
      columnTypeGroup: 'NUMBER',
      defaultUse: true,
      name: '学费',
      index: 12
    }, {
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
        required: false,
        scale: 3,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'DECIMAL',
      columnTypeGroup: 'NUMBER',
      defaultUse: true,
      name: '身高',
      index: 13
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'TIME',
      columnTypeGroup: 'OTHER',
      defaultUse: true,
      name: '午餐时间',
      index: 14
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'AUTO_NO',
      columnTypeGroup: 'OTHER',
      defaultUse: true,
      name: '学号',
      index: 15
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'WEBSITE',
      columnTypeGroup: 'TEXT',
      defaultUse: true,
      name: '网址',
      index: 16
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: true,
        userMask: false
      },
      columnType: 'EMAIL',
      columnTypeGroup: 'TEXT',
      defaultUse: true,
      name: '邮箱',
      index: 17
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'IMAGE',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '学生图片',
      index: 18
    }, {
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
        required: false,
        scale: 2,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'PERCENT',
      columnTypeGroup: 'NUMBER',
      defaultUse: true,
      name: '排名百分比',
      index: 19
    }, {
      apiName: 'tree01',
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'SINGLE_CHOICE_TREE',
      columnTypeGroup: 'CHOICE',
      defaultUse: true,
      name: '单选树字段',
      index: 20
    }, {
      apiName: 'tree02',
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
        required: false,
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
      name: '多选树字段',
      index: 21
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'ID',
      columnTypeGroup: 'OTHER',
      defaultUse: true,
      name: '主键',
      index: 22
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'BOOL',
      columnTypeGroup: 'OTHER',
      defaultUse: false,
      name: '已启用',
      index: 23
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'BOOL',
      columnTypeGroup: 'OTHER',
      defaultUse: false,
      name: '已删除',
      index: 24
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        required: false,
        scale: null,
        showTime: true,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'DATE',
      columnTypeGroup: 'DATE',
      defaultUse: false,
      name: '创建时间',
      index: 25
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        required: false,
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
      name: '最后修改时间',
      index: 26
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'sys_user',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: false,
      name: '创建人',
      index: 27
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'sys_user',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: false,
      name: '修改人',
      index: 28
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'sys_user',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: false,
      name: '所属人',
      index: 29
    }]
  },
  subEntity: [{
    apiName: 'book',
    columnList: [{
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
        required: false,
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
      name: '书本名称'
    }, {
      apiName: 'price',
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
        maxLength: 8,
        multiChoiceType: null,
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        required: false,
        scale: 2,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'MONEY',
      columnTypeGroup: 'NUMBER',
      defaultUse: true,
      name: '价格'
    }, {
      apiName: 'studentId',
      columnConfig: {
        bachCreateItem: true,
        cascadingDeletionType: 'DELETE_CHILDREN',
        computeType: null,
        copyWidthParent: true,
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
        relationObjectApiName: 'student',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'ITEM_DETAIL',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '所属学生'
    }, {
      apiName: 'cbsId',
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
        relationObjectApiName: 'cbs',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '出版社',
      relationList: [{
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
          required: false,
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
        name: '出版社名称'
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
          optionSetApiName: '',
          placeHolder: '',
          preUnMasked: null,
          quoteColumnApiName: '',
          quoteObjectApiName: '',
          relationObjectApiName: '',
          required: false,
          scale: null,
          showTime: false,
          singleChoiceType: null,
          startNo: 0,
          unique: false,
          userMask: false
        },
        columnType: 'ID',
        columnTypeGroup: 'OTHER',
        defaultUse: true,
        name: '主键'
      }, {
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
          required: false,
          scale: null,
          showTime: false,
          singleChoiceType: null,
          startNo: 0,
          unique: false,
          userMask: false
        },
        columnType: 'BOOL',
        columnTypeGroup: 'OTHER',
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
          required: false,
          scale: null,
          showTime: false,
          singleChoiceType: null,
          startNo: 0,
          unique: false,
          userMask: false
        },
        columnType: 'BOOL',
        columnTypeGroup: 'OTHER',
        defaultUse: false,
        name: '已删除'
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
          optionSetApiName: '',
          placeHolder: '',
          preUnMasked: null,
          quoteColumnApiName: '',
          quoteObjectApiName: '',
          relationObjectApiName: '',
          required: false,
          scale: null,
          showTime: true,
          singleChoiceType: null,
          startNo: 0,
          unique: false,
          userMask: false
        },
        columnType: 'DATE',
        columnTypeGroup: 'DATE',
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
          optionSetApiName: '',
          placeHolder: '',
          preUnMasked: null,
          quoteColumnApiName: '',
          quoteObjectApiName: '',
          relationObjectApiName: '',
          required: false,
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
          optionSetApiName: '',
          placeHolder: '',
          preUnMasked: null,
          quoteColumnApiName: '',
          quoteObjectApiName: '',
          relationObjectApiName: 'sys_user',
          required: false,
          scale: null,
          showTime: false,
          singleChoiceType: null,
          startNo: 0,
          unique: false,
          userMask: false
        },
        columnType: 'RELATIONSHIP',
        columnTypeGroup: 'FORBIDDEN',
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
          optionSetApiName: '',
          placeHolder: '',
          preUnMasked: null,
          quoteColumnApiName: '',
          quoteObjectApiName: '',
          relationObjectApiName: 'sys_user',
          required: false,
          scale: null,
          showTime: false,
          singleChoiceType: null,
          startNo: 0,
          unique: false,
          userMask: false
        },
        columnType: 'RELATIONSHIP',
        columnTypeGroup: 'FORBIDDEN',
        defaultUse: false,
        name: '修改人'
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
          optionSetApiName: '',
          placeHolder: '',
          preUnMasked: null,
          quoteColumnApiName: '',
          quoteObjectApiName: '',
          relationObjectApiName: 'sys_user',
          required: false,
          scale: null,
          showTime: false,
          singleChoiceType: null,
          startNo: 0,
          unique: false,
          userMask: false
        },
        columnType: 'RELATIONSHIP',
        columnTypeGroup: 'FORBIDDEN',
        defaultUse: false,
        name: '所属人'
      }],
      indeterminate: false,
      checkAll: true
    }, {
      apiName: 'tree01',
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'SINGLE_CHOICE_TREE',
      columnTypeGroup: 'CHOICE',
      defaultUse: true,
      name: '单选树字段'
    }, {
      apiName: 'tree02',
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
        required: false,
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
      name: '多选树字段'
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
        required: false,
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
      name: '书省份'
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
        multiChoiceType: 'DROP_LIST',
        optionSetApiName: 'city',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'MULTI_CHOICE',
      columnTypeGroup: 'CHOICE',
      defaultUse: true,
      name: '书城市'
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
        required: false,
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
      name: '书年龄'
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
        required: false,
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
      name: '书生日'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'BOOL',
      columnTypeGroup: 'OTHER',
      defaultUse: true,
      name: '书已毕业'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: true,
        userMask: false
      },
      columnType: 'PHONE',
      columnTypeGroup: 'TEXT',
      defaultUse: true,
      name: '书联系方式'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'FILE',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '书文件'
    }, {
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
        required: false,
        scale: 5,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'GEO_POSITION',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '书位置'
    }, {
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
        required: false,
        scale: 2,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'MONEY',
      columnTypeGroup: 'NUMBER',
      defaultUse: true,
      name: '书学费'
    }, {
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
        required: false,
        scale: 3,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'DECIMAL',
      columnTypeGroup: 'NUMBER',
      defaultUse: true,
      name: '书身高'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'TIME',
      columnTypeGroup: 'OTHER',
      defaultUse: true,
      name: '书午餐时间'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'AUTO_NO',
      columnTypeGroup: 'OTHER',
      defaultUse: true,
      name: '书学号'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'WEBSITE',
      columnTypeGroup: 'TEXT',
      defaultUse: true,
      name: '书网址'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: true,
        userMask: false
      },
      columnType: 'EMAIL',
      columnTypeGroup: 'TEXT',
      defaultUse: true,
      name: '书邮箱'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'IMAGE',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '书图片'
    }, {
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
        required: false,
        scale: 2,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'PERCENT',
      columnTypeGroup: 'NUMBER',
      defaultUse: true,
      name: '书排名百分比'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '所属教室(关联)'
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'ID',
      columnTypeGroup: 'OTHER',
      defaultUse: true,
      name: '主键'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'BOOL',
      columnTypeGroup: 'OTHER',
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'BOOL',
      columnTypeGroup: 'OTHER',
      defaultUse: false,
      name: '已删除'
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        required: false,
        scale: null,
        showTime: true,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'DATE',
      columnTypeGroup: 'DATE',
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        required: false,
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'sys_user',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      columnTypeGroup: 'FORBIDDEN',
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'sys_user',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: false,
      name: '修改人'
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'sys_user',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: false,
      name: '所属人'
    }],
    entityId: '5',
    joinColumnApiName: 'studentId',
    name: '书本',
    allItems: [{
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
        required: false,
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
      name: '书本名称'
    }, {
      apiName: 'price',
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
        maxLength: 8,
        multiChoiceType: null,
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        required: false,
        scale: 2,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'MONEY',
      columnTypeGroup: 'NUMBER',
      defaultUse: true,
      name: '价格'
    }, {
      apiName: 'studentId',
      columnConfig: {
        bachCreateItem: true,
        cascadingDeletionType: 'DELETE_CHILDREN',
        computeType: null,
        copyWidthParent: true,
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
        relationObjectApiName: 'student',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'ITEM_DETAIL',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '所属学生'
    }, {
      apiName: 'cbsId',
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
        relationObjectApiName: 'cbs',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '出版社'
    }, {
      apiName: 'tree01',
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'SINGLE_CHOICE_TREE',
      columnTypeGroup: 'CHOICE',
      defaultUse: true,
      name: '单选树字段'
    }, {
      apiName: 'tree02',
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
        required: false,
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
      name: '多选树字段'
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
        required: false,
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
      name: '书省份'
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
        multiChoiceType: 'DROP_LIST',
        optionSetApiName: 'city',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'MULTI_CHOICE',
      columnTypeGroup: 'CHOICE',
      defaultUse: true,
      name: '书城市'
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
        required: false,
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
      name: '书年龄'
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
        required: false,
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
      name: '书生日'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'BOOL',
      columnTypeGroup: 'OTHER',
      defaultUse: true,
      name: '书已毕业'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: true,
        userMask: false
      },
      columnType: 'PHONE',
      columnTypeGroup: 'TEXT',
      defaultUse: true,
      name: '书联系方式'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'FILE',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '书文件'
    }, {
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
        required: false,
        scale: 5,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'GEO_POSITION',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '书位置'
    }, {
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
        required: false,
        scale: 2,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'MONEY',
      columnTypeGroup: 'NUMBER',
      defaultUse: true,
      name: '书学费'
    }, {
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
        required: false,
        scale: 3,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'DECIMAL',
      columnTypeGroup: 'NUMBER',
      defaultUse: true,
      name: '书身高'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'TIME',
      columnTypeGroup: 'OTHER',
      defaultUse: true,
      name: '书午餐时间'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'AUTO_NO',
      columnTypeGroup: 'OTHER',
      defaultUse: true,
      name: '书学号'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'WEBSITE',
      columnTypeGroup: 'TEXT',
      defaultUse: true,
      name: '书网址'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: true,
        userMask: false
      },
      columnType: 'EMAIL',
      columnTypeGroup: 'TEXT',
      defaultUse: true,
      name: '书邮箱'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'IMAGE',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '书图片'
    }, {
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
        required: false,
        scale: 2,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'PERCENT',
      columnTypeGroup: 'NUMBER',
      defaultUse: true,
      name: '书排名百分比'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: true,
      name: '所属教室(关联)'
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'ID',
      columnTypeGroup: 'OTHER',
      defaultUse: true,
      name: '主键'
    }, {
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'BOOL',
      columnTypeGroup: 'OTHER',
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
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'BOOL',
      columnTypeGroup: 'OTHER',
      defaultUse: false,
      name: '已删除'
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        required: false,
        scale: null,
        showTime: true,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'DATE',
      columnTypeGroup: 'DATE',
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        required: false,
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'sys_user',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      columnTypeGroup: 'FORBIDDEN',
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'sys_user',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: false,
      name: '修改人'
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
        optionSetApiName: '',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: 'sys_user',
        required: false,
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      columnTypeGroup: 'FORBIDDEN',
      defaultUse: false,
      name: '所属人'
    }]
  }],
  actionBtnList: [{
    title: '提交',
    actionList: [{
      name: 'onClick',
      type: 0,
      btnType: 0,
      nextActionList: [{
        type: 2,
        triggeredType: 1,
        triggeredContent: '操作成功'
      }]
    }]
  }, {
    title: '按钮1',
    actionList: [{
      name: 'onClick',
      type: 3,
      actionCompontent: 1
    }]
  }, {
    title: '按钮',
    actionList: [{
      name: 'onClick',
      type: 2,
      triggeredType: 1,
      triggeredContent: '呜呜呜'
    }]
  }],
  initial: [{
    name: 'aaa'
  }, {
    name: 'bbb'
  }],
  exposureParameter: [{
    title: 'reload',
    actionParamsList: [{
      name: 'a1',
      value: 'aaaaaaaaa'
    }, {
      name: 'a2',
      value: '2222222222'
    }]
  }, {
    title: 'update',
    actionParamsList: [{
      name: 'b1',
      value: 'bbbbbb'
    }, {
      name: 'b2',
      value: 'bbbbbbbbbbbbbbb'
    }]
  }]
};
var _default = ColorfulForm;
exports["default"] = _default;