"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

var _popconfirm = _interopRequireDefault(require("antd/lib/popconfirm"));

var _row = _interopRequireDefault(require("antd/lib/row"));

var _table = _interopRequireDefault(require("antd/lib/table"));

var _col = _interopRequireDefault(require("antd/lib/col"));

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _upload = _interopRequireDefault(require("antd/lib/upload"));

var _button = _interopRequireDefault(require("antd/lib/button"));

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

var _select = _interopRequireDefault(require("antd/lib/select"));

var _radio = _interopRequireDefault(require("antd/lib/radio"));

var _switch = _interopRequireDefault(require("antd/lib/switch"));

var _datePicker = _interopRequireDefault(require("antd/lib/date-picker"));

var _form = _interopRequireDefault(require("antd/lib/form"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _input = _interopRequireDefault(require("antd/lib/input"));

var React = _interopRequireWildcard(require("react"));

require("./index.scss");

var _moment = _interopRequireDefault(require("moment"));

var _pages = require("../../api/pages");

var _excluded = ["title", "editable", "children", "dataIndex", "record", "handleSave", "columnType"],
    _excluded2 = ["index"],
    _excluded3 = ["color", "wid", "itemList", "subEntity", "propName", "initial", "style"];

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
      columnType = _ref.columnType,
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
    // console.log('dataIndex', dataIndex);
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
              // console.log(record, values);
              handleSave((0, _extends2["default"])({}, record, values)); // toggleEdit();

              _context.next = 9;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function save() {
      return _ref2.apply(this, arguments);
    };
  }(); //子表格的时间选择


  var onSwitchTableChange = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(value) {
      var values;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return form.validateFields();

            case 3:
              values = _context2.sent;
              // console.log(record, values);
              handleSave((0, _extends2["default"])({}, record, values)); // toggleEdit();

              _context2.next = 9;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function onSwitchTableChange(_x) {
      return _ref3.apply(this, arguments);
    };
  }(); //子表格的switchs


  var onChangeTable = function onChangeTable() {// console.log('onChangeTable');
  }; //子表格的单选


  var onRadioTableChange = function onRadioTableChange() {// console.log('onRadioTableChange');
  }; //SINGLE_CHOICE_TREE


  var handleSelectTableChange = function handleSelectTableChange() {// console.log('handleSelectTableChange');
  }; //MULTI_CHOICE


  var onCheckTableChange = function onCheckTableChange() {// console.log('onCheckTableChange');
  }; //MULTI_CHOICE_TREE'


  var onSelectArrTableChange = function onSelectArrTableChange() {// console.log('onSelectArrTableChange');
  }; //


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
        ref: inputRef,
        onPressEnter: save,
        onBlur: save
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
        onBlur: save
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
        onChange: save
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
        className: "realation",
        onClick: function onClick() {
          return realationClick(i);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "realation-left"
      }, "111"), /*#__PURE__*/React.createElement("div", null, "+")));
      break;

    case 'BOOL':
      childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
        style: {
          margin: 0
        },
        name: dataIndex,
        rules: []
      }, /*#__PURE__*/React.createElement(_switch["default"], {
        onChange: save
      }));
      break;

    case 'SINGLE_CHOICE':
      childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
        style: {
          margin: 0
        },
        name: dataIndex,
        rules: []
      }, /*#__PURE__*/React.createElement(_radio["default"].Group, {
        onChange: save,
        value: value
      }, /*#__PURE__*/React.createElement(_radio["default"], {
        value: 1
      }, "A"), /*#__PURE__*/React.createElement(_radio["default"], {
        value: 2
      }, "B"), /*#__PURE__*/React.createElement(_radio["default"], {
        value: 3
      }, "C"), /*#__PURE__*/React.createElement(_radio["default"], {
        value: 4
      }, "D")));
      break;

    case 'SINGLE_CHOICE_TREE':
      childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
        style: {
          margin: 0
        },
        name: dataIndex,
        rules: []
      }, /*#__PURE__*/React.createElement(_select["default"], {
        defaultValue: "",
        style: {
          width: 120
        },
        onChange: save
      }, /*#__PURE__*/React.createElement(Option, {
        value: "jack"
      }, "Jack"), /*#__PURE__*/React.createElement(Option, {
        value: "lucy"
      }, "Lucy"), /*#__PURE__*/React.createElement(Option, {
        value: "disabled",
        disabled: true
      }, "Disabled"), /*#__PURE__*/React.createElement(Option, {
        value: "Yiminghe"
      }, "yiminghe")));
      break;

    case 'MULTI_CHOICE':
      childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
        style: {
          margin: 0
        },
        name: dataIndex,
        rules: []
      }, /*#__PURE__*/React.createElement(_checkbox["default"].Group, {
        options: plainOptions,
        defaultValue: ['Apple'],
        onChange: save
      }));
      break;

    case 'MULTI_CHOICE_TREE':
      childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
        style: {
          margin: 0
        },
        name: dataIndex,
        rules: []
      }, /*#__PURE__*/React.createElement(_select["default"], {
        mode: "multiple",
        allowClear: true,
        style: {
          width: '100%'
        },
        placeholder: "Please select",
        defaultValue: [],
        onChange: save
      }, children));
      break;

    case 'INTEGER':
      childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
        style: {
          margin: 0
        },
        name: dataIndex,
        rules: []
      }, /*#__PURE__*/React.createElement(_inputNumber["default"], {
        onBlur: save,
        min: -99999999999,
        max: 99999999999,
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
        onBlur: save,
        min: -99999999999,
        max: 99999999999,
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
        onBlur: save,
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
        onBlur: save,
        maxLength: 11,
        placeholder: "\u8BF7\u586B\u5199\u63A5\u6536\u4EBA\u624B\u673A\u53F7\u7801"
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
        onBlur: save,
        maxLength: 18,
        placeholder: "\u8BF7\u586B\u5199\u8EAB\u4EFD\u8BC1\u53F7\u7801"
      }));
      break;

    case 'FILE':
      childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
        style: {
          margin: 0
        },
        name: dataIndex,
        rules: []
      }, /*#__PURE__*/React.createElement(_upload["default"], props, /*#__PURE__*/React.createElement(_button["default"], null, "\u4E0A\u4F20\u6587\u4EF6")));
      break;

    case 'WEBSITE':
      childNode = /*#__PURE__*/React.createElement(_form["default"].Item, {
        style: {
          margin: 0
        },
        name: dataIndex,
        rules: []
      }, /*#__PURE__*/React.createElement(Inputon, {
        Blur: save,
        placeholder: "\u8BF7\u586B\u5199\u7F51\u5740"
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
        onBlur: save,
        placeholder: "\u8BF7\u586B\u5199\u90AE\u7BB1"
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
  } // childNode = (
  //   <Form.Item
  //     style={{ margin: 0 }}
  //     name={dataIndex}
  //     rules={
  //       [
  //         // {
  //         //   required: true,
  //         //   message: `${title} is required.`,
  //         // },
  //       ]
  //     }
  //   >
  //     <Input ref={inputRef} onPressEnter={save} onBlur={save} />
  //   </Form.Item>
  // );
  // ) : (
  //   <div className="editable-cell-value-wrap" style={{ paddingRight: 24, minWidth: 50 }} onClick={toggleEdit}>
  //     {children}
  //   </div>
  // );
  // }


  return /*#__PURE__*/React.createElement("td", restProps, childNode);
};

var EditableRow = function EditableRow(_ref4) {
  var index = _ref4.index,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref4, _excluded2);

  var _Form$useForm = _form["default"].useForm(),
      form = _Form$useForm[0];

  return /*#__PURE__*/React.createElement(_form["default"], {
    form: form,
    component: false
  }, /*#__PURE__*/React.createElement(EditableContext.Provider, {
    value: form
  }, /*#__PURE__*/React.createElement("tr", props)));
};

