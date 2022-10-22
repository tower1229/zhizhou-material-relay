import * as React from 'react';
import { createElement } from 'react';
import { Tabs as OriginalTabs, Button } from 'antd';
import './index.scss';

export interface ColorfulTabProps {
  /**
   * 类型
   */
  alias?: String;
  tabs: Object[];
  tabType: 'line' | 'card' | 'text' | 'capsule';
  headerExt?: Object[];
}

const ColorfulTab: React.FC<ColorfulTabProps> = function (props: ColorfulTabProps) {
  console.warn('ColorfulTab=', props);

  const tabBarExtraContent = (
    <div class="colorful-tab-header-extra">
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
    </div>
  );

  const customProps = {
    ...props,
    onChange: (activeKey) => {
      console.log(activeKey, props.tabs);
      typeof props.onChange === 'function' && props.onChange();
    },
  };

  return <OriginalTabs {...customProps} tabBarExtraContent={tabBarExtraContent} />;
};

ColorfulTab.displayName = 'ColorfulTab';

export default ColorfulTab;
