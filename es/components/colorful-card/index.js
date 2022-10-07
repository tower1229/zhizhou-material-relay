import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import Button from "../colorful-button/";
import "./index.scss";

var ColorfulCard = function ColorfulCard(props) {
  console.warn('ColorfulCard=', props);

  var _useState = useState(true),
      visible = _useState[0],
      toggleVisible = _useState[1];

  function handleToggleButtonClick() {
    toggleVisible(!visible);
  }

  return /*#__PURE__*/React.createElement("div", {
    "class": "colorful-card colorful-card-" + props.styleTyle + " " + (props.withBorder ? 'colorful-card-bordered' : '') + " " + (props.withPadding ? 'colorful-card-padding' : '')
  }, /*#__PURE__*/React.createElement("div", {
    "class": "colorful-card-header"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "colorful-card-header-title"
  }, props.title, props.subTitle ? /*#__PURE__*/React.createElement("div", {
    "class": "colorful-card-header-subtitle"
  }, props.subTitle) : null), /*#__PURE__*/React.createElement("div", {
    "class": "colorful-card-header-extra"
  }, Array.isArray(props.headerExt) ? props.headerExt.map(function (ext) {
    return /*#__PURE__*/React.createElement(Button, {
      key: ext.key,
      onClick: ext.onClick || function () {
        return null;
      }
    }, ext.text);
  }) : null, props.withCollapse ? /*#__PURE__*/React.createElement(Button, {
    onClick: handleToggleButtonClick
  }, visible ? '收起' : '展开', /*#__PURE__*/React.createElement(DownOutlined, {
    "class": "colorful-card-toggle-btn colorful-card-toggle-" + (visible ? 'show' : 'hide')
  })) : null)), /*#__PURE__*/React.createElement("div", {
    "class": "colorful-card-body colorful-card-body-" + (visible ? 'show' : 'hide')
  }, props.children));
};

ColorfulCard.displayName = 'ColorfulCard';
export default ColorfulCard;