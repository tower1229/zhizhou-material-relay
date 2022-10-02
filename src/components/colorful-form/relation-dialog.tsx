import * as React from 'react';
import { createElement } from 'react';
import './index.scss';

// import { Input } from '@alifd/next';

import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Space,
  Switch,
  Radio,
  Checkbox,
  InputNumber,
  message,
  Upload,
  Modal,
  Table,
} from 'antd';

const { Search } = Input;

import { useState } from 'react';

type RelationDialogProps = {
  getShowClick: Function;
  getUser: Function;
};

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

class RelationDialog extends React.Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      oneUser: [],
      selectedRowKeys: '',
      selectedRows: {}
    };
  }

  componentDidMount() {
    // if (this.props.isModalVisible) {
    //   console.log(12345612345);
    // }
  }

  componentWillReceiveProps(nextProps, preState) {
    // if (nextProps.isModalVisible) {
    //   console.log(12345612345);
    // }
  }
  // const { getShowClick, getUser } = props;

  // const { tableData, isModalVisible, columns, id } = props; //id用于查询列表的表头和表体

  // const [isModalVisible, setIsModalVisible] = useState(false);

  getList = () => {};

  handleOk() {
    const {selectedRows} = this.state
    this.props.getShowClick(false);
    this.props.getUser(selectedRows);
  }

  handleCancel() {
    this.props.getShowClick(false);
  }
  onSearch(value: string) {
    console.log(value);
  }

  render() {
    const { tableData, isModalVisible, columns, id } = this.props;

    const rowSelection = {
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.setState({
          selectedRowKeys,
          selectedRows,
        });
        // setOneUser(selectedRows);
        //  getUser(selectedRows)
      },
      getCheckboxProps: (record: DataType) => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    return (
      <div>
        <Modal
          title={`关联对象`}
          visible={isModalVisible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}
          width={'50vw'}
        >
          <Search
            placeholder="input search text"
            onSearch={(value: string) => this.onSearch(value)}
            style={{ width: 200, marginBottom: 20 }}
          />
          <Table
            rowSelection={{
              type: 'radio',
              ...rowSelection,
            }}
            style={{ width: '100%' }}
            scroll={{ x: 600 }}
            columns={columns}
            dataSource={tableData}
            // pagination={{ total: 50, defaultCurrent: 3 }}
            pagination={false}
          />
        </Modal>
      </div>
    );
  }
}

export default RelationDialog;