var ColorfulForm = function ColorfulForm(_ref5) {
  var color = _ref5.color,
      _ref5$wid = _ref5.wid,
      wid = _ref5$wid === void 0 ? '120px' : _ref5$wid,
      _ref5$itemList = _ref5.itemList,
      itemList = _ref5$itemList === void 0 ? {
    entity: []
  } : _ref5$itemList,
      _ref5$subEntity = _ref5.subEntity,
      subEntity = _ref5$subEntity === void 0 ? [] : _ref5$subEntity,
      _ref5$propName = _ref5.propName,
      propName = _ref5$propName === void 0 ? [] : _ref5$propName,
      _ref5$initial = _ref5.initial,
      initial = _ref5$initial === void 0 ? [] : _ref5$initial,
      _ref5$style = _ref5.style,
      style = _ref5$style === void 0 ? {} : _ref5$style,
      otherProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref5, _excluded3);

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
    setSubEntityList(subEntity); // console.log('1670', subEntity);
  }, []); // console.log('initial', initial);

  var _Form$useForm2 = _form["default"].useForm(),
      form = _Form$useForm2[0];

  var _style = style || {};

  if (color) {
    _style.backgroundColor = color;
  }

  var _otherProps = otherProps || {};

  _otherProps.style = _style; //提交

  var onFinish = function onFinish(values) {
    // console.log('Success:', values);
    var formData = new FormData();
    formData.append('objectApiName', 'common_user'); // console.log(itemList.entity);

    var result = itemList.entity.filter(function (item) {
      return item.columnType === 'DATE';
    }); // console.log('result', result);

    var _loop = function _loop(_i) {
      // console.log(1774, values[i]);
      if (values[_i]) {
        // console.log(values[i]);
        result.forEach(function (element) {
          if (element.apiName == _i) {
            // console.log('33333333', values[i]);
            values[_i] = (0, _moment["default"])(values[_i]).format('YYYY-MM-DD HH:mm:ss');
          }
        });
        formData.append("params." + _i, values[_i]);
      }
    };

    for (var _i in values) {
      _loop(_i);
    } // console.log(1782, subEntityList);


    for (var _i2 in subEntityList) {
      // console.log('1783', subEntityList[i]);
      var result2 = subEntityList[_i2].columnList.filter(function (i) {
        return i.columnType === 'DATE';
      });

      if (subEntityList[_i2]) {
        var arr = subEntityList[_i2].tableData2; //如果子表没有数据，这里就判断一下
        // console.log(1367, arr);

        if (arr.length != 0) {
          formData.append("subs[" + _i2 + "].objectApiName", subEntityList[_i2].apiName);
        }

        var _loop2 = function _loop2(r) {
          var obj = subEntityList[_i2].tableData2[r]; // console.log('obj', obj);

          var _loop3 = function _loop3(t) {
            if (t != 'key' && t != 'tableIndex' && obj[t]) {
              result2.forEach(function (it) {
                if (it.apiName == t) {
                  obj[t] = (0, _moment["default"])(obj[t]).format('YYYY-MM-DD HH:mm:ss');
                }
              });
              formData.append("subs[" + _i2 + "].params[" + r + "]." + t, obj[t]); // console.log(t, subEntityList[i].tableData2[r][t]);
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

  var onFinishFailed = function onFinishFailed(errorInfo) {// console.log('Failed:', errorInfo);
  };

  var Option = _select["default"].Option;

  var onChange = function onChange(date, dateString) {// console.log(date);
    // console.log(dateString);
  };

  var onSwitchChange = function onSwitchChange(value, apiName) {// console.log(`switch to ${value}`, apiName);
    // itemList.entity[index] = value
    // let obj = {}
    // obj[apiName] = moment(value).format('YYYY-MM-DD HH:mm:ss')
    // console.log('dateobj', obj)
    // form.setFieldsValue(obj)
  }; // radio


  var _React$useState = React.useState(1),
      value = _React$useState[0],
      setValue = _React$useState[1]; //  checkbox


  var plainOptions = ['Apple', 'Pear', 'Orange'];

  var onCheckChange = function onCheckChange(checkedValues) {// console.log('checked = ', checkedValues);
  }; //select array


  var children = [];

  for (var _i3 = 10; _i3 < 36; _i3++) {
    children.push( /*#__PURE__*/React.createElement(Option, {
      key: _i3.toString(36) + _i3
    }, _i3.toString(36) + _i3));
  }

  var onSelectArrChange = function onSelectArrChange(value) {// console.log(`selected ${value}`);
  }; // select


  var handleSelectChange = function handleSelectChange(value) {// console.log(`selected ${value}`);
  };

  var _useState3 = (0, React.useState)([]),
      columns = _useState3[0],
      setColumns = _useState3[1];

  var _useState4 = (0, React.useState)([]),
      tableData = _useState4[0],
      setTableData = _useState4[1];

  var _useState5 = (0, React.useState)([]),
      columnsBtn = _useState5[0],
      setColumnsBtn = _useState5[1];

  var _useState6 = (0, React.useState)([]),
      tableDataBtn = _useState6[0],
      setTableDataBtn = _useState6[1];

  var _useState7 = (0, React.useState)(''),
      inputName = _useState7[0],
      setInputName = _useState7[1];

  var realationClick = function realationClick(item) {
    // console.log(item);
    setInputName(item.apiName);
    (0, _pages.metaInfo)({
      objectApiName: item.columnConfig.relationObjectApiName,
      containsColumn: true
    }).then(function (res) {
      // console.log(res.data.mainObject.columnList);
      // let  columnsTest = res.data.columnList
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

        obj.dataIndex = i.apiName; // console.log(obj);

        arr2.push(obj);
      }); // console.log(arr2);

      var columnsTest = arr2;
      setColumns(columnsTest);
    });
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
      res.data.data.forEach(function (item) {
        item.key = item.id;
      }); // console.log('tableData2', res.data.data);

      setTableData(res.data.data);
      setIsModalVisible(true);
    }); //打开弹窗
  }; //弹窗传值


  var getShow = function getShow(val) {
    setIsModalVisible(val);
  }; // 按钮弹窗传值


  var getShowClick = function getShowClick(val) {
    setClickVisible(val);
  }; //获取选中的用户数据


  var getUser = function getUser(val) {
    // console.log('one user', val);
    var inputNameObj = {};
    inputNameObj[inputName] = val[0].name;
    form.setFieldsValue(inputNameObj);
  }; //上传文件


  var props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text'
    },
    onChange: function onChange(info) {
      if (info.file.status !== 'uploading') {// console.log(info.file, info.fileList);
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


  var _useState8 = (0, React.useState)(false),
      isModalVisible = _useState8[0],
      setIsModalVisible = _useState8[1]; //传值给dialog


  var _useState9 = (0, React.useState)([]),
      setTable = _useState9[0]; //获取数据


  var getPagesListFuc = function getPagesListFuc(params) {
    // console.log('api api api');
    (0, _pages.getPagesList)(params).then(function (res) {// console.log(res);
    });
  };

  var onRadioChange = function onRadioChange() {}; // console.log('form', form);
  //form里面的table


  var _useState10 = (0, React.useState)([]),
      formTableData = _useState10[0],
      setFormTableData = _useState10[1];

  var components = {
    body: {
      row: EditableRow,
      cell: EditableCell
    }
  };

  var handleSave = function handleSave(row) {
    // console.log('row',row)
    // const newData = [...tableData2];
    // const index = newData.findIndex((item) => row.key === item.key);
    // const item = newData[index];
    // newData.splice(index, 1, {
    //   ...item,
    //   ...row,
    // });
    // console.log('subs', row);
    subEntityList[row.tableIndex].tableData2[row.key] = row; // console.log('subEntityList', subEntityList);

    setSubEntityList(JSON.parse(JSON.stringify(subEntityList))); // setSubEntityList(subEntity);
  };

  var columnsTable = function columnsTable(list, index) {
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
            handleSave: handleSave,
            columnType: col.columnType
          };
        }
      });
    });
    return arr;
  }; //  添加一行子表格


  var tableDataAddClick = function tableDataAddClick(item, index) {
    // console.log('00000000', item, index);
    var tableObj = {};
    item.columnList.map(function (it, id) {
      tableObj[it.apiName] = '';
      tableObj.key = item.tableData2.length;
      tableObj.tableIndex = index; // console.log('1669', tableObj);
    });
    item.tableData2.push(tableObj);
    subEntityList[index] = item; // console.log(subEntityList);

    setSubEntityList(JSON.parse(JSON.stringify(subEntityList)));
  }; // console.log('formTableData', columnsTable);
  //点击按钮分类弹窗tooltip等
  //气泡确认框的操作


  var confirmProp = function confirmProp() {
    _message2["default"].success('提交成功');
  };

  var cancelProp = function cancelProp() {
    _message2["default"].error('取消提交');
  };

  var _useState11 = (0, React.useState)(false),
      isClickVisible = _useState11[0],
      setClickVisible = _useState11[1];

  var testMessage = function testMessage(value) {
    console.log(value);
    var type = value[0].type;

    switch (type) {
      //
      case 0:
        break;

      case 1:
        var arr2 = [];
        value[0].actionDialogParamsList.forEach(function (i, index) {
          var obj = {};
          obj.title = i.name;
          obj.key = i.name;
          obj.dataIndex = 'name'; // console.log(obj);

          arr2.push(obj);
        }); // let arr2 =  [
        //   {
        //     title: '姓名',
        //     dataIndex: 'name',
        //     key: 'name',
        //   },
        // ];;
        // let arr2 = [
        //   { dataIndex: 'name', key: 'aaa', title: 'aaa' },
        //   {
        //     dataIndex: 'b',
        //     key: 'b',
        //     title: 'b',
        //   },
        // ];
        // console.log(arr2);

        var columnsTest = arr2;
        setColumnsBtn(columnsTest);
        var arr3 = [];
        value[0].actionDialogParamsList.forEach(function (i, index) {
          var obj = {};
          obj.name = i.name;
          obj.key = index; // console.log(obj);

          arr3.push(obj);
        }); // let arr3 = [
        //   {
        //     key: '1',
        //     name: '胡彦斌',
        //   },
        //   {
        //     key: '2',
        //     name: '胡彦祖',
        //   },
        // ];;
        // let arr3 = [
        //   { key: '1', name: 'aaa' },
        //   { key: '2', name: 'b' },
        // ];

        var dataTest3 = arr3;
        setTableDataBtn(dataTest3);
        setClickVisible(true);
        break;

      case 2:
        _message2["default"].info("" + value[0].triggeredContent);

        break;

      case 4:
        var id = value[0].actionPage[value[0].actionPage.length - 1];
        window.location = "www.test.com?id=" + id;
        break;

      case 5:
        // value[0].actionJSNamezheng
        value[0].actionJSValue();
        break;

      default:
        break;
    }
  };

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
      onChange: function onChange(value) {
        return onSwitchChange(value, i.apiName);
      }
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
    }) : i.columnType === 'GEO_POSITION' ? /*#__PURE__*/React.createElement("div", null, "lat\uFF1A ", /*#__PURE__*/React.createElement(_input["default"], {
      placeholder: "\u8BF7\u586B\u5199\u7ECF\u5EA6"
    }), "lng\uFF1A", /*#__PURE__*/React.createElement(_input["default"], {
      placeholder: "\u8BF7\u586B\u5199\u7EAC\u5EA6"
    })) : null));
  }), subEntityList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(_form["default"].Item, {
      key: index,
      name: 1234,
      label: 'test table'
    }, /*#__PURE__*/React.createElement(_table["default"], {
      components: components,
      columns: columnsTable(item.columnList, index),
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
    var Btn = /*#__PURE__*/React.createElement(_button["default"], {
      key: idx,
      onClick: i.actionList.find(function (ite) {
        return ite.name == 'onClick';
      }) !== -1 ? function () {
        return testMessage(i.actionList);
      } : function () {},
      className: "btn",
      type: "primary"
    }, i.title);
    return i.actionList[0].type == 0 ? /*#__PURE__*/React.createElement(_popconfirm["default"], {
      title: "\u662F\u5426\u786E\u8BA4\u63D0\u4EA4\uFF1F",
      okText: "Yes",
      cancelText: "No",
      onConfirm: confirmProp,
      onCancel: cancelProp
    }, Btn) : i.actionList[0].type == 2 ? /*#__PURE__*/React.createElement(_tooltip["default"], {
      placement: "topLeft",
      title: i.tooltip
    }, Btn) : /*#__PURE__*/React.createElement("div", null, Btn);
  }), /*#__PURE__*/React.createElement(_button["default"], {
    className: "btn",
    type: "primary",
    htmlType: "submit"
  }, "\u63D0\u4EA4"), /*#__PURE__*/React.createElement(_button["default"], {
    className: "btn"
  }, "\u91CD\u7F6E"))))));
};

var _default = ColorfulForm;
exports["default"] = _default;