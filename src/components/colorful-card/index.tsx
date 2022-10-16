import React, { createElement, useState } from 'react';
import { DownOutlined, QuestionCircleFilled } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
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
  headerExt?: Object[];
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
        <div style={{ flex: 1 }}>
          {props.description ? (
            <Tooltip title={props.description}>
              <QuestionCircleFilled style={{ fontSize: '16px', color: '#999' }} />
            </Tooltip>
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
                      : () => console.log('onClick')
                  }
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
