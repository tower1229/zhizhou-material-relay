import * as React from 'react';
import { createElement } from 'react';

export default class Iframe extends React.Component {
  render() {
    return <iframe seamless frameBorder="0" {...this.props} />;
  }
}
