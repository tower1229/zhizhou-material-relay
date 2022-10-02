import * as React from 'react';
import { createElement } from 'react';
import { Input, Icon } from '@alifd/next';
import { bizCssPrefix } from '../../variables';

import { PlusOutlined, UserOutlined } from '@ant-design/icons';
import './index.scss';

export interface ColorfulInputProps {
  color?: 'string';
  style?: 'object'
}

const ColorfulInput: React.FC<ColorfulInputProps> = function ColorfulInput({
  color,
  style = {},
  ...otherProps
}) {
  const _style = style || {};
  if (color) {
    _style.backgroundColor = color;
  }
  const _otherProps = otherProps || {};
  _otherProps.style = _style;
  return (
    <div>
<Icon type="atm" />
<PlusOutlined />
      <Input { ..._otherProps } />
    </div>
  );
};

export default ColorfulInput;
