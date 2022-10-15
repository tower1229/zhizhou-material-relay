import _Button from "antd/es/button";
import _Tooltip from "antd/es/tooltip";
import React, { useState } from 'react';
import { DownOutlined, QuestionCircleFilled } from '@ant-design/icons';
import "./index.scss";

var ColorfulCard = function ColorfulCard(props) {
  console.warn('ColorfulCard=', props);

  var _useState = useState(true),
      visible = _useState[0],
      toggleVisible = _useState[1];

  function handleToggleButtonClick() {
    toggleVisible(!visible);
  }

  function handleBtnClick(actionList) {
    console.warn('handleBtnClick', actionList);
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
    style: {
      flex: 1
    }
  }, props.description ? /*#__PURE__*/React.createElement(_Tooltip, {
    title: props.description
  }, /*#__PURE__*/React.createElement(QuestionCircleFilled, {
    style: {
      fontSize: '16px',
      color: '#999'
    }
  })) : null), /*#__PURE__*/React.createElement("div", {
    "class": "colorful-card-header-extra"
  }, Array.isArray(props.headerExt) ? props.headerExt.map(function (btn, idx) {
    return /*#__PURE__*/React.createElement(_Button, {
      key: "btn_" + idx,
      onClick: btn.actionList.find(function (ite) {
        return ite.name === 'onClick';
      }) !== -1 ? function () {
        return handleBtnClick(btn.actionList);
      } : function () {
        return console.log('onClick');
      },
      type: "primary"
    }, btn.title);
  }) : null, props.withCollapse ? /*#__PURE__*/React.createElement(_Button, {
    onClick: handleToggleButtonClick
  }, visible ? '收起' : '展开', /*#__PURE__*/React.createElement(DownOutlined, {
    "class": "colorful-card-toggle-btn colorful-card-toggle-" + (visible ? 'show' : 'hide')
  })) : null)), /*#__PURE__*/React.createElement("div", {
    "class": "colorful-card-body colorful-card-body-" + (visible ? 'show' : 'hide')
  }, props.children));
};

ColorfulCard.displayName = 'ColorfulCard';
export default ColorfulCard;