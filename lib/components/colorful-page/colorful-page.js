"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = _interopRequireWildcard(require("react"));

require("./index.scss");

var _eventBus = _interopRequireDefault(require("../../utils/eventBus"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// type selfProps = {
//   getShow: Function;
//   getUser: Function;
// };
// export interface ColorfulDialogProps {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }
// const ColorfulDialog: React.FC<selfProps> = ({
//      isModalVisible = true,  children,
// }) => {
//   const [visible, setVisible] = useState(false);
//   //确保userEffect在弹窗时候执行一次
//   // useEffect(() => {
//   //   setVisible(isModalVisible)
//   //   if (isModalVisible) {
//   //     console.log(12345612345);
//   //   }
//   // }, [isModalVisible]);
//   useEffect(() => {
//     Bus.addListener('modalId', data => {
//       console.log(22222222222222222, data);
//       console.log(this.props.id)
//       // setVisible(data)
//     })
//   }, [])
//   const handleOk = () => {
//     console.log('111112222');
//     setVisible(false);
//   };
//   const handleCancel = () => {
//     setVisible(false);
//   };
//   return (
//     <div>
//       <Modal
//         title="Basic Modal"
//         visible={visible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         width={800}
//       >
//         {children}
//       </Modal>
//     </div>
//   );
// };
// export default ColorfulDialog;
var ColorfulPage = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(ColorfulPage, _React$Component);

  function ColorfulPage(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      visible: false
    };
    return _this;
  }

  var _proto = ColorfulPage.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // console.log('this.props.id',this.props.id)
    _eventBus["default"].addListener(this.props.id, function (data) {
      // console.log(22222222222222222,this.props.id, data);
      // console.log(this.props.id)
      // setVisible(data)
      _this2.setState({
        visible: data // id:this.props.id,
        // name:this.props.name

      });
    }); // const path = window.location.search;
    // console.log(path)


    var s = {};

    for (var l = 0; l < this.props.initial.length; l++) {
      // console.log(this.props.initial.length);
      console.log(this.props.initial[l]);
      s[this.props.initial[l].name] = this.existKey(this.props.initial[l].name);
    }

    ;
    console.log(s);
    this.setState((0, _extends2["default"])({}, s)); // console.log(s)

    this.existKey('');
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    var _this3 = this;

    // console.log('componentWillReceiveProps----this.props.id',nextProps.id)
    _eventBus["default"].addListener(nextProps.id, function (data) {
      // console.log('componentWillReceiveProps',nextProps.id, data);
      // console.log(this.props.id)
      // setVisible(data)
      _this3.setState({
        visible: data
      });
    });
  };

  _proto.existKey = function existKey(key) {
    //1、url截取?之后的字符串(不包含?)
    var pathSearch = window.location.search.substr(1);
    var result = []; //2、以&为界截取参数键值对

    var paramItems = pathSearch.split("&");
    console.log(paramItems); // 3、将键值对形式的参数存入数组

    for (var i = 0; i < paramItems.length; i++) {
      var paramKey = paramItems[i].split("=")[0];
      var paramValue = paramItems[i].split("=")[1];

      if (paramKey == key) {
        result = paramValue;
        return result;
      }
    } // console.log(result[0].value)
    // result[]
    // console.log('sss')

  };

  _proto.handleOk = function handleOk() {
    console.log('111112222');
    this.setState({
      visible: false
    });
  };

  _proto.handleCancel = function handleCancel() {
    this.setState({
      visible: false
    });
  };

  _proto.render = function render() {
    var children = this.props.children;
    var visible = this.state.visible;
    console.log(this.state);
    return /*#__PURE__*/React.createElement("div", {
      className: "pageH"
    }, children);
  };

  return ColorfulPage;
}(React.Component);

ColorfulPage.defaultProps = {
  "id": "",
  "componentAlias": "",
  "initial": [{
    "name": "id",
    "textContent": "1"
  }, {
    "name": "name",
    "textContent": "2"
  }]
};
var _default = ColorfulPage;
exports["default"] = _default;