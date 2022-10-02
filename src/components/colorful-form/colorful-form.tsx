import * as React from 'react';
import { createElement, useEffect, useState, useRef, useContext } from 'react';
import './index.scss';
import moment from 'moment';
import type { Moment } from 'moment';
// import { Input } from '@alifd/next';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Switch,
  Radio,
  Checkbox,
  InputNumber,
  message,
  Upload,
  Row,
  Col,
  Table,
  Tooltip,
  Popconfirm,
  Modal,
  TimePicker,
  Cascader,
} from 'antd';

import Bus from '../../utils/eventBus';
import { func } from 'prop-types';

import type { TableRowSelection } from 'antd/lib/table/interface';
import type { ColumnsType } from 'antd/lib/table';

// import { UploadOutlined } from '@ant-design/icons';
import { FileAddFilled, PlusOutlined, ReadOutlined, UserOutlined } from '@ant-design/icons';

import ClickDialog from './relation-dialog';

const { TextArea } = Input;
const { Option } = Select;

// import { createFromIconfontCN } from '@ant-design/icons';

// const IconFont = createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_3324425_berrts5o6c.js',
// });

// window._eventMap = new Map()
//   window._eventMap.set(key,value)

import {
  getPagesList,
  logPages,
  addPages,
  metaInfo,
  dataTable,
  getOptionListOrTree,
  getFormData
} from '../../api/pages';
import type { FormInstance } from 'antd/lib/form';
import { render } from 'react-dom';

const EditableContext = React.createContext<FormInstance<any> | null>(null);

class EditableCell extends React.Component {
  static contextType = EditableContext;
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      value: '',
      option: [],
      relationVisible: false,
      tabelColumnsBtn: [],
      tableRealtaionData: [],
      relationDataList: {},
    };
    // this.form = useContext(EditableContext)!;
  }

  async componentDidMount() {
    const { columnType } = this.props.field;
    // console.log('EditableContext', this.context);
    // dataIndex && form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    if (
      columnType === 'SINGLE_CHOICE' ||
      columnType === 'MULTI_CHOICE' ||
      columnType === 'SINGLE_CHOICE_TREE' ||
      columnType === 'MULTI_CHOICE_TREE'
    ) {
      await this.getSingleChoiceOpions(this.props.field, this.props.objectApiName);
    }
  }

  async componentWillReceiveProps(nextProps, preState) {
    // console.log('nextProps', nextProps)
    // new Child(nextProps).getColumn();
    // dataIndex && form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    const { columnType } = nextProps.field;
    if (
      columnType === 'SINGLE_CHOICE' ||
      columnType === 'MULTI_CHOICE' ||
      columnType === 'SINGLE_CHOICE_TREE' ||
      columnType === 'MULTI_CHOICE_TREE'
    ) {
      await this.getSingleChoiceOpions(nextProps.field, nextProps.objectApiName);
    }
  }
  componentWillUnmount() {
    this.setState = () => false;
  }
  async getFormDataFuc(data) {
    const res = await getFormData(data)
    console.log('getFormDataFuc',res)
  }

  async getSingleChoiceOpions(item, objectApiName) {
    const { itemList } = this.props;
    let res = await getOptionListOrTree({
      objectApiName: objectApiName,
      columnApiName: item.apiName,
    });

    this.setState({
      option: res.data.options || [],
    });
    // let options = this.state.options;
    // options[item.apiName] = res.data.options || [];

    // this.setState({
    //   options,
    // });
  }

  async save() {
    const values = await this.context.validateFields();
    // console.log(this.props.record, values);
    this.props.handleSave({ ...this.props.record, ...values });
    // toggleEdit();
  }

  //子表格的时间选择
  async onSwitchTableChange(value) {
    // console.log(value);
    try {
      const values = await this.context.validateFields();
      // console.log(record, values);
      this.props.handleSave({ ...record, ...values });
      // toggleEdit();
    } catch (errInfo) {
      // console.log('Save failed:', errInfo);
    }
  }

  //子表格的switchs
  onChangeTable() {
    // console.log('onChangeTable');
  }

  //子表格的单选
  onRadioTableChange() {
    // console.log('onRadioTableChange');
  }

  //SINGLE_CHOICE_TREE
  handleSelectTableChange() {
    // console.log('handleSelectTableChange');
  }

  //MULTI_CHOICE
  onCheckTableChange() {
    // console.log('onCheckTableChange');
  }

  //MULTI_CHOICE_TREE'
  onSelectArrTableChange() {
    // console.log('onSelectArrTableChange');
  }
  // 按钮弹窗传值
  getShowTableClick(val) {
    this.setState({
      relationVisible: val,
    });
  }

  getTableRealtaionList(val) {
    console.log('one user', val, this.context, this.props);
    const { tableInputName, tableRelationItem } = this.state;
    const { field } = this.props;
    let inputNameObj = {};
    let name = `${tableRelationItem.columnConfig.relationObjectApiName}0_name`;
    let id = `${tableRelationItem.columnConfig.relationObjectApiName}0_id`;

    // console.log('ddddddd', name, id);
    inputNameObj[`${tableInputName}_name`] = val[0][name];

    inputNameObj[tableInputName] = val[0][id];

    // console.log('88888888', inputNameObj, this.formRef.current);
    this.context!.setFieldsValue(inputNameObj);
    let relationDataList = this.state.relationDataList;
    relationDataList[tableRelationItem.columnConfig.relationObjectApiName] = val[0];
    console.log('relationDataList', relationDataList);
    this.setState({
      relationDataList: JSON.parse(JSON.stringify(relationDataList)),
    });
    this.save();

    // subEntityList[tableIndex].tableData2[tableLineIndex] = {
    //   ...subEntityList[tableIndex].tableData2[tableLineIndex],
    //   ...inputNameObj,
    // };
    // console.log('subEntityList', subEntityList);
    // this.setState({
    //   subEntityList: JSON.parse(JSON.stringify(subEntityList)),
    // });
  }

  async relationClick(item) {
    console.log('21231', item);
    if (!item.relationList) {
      message.warning('请先配置关联对象表格选项');
      return;
    }
    let column = [];
    item.relationList?.forEach((i) => {
      let obj = {};
      obj.title = i.name;
      obj.key = i.apiName;
      obj.dataIndex = `${item.columnConfig.relationObjectApiName}0_${i.apiName}`;
      obj.width = 100;
      column.push(obj);
    });

    this.setState({
      tabelColumnsBtn: column,
    });

    let queryColumns = [];

    item.relationList?.forEach((i) => {
      let obj = {
        objectApiName: item.columnConfig.relationObjectApiName,
        columnApiName: i.apiName,
        joinColumnApiName: i.joinColumnApiName,
        entityId: i.entityId,
        format: i.format,
      };
      queryColumns.push(obj);
    });

    let data = {
      // filters: [
      //   {
      //     metaKey: '',
      //     filterType: '',
      //     value: '',
      //   },
      // ],
      mainObjectApiName: item.columnConfig.relationObjectApiName,
      pageNo: 0,
      pageSize: 10,
      queryColumns: queryColumns,
    };
    let res = await dataTable(data);
    let list = res.data.data;
    list.forEach((e) => {
      let id = `${item.columnConfig.relationObjectApiName}0_id`;
      e.key = e[id];
    });

    this.setState({
      relationVisible: true,
      tableRealtaionData: list,
      tableInputName: item.apiName,
      tableRelationItem: item,
      // tableIndex: index,
      // tableLineIndex: record.key,
    });
  }

  render() {
    const { children, dataIndex, columnType, field, record } = this.props;
    const {
      value,
      option,
      relationVisible,
      tabelColumnsBtn,
      tableRealtaionData,
      relationDataList,
    } = this.state;

    // console.log('record', record)
    let childNode = children;

    // if (editable) {
    // childNode = editing ? (

    //子表格区别
    switch (columnType) {
      case 'TEXT':
        childNode = (
          <Form.Item style={{ margin: 0, width: 100 }} name={dataIndex} rules={[]}>
            <Input onPressEnter={() => this.save()} onBlur={() => this.save()} />
          </Form.Item>
        );
        break;

      case 'TEXTAREA':
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
            <TextArea placeholder="请输入文本" autoSize onBlur={() => this.save()} />
          </Form.Item>
        );
        break;
      case 'DATE':
        childNode = (
          <Form.Item style={{ margin: 0, width: 200 }} name={dataIndex} rules={[]}>
            <DatePicker onChange={() => this.save()} />
          </Form.Item>
        );
        break;

      case 'RELATIONSHIP':
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
            <div className="relation" onClick={() => this.relationClick(field, record.key)}>
              <div className="relation-left">
                {this.context?.getFieldValue(`${dataIndex}_name`)}
              </div>
              <div>+</div>
            </div>
            <ClickDialog
              getShowClick={() => this.getShowTableClick()}
              getUser={(val) => this.getTableRealtaionList(val)}
              columns={tabelColumnsBtn}
              tableData={tableRealtaionData}
              isModalVisible={relationVisible}
            />
          </Form.Item>
        );
        break;
      case 'QUOTE':
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
            <div>
              {relationDataList[field.columnConfig.quoteObjectApiName] &&
                relationDataList[field.columnConfig.quoteObjectApiName][
                  `${field.columnConfig.quoteObjectApiName}0_${field.columnConfig.quoteColumnApiName}`
                ]}
            </div>
          </Form.Item>
        );
        break;

      case 'BOOL':
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
            <Switch onChange={() => this.save()} />
          </Form.Item>
        );
        break;

      case 'SINGLE_CHOICE':
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
            {/* <Radio.Group onChange={() => this.save()} value={value}>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3}>C</Radio>
              <Radio value={4}>D</Radio>
            </Radio.Group> */}

            {field.columnConfig.singleChoiceType === 'DROP_LIST' ? (
              <Select defaultValue="" style={{ minWidth: 200 }}>
                {option &&
                  option.map((item, index) => {
                    return (
                      <Option value={item.apiName} key={index}>
                        {item.name}
                      </Option>
                    );
                  })}
              </Select>
            ) : (
              <Radio.Group>
                {option &&
                  option.map((item, index) => {
                    return (
                      <Radio value={item.apiName} key={index}>
                        {item.name}
                      </Radio>
                    );
                  })}
              </Radio.Group>
            )}
          </Form.Item>
        );
        break;

      case 'SINGLE_CHOICE_TREE':
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
            <Cascader
              style={{ minWidth: 200 }}
              options={option || []}
              placeholder="Please select"
              fieldNames={{
                label: 'name',
                value: 'apiName',
              }}
            />
          </Form.Item>
        );
        break;

      case 'MULTI_CHOICE':
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
            {field.columnConfig.multiChoiceType === 'DROP_LIST' ? (
              <Select mode="multiple" allowClear style={{ minWidth: 200, maxWidth: 300 }}>
                {option &&
                  option.map((item, index) => {
                    return (
                      <Option value={item.apiName} key={index}>
                        {item.name}
                      </Option>
                    );
                  })}
              </Select>
            ) : (
              <Checkbox.Group>
                {option &&
                  option.map((field, index) => (
                    <Checkbox value={field.apiName}>{field.name}</Checkbox>
                  ))}
              </Checkbox.Group>
            )}
          </Form.Item>
        );
        break;

      case 'MULTI_CHOICE_TREE':
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
            <Cascader
              style={{ minWidth: 200 }}
              multiple
              options={option || []}
              placeholder="Please select"
              fieldNames={{
                label: 'name',
                value: 'apiName',
              }}
            />
          </Form.Item>
        );
        break;

      case 'INTEGER':
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
            <InputNumber onBlur={() => this.save()} precision={0} />
          </Form.Item>
        );
        break;

      case 'DECIMAL':
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
            <InputNumber onBlur={() => this.save()} precision={0} />
          </Form.Item>
        );
        break;
      case 'MONEY':
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
            <InputNumber onBlur={() => this.save()} prefix="￥" style={{ width: '100%' }} />
          </Form.Item>
        );
        break;

      case 'PHONE':
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
            <Input onBlur={() => this.save()} maxLength={11} placeholder={`请填写${dataIndex}`} />
          </Form.Item>
        );
        break;

      case 'ID_CARD':
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
            <Input onBlur={() => this.save()} maxLength={18} placeholder={`请填写${dataIndex}`} />
          </Form.Item>
        );
        break;
      case 'FILE':
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
            <Upload {...this.props}>
              <Button>上传文件</Button>
            </Upload>
          </Form.Item>
        );
        break;

      case 'WEBSITE':
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
            <Input onBlur={() => this.save()} placeholder={`请填写${dataIndex}`} />
          </Form.Item>
        );
        break;
      case 'EMAIL':
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
            <Input onBlur={() => this.save()} placeholder={`请填写${dataIndex}`} />
          </Form.Item>
        );
        break;
      case 'ITEM_DETAIL':
        childNode = <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}></Form.Item>;
        break;

      default:
        break;
    }
    return <td>{childNode}</td>;
  }
}

