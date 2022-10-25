import _Tabs from "antd/es/tabs";
import _extends from "@babel/runtime/helpers/extends";
import _Button from "antd/es/button";
import * as React from 'react';
import "./index.scss";

var ColorfulTab = function ColorfulTab(props) {
  console.warn('ColorfulTab=', props);
  var tabBarExtraContent = /*#__PURE__*/React.createElement("div", {
    "class": "colorful-tab-header-extra"
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
  }) : null);

  var customProps = _extends({}, props, {
    onChange: function onChange(activeKey) {
      var targetItem = props.tabs.filter(function (tab) {
        return tab.key === activeKey;
      }).length ? props.tabs.filter(function (tab) {
        return tab.key === activeKey;
      })[0] : null;

      if (targetItem) {
        console.log('Tabs trigger change:', activeKey, targetItem);
      }

      typeof props.onChange === 'function' && props.onChange();
    }
  });

  return /*#__PURE__*/React.createElement(_Tabs, _extends({}, customProps, {
    tabBarExtraContent: tabBarExtraContent,
    className: props.type && props.type.indexOf('cumstom-') === 0 ? props.type : ''
  }));
};

ColorfulTab.displayName = 'ColorfulTab';
export default ColorfulTab;