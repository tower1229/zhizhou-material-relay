var ColorfulContainerCell = function ColorfulContainerCell(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: props.flexNumber,
      overflow: 'hidden'
    }
  }, props.children);
};

ColorfulContainerCell.displayName = 'ColorfulContainerCell';
export default ColorfulContainerCell;