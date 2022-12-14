import * as React from 'react';
import { createElement } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

// import { Input } from '@alifd/next';

import { Modal, message } from 'antd';

import Bus from '../../utils/eventBus';

export interface ColorfulDialogProps {
  key: React.Key;
  visible: boolean;
  name: string;
  width: number;
  title: string;
  footer?: React.ReactElement;
}

class ColorfulDialog extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.warn('getDerivedStateFromProps', props);
    return {
      visible: props.visible,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
    };
  }

  componentDidMount() {
    if (this.props.__designMode === 'design') {
      // 低代码编辑态中强制显示，将控制权交给引擎侧
      this.setState({
        visible: true,
      });
    }
    Bus.addListener(this.props.id, (data) => {
      this.setState({
        visible: data,
      });
    });
  }

  handleOk() {
    this.setState({
      visible: false,
    });
  }

  handleCancel() {
    this.setState({
      visible: false,
    });
  }

  // 气泡确认框的操作
  confirmProp() {
    message.success('提交成功');
  }

  cancelProp() {
    message.error('取消提交');
  }

  render() {
    return (
      <div>
        <Modal
          {...this.props}
          visible={this.state.visible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}
          width={+this.props.width || undefined}
          footer={this.props.footer || null}
        >
          {this.props.children || null}
        </Modal>
      </div>
    );
  }
}

export default ColorfulDialog;
