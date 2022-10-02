import * as React from 'react';
import { createElement, useEffect, useState, useRef, useContext } from 'react';
import './index.scss';
import moment from 'moment';
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
} from 'antd';
import { func } from 'prop-types';

import type { TableRowSelection } from 'antd/lib/table/interface';
import type { ColumnsType } from 'antd/lib/table';


// import { UploadOutlined } from '@ant-design/icons';
import { PlusOutlined, ReadOutlined, UserOutlined } from '@ant-design/icons';

const { TextArea } = Input;

// import { createFromIconfontCN } from '@ant-design/icons';

// const IconFont = createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_3324425_berrts5o6c.js',
// });

// window._eventMap = new Map()
//   window._eventMap.set(key,value)

import { getPagesList, logPages, addPages, metaInfo, dataTable } from '../../api/pages';
import type { FormInstance } from 'antd/lib/form';

const EditableContext = React.createContext<FormInstance<any> | null>(null);
// class EditableCell extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       editing: false,
//       plainOptions: ['Apple', 'Pear', 'Orange'],
//       value: ''

//     };
//   }
//   form = useContext(EditableContext)!;

//   componentDidMount() {
//     // dataIndex && form.setFieldsValue({ [dataIndex]: record[dataIndex] });
//   }

//   componentWillReceiveProps(nextProps, preState) {
//     // new Child(nextProps).getColumn();
//     // dataIndex && form.setFieldsValue({ [dataIndex]: record[dataIndex] });
//   }

//   async save() {
//     try {
//       const values = await form.validateFields();
//       // console.log(record, values);
//       this.props.handleSave({ ...record, ...values });
//       // toggleEdit();
//     } catch (errInfo) {
//       // console.log('Save failed:', errInfo);
//     }
//   }

//   //子表格的时间选择
//   async onSwitchTableChange(value) {
//     // console.log(value);
//     try {
//       const values = await form.validateFields();
//       // console.log(record, values);
//       this.props.handleSave({ ...record, ...values });
//       // toggleEdit();
//     } catch (errInfo) {
//       // console.log('Save failed:', errInfo);
//     }
//   }

//   //子表格的switchs
//   onChangeTable() {
//     // console.log('onChangeTable');
//   }

//   //子表格的单选
//   onRadioTableChange() {
//     // console.log('onRadioTableChange');
//   }

//   //SINGLE_CHOICE_TREE
//   handleSelectTableChange() {
//     // console.log('handleSelectTableChange');
//   }

//   //MULTI_CHOICE
//   onCheckTableChange() {
//     // console.log('onCheckTableChange');
//   }

//   //MULTI_CHOICE_TREE'
//   onSelectArrTableChange() {
//     // console.log('onSelectArrTableChange');
//   }

//   render() {
//     const { children, dataIndex, columnType, realationClick } = this.props;
//     const  {plainOptions, value} = this.state
//     // let childNode = children;

//     // // if (editable) {
//     // // childNode = editing ? (

//     // //子表格区别
//     // switch (columnType) {
//     //   case 'TEXT':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0, width: 100 }} name={dataIndex} rules={[]}>
//     //         <Input onPressEnter={() => this.save()} onBlur={() => this.save()} />
//     //       </Form.Item>
//     //     );
//     //     break;

//     //   case 'TEXTAREA':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
//     //         <TextArea placeholder="请输入文本" autoSize onBlur={() => this.save()} />
//     //       </Form.Item>
//     //     );
//     //     break;
//     //   case 'DATE':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0, width: 200 }} name={dataIndex} rules={[]}>
//     //         <DatePicker onChange={() => this.save()} />
//     //       </Form.Item>
//     //     );
//     //     break;

//     //   case 'RELATIONSHIP':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
//     //         <div className="realation" onClick={() => realationClick(i)}>
//     //           <div className="realation-left">111</div>
//     //           <div>+</div>
//     //         </div>
//     //       </Form.Item>
//     //     );
//     //     break;

//     //   case 'BOOL':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
//     //         <Switch onChange={() => this.save()} />
//     //       </Form.Item>
//     //     );
//     //     break;

