import * as React from 'react';
import "./index.scss";

var ColorfulContainer = function ColorfulContainer(props) {
  console.warn('ColorfulContainer=', props);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: props.direction || 'row',
      gap: (props.gap || 0) + "px",
      alignItems: 'stretch',
      height: props.autoHeight ? '100%' : props.height || 500
    }
  }, props.children);
};

ColorfulContainer.displayName = 'ColorfulContainer';
export default ColorfulContainer;