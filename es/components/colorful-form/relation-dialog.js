import _Modal from "antd/es/modal";
import _Table from "antd/es/table";
import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _Input from "antd/es/input";
import * as React from 'react';
import "./index.scss"; // import { Input } from '@alifd/next';

var Search = _Input.Search;

var RelationDialog = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(RelationDialog, _React$Component);

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
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Modal, {
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
    }), /*#__PURE__*/React.createElement(_Table, {
      rowSelection: _extends({
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
export default RelationDialog;