//     //   case 'SINGLE_CHOICE':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
//     //         <Radio.Group onChange={() => this.save()} value={value}>
//     //           <Radio value={1}>A</Radio>
//     //           <Radio value={2}>B</Radio>
//     //           <Radio value={3}>C</Radio>
//     //           <Radio value={4}>D</Radio>
//     //         </Radio.Group>
//     //       </Form.Item>
//     //     );
//     //     break;

//     //   case 'SINGLE_CHOICE_TREE':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
//     //         <Select defaultValue="" style={{ width: 120 }} onChange={() => this.save()}>
//     //           <Option value="jack">Jack</Option>
//     //           <Option value="lucy">Lucy</Option>
//     //           <Option value="disabled" disabled>
//     //             Disabled
//     //           </Option>
//     //           <Option value="Yiminghe">yiminghe</Option>
//     //         </Select>
//     //       </Form.Item>
//     //     );
//     //     break;

//     //   case 'MULTI_CHOICE':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
//     //         <Checkbox.Group
//     //           options={plainOptions}
//     //           defaultValue={['Apple']}
//     //           onChange={() => this.save()}
//     //         />
//     //       </Form.Item>
//     //     );
//     //     break;

//     //   case 'MULTI_CHOICE_TREE':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
//     //         <Select
//     //           mode="multiple"
//     //           allowClear
//     //           style={{ width: '100%' }}
//     //           placeholder="Please select"
//     //           defaultValue={[]}
//     //           onChange={() => this.save()}
//     //         >
//     //           {children}
//     //         </Select>
//     //       </Form.Item>
//     //     );
//     //     break;

//     //   case 'INTEGER':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
//     //         <InputNumber onBlur={() => this.save()} precision={0} />
//     //       </Form.Item>
//     //     );
//     //     break;

//     //   case 'DECIMAL':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
//     //         <InputNumber onBlur={() => this.save()} precision={0} />
//     //       </Form.Item>
//     //     );
//     //     break;
//     //   case 'MONEY':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
//     //         <InputNumber onBlur={() => this.save()} prefix="￥" style={{ width: '100%' }} />
//     //       </Form.Item>
//     //     );
//     //     break;

//     //   case 'PHONE':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
//     //         <Input onBlur={() => this.save()} maxLength={11} placeholder={`请填写${dataIndex}`} />
//     //       </Form.Item>
//     //     );
//     //     break;

//     //   case 'ID_CARD':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
//     //         <Input onBlur={() => this.save()} maxLength={18} placeholder={`请填写${dataIndex}`} />
//     //       </Form.Item>
//     //     );
//     //     break;
//     //   case 'FILE':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
//     //         <Upload {...this.props}>
//     //           <Button>上传文件</Button>
//     //         </Upload>
//     //       </Form.Item>
//     //     );
//     //     break;

//     //   case 'WEBSITE':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
//     //         <Input onBlur={() => this.save()} placeholder={`请填写${dataIndex}`} />
//     //       </Form.Item>
//     //     );
//     //     break;
//     //   case 'EMAIL':
//     //     childNode = (
//     //       <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
//     //         <Input onBlur={() => this.save()} placeholder={`请填写${dataIndex}`} />
//     //       </Form.Item>
//     //     );
//     //     break;
//     //   case 'ITEM_DETAIL':
//     //     childNode = <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}></Form.Item>;
//     //     break;

