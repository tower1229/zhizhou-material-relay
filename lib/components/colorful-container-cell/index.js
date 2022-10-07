"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var ColorfulContainerCell = function ColorfulContainerCell(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: props.flexNumber,
      overflow: 'hidden'
    }
  }, props.children);
};

ColorfulContainerCell.displayName = 'ColorfulContainerCell';
var _default = ColorfulContainerCell;
exports["default"] = _default;