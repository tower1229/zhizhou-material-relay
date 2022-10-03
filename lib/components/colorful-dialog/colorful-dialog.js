"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _modal = _interopRequireDefault(require("antd/lib/modal"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = _interopRequireWildcard(require("react"));

require("./index.scss");

var _eventBus = _interopRequireDefault(require("../../utils/eventBus"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ColorfulDialog = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(ColorfulDialog, _React$Component);

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

    _eventBus["default"].addListener(this.props.id, function (data) {
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
    _message2["default"].success('提交成功');
  };

  _proto.cancelProp = function cancelProp() {
    _message2["default"].error('取消提交');
  };

  _proto.render = function render() {
    var _this3 = this;

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_modal["default"], (0, _extends2["default"])({}, this.props, {
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

var _default = ColorfulDialog;
exports["default"] = _default;