//     //   default:
//     //     break;
//     // }
//     return <td {...this.props}>{'11111'}</td>;
//   }
// }
const EditableCell: React.FC<any> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  columnType,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<any>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    // if (editing) {
    // inputRef.current!.focus();
    // }

    // console.log('dataIndex', dataIndex);
    dataIndex && form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  }, [editing]);

  // const toggleEdit = () => {
  //   setEditing(!editing);
  //   form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  // };

  const save = async () => {
    try {
      const values = await form.validateFields();
      // console.log(record, values);
      handleSave({ ...record, ...values });
      // toggleEdit();
    } catch (errInfo) {
      // console.log('Save failed:', errInfo);
    }
  };

  //子表格的时间选择
  const onSwitchTableChange = async (value) => {
    // console.log(value);
    try {
      const values = await form.validateFields();
      // console.log(record, values);
      handleSave({ ...record, ...values });
      // toggleEdit();
    } catch (errInfo) {
      // console.log('Save failed:', errInfo);
    }
  };

  //子表格的switchs
  const onChangeTable = () => {
    // console.log('onChangeTable');
  };

  //子表格的单选
  const onRadioTableChange = () => {
    // console.log('onRadioTableChange');
  };

  //SINGLE_CHOICE_TREE
  const handleSelectTableChange = () => {
    // console.log('handleSelectTableChange');
  };

  //MULTI_CHOICE
  const onCheckTableChange = () => {
    // console.log('onCheckTableChange');
  };

  //MULTI_CHOICE_TREE'
  const onSelectArrTableChange = () => {
    // console.log('onSelectArrTableChange');
  };

  //

  let childNode = children;

  // if (editable) {
  // childNode = editing ? (

  //子表格区别
  switch (columnType) {
    case 'TEXT':
      childNode = (
        <Form.Item style={{ margin: 0, width: 100 }} name={dataIndex} rules={[]}>
          <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
      );
      break;

    case 'TEXTAREA':
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
          <TextArea placeholder="请输入文本" autoSize onBlur={save} />
        </Form.Item>
      );
      break;
    case 'DATE':
      childNode = (
        <Form.Item style={{ margin: 0, width: 200 }} name={dataIndex} rules={[]}>
          <DatePicker onChange={save} />
        </Form.Item>
      );
      break;

    case 'RELATIONSHIP':
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
          <div className="realation" onClick={() => realationClick(i)}>
            <div className="realation-left">111</div>
            <div>+</div>
          </div>
        </Form.Item>
      );
      break;

    case 'BOOL':
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
          <Switch onChange={save} />
        </Form.Item>
      );
      break;

    case 'SINGLE_CHOICE':
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
          <Radio.Group onChange={save} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group>
        </Form.Item>
      );
      break;

    case 'SINGLE_CHOICE_TREE':
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
          <Select defaultValue="" style={{ width: 120 }} onChange={save}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Form.Item>
      );
      break;

    case 'MULTI_CHOICE':
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
          <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={save} />
        </Form.Item>
      );
      break;

    case 'MULTI_CHOICE_TREE':
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={[]}
            onChange={save}
          >
            {children}
          </Select>
        </Form.Item>
      );
      break;

    case 'INTEGER':
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
          <InputNumber onBlur={save} min={-99999999999} max={99999999999} precision={0} />
        </Form.Item>
      );
      break;

    case 'DECIMAL':
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
          <InputNumber onBlur={save} min={-99999999999} max={99999999999} precision={0} />
        </Form.Item>
      );
      break;
    case 'MONEY':
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
          <InputNumber onBlur={save} prefix="￥" style={{ width: '100%' }} />
        </Form.Item>
      );
      break;

    case 'PHONE':
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
          <Input onBlur={save} maxLength={11} placeholder="请填写接收人手机号码" />
        </Form.Item>
      );
      break;

    case 'ID_CARD':
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
          <Input onBlur={save} maxLength={18} placeholder="请填写身份证号码" />
        </Form.Item>
      );
      break;
    case 'FILE':
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
          <Upload {...props}>
            <Button>上传文件</Button>
          </Upload>
        </Form.Item>
      );
      break;

    case 'WEBSITE':
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
          <Inputon Blur={save} placeholder="请填写网址" />
        </Form.Item>
      );
      break;
    case 'EMAIL':
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}>
          <Input onBlur={save} placeholder="请填写邮箱" />
        </Form.Item>
      );
      break;
    case 'ITEM_DETAIL':
      childNode = <Form.Item style={{ margin: 0 }} name={dataIndex} rules={[]}></Form.Item>;
      break;

    default:
      break;
  }

  // childNode = (
  //   <Form.Item
  //     style={{ margin: 0 }}
  //     name={dataIndex}
  //     rules={
  //       [
  //         // {
  //         //   required: true,
  //         //   message: `${title} is required.`,
  //         // },
  //       ]
  //     }
  //   >
  //     <Input ref={inputRef} onPressEnter={save} onBlur={save} />
  //   </Form.Item>
  // );
  // ) : (
  //   <div className="editable-cell-value-wrap" style={{ paddingRight: 24, minWidth: 50 }} onClick={toggleEdit}>
  //     {children}
  //   </div>
  // );
  // }

  return <td {...restProps}>{childNode}</td>;
};

