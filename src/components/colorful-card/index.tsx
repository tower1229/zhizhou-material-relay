import React, { createElement, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Tooltip, Popconfirm } from 'antd';

import './index.scss';

export interface ColorfulCardProps {
  /**
   * 类型
   */
  styleTyle: 'normal' | 'transparent';
  title: string;
  subTitle?: string;
  description?: string;
  withBorder: boolean;
  withCollapse: boolean;
  withPadding: boolean;
  headerExt?: array;
}

const ColorfulCard: React.FC<ColorfulCardProps> = function (props) {
  console.warn('ColorfulCard=', props);
  const [visible, toggleVisible] = useState(true);

  function handleToggleButtonClick() {
    toggleVisible(!visible);
  }

  function handleBtnClick(actionList) {
    console.warn('handleBtnClick', actionList);
  }

  return (
    <div
      class={`colorful-card colorful-card-${props.styleTyle} ${
        props.withBorder ? 'colorful-card-bordered' : ''
      } ${props.withPadding ? 'colorful-card-padding' : ''}`}
    >
      <div class="colorful-card-header">
        <div class="colorful-card-header-title">
          {props.title}
          {props.subTitle ? (
            <div class="colorful-card-header-subtitle">{props.subTitle}</div>
          ) : null}
        </div>

        <div class="colorful-card-header-extra">
          {Array.isArray(props.headerExt)
            ? props.headerExt.map((btn, idx) => (
                <Button
                  key={`btn_${idx}`}
                  onClick={
                    btn.actionList.find((ite) => ite.name === 'onClick') !== -1
                      ? () => handleBtnClick(btn.actionList)
                      : () => {}
                  }
                  className="btn"
                  type="primary"
                >
                  {btn.title}
                </Button>
              ))
            : null}
          {props.withCollapse ? (
            <Button onClick={handleToggleButtonClick}>
              {visible ? '收起' : '展开'}
              <DownOutlined
                class={`colorful-card-toggle-btn colorful-card-toggle-${visible ? 'show' : 'hide'}`}
              />
            </Button>
          ) : null}
        </div>
      </div>
      <div class={`colorful-card-body colorful-card-body-${visible ? 'show' : 'hide'}`}>
        {props.children}
      </div>
    </div>
  );
};

ColorfulCard.displayName = 'ColorfulCard';

export default ColorfulCard;
