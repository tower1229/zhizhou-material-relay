import * as React from 'react';
import { createElement } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

// import { Input } from '@alifd/next';

import { Modal, message } from 'antd';

import Bus from '../../utils/eventBus';

// type selfProps = {
//   getShow: Function;
//   getUser: Function;
// };

export const ColorfulDialogProps = {
  key: React.key,
  id: PropTypes.number,
  width: PropTypes.number,
  visible: PropTypes.bool,
  footer: PropTypes.element,
};

class ColorfulDialog extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.warn('getDerivedStateFromProps');
    return {
      visible: props.visible,
    };
  }

  constructor(props) {
    super(props);
    console.warn('constructor');
    this.state = {
      visible: props.visible,
    };
  }

  componentDidMount() {
    console.log('componentDidMount', this.props);
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
    const { footer } = this.props;

    return (
      <div>
        <Modal
          // title={dialogTitle}
          {...this.props}
          visible={this.state.visible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}
          width={+this.props.width}
          footer={footer || null}
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

ColorfulDialog.propTypes = ColorfulDialogProps;
ColorfulDialog.displayName = 'ColorfulDialog';

export default ColorfulDialog;
