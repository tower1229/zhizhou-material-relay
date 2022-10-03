import _Modal from "antd/es/modal";
import _extends from "@babel/runtime/helpers/extends";
import _message from "antd/es/message";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import * as React from 'react';
import "./index.scss"; // import { Input } from '@alifd/next';

import Bus from "../../utils/eventBus";

var ColorfulDialog = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ColorfulDialog, _React$Component);

  ColorfulDialog.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    console.warn('getDerivedStateFromProps', props);
    return {
      visible: props.visible
    };
  };

  function ColorfulDialog(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      visible: props.visible
    };
    return _this;
  }

  var _proto = ColorfulDialog.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (this.props.__designMode === 'design') {
      // 低代码编辑态中强制显示，将控制权交给引擎侧
      this.setState({
        visible: true
      });
    }

    Bus.addListener(this.props.id, function (data) {
      _this2.setState({
        visible: data
      });
    });
  };

  _proto.handleOk = function handleOk() {
    this.setState({
      visible: false
    });
  };

  _proto.handleCancel = function handleCancel() {
    this.setState({
      visible: false
    });
  } // 气泡确认框的操作
  ;

  _proto.confirmProp = function confirmProp() {
    _message.success('提交成功');
  };

  _proto.cancelProp = function cancelProp() {
    _message.error('取消提交');
  };

  _proto.render = function render() {
    var _this3 = this;

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Modal, _extends({}, this.props, {
      visible: this.state.visible,
      onOk: function onOk() {
        return _this3.handleOk();
      },
      onCancel: function onCancel() {
        return _this3.handleCancel();
      },
      width: +this.props.width || undefined,
      footer: this.props.footer || null
    }), this.props.children || null));
  };

  return ColorfulDialog;
}(React.Component);

export default ColorfulDialog;