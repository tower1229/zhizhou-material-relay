import * as React from 'react';
import { createElement } from 'react';
import { Tabs as OriginalTabs, Button } from 'antd';
import './index.scss';

export interface ColorfulTabProps {
  /**
   * 类型
   */
  alias?: String;
  tabTags: Object[];
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

  return <OriginalTabs {...props} tabBarExtraContent={tabBarExtraContent} />;
};

ColorfulTab.displayName = 'ColorfulTab';

export default ColorfulTab;
