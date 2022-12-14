"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _table = _interopRequireDefault(require("antd/lib/table"));

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

var _popconfirm = _interopRequireDefault(require("antd/lib/popconfirm"));

var _button = _interopRequireDefault(require("antd/lib/button"));

var _image = _interopRequireDefault(require("antd/lib/image"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = _interopRequireWildcard(require("react"));

require("./index.scss");

var _index2 = require("../../utils/index.js");

var _eventBus = _interopRequireDefault(require("../../utils/eventBus"));

var _pages = require("../../api/pages");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ColorfulTable = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(ColorfulTable, _React$Component);

  function ColorfulTable(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      dataSource: [],
      columns: [],
      oneLineData: {},
      isModalVisible: false,
      querySort: {
        direction: '',
        objectApiName: '',
        columnApiName: '',
        entityId: ''
      },
      //???????????????
      itemList: [],
      total: 10,
      current: 1,
      selectedRowKeys: []
    };
    return _this;
  }

  var _proto = ColorfulTable.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var list = this.props.itemList ? this.props.itemList : {
      entity: [],
      entityList: []
    };
    list.entityList.length > 0 && this.getColumn(list);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps, preState) {
    // new Child(nextProps).getColumn();
    var list = nextProps.itemList ? nextProps.itemList : {
      entity: [],
      entityList: []
    };
    this.getColumn(list);
  } //????????????????????????
  ;

  _proto.confirmProp = function confirmProp() {
    var _this2 = this;

    var itemList = this.props.itemList; //??????id???key

    var key = "" + itemList.entityName.apiName + itemList.entityList[0].mainEntityId + "_id";
    var mainObjectApiName = "" + itemList.entityName.apiName;
    (0, _pages.delData)(mainObjectApiName, this.state.oneLineData[key]).then(function (res) {
      // message.success('??????');
      itemList.entityName.structure == 'TREE' ? _this2.getTableTree(itemList, '') : _this2.getTable(itemList);
    });
  };

  _proto.cancelProp = function cancelProp() {
    _message2["default"].error('??????');
  };

  _proto.btnClick = /*#__PURE__*/function () {
    var _btnClick = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(value, record) {
      var _this3 = this;

      var itemList, info, type, id;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.setState({
                oneLineData: record
              });
              itemList = this.props.itemList;
              info = value[0];
              type = info.type;
              _context.t0 = type;
              _context.next = _context.t0 === 0 ? 7 : _context.t0 === 1 ? 26 : _context.t0 === 2 ? 28 : _context.t0 === 4 ? 30 : _context.t0 === 5 ? 33 : 35;
              break;

            case 7:
              if (!(info.btnType === 3)) {
                _context.next = 10;
                break;
              }

              _context.next = 18;
              break;

            case 10:
              if (!(info.btnType === 4)) {
                _context.next = 15;
                break;
              }

              _context.next = 13;
              return this.enableDataBatch(true);

            case 13:
              _context.next = 18;
              break;

            case 15:
              if (!(info.btnType === 5)) {
                _context.next = 18;
                break;
              }

              _context.next = 18;
              return this.enableDataBatch(false);

            case 18:
              if (!(itemList.entityName.structure == 'TREE')) {
                _context.next = 23;
                break;
              }

              _context.next = 21;
              return this.getTableTree(this.state.itemList, this.state.querySort, this.state.pageNo);

            case 21:
              _context.next = 25;
              break;

            case 23:
              _context.next = 25;
              return this.getTable(this.state.itemList, this.state.querySort, this.state.pageNo);

            case 25:
              return _context.abrupt("break", 36);

            case 26:
              _eventBus["default"].emit(info.actionDialogId, {
                show: true
              });

              return _context.abrupt("break", 36);

            case 28:
              this.getMessageFuc(info.triggeredType, info.triggeredContent);
              return _context.abrupt("break", 36);

            case 30:
              id = info.actionPage[info.actionPage.length - 1];
              window.location = "www.test.com?id=" + id;
              return _context.abrupt("break", 36);

            case 33:
              // info.actionJSNamezheng
              info.actionJSValue();
              return _context.abrupt("break", 36);

            case 35:
              return _context.abrupt("break", 36);

            case 36:
              if (info.nextActionList) {
                info.nextActionList.map(function (item) {
                  console.log('await nextActionFuc');

                  _this3.btnClick([item], record);
                });
              }

            case 37:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function btnClick(_x, _x2) {
      return _btnClick.apply(this, arguments);
    }

    return btnClick;
  }();

  _proto.getMessageFuc = function getMessageFuc(type, text) {
    switch (type) {
      case 0:
        _message2["default"].info(text);

        break;

      case 1:
        _message2["default"].success(text);

        break;

      case 2:
        _message2["default"].error(text);

        break;

      case 3:
        _message2["default"].warning(text);

        break;

      case 4:
        _message2["default"].loading(text);

        break;

      case 5:
        _message2["default"].warn(text);

        break;

      case 6:
        _message2["default"].open(text);

        break;

      default:
        break;
    }
  };

  _proto.getLineData = function getLineData(type, text, record, obj) {
    // console.log('text1111', type, text, record, obj);
    // return 'ddddd'
    var itemList = this.props.itemList;
    var id = "" + itemList.entityName.apiName + itemList.entityList[0].mainEntityId + "_id";

    switch (type) {
      case 'SINGLE_CHOICE':
        return /*#__PURE__*/React.createElement("span", null, text && text.name);

      case 'MULTI_CHOICE':
        return text && text.map(function (item, index) {
          return /*#__PURE__*/React.createElement("span", null, item && item.name);
        });

      case 'BOOL':
        return /*#__PURE__*/React.createElement("span", null, text ? '???' : '???');

      case 'GEO_POSITION':
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\u7ECF\u5EA6\uFF1A", text && text.lat || ''), /*#__PURE__*/React.createElement("span", null, "\u7EAC\u5EA6\uFF1A", text && text.lng || ''));

      case 'FILE':
        // return <div>11111</div>
        return text ? text.map(function (item, index) {
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
            download: true,
            href: _index2.baseApi + "/api/v1/attach?objectApiName=" + obj.objectApiName + "&columnApiName=" + obj.columnApiName + "&dataId=" + record[id] + "&fileId=" + item.id
          }, item.originalFilename)) // <div>
          //   <a href="">{item.originalFilename}</a>
          // </div>
          ;
        }) : '';
      // return <div>{text&&text.length}</div>

      case 'IMAGE':
        return text ? /*#__PURE__*/React.createElement(_image["default"].PreviewGroup, null, text.map(function (item, index) {
          return /*#__PURE__*/React.createElement("div", {
            style: {
              margin: '10px 0'
            }
          }, /*#__PURE__*/React.createElement(_image["default"], {
            style: {
              objectFit: 'cover'
            },
            width: 200,
            height: 50,
            src: _index2.baseApi + "/api/v1/attach?objectApiName=" + obj.objectApiName + "&columnApiName=" + obj.columnApiName + "&dataId=" + record[id] + "&fileId=" + item.id
          }));
        })) : '';

      case 'MULTI_CHOICE_TREE':
        return text ? text.map(function (item, index) {
          return /*#__PURE__*/React.createElement("span", null, item.name, index < text.length - 1 && ',');
        }) : '';

      default:
        return text || '';
    }
  };

  _proto.getColumn = function getColumn(itemList) {
    var _this4 = this;

    var arrColumn = []; // const { itemList } = this.props;

    if (itemList.entityList && itemList.entityList.length > 0) {
      itemList.entityList.forEach(function (col) {
        var index = "" + col.objectApiName + col.entityId + "_" + col.apiName;
        var obj = {
          key: "" + col.objectApiName + col.entityId + "_" + col.apiName,
          dataIndex: index,
          title: col.name,
          width: col.width && col.width * 1,
          objectApiName: col.objectApiName,
          columnApiName: col.apiName,
          entityId: col.entityId,
          sorter: function sorter() {},
          render: function render(text, record, index) {
            return /*#__PURE__*/React.createElement("div", null, _this4.getLineData(col.columnType, text, record, obj));
          }
        };
        arrColumn.push(obj);
      });
      var opt = {
        title: '??????',
        key: 'operation',
        fixed: this.props.optionFixed ? 'right' : '',
        width: 100,
        render: function render(record) {
          return /*#__PURE__*/React.createElement("div", {
            "class": "option"
          }, _this4.props.actionRowList && _this4.props.actionRowList.map(function (i, idx) {
            var Btn = /*#__PURE__*/React.createElement(_button["default"], {
              key: idx,
              onClick: i.actionList.find(function (ite) {
                return ite.name == 'onClick';
              }) !== -1 ? function () {
                return _this4.btnClick(i.actionList, record);
              } : function () {},
              className: "btn",
              type: "primary" // type="link"

            }, i.title);
            return i.actionList[0].type == 0 && i.actionList[0].type == 3 ? /*#__PURE__*/React.createElement(_popconfirm["default"], {
              title: "\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F",
              okText: "Yes",
              cancelText: "No",
              onConfirm: function onConfirm() {
                return _this4.confirmProp();
              },
              onCancel: function onCancel() {
                return _this4.cancelProp();
              }
            }, Btn) : i.tooltip ? /*#__PURE__*/React.createElement(_tooltip["default"], {
              placement: "topLeft",
              title: i.tooltip
            }, Btn) : /*#__PURE__*/React.createElement("div", null, Btn);
          }));
        }
      };
      arrColumn.push(opt);
    } else {} // setColumns(arrColumn);


    if (arrColumn.length > 0) {
      itemList.entityName.structure == 'TREE' ? this.getTableTree(itemList, '') : this.getTable(itemList);
    }

    this.setState({
      columns: arrColumn,
      itemList: itemList
    });
  } //????????????
  ;

  _proto.getTable =
  /*#__PURE__*/
  function () {
    var _getTable = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(itemList, querySort, current) {
      var queryColumns, querySortNew, data, res, arrTable, id;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              queryColumns = [];
              itemList.entityList.forEach(function (i) {
                var obj = {
                  objectApiName: i.objectApiName,
                  columnApiName: i.apiName,
                  joinColumnApiName: i.joinColumnApiName,
                  entityId: i.entityId,
                  format: i.format
                };
                queryColumns.push(obj);
              });
              querySortNew = querySort ? querySort : this.state.querySort;
              data = {
                queryColumns: queryColumns,
                mainObjectApiName: itemList.entityName.apiName,
                querySort: querySortNew.direction ? querySortNew : undefined,
                pageNo: current ? current - 1 : this.state.current - 1,
                pageSize: this.props.pageSize
              };
              _context2.next = 6;
              return (0, _pages.tableBody)(data);

            case 6:
              res = _context2.sent;
              arrTable = res.data.data;
              id = "" + itemList.entityName.apiName + itemList.entityList[0].mainEntityId + "_id";
              arrTable.map(function (item, index) {
                item.key = item[id];
              });
              this.setState({
                dataSource: arrTable,
                current: res.data.currentPage + 1,
                total: res.data.totalSize
              });
              console.log('getTable');

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getTable(_x3, _x4, _x5) {
      return _getTable.apply(this, arguments);
    }

    return getTable;
  }();

  _proto.getTableTree = /*#__PURE__*/function () {
    var _getTableTree = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(itemList, parentId) {
      var queryColumns, data, res, arrTable, id;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryColumns = [];
              itemList.entityList.forEach(function (i) {
                var obj = {
                  objectApiName: i.objectApiName,
                  columnApiName: i.apiName,
                  joinColumnApiName: i.joinColumnApiName,
                  entityId: i.entityId
                };
                queryColumns.push(obj);
              });
              data = {
                queryColumns: queryColumns,
                mainObjectApiName: itemList.entityName.apiName,
                pageNo: this.state.current,
                pageSize: 10,
                lazy: true,
                parentId: parentId
              };
              _context3.next = 5;
              return (0, _pages.tableBodyTree)(data);

            case 5:
              res = _context3.sent;
              arrTable = res.data.data;
              id = "" + itemList.entityName.apiName + itemList.entityList[0].mainEntityId + "_id";
              arrTable.map(function (item, index) {
                item.key = item[id];
              });
              this.setState({
                dataSource: arrTable
              });

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getTableTree(_x6, _x7) {
      return _getTableTree.apply(this, arguments);
    }

    return getTableTree;
  }() //????????????
  ;

  _proto.getMore =
  /*#__PURE__*/
  function () {
    var _getMore = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(expanded, record) {
      var itemList, id, parentId, queryColumns, data, res, arrTable, arr;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // console.log(11111112222112211, expanded, record);
              // console.log(22233223322,this.props.itemList)
              itemList = this.props.itemList;
              id = "" + itemList.entityName.apiName + itemList.entityList[0].mainEntityId + "_id"; // console.log(963,id)

              parentId = record[id];
              queryColumns = [];
              itemList.entityList.forEach(function (i) {
                var obj = {
                  objectApiName: i.objectApiName,
                  columnApiName: i.apiName,
                  joinColumnApiName: i.joinColumnApiName,
                  entityId: i.entityId
                };
                queryColumns.push(obj);
              }); // console.log('itemList33333333', itemList);

              data = {
                queryColumns: queryColumns,
                mainObjectApiName: itemList.entityName.apiName,
                pageNo: 0,
                pageSize: 10,
                lazy: true,
                parentId: parentId
              }; // console.log(986,data)

              _context4.next = 8;
              return (0, _pages.tableBodyTree)(data);

            case 8:
              res = _context4.sent;
              arrTable = res.data.data;
              arrTable.map(function (item, index) {
                item.key = index + '';
              });
              arr = JSON.parse(JSON.stringify(this.state.dataSource));
              arr.forEach(function (item) {
                if (item[id] == record[id]) {
                  item.children = arrTable;
                }
              });
              this.setState({
                dataSource: arr
              });

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getMore(_x8, _x9) {
      return _getMore.apply(this, arguments);
    }

    return getMore;
  }() //??????
  ;

  _proto.pageChange = function pageChange(value) {
    this.setState({
      current: value
    });
  } //???????????????
  ;

  _proto.btnLineClick =
  /*#__PURE__*/
  function () {
    var _btnLineClick = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(value) {
      var _this5 = this;

      var itemList, info, type, id;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              console.log('???????????????', value);
              itemList = this.props.itemList;
              info = value[0];
              type = info.type;
              _context6.t0 = type;
              _context6.next = _context6.t0 === 0 ? 7 : _context6.t0 === 1 ? 26 : _context6.t0 === 2 ? 28 : _context6.t0 === 4 ? 30 : _context6.t0 === 5 ? 33 : 35;
              break;

            case 7:
              if (!(info.btnType === 3)) {
                _context6.next = 10;
                break;
              }

              _context6.next = 18;
              break;

            case 10:
              if (!(info.btnType === 4)) {
                _context6.next = 15;
                break;
              }

              _context6.next = 13;
              return this.enableDataBatch(true);

            case 13:
              _context6.next = 18;
              break;

            case 15:
              if (!(info.btnType === 5)) {
                _context6.next = 18;
                break;
              }

              _context6.next = 18;
              return this.enableDataBatch(false);

            case 18:
              if (!(itemList.entityName.structure == 'TREE')) {
                _context6.next = 23;
                break;
              }

              _context6.next = 21;
              return this.getTableTree(this.state.itemList, this.state.querySort, this.state.pageNo);

            case 21:
              _context6.next = 25;
              break;

            case 23:
              _context6.next = 25;
              return this.getTable(this.state.itemList, this.state.querySort, this.state.pageNo);

            case 25:
              return _context6.abrupt("break", 36);

            case 26:
              _eventBus["default"].emit(info.actionDialogId, {
                show: true
              });

              return _context6.abrupt("break", 36);

            case 28:
              this.getMessageFuc(info.triggeredType, info.triggeredContent);
              return _context6.abrupt("break", 36);

            case 30:
              id = info.actionPage[info.actionPage.length - 1];
              window.location = "www.test.com?id=" + id;
              return _context6.abrupt("break", 36);

            case 33:
              // info.actionJSNamezheng
              info.actionJSValue();
              return _context6.abrupt("break", 36);

            case 35:
              return _context6.abrupt("break", 36);

            case 36:
              // this.nextActionFuc();
              if (info.nextActionList) {
                info.nextActionList.map( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(item) {
                    return _regenerator["default"].wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            console.log('await nextActionFuc');
                            _context5.next = 3;
                            return _this5.btnLineClick([item]);

                          case 3:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x11) {
                    return _ref.apply(this, arguments);
                  };
                }());
              }

            case 37:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function btnLineClick(_x10) {
      return _btnLineClick.apply(this, arguments);
    }

    return btnLineClick;
  }();

  _proto.nextActionFuc = function nextActionFuc() {
    console.log('await nextActionFuc');
  } // ????????????
  ;

  _proto.confirmDataBatch =
  /*#__PURE__*/
  function () {
    var _confirmDataBatch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
      var itemList, selectedRowKeys, mainObjectApiName, res;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              itemList = this.props.itemList;
              selectedRowKeys = this.state.selectedRowKeys;
              mainObjectApiName = "" + itemList.entityName.apiName;
              _context7.next = 5;
              return (0, _pages.delDataBatch)({
                mainObjectApiName: mainObjectApiName,
                ids: selectedRowKeys.join(',')
              });

            case 5:
              res = _context7.sent;

              if (res.status === 1) {
                itemList.entityName.structure == 'TREE' ? this.getTableTree(this.state.itemList, this.state.querySort, this.state.pageNo) : this.getTable(this.state.itemList, this.state.querySort, this.state.pageNo);
              }

            case 7:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function confirmDataBatch() {
      return _confirmDataBatch.apply(this, arguments);
    }

    return confirmDataBatch;
  }();

  _proto.enableDataBatch = /*#__PURE__*/function () {
    var _enableDataBatch2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(enabled) {
      var itemList, selectedRowKeys, mainObjectApiName, res;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              itemList = this.props.itemList;
              selectedRowKeys = this.state.selectedRowKeys;
              mainObjectApiName = "" + itemList.entityName.apiName;
              _context8.next = 5;
              return (0, _pages.enableDataBatch)({
                mainObjectApiName: mainObjectApiName,
                ids: selectedRowKeys.join(','),
                enabled: enabled
              });

            case 5:
              res = _context8.sent;

            case 6:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function enableDataBatch(_x12) {
      return _enableDataBatch2.apply(this, arguments);
    }

    return enableDataBatch;
  }() //???????????????????????????
  ;

  _proto.submitOneLine = function submitOneLine() {
    var formData = new FormData();
    formData.append('objectApiName', 'common_user');
    (0, _pages.addPages)(formData).then(function (res) {});
  };

  _proto.handleOk = function handleOk() {
    this.setState({
      isModalVisible: false
    });
  };

  _proto.handleCancel = function handleCancel() {
    this.setState({
      isModalVisible: false
    });
  } //table change
  ;

  _proto.talbeOnChange = function talbeOnChange(pagination, filters, sorter, extra) {
    console.log('pagination', pagination);
    var querySort = {
      direction: sorter.order == 'ascend' ? 'ASC' : sorter.order == 'descend' ? 'DESC' : sorter.order,
      objectApiName: sorter.column && sorter.column.objectApiName,
      columnApiName: sorter.column && sorter.column.columnApiName,
      entityId: sorter.column && sorter.column.entityId
    };
    this.setState({
      querySort: querySort
    });
    this.getTable(this.state.itemList, querySort, pagination.current);
  };

  _proto.onSelectChange = function onSelectChange(newSelectedRowKeys) {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    this.setState({
      selectedRowKeys: newSelectedRowKeys
    });
  };

  _proto.render = function render() {
    var _this6 = this;

    var _this$state = this.state,
        columns = _this$state.columns,
        dataSource = _this$state.dataSource,
        selectedRowKeys = _this$state.selectedRowKeys;
    var _this$props = this.props,
        btnList = _this$props.btnList,
        lineClose = _this$props.lineClose,
        style = _this$props.style;
    console.log('btnList', btnList);
    var rowSelection = !lineClose ? {
      selectedRowKeys: selectedRowKeys,
      onChange: function onChange(newSelectedRowKeys) {
        return _this6.onSelectChange(newSelectedRowKeys);
      }
    } : undefined;
    return /*#__PURE__*/React.createElement("div", {
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: "btn-line"
    }, btnList && btnList.map(function (i, idx) {
      var Btn = /*#__PURE__*/React.createElement(_button["default"], {
        key: idx,
        onClick: i.actionList.find(function (ite) {
          return ite.name == 'onClick';
        }) !== -1 ? function () {
          return _this6.btnLineClick(i.actionList);
        } : function () {},
        className: "btn",
        type: "primary"
      }, i.title);
      return i.actionList[0].type == 0 && i.actionList[0].btnType == 3 ? /*#__PURE__*/React.createElement(_popconfirm["default"], {
        title: "\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F",
        okText: "Yes",
        cancelText: "No",
        onConfirm: function onConfirm() {
          return _this6.confirmDataBatch();
        },
        onCancel: function onCancel() {
          return _this6.cancelProp();
        }
      }, Btn) : i.tooltip ? /*#__PURE__*/React.createElement(_tooltip["default"], {
        placement: "topLeft",
        title: i.tooltip
      }, Btn) : /*#__PURE__*/React.createElement("div", null, Btn);
    })), /*#__PURE__*/React.createElement(_table["default"], {
      onChange: function onChange(pagination, filters, sorter, extra) {
        return _this6.talbeOnChange(pagination, filters, sorter, extra);
      },
      onExpand: function onExpand(expanded, record) {
        return _this6.getMore(expanded, record);
      },
      dataSource: dataSource,
      columns: columns,
      scroll: {
        x: 'max-content'
      },
      rowSelection: rowSelection,
      pagination: this.props.closePage ? {
        current: this.state.current,
        total: this.state.total,
        pageSize: this.props.pageSize,
        onChange: function onChange(value) {
          return _this6.pageChange(value);
        }
      } : false
    }));
  };

  return ColorfulTable;
}(React.Component);

ColorfulTable.defaultProps = {
  // itemList: {
  //   entityName: {  },
  //   entity: [ ],
  //   entityList: [  ],
  // },
  itemList: {
    entityName: {
      apiName: 'student',
      desc: '????????????',
      enabled: true,
      iconId: '0',
      id: '1555047745306230784',
      name: '??????',
      structure: 'NORMAL'
    },
    entity: [{
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'TEXT',
      defaultUse: true,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: 'DROP_LIST',
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'SINGLE_CHOICE',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        multiChoiceType: null,
        optionSetApiName: 'city',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'MULTI_CHOICE_TREE',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'INTEGER',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: true,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'DATE',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'BOOL',
      defaultUse: true,
      name: '?????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        placeHolder: '??????????????????',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: true,
        userMask: false
      },
      columnType: 'PHONE',
      defaultUse: true,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: true,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'QUOTE',
      defaultUse: true,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'ITEM_REDUNDANCY',
      defaultUse: true,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'FILE',
      defaultUse: true,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: 5,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'GEO_POSITION',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: 2,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'MONEY',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: 3,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'DECIMAL',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'TIME',
      defaultUse: true,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'AUTO_NO',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'WEBSITE',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        placeHolder: '???????????????',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: true,
        userMask: false
      },
      columnType: 'EMAIL',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'IMAGE',
      defaultUse: true,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: 2,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'PERCENT',
      defaultUse: true,
      name: '???????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'ID',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'BOOL',
      defaultUse: false,
      name: '?????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'BOOL',
      defaultUse: false,
      name: '?????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: true,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'DATE',
      defaultUse: false,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: true,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'DATE',
      defaultUse: true,
      name: '??????????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: false,
      name: '?????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: false,
      name: '?????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: false,
      name: '?????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }],
    entityList: [{
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'TEXT',
      defaultUse: true,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student',
      tableName: '????????????'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: 'DROP_LIST',
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'SINGLE_CHOICE',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        multiChoiceType: null,
        optionSetApiName: 'city',
        placeHolder: '',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'MULTI_CHOICE_TREE',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'INTEGER',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student',
      format: {
        scale: 1,
        symbol: '%',
        formatTye: 'PERCENTAGE',
        percentageFormat: {
          scale: 1,
          symbol: '%'
        }
      }
    }, {
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
        scale: null,
        showTime: true,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'DATE',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'BOOL',
      defaultUse: true,
      name: '?????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        placeHolder: '??????????????????',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: true,
        userMask: false
      },
      columnType: 'PHONE',
      defaultUse: true,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: true,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'QUOTE',
      defaultUse: true,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'ITEM_REDUNDANCY',
      defaultUse: true,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'FILE',
      defaultUse: true,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: 5,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'GEO_POSITION',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: 2,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'MONEY',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: 3,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'DECIMAL',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'TIME',
      defaultUse: true,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'AUTO_NO',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'WEBSITE',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        placeHolder: '???????????????',
        preUnMasked: null,
        quoteColumnApiName: '',
        quoteObjectApiName: '',
        relationObjectApiName: '',
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: true,
        userMask: false
      },
      columnType: 'EMAIL',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'IMAGE',
      defaultUse: true,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: 2,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'PERCENT',
      defaultUse: true,
      name: '???????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'ID',
      defaultUse: true,
      name: '??????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'BOOL',
      defaultUse: false,
      name: '?????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'BOOL',
      defaultUse: false,
      name: '?????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: true,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'DATE',
      defaultUse: false,
      name: '????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: true,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'DATE',
      defaultUse: true,
      name: '??????????????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: false,
      name: '?????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: false,
      name: '?????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }, {
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
        scale: null,
        showTime: false,
        singleChoiceType: null,
        startNo: 0,
        unique: false,
        userMask: false
      },
      columnType: 'RELATIONSHIP',
      defaultUse: false,
      name: '?????????',
      mainEntityId: '0',
      joinColumnApiName: '',
      entityId: '0',
      objectApiName: 'student'
    }]
  },
  actionRowList: [{
    title: '??????11',
    actionList: [{
      name: 'onClick',
      type: 0,
      btnType: 0,
      nextActionList: [{
        type: 2,
        triggeredType: 1,
        triggeredContent: '333'
      }, {
        name: 'onClick',
        type: 2,
        triggeredType: 0,
        triggeredContent: '?????????'
      }]
    }]
  }, {
    title: '??????2',
    actionList: [{
      name: 'onClick',
      type: 0,
      btnType: 2
    }]
  }],
  style: {},
  optionFixed: true,
  closePage: true,
  lineClose: false,
  pageSize: 10,
  // btnList: [ ],
  btnList: [{
    title: '??????',
    actionList: [{
      name: 'onClick',
      type: 1,
      actionDialog: 0,
      actionDialogId: 'wMaLWS54KFQ-DYtBSkXJH',
      actionDialogParamsList: [{
        name: 'id',
        textContent: 'id'
      }]
    }]
  }, {
    title: '??????2',
    actionList: [{
      name: 'onClick',
      type: 0,
      btnType: 4
    }]
  }, {
    title: '??????3',
    actionList: [{
      name: 'onClick',
      type: 2,
      triggeredType: 0,
      triggeredContent: '?????????'
    }]
  }, {
    title: '??????4',
    actionList: [{
      name: 'onClick',
      type: 0
    }],
    tooltip: '5555'
  }]
};
var _default = ColorfulTable;
exports["default"] = _default;