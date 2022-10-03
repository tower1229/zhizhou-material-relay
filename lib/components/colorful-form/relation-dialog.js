"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _modal = _interopRequireDefault(require("antd/lib/modal"));

var _table = _interopRequireDefault(require("antd/lib/table"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _input = _interopRequireDefault(require("antd/lib/input"));

var React = _interopRequireWildcard(require("react"));

require("./index.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Search = _input["default"].Search;

var RelationDialog = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(RelationDialog, _React$Component);

  function RelationDialog(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.getList = function () {};

    _this.state = {
      oneUser: [],
      selectedRowKeys: '',
      selectedRows: {}
    };
    return _this;
  }

  var _proto = RelationDialog.prototype;

  _proto.componentDidMount = function componentDidMount() {// if (this.props.isModalVisible) {
    //   console.log(12345612345);
    // }
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps, preState) {// if (nextProps.isModalVisible) {
    //   console.log(12345612345);
    // }
  } // const { getShowClick, getUser } = props;
  // const { tableData, isModalVisible, columns, id } = props; //id用于查询列表的表头和表体
  // const [isModalVisible, setIsModalVisible] = useState(false);
  ;

  _proto.handleOk = function handleOk() {
    var selectedRows = this.state.selectedRows;
    this.props.getShowClick(false);
    this.props.getUser(selectedRows);
  };

  _proto.handleCancel = function handleCancel() {
    this.props.getShowClick(false);
  };

  _proto.onSearch = function onSearch(value) {
    console.log(value);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        tableData = _this$props.tableData,
        isModalVisible = _this$props.isModalVisible,
        columns = _this$props.columns,
        id = _this$props.id;
    var rowSelection = {
      onChange: function onChange(selectedRowKeys, selectedRows) {
        console.log("selectedRowKeys: " + selectedRowKeys, 'selectedRows: ', selectedRows);

        _this2.setState({
          selectedRowKeys: selectedRowKeys,
          selectedRows: selectedRows
        }); // setOneUser(selectedRows);
        //  getUser(selectedRows)

      },
      getCheckboxProps: function getCheckboxProps(record) {
        return {
          disabled: record.name === 'Disabled User',
          // Column configuration not to be checked
          name: record.name
        };
      }
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_modal["default"], {
      title: "\u5173\u8054\u5BF9\u8C61",
      visible: isModalVisible,
      onOk: function onOk() {
        return _this2.handleOk();
      },
      onCancel: function onCancel() {
        return _this2.handleCancel();
      },
      width: '50vw'
    }, /*#__PURE__*/React.createElement(Search, {
      placeholder: "input search text",
      onSearch: function onSearch(value) {
        return _this2.onSearch(value);
      },
      style: {
        width: 200,
        marginBottom: 20
      }
    }), /*#__PURE__*/React.createElement(_table["default"], {
      rowSelection: (0, _extends2["default"])({
        type: 'radio'
      }, rowSelection),
      style: {
        width: '100%'
      },
      scroll: {
        x: 600
      },
      columns: columns,
      dataSource: tableData // pagination={{ total: 50, defaultCurrent: 3 }}
      ,
      pagination: false
    })));
  };

  return RelationDialog;
}(React.Component);

RelationDialog.defaultProps = {};
var _default = RelationDialog;
exports["default"] = _default;