import * as React from 'react';
import { createElement } from 'react';
import './index.scss';
import Iframe from './iframe';

export interface ColorfulIframeProps {
  /**
   * 类型
   */
  alias?: 'string';
  url?: 'string';
  autoHeight: 'boolean';
  offset: 'object';
}

const ColorfulIframe: React.FC<ColorfulIframeProps> = function (props) {
  console.warn('ColorfulIframe=', props);
  return (
    <Iframe
      src={props.url}
      width="100%"
      height={props.autoHeight ? '100%' : props.offset?.height || 500}
      style={{ marginTop: (props.offset?.marginTop || 0) + 'px' }}
    />
  );
};

ColorfulIframe.displayName = 'ColorfulIframe';
export default ColorfulIframe;
