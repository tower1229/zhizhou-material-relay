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
  offset: {
    height: number;
    marginTop: number;
  };
}

const ColorfulIframe: React.FC<ColorfulIframeProps> = function (props) {
  console.warn('ColorfulIframe=', props);

  return (
    <Iframe
      src={props.url}
      width="100%"
      height={props.autoHeight ? '100%' : props.offset?.height || 500}
      style={{ marginTop: props.autoHeight ? 0 : `${props.offset?.marginTop || 0}px` }}
    />
  );
};

ColorfulIframe.displayName = 'ColorfulIframe';
export default ColorfulIframe;