const EditableRow: React.FC<any> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  const resetForm = () => {
    form.resetFields();
  };
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

export interface ColorfulFormProps {
  color?: 'string';
  style?: 'object';
  entity?: 'array';
  itemList?: 'any';
  wid?: 'string';
  actionBtnList: 'any';
  initial: 'any';
  tableData: 'array';
  tableData2: 'array';
  tableDataBtn: 'array';

  columns: 'any';
  columnsBtn: 'any';
  columns2: 'any';
  subEntity: 'any';
}

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const getBase64 = (file): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

class ColorfulForm extends React.Component {
  static contextType = EditableContext;
  static defaultProps = {
    componentAlias: '',
    layout: '24',
    itemList: {
      entityName: {
        apiName: 'student',
        desc: '学生描述',
        enabled: false,
        iconId: '0',
        id: '1564517573381324800',
        name: '学生',
        structure: 'NORMAL',
      },
      entity: [
        {
          apiName: 'name',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 50,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'TEXT',
          columnTypeGroup: 'TEXT',
          defaultUse: true,
          name: '学生姓名',
          index: 0,
        },
        {
          apiName: 'province',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: 'province',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: 'DROP_LIST',
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'SINGLE_CHOICE',
          columnTypeGroup: 'CHOICE',
          defaultUse: true,
          name: '省份',
          index: 1,
        },
        {
          apiName: 'city',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: 'DROP_LIST',
            optionSetApiName: 'city',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'MULTI_CHOICE',
          columnTypeGroup: 'CHOICE',
          defaultUse: true,
          name: '城市',
          index: 2,
        },
        {
          apiName: 'age',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 3,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'INTEGER',
          columnTypeGroup: 'NUMBER',
          defaultUse: true,
          name: '年龄',
          index: 3,
        },
        {
          apiName: 'birthday',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: true,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'DATE',
          columnTypeGroup: 'DATE',
          defaultUse: true,
          name: '生日',
          index: 4,
        },
        {
          apiName: 'graduated',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: 'false',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'BOOL',
          columnTypeGroup: 'OTHER',
          defaultUse: true,
          name: '已毕业',
          index: 5,
        },
        {
          apiName: 'phone',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 11,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '请输入手机号',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: true,
            userMask: false,
          },
          columnType: 'PHONE',
          columnTypeGroup: 'TEXT',
          defaultUse: true,
          name: '联系方式',
          index: 6,
        },
        {
          apiName: 'roomId',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: 'PROMPT_NOT_ALLOW',
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: 'room',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'RELATIONSHIP',
          columnTypeGroup: 'FORBIDDEN',
          defaultUse: true,
          name: '所属教室',
          index: 7,
          relationList: [
            {
              apiName: 'name',
              columnConfig: {
                bachCreateItem: false,
                cascadingDeletionType: null,
                computeType: null,
                copyWidthParent: false,
                createNoForExists: false,
                defaultValue: '',
                encrypted: false,
                endUnMasked: null,
                fileCount: null,
                helpText: '',
                imageCount: null,
                maxLength: 50,
                multiChoiceType: null,
                optionSetApiName: '',
                placeHolder: '',
                preUnMasked: null,
                quoteColumnApiName: '',
                quoteObjectApiName: '',
                relationObjectApiName: '',
                required: false,
                scale: null,
                showTime: false,
                singleChoiceType: null,
                startNo: 0,
                unique: false,
                userMask: false,
              },
              columnType: 'TEXT',
              columnTypeGroup: 'TEXT',
              defaultUse: true,
              name: '教室名称',
            },
            {
              apiName: 'address',
              columnConfig: {
                bachCreateItem: false,
                cascadingDeletionType: null,
                computeType: null,
                copyWidthParent: false,
                createNoForExists: false,
                defaultValue: '',
                encrypted: false,
                endUnMasked: null,
                fileCount: null,
                helpText: '',
                imageCount: null,
                maxLength: 300,
                multiChoiceType: null,
                optionSetApiName: '',
                placeHolder: '',
                preUnMasked: null,
                quoteColumnApiName: '',
                quoteObjectApiName: '',
                relationObjectApiName: '',
                required: false,
                scale: null,
                showTime: false,
                singleChoiceType: null,
                startNo: 0,
                unique: false,
                userMask: false,
              },
              columnType: 'TEXT',
              columnTypeGroup: 'TEXT',
              defaultUse: true,
              name: '教室位置',
            },
            {
              apiName: 'id',
              columnConfig: {
                bachCreateItem: false,
                cascadingDeletionType: null,
                computeType: null,
                copyWidthParent: false,
                createNoForExists: false,
                defaultValue: '',
                encrypted: false,
                endUnMasked: null,
                fileCount: null,
                helpText: '',
                imageCount: null,
                maxLength: null,
                multiChoiceType: null,
                optionSetApiName: '',
                placeHolder: '',
                preUnMasked: null,
                quoteColumnApiName: '',
                quoteObjectApiName: '',
                relationObjectApiName: '',
                required: false,
                scale: null,
                showTime: false,
                singleChoiceType: null,
                startNo: 0,
                unique: false,
                userMask: false,
              },
              columnType: 'ID',
              columnTypeGroup: 'OTHER',
              defaultUse: true,
              name: '主键',
            },
            {
              apiName: 'enabled',
              columnConfig: {
                bachCreateItem: false,
                cascadingDeletionType: null,
                computeType: null,
                copyWidthParent: false,
                createNoForExists: false,
                defaultValue: 'true',
                encrypted: false,
                endUnMasked: null,
                fileCount: null,
                helpText: '',
                imageCount: null,
                maxLength: null,
                multiChoiceType: null,
                optionSetApiName: '',
                placeHolder: '',
                preUnMasked: null,
                quoteColumnApiName: '',
                quoteObjectApiName: '',
                relationObjectApiName: '',
                required: false,
                scale: null,
                showTime: false,
                singleChoiceType: null,
                startNo: 0,
                unique: false,
                userMask: false,
              },
              columnType: 'BOOL',
              columnTypeGroup: 'OTHER',
              defaultUse: false,
              name: '已启用',
            },
            {
              apiName: 'deleted',
              columnConfig: {
                bachCreateItem: false,
                cascadingDeletionType: null,
                computeType: null,
                copyWidthParent: false,
                createNoForExists: false,
                defaultValue: 'false',
                encrypted: false,
                endUnMasked: null,
                fileCount: null,
                helpText: '',
                imageCount: null,
                maxLength: null,
                multiChoiceType: null,
                optionSetApiName: '',
                placeHolder: '',
                preUnMasked: null,
                quoteColumnApiName: '',
                quoteObjectApiName: '',
                relationObjectApiName: '',
                required: false,
                scale: null,
                showTime: false,
                singleChoiceType: null,
                startNo: 0,
                unique: false,
                userMask: false,
              },
              columnType: 'BOOL',
              columnTypeGroup: 'OTHER',
              defaultUse: false,
              name: '已删除',
            },
            {
              apiName: 'createAt',
              columnConfig: {
                bachCreateItem: false,
                cascadingDeletionType: null,
                computeType: null,
                copyWidthParent: false,
                createNoForExists: false,
                defaultValue: '',
                encrypted: false,
                endUnMasked: null,
                fileCount: null,
                helpText: '',
                imageCount: null,
                maxLength: null,
                multiChoiceType: null,
                optionSetApiName: '',
                placeHolder: '',
                preUnMasked: null,
                quoteColumnApiName: '',
                quoteObjectApiName: '',
                relationObjectApiName: '',
                required: false,
                scale: null,
                showTime: true,
                singleChoiceType: null,
                startNo: 0,
                unique: false,
                userMask: false,
              },
              columnType: 'DATE',
              columnTypeGroup: 'DATE',
              defaultUse: false,
              name: '创建时间',
            },
            {
              apiName: 'updateAt',
              columnConfig: {
                bachCreateItem: false,
                cascadingDeletionType: null,
                computeType: null,
                copyWidthParent: false,
                createNoForExists: false,
                defaultValue: '',
                encrypted: false,
                endUnMasked: null,
                fileCount: null,
                helpText: '',
                imageCount: null,
                maxLength: null,
                multiChoiceType: null,
                optionSetApiName: '',
                placeHolder: '',
                preUnMasked: null,
                quoteColumnApiName: '',
                quoteObjectApiName: '',
                relationObjectApiName: '',
                required: false,
                scale: null,
                showTime: true,
                singleChoiceType: null,
                startNo: 0,
                unique: false,
                userMask: false,
              },
              columnType: 'DATE',
              columnTypeGroup: 'DATE',
              defaultUse: true,
              name: '最后修改时间',
            },
            {
              apiName: 'createBy',
              columnConfig: {
                bachCreateItem: false,
                cascadingDeletionType: 'PROMPT_NOT_ALLOW',
                computeType: null,
                copyWidthParent: false,
                createNoForExists: false,
                defaultValue: '',
                encrypted: false,
                endUnMasked: null,
                fileCount: null,
                helpText: '',
                imageCount: null,
                maxLength: null,
                multiChoiceType: null,
                optionSetApiName: '',
                placeHolder: '',
                preUnMasked: null,
                quoteColumnApiName: '',
                quoteObjectApiName: '',
                relationObjectApiName: 'sys_user',
                required: false,
                scale: null,
                showTime: false,
                singleChoiceType: null,
                startNo: 0,
                unique: false,
                userMask: false,
              },
              columnType: 'RELATIONSHIP',
              columnTypeGroup: 'FORBIDDEN',
              defaultUse: false,
              name: '创建人',
            },
            {
              apiName: 'updateBy',
              columnConfig: {
                bachCreateItem: false,
                cascadingDeletionType: 'PROMPT_NOT_ALLOW',
                computeType: null,
                copyWidthParent: false,
                createNoForExists: false,
                defaultValue: '',
                encrypted: false,
                endUnMasked: null,
                fileCount: null,
                helpText: '',
                imageCount: null,
                maxLength: null,
                multiChoiceType: null,
                optionSetApiName: '',
                placeHolder: '',
                preUnMasked: null,
                quoteColumnApiName: '',
                quoteObjectApiName: '',
                relationObjectApiName: 'sys_user',
                required: false,
                scale: null,
                showTime: false,
                singleChoiceType: null,
                startNo: 0,
                unique: false,
                userMask: false,
              },
              columnType: 'RELATIONSHIP',
              columnTypeGroup: 'FORBIDDEN',
              defaultUse: false,
              name: '修改人',
            },
            {
              apiName: 'ownerId',
              columnConfig: {
                bachCreateItem: false,
                cascadingDeletionType: 'PROMPT_NOT_ALLOW',
                computeType: null,
                copyWidthParent: false,
                createNoForExists: false,
                defaultValue: '',
                encrypted: false,
                endUnMasked: null,
                fileCount: null,
                helpText: '',
                imageCount: null,
                maxLength: null,
                multiChoiceType: null,
                optionSetApiName: '',
                placeHolder: '',
                preUnMasked: null,
                quoteColumnApiName: '',
                quoteObjectApiName: '',
                relationObjectApiName: 'sys_user',
                required: false,
                scale: null,
                showTime: false,
                singleChoiceType: null,
                startNo: 0,
                unique: false,
                userMask: false,
              },
              columnType: 'RELATIONSHIP',
              columnTypeGroup: 'FORBIDDEN',
              defaultUse: false,
              name: '所属人',
            },
          ],
          indeterminate: false,
          checkAll: true,
        },
        {
          apiName: 'roomAddress',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: 'address',
            quoteObjectApiName: 'room',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'QUOTE',
          columnTypeGroup: 'FORBIDDEN',
          defaultUse: true,
          name: '所属教室名称',
          index: 8,
        },
        {
          apiName: 'book',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'ITEM_REDUNDANCY',
          columnTypeGroup: 'OTHER',
          defaultUse: true,
          name: '拥有书本',
          index: 9,
        },
        {
          apiName: 'studentFile',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: 3,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'FILE',
          columnTypeGroup: 'FORBIDDEN',
          defaultUse: true,
          name: '学生文件',
          index: 10,
        },
        {
          apiName: 'position',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: 5,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'GEO_POSITION',
          columnTypeGroup: 'FORBIDDEN',
          defaultUse: true,
          name: '位置',
          index: 11,
        },
        {
          apiName: 'xuefei',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '0.0',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 15,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: 2,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'MONEY',
          columnTypeGroup: 'NUMBER',
          defaultUse: true,
          name: '学费',
          index: 12,
        },
        {
          apiName: 'shengao',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '0.00',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 15,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: 3,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'DECIMAL',
          columnTypeGroup: 'NUMBER',
          defaultUse: true,
          name: '身高',
          index: 13,
        },
        {
          apiName: 'l_time',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'TIME',
          columnTypeGroup: 'OTHER',
          defaultUse: true,
          name: '午餐时间',
          index: 14,
        },
        {
          apiName: 'xuehao',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'AUTO_NO',
          columnTypeGroup: 'OTHER',
          defaultUse: true,
          name: '学号',
          index: 15,
        },
        {
          apiName: 'webSite',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 200,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'WEBSITE',
          columnTypeGroup: 'TEXT',
          defaultUse: true,
          name: '网址',
          index: 16,
        },
        {
          apiName: 'email',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 20,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '请输入邮箱',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: true,
            userMask: false,
          },
          columnType: 'EMAIL',
          columnTypeGroup: 'TEXT',
          defaultUse: true,
          name: '邮箱',
          index: 17,
        },
        {
          apiName: 'studentImage',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: 3,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'IMAGE',
          columnTypeGroup: 'FORBIDDEN',
          defaultUse: true,
          name: '学生图片',
          index: 18,
        },
        {
          apiName: 'percent',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: 10,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: 2,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'PERCENT',
          columnTypeGroup: 'NUMBER',
          defaultUse: true,
          name: '排名百分比',
          index: 19,
        },
        {
          apiName: 'tree01',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: 'province',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'SINGLE_CHOICE_TREE',
          columnTypeGroup: 'CHOICE',
          defaultUse: true,
          name: '单选树字段',
          index: 20,
        },
        {
          apiName: 'tree02',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: 'province',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'MULTI_CHOICE_TREE',
          columnTypeGroup: 'CHOICE',
          defaultUse: true,
          name: '多选树字段',
          index: 21,
        },
        {
          apiName: 'id',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'ID',
          columnTypeGroup: 'OTHER',
          defaultUse: true,
          name: '主键',
          index: 22,
        },
        {
          apiName: 'enabled',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: 'true',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'BOOL',
          columnTypeGroup: 'OTHER',
          defaultUse: false,
          name: '已启用',
          index: 23,
        },
        {
          apiName: 'deleted',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: 'false',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'BOOL',
          columnTypeGroup: 'OTHER',
          defaultUse: false,
          name: '已删除',
          index: 24,
        },
        {
          apiName: 'createAt',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: true,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'DATE',
          columnTypeGroup: 'DATE',
          defaultUse: false,
          name: '创建时间',
          index: 25,
        },
        {
          apiName: 'updateAt',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: null,
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: '',
            required: false,
            scale: null,
            showTime: true,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'DATE',
          columnTypeGroup: 'DATE',
          defaultUse: true,
          name: '最后修改时间',
          index: 26,
        },
        {
          apiName: 'createBy',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: 'PROMPT_NOT_ALLOW',
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: 'sys_user',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'RELATIONSHIP',
          columnTypeGroup: 'FORBIDDEN',
          defaultUse: false,
          name: '创建人',
          index: 27,
        },
        {
          apiName: 'updateBy',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: 'PROMPT_NOT_ALLOW',
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: 'sys_user',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'RELATIONSHIP',
          columnTypeGroup: 'FORBIDDEN',
          defaultUse: false,
          name: '修改人',
          index: 28,
        },
        {
          apiName: 'ownerId',
          columnConfig: {
            bachCreateItem: false,
            cascadingDeletionType: 'PROMPT_NOT_ALLOW',
            computeType: null,
            copyWidthParent: false,
            createNoForExists: false,
            defaultValue: '',
            encrypted: false,
            endUnMasked: null,
            fileCount: null,
            helpText: '',
            imageCount: null,
            maxLength: null,
            multiChoiceType: null,
            optionSetApiName: '',
            placeHolder: '',
            preUnMasked: null,
            quoteColumnApiName: '',
            quoteObjectApiName: '',
            relationObjectApiName: 'sys_user',
            required: false,
            scale: null,
            showTime: false,
            singleChoiceType: null,
            startNo: 0,
            unique: false,
            userMask: false,
          },
          columnType: 'RELATIONSHIP',
          columnTypeGroup: 'FORBIDDEN',
          defaultUse: false,
          name: '所属人',
          index: 29,
        },
      ],
    },
    subEntity: [
      {
        apiName: 'book',
        columnList: [
          {
            apiName: 'name',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 50,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'TEXT',
            columnTypeGroup: 'TEXT',
            defaultUse: true,
            name: '书本名称',
          },
          {
            apiName: 'price',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 8,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: 2,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'MONEY',
            columnTypeGroup: 'NUMBER',
            defaultUse: true,
            name: '价格',
          },
          {
            apiName: 'studentId',
            columnConfig: {
              bachCreateItem: true,
              cascadingDeletionType: 'DELETE_CHILDREN',
              computeType: null,
              copyWidthParent: true,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: 'student',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'ITEM_DETAIL',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: true,
            name: '所属学生',
          },
          {
            apiName: 'cbsId',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: 'PROMPT_NOT_ALLOW',
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: 'cbs',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'RELATIONSHIP',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: true,
            name: '出版社',
            relationList: [
              {
                apiName: 'name',
                columnConfig: {
                  bachCreateItem: false,
                  cascadingDeletionType: null,
                  computeType: null,
                  copyWidthParent: false,
                  createNoForExists: false,
                  defaultValue: '',
                  encrypted: false,
                  endUnMasked: null,
                  fileCount: null,
                  helpText: '',
                  imageCount: null,
                  maxLength: 50,
                  multiChoiceType: null,
                  optionSetApiName: '',
                  placeHolder: '',
                  preUnMasked: null,
                  quoteColumnApiName: '',
                  quoteObjectApiName: '',
                  relationObjectApiName: '',
                  required: false,
                  scale: null,
                  showTime: false,
                  singleChoiceType: null,
                  startNo: 0,
                  unique: false,
                  userMask: false,
                },
                columnType: 'TEXT',
                columnTypeGroup: 'TEXT',
                defaultUse: true,
                name: '出版社名称',
              },
              {
                apiName: 'id',
                columnConfig: {
                  bachCreateItem: false,
                  cascadingDeletionType: null,
                  computeType: null,
                  copyWidthParent: false,
                  createNoForExists: false,
                  defaultValue: '',
                  encrypted: false,
                  endUnMasked: null,
                  fileCount: null,
                  helpText: '',
                  imageCount: null,
                  maxLength: null,
                  multiChoiceType: null,
                  optionSetApiName: '',
                  placeHolder: '',
                  preUnMasked: null,
                  quoteColumnApiName: '',
                  quoteObjectApiName: '',
                  relationObjectApiName: '',
                  required: false,
                  scale: null,
                  showTime: false,
                  singleChoiceType: null,
                  startNo: 0,
                  unique: false,
                  userMask: false,
                },
                columnType: 'ID',
                columnTypeGroup: 'OTHER',
                defaultUse: true,
                name: '主键',
              },
              {
                apiName: 'enabled',
                columnConfig: {
                  bachCreateItem: false,
                  cascadingDeletionType: null,
                  computeType: null,
                  copyWidthParent: false,
                  createNoForExists: false,
                  defaultValue: 'true',
                  encrypted: false,
                  endUnMasked: null,
                  fileCount: null,
                  helpText: '',
                  imageCount: null,
                  maxLength: null,
                  multiChoiceType: null,
                  optionSetApiName: '',
                  placeHolder: '',
                  preUnMasked: null,
                  quoteColumnApiName: '',
                  quoteObjectApiName: '',
                  relationObjectApiName: '',
                  required: false,
                  scale: null,
                  showTime: false,
                  singleChoiceType: null,
                  startNo: 0,
                  unique: false,
                  userMask: false,
                },
                columnType: 'BOOL',
                columnTypeGroup: 'OTHER',
                defaultUse: false,
                name: '已启用',
              },
              {
                apiName: 'deleted',
                columnConfig: {
                  bachCreateItem: false,
                  cascadingDeletionType: null,
                  computeType: null,
                  copyWidthParent: false,
                  createNoForExists: false,
                  defaultValue: 'false',
                  encrypted: false,
                  endUnMasked: null,
                  fileCount: null,
                  helpText: '',
                  imageCount: null,
                  maxLength: null,
                  multiChoiceType: null,
                  optionSetApiName: '',
                  placeHolder: '',
                  preUnMasked: null,
                  quoteColumnApiName: '',
                  quoteObjectApiName: '',
                  relationObjectApiName: '',
                  required: false,
                  scale: null,
                  showTime: false,
                  singleChoiceType: null,
                  startNo: 0,
                  unique: false,
                  userMask: false,
                },
                columnType: 'BOOL',
                columnTypeGroup: 'OTHER',
                defaultUse: false,
                name: '已删除',
              },
              {
                apiName: 'createAt',
                columnConfig: {
                  bachCreateItem: false,
                  cascadingDeletionType: null,
                  computeType: null,
                  copyWidthParent: false,
                  createNoForExists: false,
                  defaultValue: '',
                  encrypted: false,
                  endUnMasked: null,
                  fileCount: null,
                  helpText: '',
                  imageCount: null,
                  maxLength: null,
                  multiChoiceType: null,
                  optionSetApiName: '',
                  placeHolder: '',
                  preUnMasked: null,
                  quoteColumnApiName: '',
                  quoteObjectApiName: '',
                  relationObjectApiName: '',
                  required: false,
                  scale: null,
                  showTime: true,
                  singleChoiceType: null,
                  startNo: 0,
                  unique: false,
                  userMask: false,
                },
                columnType: 'DATE',
                columnTypeGroup: 'DATE',
                defaultUse: false,
                name: '创建时间',
              },
              {
                apiName: 'updateAt',
                columnConfig: {
                  bachCreateItem: false,
                  cascadingDeletionType: null,
                  computeType: null,
                  copyWidthParent: false,
                  createNoForExists: false,
                  defaultValue: '',
                  encrypted: false,
                  endUnMasked: null,
                  fileCount: null,
                  helpText: '',
                  imageCount: null,
                  maxLength: null,
                  multiChoiceType: null,
                  optionSetApiName: '',
                  placeHolder: '',
                  preUnMasked: null,
                  quoteColumnApiName: '',
                  quoteObjectApiName: '',
                  relationObjectApiName: '',
                  required: false,
                  scale: null,
                  showTime: true,
                  singleChoiceType: null,
                  startNo: 0,
                  unique: false,
                  userMask: false,
                },
                columnType: 'DATE',
                columnTypeGroup: 'DATE',
                defaultUse: true,
                name: '最后修改时间',
              },
              {
                apiName: 'createBy',
                columnConfig: {
                  bachCreateItem: false,
                  cascadingDeletionType: 'PROMPT_NOT_ALLOW',
                  computeType: null,
                  copyWidthParent: false,
                  createNoForExists: false,
                  defaultValue: '',
                  encrypted: false,
                  endUnMasked: null,
                  fileCount: null,
                  helpText: '',
                  imageCount: null,
                  maxLength: null,
                  multiChoiceType: null,
                  optionSetApiName: '',
                  placeHolder: '',
                  preUnMasked: null,
                  quoteColumnApiName: '',
                  quoteObjectApiName: '',
                  relationObjectApiName: 'sys_user',
                  required: false,
                  scale: null,
                  showTime: false,
                  singleChoiceType: null,
                  startNo: 0,
                  unique: false,
                  userMask: false,
                },
                columnType: 'RELATIONSHIP',
                columnTypeGroup: 'FORBIDDEN',
                defaultUse: false,
                name: '创建人',
              },
              {
                apiName: 'updateBy',
                columnConfig: {
                  bachCreateItem: false,
                  cascadingDeletionType: 'PROMPT_NOT_ALLOW',
                  computeType: null,
                  copyWidthParent: false,
                  createNoForExists: false,
                  defaultValue: '',
                  encrypted: false,
                  endUnMasked: null,
                  fileCount: null,
                  helpText: '',
                  imageCount: null,
                  maxLength: null,
                  multiChoiceType: null,
                  optionSetApiName: '',
                  placeHolder: '',
                  preUnMasked: null,
                  quoteColumnApiName: '',
                  quoteObjectApiName: '',
                  relationObjectApiName: 'sys_user',
                  required: false,
                  scale: null,
                  showTime: false,
                  singleChoiceType: null,
                  startNo: 0,
                  unique: false,
                  userMask: false,
                },
                columnType: 'RELATIONSHIP',
                columnTypeGroup: 'FORBIDDEN',
                defaultUse: false,
                name: '修改人',
              },
              {
                apiName: 'ownerId',
                columnConfig: {
                  bachCreateItem: false,
                  cascadingDeletionType: 'PROMPT_NOT_ALLOW',
                  computeType: null,
                  copyWidthParent: false,
                  createNoForExists: false,
                  defaultValue: '',
                  encrypted: false,
                  endUnMasked: null,
                  fileCount: null,
                  helpText: '',
                  imageCount: null,
                  maxLength: null,
                  multiChoiceType: null,
                  optionSetApiName: '',
                  placeHolder: '',
                  preUnMasked: null,
                  quoteColumnApiName: '',
                  quoteObjectApiName: '',
                  relationObjectApiName: 'sys_user',
                  required: false,
                  scale: null,
                  showTime: false,
                  singleChoiceType: null,
                  startNo: 0,
                  unique: false,
                  userMask: false,
                },
                columnType: 'RELATIONSHIP',
                columnTypeGroup: 'FORBIDDEN',
                defaultUse: false,
                name: '所属人',
              },
            ],
            indeterminate: false,
            checkAll: true,
          },
          {
            apiName: 'tree01',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: 'province',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'SINGLE_CHOICE_TREE',
            columnTypeGroup: 'CHOICE',
            defaultUse: true,
            name: '单选树字段',
          },
          {
            apiName: 'tree02',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: 'province',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'MULTI_CHOICE_TREE',
            columnTypeGroup: 'CHOICE',
            defaultUse: true,
            name: '多选树字段',
          },
          {
            apiName: 'province',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: 'province',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: 'DROP_LIST',
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'SINGLE_CHOICE',
            columnTypeGroup: 'CHOICE',
            defaultUse: true,
            name: '书省份',
          },
          {
            apiName: 'city',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: 'DROP_LIST',
              optionSetApiName: 'city',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'MULTI_CHOICE',
            columnTypeGroup: 'CHOICE',
            defaultUse: true,
            name: '书城市',
          },
          {
            apiName: 'age',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 3,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'INTEGER',
            columnTypeGroup: 'NUMBER',
            defaultUse: true,
            name: '书年龄',
          },
          {
            apiName: 'birthday',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: true,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'DATE',
            columnTypeGroup: 'DATE',
            defaultUse: true,
            name: '书生日',
          },
          {
            apiName: 'graduated',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: 'false',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'BOOL',
            columnTypeGroup: 'OTHER',
            defaultUse: true,
            name: '书已毕业',
          },
          {
            apiName: 'phone',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 11,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '请输入手机号',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: true,
              userMask: false,
            },
            columnType: 'PHONE',
            columnTypeGroup: 'TEXT',
            defaultUse: true,
            name: '书联系方式',
          },
          {
            apiName: 'studentFile',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: 3,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'FILE',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: true,
            name: '书文件',
          },
          {
            apiName: 'position',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: 5,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'GEO_POSITION',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: true,
            name: '书位置',
          },
          {
            apiName: 'xuefei',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '0.0',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 15,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: 2,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'MONEY',
            columnTypeGroup: 'NUMBER',
            defaultUse: true,
            name: '书学费',
          },
          {
            apiName: 'shengao',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '0.00',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 15,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: 3,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'DECIMAL',
            columnTypeGroup: 'NUMBER',
            defaultUse: true,
            name: '书身高',
          },
          {
            apiName: 'l_time',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'TIME',
            columnTypeGroup: 'OTHER',
            defaultUse: true,
            name: '书午餐时间',
          },
          {
            apiName: 'xuehao',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'AUTO_NO',
            columnTypeGroup: 'OTHER',
            defaultUse: true,
            name: '书学号',
          },
          {
            apiName: 'webSite',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 200,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'WEBSITE',
            columnTypeGroup: 'TEXT',
            defaultUse: true,
            name: '书网址',
          },
          {
            apiName: 'email',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 20,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '请输入邮箱',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: true,
              userMask: false,
            },
            columnType: 'EMAIL',
            columnTypeGroup: 'TEXT',
            defaultUse: true,
            name: '书邮箱',
          },
          {
            apiName: 'studentImage',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: 3,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'IMAGE',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: true,
            name: '书图片',
          },
          {
            apiName: 'percent',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 10,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: 2,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'PERCENT',
            columnTypeGroup: 'NUMBER',
            defaultUse: true,
            name: '书排名百分比',
          },
          {
            apiName: 'roomId',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: 'PROMPT_NOT_ALLOW',
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: 'room',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'RELATIONSHIP',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: true,
            name: '所属教室(关联)',
          },
          {
            apiName: 'id',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'ID',
            columnTypeGroup: 'OTHER',
            defaultUse: true,
            name: '主键',
          },
          {
            apiName: 'enabled',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: 'true',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'BOOL',
            columnTypeGroup: 'OTHER',
            defaultUse: false,
            name: '已启用',
          },
          {
            apiName: 'deleted',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: 'false',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'BOOL',
            columnTypeGroup: 'OTHER',
            defaultUse: false,
            name: '已删除',
          },
          {
            apiName: 'createAt',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: true,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'DATE',
            columnTypeGroup: 'DATE',
            defaultUse: false,
            name: '创建时间',
          },
          {
            apiName: 'updateAt',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: true,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'DATE',
            columnTypeGroup: 'DATE',
            defaultUse: true,
            name: '最后修改时间',
          },
          {
            apiName: 'createBy',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: 'PROMPT_NOT_ALLOW',
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: 'sys_user',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'RELATIONSHIP',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: false,
            name: '创建人',
          },
          {
            apiName: 'updateBy',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: 'PROMPT_NOT_ALLOW',
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: 'sys_user',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'RELATIONSHIP',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: false,
            name: '修改人',
          },
          {
            apiName: 'ownerId',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: 'PROMPT_NOT_ALLOW',
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: 'sys_user',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'RELATIONSHIP',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: false,
            name: '所属人',
          },
        ],
        entityId: '5',
        joinColumnApiName: 'studentId',
        name: '书本',
        allItems: [
          {
            apiName: 'name',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 50,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'TEXT',
            columnTypeGroup: 'TEXT',
            defaultUse: true,
            name: '书本名称',
          },
          {
            apiName: 'price',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 8,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: 2,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'MONEY',
            columnTypeGroup: 'NUMBER',
            defaultUse: true,
            name: '价格',
          },
          {
            apiName: 'studentId',
            columnConfig: {
              bachCreateItem: true,
              cascadingDeletionType: 'DELETE_CHILDREN',
              computeType: null,
              copyWidthParent: true,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: 'student',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'ITEM_DETAIL',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: true,
            name: '所属学生',
          },
          {
            apiName: 'cbsId',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: 'PROMPT_NOT_ALLOW',
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: 'cbs',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'RELATIONSHIP',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: true,
            name: '出版社',
          },
          {
            apiName: 'tree01',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: 'province',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'SINGLE_CHOICE_TREE',
            columnTypeGroup: 'CHOICE',
            defaultUse: true,
            name: '单选树字段',
          },
          {
            apiName: 'tree02',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: 'province',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'MULTI_CHOICE_TREE',
            columnTypeGroup: 'CHOICE',
            defaultUse: true,
            name: '多选树字段',
          },
          {
            apiName: 'province',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: 'province',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: 'DROP_LIST',
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'SINGLE_CHOICE',
            columnTypeGroup: 'CHOICE',
            defaultUse: true,
            name: '书省份',
          },
          {
            apiName: 'city',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: 'DROP_LIST',
              optionSetApiName: 'city',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'MULTI_CHOICE',
            columnTypeGroup: 'CHOICE',
            defaultUse: true,
            name: '书城市',
          },
          {
            apiName: 'age',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 3,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'INTEGER',
            columnTypeGroup: 'NUMBER',
            defaultUse: true,
            name: '书年龄',
          },
          {
            apiName: 'birthday',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: true,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'DATE',
            columnTypeGroup: 'DATE',
            defaultUse: true,
            name: '书生日',
          },
          {
            apiName: 'graduated',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: 'false',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'BOOL',
            columnTypeGroup: 'OTHER',
            defaultUse: true,
            name: '书已毕业',
          },
          {
            apiName: 'phone',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 11,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '请输入手机号',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: true,
              userMask: false,
            },
            columnType: 'PHONE',
            columnTypeGroup: 'TEXT',
            defaultUse: true,
            name: '书联系方式',
          },
          {
            apiName: 'studentFile',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: 3,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'FILE',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: true,
            name: '书文件',
          },
          {
            apiName: 'position',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: 5,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'GEO_POSITION',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: true,
            name: '书位置',
          },
          {
            apiName: 'xuefei',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '0.0',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 15,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: 2,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'MONEY',
            columnTypeGroup: 'NUMBER',
            defaultUse: true,
            name: '书学费',
          },
          {
            apiName: 'shengao',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '0.00',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 15,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: 3,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'DECIMAL',
            columnTypeGroup: 'NUMBER',
            defaultUse: true,
            name: '书身高',
          },
          {
            apiName: 'l_time',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'TIME',
            columnTypeGroup: 'OTHER',
            defaultUse: true,
            name: '书午餐时间',
          },
          {
            apiName: 'xuehao',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'AUTO_NO',
            columnTypeGroup: 'OTHER',
            defaultUse: true,
            name: '书学号',
          },
          {
            apiName: 'webSite',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 200,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'WEBSITE',
            columnTypeGroup: 'TEXT',
            defaultUse: true,
            name: '书网址',
          },
          {
            apiName: 'email',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 20,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '请输入邮箱',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: true,
              userMask: false,
            },
            columnType: 'EMAIL',
            columnTypeGroup: 'TEXT',
            defaultUse: true,
            name: '书邮箱',
          },
          {
            apiName: 'studentImage',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: 3,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'IMAGE',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: true,
            name: '书图片',
          },
          {
            apiName: 'percent',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: 10,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: 2,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'PERCENT',
            columnTypeGroup: 'NUMBER',
            defaultUse: true,
            name: '书排名百分比',
          },
          {
            apiName: 'roomId',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: 'PROMPT_NOT_ALLOW',
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: 'room',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'RELATIONSHIP',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: true,
            name: '所属教室(关联)',
          },
          {
            apiName: 'id',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'ID',
            columnTypeGroup: 'OTHER',
            defaultUse: true,
            name: '主键',
          },
          {
            apiName: 'enabled',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: 'true',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'BOOL',
            columnTypeGroup: 'OTHER',
            defaultUse: false,
            name: '已启用',
          },
          {
            apiName: 'deleted',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: 'false',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'BOOL',
            columnTypeGroup: 'OTHER',
            defaultUse: false,
            name: '已删除',
          },
          {
            apiName: 'createAt',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: true,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'DATE',
            columnTypeGroup: 'DATE',
            defaultUse: false,
            name: '创建时间',
          },
          {
            apiName: 'updateAt',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: null,
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: '',
              required: false,
              scale: null,
              showTime: true,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'DATE',
            columnTypeGroup: 'DATE',
            defaultUse: true,
            name: '最后修改时间',
          },
          {
            apiName: 'createBy',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: 'PROMPT_NOT_ALLOW',
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: 'sys_user',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'RELATIONSHIP',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: false,
            name: '创建人',
          },
          {
            apiName: 'updateBy',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: 'PROMPT_NOT_ALLOW',
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: 'sys_user',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'RELATIONSHIP',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: false,
            name: '修改人',
          },
          {
            apiName: 'ownerId',
            columnConfig: {
              bachCreateItem: false,
              cascadingDeletionType: 'PROMPT_NOT_ALLOW',
              computeType: null,
              copyWidthParent: false,
              createNoForExists: false,
              defaultValue: '',
              encrypted: false,
              endUnMasked: null,
              fileCount: null,
              helpText: '',
              imageCount: null,
              maxLength: null,
              multiChoiceType: null,
              optionSetApiName: '',
              placeHolder: '',
              preUnMasked: null,
              quoteColumnApiName: '',
              quoteObjectApiName: '',
              relationObjectApiName: 'sys_user',
              required: false,
              scale: null,
              showTime: false,
              singleChoiceType: null,
              startNo: 0,
              unique: false,
              userMask: false,
            },
            columnType: 'RELATIONSHIP',
            columnTypeGroup: 'FORBIDDEN',
            defaultUse: false,
            name: '所属人',
          },
        ],
      },
    ],
    actionBtnList: [
      {
        title: '提交',
        actionList: [
          {
            name: 'onClick',
            type: 0,
            btnType: 0,
            nextActionList: [
              {
                type: 2,
                triggeredType: 1,
                triggeredContent: '操作成功',
              },
            ],
          },
        ],
      },
      {
        title: '按钮1',
        actionList: [
          {
            name: 'onClick',
            type: 3,
            actionCompontent: 1,
          },
        ],
      },
      {
        title: '按钮',
        actionList: [
          {
            name: 'onClick',
            type: 2,
            triggeredType: 1,
            triggeredContent: '呜呜呜',
          },
        ],
      },
    ],
    initial: [
      {
        name: 'aaa',
      },
      {
        name: 'bbb',
      },
    ],
    exposureParameter: [
      {
        title: 'reload',
        actionParamsList: [
          {
            name: 'a1',
            value: 'aaaaaaaaa',
          },
          {
            name: 'a2',
            value: '2222222222',
          },
        ],
      },
      {
        title: 'update',
        actionParamsList: [
          {
            name: 'b1',
            value: 'bbbbbb',
          },
          {
            name: 'b2',
            value: 'bbbbbbbbbbbbbbb',
          },
        ],
      },
    ],
  };
  formRef = React.createRef<FormInstance>();
  constructor(props) {
    super(props);
    this.state = {
      subEntityList: [],
      radioValue: 1,
      columns: [],
      tableData: [],
      columnsBtn: [],
      tableDataBtn: [],
      inputName: '',
      formTableData: [],
      isClickVisible: false,
      relationItem: {},
      fileList: [],
      previewOpen: false,
      previewImage: '',
      singleChoiceOpions: [],
      filesList: {},
      imgFileList: {},
      options: {},
      relationDataList: {},
      isTableVisible: false,
    };
    // this.formRef = React.createRef();
  }

  componentDidMount() {
    const { subEntity } = this.props;
    let colTotal = [];
    subEntity.forEach((i, ind) => {
      let arr = i.columnList.filter((item, idx) => {
        return item.apiName !== 'id';
      });
      // const arr = i.columnList
      i.objectApiName = i.apiName;
      let col = [];
      let tableObj = {};
      arr.forEach((item, index) => {
        item.title = item.name;
        item.editable = true;
        item.dataIndex = item.apiName;

        tableObj[item.apiName] = '';
        tableObj.key = 0;
        tableObj.tableIndex = ind;
      });
      // console.log('1654', arr);
      i.columnList = arr;
      i.tableData2 = [tableObj];

      return i;
    });

    this.setState({
      subEntityList: subEntity,
      defaultSubEntity: subEntity,
    });
  }

  componentWillReceiveProps(nextProps, preState) {
    const { subEntity, itemList } = nextProps;
    itemList.entity?.map((item, index) => {
      if (
        item.columnType === 'SINGLE_CHOICE' ||
        item.columnType === 'MULTI_CHOICE' ||
        item.columnType === 'SINGLE_CHOICE_TREE' ||
        item.columnType === 'MULTI_CHOICE_TREE'
      ) {
        this.getSingleChoiceOpions(item);
      }
    });
    subEntity.forEach((i, ind) => {
      let arr = i.columnList.filter((item, idx) => {
        return item.apiName !== 'id';
      });
      // const arr = i.columnList
      i.objectApiName = i.apiName;
      let col = [];
      let tableObj = {};
      arr.forEach((item, index) => {
        item.title = item.name;
        item.editable = true;
        item.dataIndex = item.apiName;

        tableObj[item.apiName] = '';
        tableObj.key = 0;
        tableObj.tableIndex = ind;
      });
      // console.log('1654', arr);
      i.columnList = arr;
      i.tableData2 = [tableObj];
      // this[`table${ind}Ref`] = React.createRef()
      return i;
    });

    this.setState({
      subEntityList: subEntity,
      defaultSubEntity: subEntity,
    });
  }

  // console.log('initial', initial);

  // const _style = style || {};
  // if (color) {
  //   _style.backgroundColor = color;
  // }
  // const _otherProps = otherProps || {};
  // _otherProps.style = _style;

  //提交
  onFinish() {
    console.log('Success:', this.formRef.current?.getFieldsValue());
    let values = this.formRef.current?.getFieldsValue();
    const { itemList } = this.props;
    const { subEntityList, imgFileList, filesList } = this.state;

    const formData = new FormData();
    formData.append('objectApiName', itemList.entityName.apiName);
    // console.log(itemList.entity);
    const dateResult = itemList.entity.filter((item) => {
      return item.columnType === 'DATE';
    });
    const timeResult = itemList.entity.filter((item) => {
      return item.columnType === 'TIME';
    });
    // const imageResult = itemList.entity.filter((item) => {
    //   return item.columnType === 'IMAGE';
    // });

    // console.log('result', result);

    for (let i in values) {
      console.log(1774, i);

      if (values[i]) {
        // console.log(values[i]);
        // imageResult.forEach((element) => {
        //   if (element.apiName == i) {

        //     return;
        //     // console.log('33333333', values[i]);
        //     // values[i]

        //   }
        // });
        dateResult.forEach((element) => {
          if (element.apiName == i) {
            // console.log('33333333', values[i]);
            values[i] = moment(values[i]).format('YYYY-MM-DD HH:mm:ss');
          }
        });
        timeResult.forEach((element) => {
          if (element.apiName == i) {
            // console.log('33333333', values[i]);
            values[i] = moment(values[i]).format('HH:mm:ss');
          }
        });
        // if()
        formData.append(`params.${i}`, values[i]);

        imgFileList[i] &&
          imgFileList[i].map((item, index) => {
            console.log('imgFileList', item);
            // formData.append(`params.${i}`, undefined);
            formData.delete(`params.${i}`);
            formData.append(`params.${i}[${index}]`, item.originFileObj);
          });
        filesList[i] &&
          filesList[i].map((item, index) => {
            console.log('filesList', item);
            // formData.append(`params.${i}`, undefined);
            formData.delete(`params.${i}`);
            formData.append(`params.${i}[${index}]`, item.originFileObj);
          });
      }
    }

    // console.log(1782, subEntityList);

    for (let i in subEntityList) {
      // console.log('1783', subEntityList[i]);

      const result2 = subEntityList[i].columnList.filter((i) => {
        return i.columnType === 'DATE';
      });
      if (subEntityList[i]) {
        const arr = subEntityList[i].tableData2;
        //如果子表没有数据，这里就判断一下

        // console.log(1367, arr);
        if (arr.length != 0) {
          formData.append(`subs[${i}].objectApiName`, subEntityList[i].apiName);
        }
        for (let r in arr) {
          const obj = subEntityList[i].tableData2[r];
          // console.log('obj', obj);
          for (let t in obj) {
            if (t != 'key' && t != 'tableIndex' && obj[t]) {
              result2.forEach((it) => {
                if (it.apiName == t) {
                  obj[t] = moment(obj[t]).format('YYYY-MM-DD HH:mm:ss');
                }
              });

              formData.append(`subs[${i}].params[${r}].${t}`, obj[t]);
              // console.log(t, subEntityList[i].tableData2[r][t]);
            }
          }
        }
      }
    }

    addPages(formData).then((res) => {});
  }

  onFinishFailed(errorInfo: any) {
    // console.log('Failed:', errorInfo);
  }

  onChange(date, dateString) {
    // console.log(date);
    // console.log(dateString);
  }

  onSwitchChange(value, apiName) {}

  //  checkbox
  onCheckChange(checkedValues) {
    // console.log('checked = ', checkedValues);
  }

  //select array

  onSelectArrChange(value) {
    // console.log(`selected ${value}`);
  }

  // select
  handleSelectChange(value) {
    // console.log(`selected ${value}`);
  }

  async relationClick(item) {
    // setInputName(item.apiName);
    if (!item.relationList) {
      message.warning('请先配置关联对象表格选项');
      return;
    }
    let column = [];
    item.relationList?.forEach((i) => {
      let obj = {};
      obj.title = i.name;
      obj.key = i.apiName;
      obj.dataIndex = `${item.columnConfig.relationObjectApiName}0_${i.apiName}`;
      obj.width = 100;
      column.push(obj);
    });

    this.setState({
      columnsBtn: column,
    });

    let queryColumns = [];

    item.relationList?.forEach((i) => {
      let obj = {
        objectApiName: item.columnConfig.relationObjectApiName,
        columnApiName: i.apiName,
        joinColumnApiName: i.joinColumnApiName,
        entityId: i.entityId,
        format: i.format,
      };
      queryColumns.push(obj);
    });

    let data = {
      // filters: [
      //   {
      //     metaKey: '',
      //     filterType: '',
      //     value: '',
      //   },
      // ],
      mainObjectApiName: item.columnConfig.relationObjectApiName,
      pageNo: 0,
      pageSize: 10,
      queryColumns: queryColumns,
    };
    let res = await dataTable(data);
    let list = res.data.data;
    list.forEach((e) => {
      let id = `${item.columnConfig.relationObjectApiName}0_id`;
      e.key = e[id];
    });

    this.setState({
      isClickVisible: true,
      tableDataBtn: list,
      inputName: item.apiName,
      relationItem: item,
    });

    //打开弹窗
  }

  //获取选中的用户数据
  getUser(val) {
    console.log('one user', val);
    const { inputName, relationItem } = this.state;
    let inputNameObj = {};
    // let id = `${item.columnConfig.relationObjectApiName}0_id`;
    let name = `${relationItem.columnConfig.relationObjectApiName}0_name`;
    let id = `${relationItem.columnConfig.relationObjectApiName}0_id`;
    inputNameObj[`${inputName}_name`] = val[0][name];

    inputNameObj[inputName] = val[0][id];

    console.log('88888888', inputNameObj, this.formRef.current);
    this.formRef.current!.setFieldsValue(inputNameObj);
    let relationDataList = this.state.relationDataList;
    relationDataList[relationItem.columnConfig.relationObjectApiName] = val[0];
    console.log('relationDataList', relationDataList);
    this.setState({
      relationDataList: JSON.parse(JSON.stringify(relationDataList)),
    });
  }

  getRules(item) {
    switch (item.columnType) {
      case 'TEXT':
        return [
          { required: true, message: '名称不能为空' },
          // {
          //   pattern: new RegExp(/^[0-9a-zA-Z_]{1,}$/, 'g'),
          //   message: '名称只允许包含数字、字母和下划线',
          // },
        ];

      case 'TEXTAREA':
        return [{ required: true, message: '文本不能为空' }];

      case 'DATE':
        return [{ required: true, message: '时间不能为空' }];

      case 'INTEGER':
        return [
          { required: true, message: '整数不能为空' },
          {
            pattern: new RegExp(/^-?[1-9]\d*$/, 'g'),
            message: '请输入整数',
          },
        ];

      case 'DECIMAL':
        return [
          { required: true, message: '实数不能为空' },
          // {
          //   pattern: new RegExp(/ ^(-?\d+)(.\d+|\d+)?$/, 'g'),
          //   message: '请输入实数',
          // },
        ];

      case 'SINGLE_CHOICE':
        return [{ required: true, message: '下拉单选不能为空' }];

      case 'MULTI_CHOICE':
        return [{ required: true, message: '下拉多选不能为空' }];
      case 'SINGLE_CHOICE_TREE':
        return [{ required: true, message: '下拉单选树不能为空' }];

      case 'MULTI_CHOICE_TREE':
        return [{ required: true, message: '下拉多选树不能为空' }];

      case 'MONEY':
        return [
          { required: true, message: '货币不能为空' },
          {
            pattern: new RegExp(
              /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/,
              'g',
            ),
            message: '请输入正确的货币数量',
          },
        ];
      case 'ID_CARD':
        return [
          { required: true, message: '身份证不能为空' },
          {
            pattern: new RegExp(
              /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,
              'g',
            ),
            message: '请输入正确的身份证号',
          },
        ];
      case 'PHONE':
        return [
          { required: true, message: '电话不能为空' },
          {
            pattern: new RegExp(
              /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,
              'g',
            ),
            message: '请输入数字',
          },
        ];
      case 'WEBSITE':
        return [
          { required: true, message: '网址不能为空' },
          {
            pattern: new RegExp(
              /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i,
              // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              'g',
            ),
            message: '请输入正确的网址',
          },
        ];
      case 'EMAIL':
        return [
          { required: true, message: '邮箱不能为空' },
          {
            pattern: new RegExp(
              /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
              'g',
            ),
            message: '请输入正确的邮箱',
          },
        ];

      default:
        break;
    }
  }

  //获取数据
  getPagesListFuc(params) {
    // console.log('api api api');
    getPagesList(params).then((res) => {
      // console.log(res);
    });
  }

  onRadioChange() {}
  onTimeChange(time: Moment, timeString: string, apiName) {
    let inputNameObj = {};
    inputNameObj[apiName] = timeString;
    this.formRef.current!.setFieldsValue(inputNameObj);
  }

  // console.log('form', form);

  //form里面的table

  handleSave(row: any) {
    let { subEntityList } = this.state;
    console.log('row', row);
    // const newData = [...tableData2];
    // const index = newData.findIndex((item) => row.key === item.key);
    // const item = newData[index];
    // newData.splice(index, 1, {
    //   ...item,
    //   ...row,
    // });

    // console.log('subs', row);
    subEntityList[row.tableIndex].tableData2[row.key] = row;
    // // console.log('subEntityList', subEntityList);
    this.setState({
      subEntityList: JSON.parse(JSON.stringify(subEntityList)),
    });
    // setSubEntityList(subEntity);
  }

  async tableRelationClick(item, record, index) {
    //打开弹窗
  }

  columnsTable(list, index, objectApiName) {
    let arr = list.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        // key: index,
        ...col,
        // width: "200px",
        textWrap: 'word-break',
        onCell: (record: any) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: (row) => this.handleSave(row),
          columnType: col.columnType,
          field: col,
          objectApiName,
          relationClick: (i) => this.tableRelationClick(i, record, index),
        }),
      };
    });
    return arr;
  }

  //  添加一行子表格
  tableDataAddClick(item, index) {
    // console.log('00000000', item, index);
    let { subEntityList } = this.state;
    let tableObj = {};
    item.columnList.map((it, id) => {
      tableObj[it.apiName] = '';
      tableObj.key = item.tableData2.length;
      tableObj.tableIndex = index;
      // console.log('1669', tableObj);
    });

    item.tableData2.push(tableObj);
    subEntityList[index] = item;
    // console.log(subEntityList);
    this.setState({
      subEntityList: JSON.parse(JSON.stringify(subEntityList)),
    });
  }

  //气泡确认框的操作
  confirmProp() {
    message.success('提交成功');
  }

  cancelProp() {
    message.error('取消提交');
  }

  // 按钮弹窗传值
  getShowClick(val) {
    this.setState({
      isClickVisible: val,
    });
  }

  // 获取引用类型数据name
  async getQuoteName(item) {
    // console.log('getQuoteName', item);
    // const res = await metaInfo({
    //   objectApiName: item.columnConfig.quoteObjectApiName,
    //   containsColumn: true,
    // });

    // let columnList = res.data?.mainObject?.columnList;
    // console.log('res', columnList);
    // let result = columnList.filter(e => e.apiName === item.columnConfig.quoteColumnApiName)
    // console.log('result', result)
    return 'w3333';
  }

  async getSingleChoiceOpions(item) {
    const { itemList } = this.props;
    let res = await getOptionListOrTree({
      objectApiName: itemList.entityName.apiName,
      columnApiName: item.apiName,
    });
    let options = this.state.options;
    options[item.apiName] = res.data.options || [];

    this.setState({
      options,
    });
  }

  handleFilesChange(file, fileList, item) {
    fileList.map((item) => {
      item.status = 'done';
    });

    let filesList = this.state.filesList;
    filesList[item.apiName] = fileList;
    this.setState({
      filesList: filesList,
    });
  }
  handleImageChange(file, fileList, item) {
    fileList.map((item) => {
      item.status = 'done';
    });

    let imgFileList = this.state.imgFileList;
    imgFileList[item.apiName] = fileList;
    this.setState({
      imgFileList: imgFileList,
    });
  }

  async handlePreview(file) {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewOpen: true,
    });
    // setPreviewImage(file.url || (file.preview as string));
    // setPreviewOpen(true);
    // setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  }

  imgPreviewCancel() {
    this.setState({
      previewOpen: false,
      previewImage: '',
    });
  }

  //操作按钮
  async btnLineClick(value) {
    console.log('点击了新增', value);
    const info = value[0];

    const type = info.type;
    switch (type) {
      //
      case 0:
        if (info.btnType === 0) {
          await this.onFinish();
          // await this.delDataBatch();
        } else if (info.btnType === 1) {
          // await this.enableDataBatch(true);
        } else if (info.btnType === 2) {
          // await this.enableDataBatch(false);
        }

        break;
      case 1:
        Bus.emit(info.actionDialogId, { show: true });
        break;
      case 2:
        this.getMessageFuc(info.triggeredType, info.triggeredContent);
        break;
      case 4:
        let id = info.actionPage[info.actionPage.length - 1];
        window.location = `www.test.com?id=${id}`;
        break;
      case 5:
        // info.actionJSNamezheng
        info.actionJSValue();
        break;
      default:
        break;
    }
    // this.nextActionFuc();a

    if (info.nextActionList) {
      info.nextActionList.map(async (item) => {
        console.log('await nextActionFuc');
        await this.btnLineClick([item]);
      });
    }
  }

  getMessageFuc(type, text) {
    switch (type) {
      case 0:
        message.info(text);
        break;
      case 1:
        message.success(text);
        break;
      case 2:
        message.error(text);
        break;
      case 3:
        message.warning(text);
        break;
      case 4:
        message.loading(text);
        break;
      case 5:
        message.warn(text);
        break;
      case 6:
        message.open(text);
        break;
      default:
        break;
    }
  }
  resetClick() {
    this.formRef.current?.resetFields();
    const { defaultSubEntity } = this.state;

    this.setState({
      subEntityList: [],
    });
    setTimeout(() => {
      this.setState({
        subEntityList: defaultSubEntity,
      });
    }, 1);

    // console.log('EditableRow', EditableRow.form)

    // subEntityList.map((item, index) => {
    //   console.log(this[`table${index}Ref`])
    // })
  }

  render() {
    const {
      radioValue,
      tableDataBtn,
      isClickVisible,
      columnsBtn,
      fileList,
      previewOpen,
      previewImage,
      singleChoiceOpions,
      subEntityList,
      imgFileList,
      options,
      relationDataList,
      filesList,
      tabelColumnsBtn,
      tableRealtaionData,
      isTableVisible,
    } = this.state;
    const { itemList, style, wid, actionBtnList, layout } = this.props;
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    return (
      <div>
        <div className="form-padding">
          <Form
            ref={this.formRef}
            style={style}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={(values) => this.onFinish(values)}
            onFinishFailed={() => this.onFinishFailed()}
            autoComplete="off"
            // form={form}
          >
            <Row gutter={24}>
              {itemList &&
                itemList.entity &&
                itemList.entity.map((i, index) => {
                  if (i.columnType == 'ID' || i.columnType == 'AUTO_NO') {
                    return;
                  }

                  const text = this.getQuoteName(i);
                  // i.columnType === 'SINGLE_CHOICE' && this.getSingleChoiceOpions(i);
                  // let list = [];
                  // if (i.columnType === 'SINGLE_CHOICE') {
                  //   list = this.getSingleChoiceOpions(i);
                  // }
                  // console.log('ppppppppp', text, list);

                  return (
                    <Col key={index} span={layout ? layout : undefined}>
                      {/* labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }} */}

                      <Form.Item
                        labelCol={{ style: { width: wid } }}
                        key={index}
                        label={i.name}
                        name={i.apiName}
                        rules={i.columnConfig.required && this.getRules(i)}
                      >
                        {i.columnType === 'TEXT' ? (
                          <Input
                            maxLength={i.columnConfig.maxLength}
                            placeholder={i.columnConfig.placeHolder}
                          />
                        ) : i.columnType === 'TEXTAREA' ? (
                          <TextArea placeholder="请输入文本" autoSize />
                        ) : i.columnType === 'DATE' ? (
                          <DatePicker
                            style={{ width: '100%' }}
                            onChange={(value) => this.onSwitchChange(value, i.apiName)}
                          />
                        ) : i.columnType === 'RELATIONSHIP' ? (
                          // <Input

                          //   disabled
                          //   placeholder="Enter your username"
                          //   suffix={<PlusOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
                          // />

                          <div className="relation" onClick={() => this.relationClick(i)}>
                            <div className="relation-left">
                              {this.formRef.current?.getFieldValue(`${i.apiName}_name`)}
                            </div>
                            <div>+</div>
                          </div>
                        ) : i.columnType === 'BOOL' ? (
                          <Switch onChange={() => this.onChange()} />
                        ) : i.columnType === 'SINGLE_CHOICE' ? (
                          i.columnConfig.singleChoiceType === 'DROP_LIST' ? (
                            <Select
                              defaultValue=""
                              style={{ width: '100%' }}
                              onChange={() => this.handleSelectChange()}
                            >
                              {options[i.apiName] &&
                                options[i.apiName].map((item, index) => {
                                  return (
                                    <Option value={item.apiName} key={index}>
                                      {item.name}
                                    </Option>
                                  );
                                })}
                            </Select>
                          ) : (
                            <Radio.Group>
                              {options[i.apiName] &&
                                options[i.apiName].map((item, index) => {
                                  return (
                                    <Radio value={item.apiName} key={index}>
                                      {item.name}
                                    </Radio>
                                  );
                                })}
                            </Radio.Group>
                          )
                        ) : i.columnType === 'SINGLE_CHOICE_TREE' ? (
                          <Cascader
                            options={options[i.apiName] || []}
                            placeholder="Please select"
                            fieldNames={{
                              label: 'name',
                              value: 'apiName',
                            }}
                          />
                        ) : i.columnType === 'MULTI_CHOICE' ? (
                          i.columnConfig.multiChoiceType === 'DROP_LIST' ? (
                            <Select mode="multiple" allowClear style={{ width: '100%' }}>
                              {options[i.apiName] &&
                                options[i.apiName].map((item, index) => {
                                  return (
                                    <Option value={item.apiName} key={index}>
                                      {item.name}
                                    </Option>
                                  );
                                })}
                            </Select>
                          ) : (
                            <Checkbox.Group>
                              {options[i.apiName] &&
                                options[i.apiName].map((field, index) => (
                                  <Checkbox value={field.apiName}>{field.name}</Checkbox>
                                ))}
                            </Checkbox.Group>
                          )
                        ) : i.columnType === 'MULTI_CHOICE_TREE' ? (
                          <Cascader
                            multiple
                            options={options[i.apiName] || []}
                            placeholder="Please select"
                            fieldNames={{
                              label: 'name',
                              value: 'apiName',
                            }}
                          />
                        ) : // <Select
                        //   mode="multiple"
                        //   allowClear
                        //   style={{ width: '100%' }}
                        //   placeholder="Please select"
                        //   defaultValue={[]}
                        //   onChange={() => this.onSelectArrChange()}
                        // >
                        //   {options[i.apiName] &&
                        //     options[i.apiName].map((item, index) => {
                        //       return (
                        //         <Option value={item.apiName} key={index}>
                        //           {item.name}
                        //         </Option>
                        //       );
                        //     })}
                        // </Select>
                        i.columnType === 'INTEGER' ? (
                          <InputNumber style={{ width: '100%' }} precision={0} />
                        ) : i.columnType === 'DECIMAL' ? (
                          <InputNumber style={{ width: '100%' }} precision={0} />
                        ) : i.columnType === 'MONEY' ? (
                          <InputNumber prefix="￥" style={{ width: '100%' }} />
                        ) : i.columnType === 'PERCENT' ? (
                          <InputNumber addonAfter="%" style={{ width: '100%' }} />
                        ) : i.columnType === 'PHONE' ? (
                          <Input maxLength={11} placeholder="请填写接收人手机号码" />
                        ) : i.columnType === 'ID_CARD' ? (
                          <Input maxLength={18} placeholder="请填写身份证号码" />
                        ) : i.columnType === 'FILE' ? (
                          <Upload
                            onChange={({ file, fileList, event }) =>
                              this.handleFilesChange(file, fileList, i)
                            }
                          >
                            <Button>上传文件</Button>
                          </Upload>
                        ) : i.columnType === 'WEBSITE' ? (
                          <Input placeholder="请填写网址" />
                        ) : i.columnType === 'EMAIL' ? (
                          <Input placeholder="请填写邮箱" />
                        ) : i.columnType === 'ITEM_DETAIL' ? (
                          <Input placeholder="请填写邮箱" />
                        ) : i.columnType === 'GEO_POSITION' ? (
                          <div>
                            lat： <Input placeholder="请填写经度" />
                            lng：
                            <Input placeholder="请填写纬度" />
                          </div>
                        ) : i.columnType === 'QUOTE' ? (
                          <div>
                            {relationDataList[i.columnConfig.quoteObjectApiName] &&
                              relationDataList[i.columnConfig.quoteObjectApiName][
                                `${i.columnConfig.quoteObjectApiName}0_${i.columnConfig.quoteColumnApiName}`
                              ]}
                          </div>
                        ) : i.columnType === 'TIME' ? (
                          <TimePicker
                            style={{ width: '100%' }}
                            defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
                          />
                        ) : i.columnType === 'IMAGE' ? (
                          <div>
                            <Upload
                              accept="image/*"
                              listType="picture-card"
                              fileList={imgFileList[i.apiName]}
                              // beforeUpload={(file) => this.beforeUpload(file)}
                              onPreview={(file) => this.handlePreview(file)}
                              onChange={({ file, fileList, event }) =>
                                this.handleImageChange(file, fileList, i)
                              }
                            >
                              <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                              </div>
                            </Upload>
                            <Modal
                              visible={previewOpen}
                              // title={previewTitle}
                              footer={null}
                              onCancel={() => this.imgPreviewCancel()}
                            >
                              <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                          </div>
                        ) : null}
                      </Form.Item>
                    </Col>
                  );
                })}
              {subEntityList &&
                subEntityList.map((item, index) => {
                  return (
                    <Col key={index} span={layout ? layout : undefined}>
                      <Form.Item key={index} label={item.name}>
                        <Table
                          style={{ width: '100%' }}
                          rowKey={(record) => record.apiName}
                          // ref={th}
                          ref={this[`table${index}Ref`]}
                          components={components}
                          columns={this.columnsTable(item.columnList, index, item.apiName)}
                          dataSource={item.tableData2}
                          pagination={false}
                          scroll={{ x: 'max-content' }}
                        />
                        <Button onClick={() => this.tableDataAddClick(item, index)}>添加</Button>
                      </Form.Item>
                    </Col>
                  );
                })}
            </Row>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              {/* <Button  type="primary" htmlType="submit" onClick={submitForm}>
              提交
            </Button> */}

              <div className="btn-line">
                {actionBtnList &&
                  actionBtnList.map((i, idx) => {
                    let Btn = (
                      <Button
                        key={idx}
                        onClick={
                          i.actionList.find((ite) => ite.name == 'onClick') !== -1
                            ? () => this.btnLineClick(i.actionList)
                            : () => {}
                        }
                        className="btn"
                        type="primary"
                      >
                        {i.title}
                      </Button>
                    );
                    return i.actionList[0].type == 0 && i.actionList[0].btnType == 3 ? (
                      <Popconfirm
                        title="是否确认删除？"
                        okText="Yes"
                        cancelText="No"
                        onConfirm={() => this.confirmDataBatch()}
                        onCancel={() => this.cancelProp()}
                      >
                        {Btn}
                      </Popconfirm>
                    ) : i.tooltip ? (
                      <Tooltip placement="topLeft" title={i.tooltip}>
                        {Btn}
                      </Tooltip>
                    ) : (
                      <div>{Btn}</div>
                    );
                  })}

                {/* <Button className="btn" type="primary" htmlType="submit">
                  提交
                </Button> */}
                <Button className="btn" onClick={() => this.resetClick()}>
                  重置
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>

        <ClickDialog
          getShowClick={() => this.getShowClick()}
          getUser={(val) => this.getUser(val)}
          columns={columnsBtn}
          tableData={tableDataBtn}
          isModalVisible={isClickVisible}
        />
      </div>
    );
  }
}

export default ColorfulForm;
