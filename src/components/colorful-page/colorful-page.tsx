import * as React from 'react';
import { createElement, useEffect} from 'react';
import './index.scss';

// import { Input } from '@alifd/next';

import { Modal } from 'antd';

import { useState } from 'react';

import Bus from '../../utils/eventBus';

// type selfProps = {
//   getShow: Function;
//   getUser: Function;
// };

// export interface ColorfulDialogProps {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }

// const ColorfulDialog: React.FC<selfProps> = ({
//      isModalVisible = true,  children,
// }) => {

//   const [visible, setVisible] = useState(false);

//   //确保userEffect在弹窗时候执行一次
//   // useEffect(() => {
//   //   setVisible(isModalVisible)
//   //   if (isModalVisible) {
//   //     console.log(12345612345);
//   //   }
//   // }, [isModalVisible]);

//   useEffect(() => {
//     Bus.addListener('modalId', data => {
//       console.log(22222222222222222, data);
//       console.log(this.props.id)

//       // setVisible(data)
//     })
//   }, [])

//   const handleOk = () => {
//     console.log('111112222');
//     setVisible(false);

//   };

//   const handleCancel = () => {
//     setVisible(false);
//   };

//   return (
//     <div>
//       <Modal
//         title="Basic Modal"
//         visible={visible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         width={800}
//       >

//         {children}
//       </Modal>
//     </div>
//   );
// };

// export default ColorfulDialog;

class ColorfulPage extends React.Component {
  static defaultProps = {
    "id": "",
    "componentAlias": "",
    "initial": [
      {
        "name": "id",
        "textContent": "1"
      },
      {
        "name": "name",
        "textContent": "2"
      }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
     
    };
  }


  componentDidMount() {
    // console.log('this.props.id',this.props.id)
    Bus.addListener(this.props.id, (data) => {
      // console.log(22222222222222222,this.props.id, data);
      // console.log(this.props.id)

      // setVisible(data)
      this.setState({
        visible: data,
        // id:this.props.id,
        // name:this.props.name
      })

    });
    // const path = window.location.search;
    // console.log(path)
    let s ={};
    
    for(let l=0;l <this.props.initial.length;l++){
      // console.log(this.props.initial.length);
      console.log(this.props.initial[l])
      s[this.props.initial[l].name]=this.existKey(this.props.initial[l].name)
      
    };
    console.log(s)

    this.setState({
      ...s,
    })
    // console.log(s)
    this.existKey('')
  
  }


  componentWillReceiveProps(nextProps: Readonly<{}>, nextContext: any): void {
    // console.log('componentWillReceiveProps----this.props.id',nextProps.id)
    Bus.addListener(nextProps.id, (data) => {
      // console.log('componentWillReceiveProps',nextProps.id, data);
      // console.log(this.props.id)

      // setVisible(data)
      this.setState({
        visible: data
      })
    });
  }

  
  existKey(key) {
   
    //1、url截取?之后的字符串(不包含?)
    var pathSearch = window.location.search.substr(1);
    var result = [];
    //2、以&为界截取参数键值对
    var paramItems = pathSearch.split("&");
    console.log(paramItems);
    // 3、将键值对形式的参数存入数组
    for (var i = 0; i < paramItems.length; i++) {
        var paramKey = paramItems[i].split("=")[0];
        var paramValue = paramItems[i].split("=")[1];

        if(paramKey == key){

          result=paramValue
          
          return result
        }
          
    }
    // console.log(result[0].value)
    
    // result[]
    // console.log('sss')
  } 
 


  handleOk() {
    console.log('111112222');
    this.setState({
      visible: false
    })
  }

  handleCancel() {
    this.setState({
      visible: false
    })
  }

  render() {
    const { children } = this.props;
    const { visible } = this.state;
    console.log(this.state);
    return (
      <div className='pageH'>
        {children}
      </div>

    );
  }
}

export default ColorfulPage;
