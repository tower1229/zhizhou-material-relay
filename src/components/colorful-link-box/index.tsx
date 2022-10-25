import * as React from 'react';
import { createElement } from 'react';
import './index.scss';

const ColorfulLinkBox: any = (props: any) => {
  console.warn('ColorfulLinkBox=', props);

  return <div>{JSON.stringify(props)}</div>;
};

export default ColorfulLinkBox;
