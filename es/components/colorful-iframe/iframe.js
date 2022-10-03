import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import * as React from 'react';

var Iframe = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Iframe, _React$Component);

  function Iframe() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Iframe.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("iframe", _extends({
      seamless: true,
      frameBorder: "0"
    }, this.props));
  };

  return Iframe;
}(React.Component);

export { Iframe as default };