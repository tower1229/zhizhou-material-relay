import { Typography } from 'antd';
import React from 'react';
import { createElement } from 'react';
import './index.scss';

const { Link } = Typography;

export interface ColorfulLinkProps {
  /**
   * 类型
   */
  alias?: 'string';
  url?: 'string';
  autoHeight: 'boolean';
  offset: {
    height: number;
    marginTop: number;
  };
}

const ColorfulLink: React.FC<ColorfulLinkProps> = function (props) {
  console.warn('ColorfulLink=', props);

  return <Link {...props} />;
};

ColorfulLink.displayName = 'ColorfulLink';

export default ColorfulLink;