const EditableRow: React.FC<any> = ({ index, ...props }) => {
  const [form] = Form.useForm();
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
  propName: 'any';
  initial: 'any';
  tableData: 'array';
  tableData2: 'array';
  tableDataBtn: 'array';

  columns: 'any';
  columnsBtn: 'any';
  columns2: 'any';
  subEntity: 'any';
}

const ColorfulForm: React.FC<ColorfulFormProps> = function ColorfulForm({
  color,
  wid = '120px',
  // tableData = [],
  // columns = [],
  itemList = {
    entity: [  ],
  },

  subEntity = [ ],

  propName = [ ],
  initial = [ ],
  style = { },
  ...otherProps
}) {
  const [subEntityList, setSubEntityList] = useState([]);
  //确保userEffect在弹窗时候执行一次
  useEffect(() => {
    //  let data = {
    //    userName:'sdzz_admin',
    //    password:'Zz@123456',
    //    loginType:'USERNAME'
    //  };
    //   logPages(data).then(res=>{
    //   })
    // let subArr = [];
    // let arr = [];
    // subEntity.forEach((i) => {
    //   console.log('1635', i);
    //   let subObj = {};
    //   subObj.objectApiName = i.apiName;
    //   console.log('1638', subObj);

    //   let arr = i.columnList.filter((item) => {
    //     return item.apiName !== 'id';
    //   });

    //   console.log('1641', arr);

    //   subObj.params = arr;

    //   subArr.push(subObj);
    // });

    // console.log('1652', subArr);

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

    setSubEntityList(subEntity);

    // console.log('1670', subEntity);
  }, []);

  // console.log('initial', initial);

  const [form] = Form.useForm();
  const _style = style || {};
  if (color) {
    _style.backgroundColor = color;
  }
  const _otherProps = otherProps || {};
  _otherProps.style = _style;

  //提交
  const onFinish = (values: any) => {
    // console.log('Success:', values);

    const formData = new FormData();
    formData.append('objectApiName', 'common_user');
    // console.log(itemList.entity);
    const result = itemList.entity.filter((item) => {
      return item.columnType === 'DATE';
    });

    // console.log('result', result);

    for (let i in values) {
      // console.log(1774, values[i]);

      if (values[i]) {
        // console.log(values[i]);
        result.forEach((element) => {
          if (element.apiName == i) {
            // console.log('33333333', values[i]);
            values[i] = moment(values[i]).format('YYYY-MM-DD HH:mm:ss');
          }
        });
        formData.append(`params.${i}`, values[i]);
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
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log('Failed:', errorInfo);
  };

  const { Option } = Select;

  const onChange = (date, dateString) => {
    // console.log(date);
    // console.log(dateString);
  };

  const onSwitchChange = (value, apiName) => {
    // console.log(`switch to ${value}`, apiName);
    // itemList.entity[index] = value
    // let obj = {}
    // obj[apiName] = moment(value).format('YYYY-MM-DD HH:mm:ss')
    // console.log('dateobj', obj)
    // form.setFieldsValue(obj)
  };

  // radio
  const [value, setValue] = React.useState(1);

  //  checkbox
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const onCheckChange = (checkedValues) => {
    // console.log('checked = ', checkedValues);
  };

  //select array
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  const onSelectArrChange = (value) => {
    // console.log(`selected ${value}`);
  };

  // select
  const handleSelectChange = (value) => {
    // console.log(`selected ${value}`);
  };

  const [columns, setColumns] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [columnsBtn, setColumnsBtn] = useState([]);
  const [tableDataBtn, setTableDataBtn] = useState([]);
  const [inputName, setInputName] = useState('');
  const realationClick = (item) => {
    // console.log(item);
    setInputName(item.apiName);

    metaInfo({
      objectApiName: item.columnConfig.relationObjectApiName,
      containsColumn: true,
    }).then((res) => {
      // console.log(res.data.mainObject.columnList);
      // let  columnsTest = res.data.columnList
      let arr = [];
      res.data.mainObject.columnList.forEach((item) => {
        if (item.apiName == 'name' || item.apiName == 'id') {
          arr.push(item);
        }
      });

      let arr2 = [];
      arr.forEach((i) => {
        let obj = {};
        obj.title = i.name;
        // obj.key = i.apiName;
        obj.dataIndex = i.apiName;

        // console.log(obj);
        arr2.push(obj);
      });

      // console.log(arr2);

      let columnsTest = arr2;

      setColumns(columnsTest);
    });

    let data = {
      filters: [
        {
          metaKey: '',
          filterType: '',
          value: '',
        },
      ],
      mainObjectApiName: 'common_user',
      pageNo: 0,
      pageSize: 5,
      queryColumns: ['id', 'name'],
    };
    dataTable(data).then((res) => {
      res.data.data.forEach((item) => {
        item.key = item.id;
      });

      // console.log('tableData2', res.data.data);

      setTableData(res.data.data);

      setIsModalVisible(true);
    });

    //打开弹窗
  };

  //弹窗传值
  const getShow = (val) => {
    setIsModalVisible(val);
  };

  // 按钮弹窗传值
  const getShowClick = (val) => {
    setClickVisible(val);
  };

  //获取选中的用户数据
  const getUser = (val) => {
    // console.log('one user', val);
    let inputNameObj = {};
    inputNameObj[inputName] = val[0].name;
    form.setFieldsValue(inputNameObj);
  };

  //上传文件
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const getRules = (item) => {
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
          {
            pattern: new RegExp(/ ^(-?\d+)(.\d+|\d+)?$/, 'g'),
            message: '请输入实数',
          },
        ];

      case 'DECISINGLE_CHOICE_TREEMAL':
        return [{ required: true, message: '下拉单选不能为空' }];

      case 'MULTI_CHOICE':
        return [{ required: true, message: '下拉多选不能为空' }];

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
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              'g',
            ),
            message: '请输入正确的网址',
          },
        ];
      case 'EMAIL':
        return [
          { required: true, message: '邮箱不能为空' },
          {
            pattern: new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+/, 'g'),
            message: '请输入正确的邮箱',
          },
        ];

      default:
        break;
    }
  };

  //弹窗
  const [isModalVisible, setIsModalVisible] = useState(false);

  //传值给dialog

  const [setTable] = useState([]);

  //获取数据
  const getPagesListFuc = (params) => {
    // console.log('api api api');
    getPagesList(params).then((res) => {
      // console.log(res);
    });
  };

  const onRadioChange = () => {};

  // console.log('form', form);

  //form里面的table
  const [formTableData, setFormTableData] = useState([]);

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const handleSave = (row: any) => {
    // console.log('row',row)
    // const newData = [...tableData2];
    // const index = newData.findIndex((item) => row.key === item.key);
    // const item = newData[index];
    // newData.splice(index, 1, {
    //   ...item,
    //   ...row,
    // });

    // console.log('subs', row);
    subEntityList[row.tableIndex].tableData2[row.key] = row;
    // console.log('subEntityList', subEntityList);
    setSubEntityList(JSON.parse(JSON.stringify(subEntityList)));
    // setSubEntityList(subEntity);
  };

  const columnsTable = (list, index) => {
    let arr = list.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: any) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave,
          columnType: col.columnType,
        }),
      };
    });

    return arr;
  };

  //  添加一行子表格
  const tableDataAddClick = (item, index) => {
    // console.log('00000000', item, index);
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
    setSubEntityList(JSON.parse(JSON.stringify(subEntityList)));
  };
  // console.log('formTableData', columnsTable);

  //点击按钮分类弹窗tooltip等

  //气泡确认框的操作
  const confirmProp = () => {
    message.success('提交成功');
  };

  const cancelProp = () => {
    message.error('取消提交');
  };

  const [isClickVisible, setClickVisible] = useState(false);

  const testMessage = (value) => {
    console.log(value);
 
    const type = value[0].type;
    switch (type) {
      //
      case 0:
        break;
      case 1:
        let arr2 = [];
        value[0].actionDialogParamsList.forEach((i, index) => {
          let obj = {};
          obj.title = i.name;
          obj.key = i.name;
          obj.dataIndex = 'name';

          // console.log(obj);
          arr2.push(obj);
        });

        // let arr2 =  [
        //   {
        //     title: '姓名',
        //     dataIndex: 'name',
        //     key: 'name',
        //   },

        // ];;

        // let arr2 = [
        //   { dataIndex: 'name', key: 'aaa', title: 'aaa' },

        //   {
        //     dataIndex: 'b',
        //     key: 'b',
        //     title: 'b',
        //   },
        // ];

        // console.log(arr2);

        let columnsTest = arr2;

        setColumnsBtn(columnsTest);

        let arr3 = [];
        value[0].actionDialogParamsList.forEach((i, index) => {
          let obj = {};
          obj.name = i.name;

          obj.key = index;

          // console.log(obj);
          arr3.push(obj);
        });
        // let arr3 = [
        //   {
        //     key: '1',
        //     name: '胡彦斌',

        //   },
        //   {
        //     key: '2',
        //     name: '胡彦祖',

        //   },
        // ];;
        // let arr3 = [
        //   { key: '1', name: 'aaa' },

        //   { key: '2', name: 'b' },
        // ];
        let dataTest3 = arr3;


        setTableDataBtn(dataTest3);

        setClickVisible(true);

        break;
      case 2:
        message.info(`${value[0].triggeredContent}`);
        break;
      case 4:
        let id = value[0].actionPage[value[0].actionPage.length - 1];
        window.location = `www.test.com?id=${id}`;
        break;
      case 5:
         
        // value[0].actionJSNamezheng
        value[0].actionJSValue()
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div className="form-padding">
        <Form
          style={style}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Row gutter={24}>
            {itemList &&
              itemList.entity &&
              itemList.entity.map((i, index) => {
                if (i.name == 'id' || i.columnType == 'AUTO_NO') {
                  return;
                }

                return (
                  <Col key={index} span={i.columnConfig.col}>
                    {/* labelCol={{ span: 6 }}
                      wrapperCol={{ span: 18 }} */}

                    <Form.Item
                      labelCol={{ style: { width: wid } }}
                      key={index}
                      label={i.name}
                      name={i.apiName}
                      rules={getRules(i)}
                    >
                      {i.columnType === 'TEXT' ? (
                        <Input
                          maxLength={i.columnConfig.maxLength}
                          placeholder={i.columnConfig.placeHolder}
                        />
                      ) : i.columnType === 'TEXTAREA' ? (
                        <TextArea placeholder="请输入文本" autoSize />
                      ) : i.columnType === 'DATE' ? (
                        <DatePicker onChange={(value) => onSwitchChange(value, i.apiName)} />
                      ) : i.columnType === 'RELATIONSHIP' ? (
                        // <Input

                        //   disabled
                        //   placeholder="Enter your username"
                        //   suffix={<PlusOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
                        // />

                        <div className="realation" onClick={() => realationClick(i)}>
                          <div className="realation-left">{form.getFieldValue(i.apiName)}</div>
                          <div>+</div>
                        </div>
                      ) : i.columnType === 'BOOL' ? (
                        <Switch onChange={onChange} />
                      ) : i.columnType === 'SINGLE_CHOICE' ? (
                        <Radio.Group onChange={onRadioChange} value={value}>
                          <Radio value={1}>A</Radio>
                          <Radio value={2}>B</Radio>
                          <Radio value={3}>C</Radio>
                          <Radio value={4}>D</Radio>
                        </Radio.Group>
                      ) : i.columnType === 'SINGLE_CHOICE_TREE' ? (
                        <Select
                          defaultValue=""
                          style={{ width: 120 }}
                          onChange={handleSelectChange}
                        >
                          <Option value="jack">Jack</Option>
                          <Option value="lucy">Lucy</Option>
                          <Option value="disabled" disabled>
                            Disabled
                          </Option>
                          <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      ) : i.columnType === 'MULTI_CHOICE' ? (
                        <Checkbox.Group
                          options={plainOptions}
                          defaultValue={['Apple']}
                          onChange={onCheckChange}
                        />
                      ) : i.columnType === 'MULTI_CHOICE_TREE' ? (
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: '100%' }}
                          placeholder="Please select"
                          defaultValue={[]}
                          onChange={onSelectArrChange}
                        >
                          {children}
                        </Select>
                      ) : i.columnType === 'INTEGER' ? (
                        <InputNumber min={-99999999999} max={99999999999} precision={0} />
                      ) : i.columnType === 'DECIMAL' ? (
                        <InputNumber min={-99999999999} max={99999999999} precision={0} />
                      ) : i.columnType === 'MONEY' ? (
                        <InputNumber prefix="￥" style={{ width: '100%' }} />
                      ) : i.columnType === 'PHONE' ? (
                        <Input maxLength={11} placeholder="请填写接收人手机号码" />
                      ) : i.columnType === 'ID_CARD' ? (
                        <Input maxLength={18} placeholder="请填写身份证号码" />
                      ) : i.columnType === 'FILE' ? (
                        <Upload {...props}>
                          <Button>Click to Upload</Button>
                        </Upload>
                      ) : i.columnType === 'WEBSITE' ? (
                        <Input placeholder="请填写网址" />
                      ) : i.columnType === 'EMAIL' ? (
                        <Input placeholder="请填写邮箱" />
                      ) : i.columnType === 'ITEM_DETAIL' ? (
                        <Input placeholder="请填写邮箱" />
                      ) :  i.columnType === 'GEO_POSITION' ? (
                       <div>
                        lat： <Input placeholder="请填写经度" />
                        lng：<Input placeholder="请填写纬度" />
                       </div>

                      ):null}
                    </Form.Item>
                  </Col>
                );
              })}
            {subEntityList.map((item, index) => {
              return (
                <Form.Item key={index} name={1234} label={'test table'}>
                  <Table
                    components={components}
                    columns={columnsTable(item.columnList, index)}
                    dataSource={item.tableData2}
                    pagination={false}
                  />
                  <Button onClick={() => tableDataAddClick(item, index)}>添加</Button>
                </Form.Item>
              );
            })}
          </Row>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            {/* <Button  type="primary" htmlType="submit" onClick={submitForm}>
            提交
          </Button> */}

            <div className="btn-line">
              {propName &&
                propName.map((i, idx) => {
                  let Btn = (
                    <Button
                      key={idx}
                      onClick={
                        i.actionList.find((ite) => ite.name == 'onClick') !== -1
                          ? () => testMessage(i.actionList)
                          : () => {}
                      }
                      className="btn"
                      type="primary"
                    >
                      {i.title}
                    </Button>
                  );
                  return i.actionList[0].type == 0 ? (
                    <Popconfirm
                      title="是否确认提交？"
                      okText="Yes"
                      cancelText="No"
                      onConfirm={confirmProp}
                      onCancel={cancelProp}
                    >
                      {Btn}
                    </Popconfirm>
                  ) : i.actionList[0].type == 2 ? (
                    <Tooltip placement="topLeft" title={i.tooltip}>
                      {Btn}
                    </Tooltip>
                  ):(
                    <div>{Btn}</div>
                  );
                })}

              <Button className="btn" type="primary" htmlType="submit">
                提交
              </Button>
              <Button className="btn">重置</Button>
            </div>
          </Form.Item>
        </Form>

        {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}

        {/* <ColorfulDialog
          getShow={getShow}
          getUser={getUser}
          columns={columns}
          tableData={tableData}
          isModalVisible={isModalVisible}
        />

        <ClickDialog
          getShowClick={getShowClick}
          columns={columnsBtn}
          tableData={tableDataBtn}
          isModalVisible={isClickVisible}
        /> */}
      </div>
    </div>
  );
};

export default ColorfulForm;
