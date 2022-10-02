"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.addPages = addPages;
exports.dataTable = dataTable;
exports.delData = delData;
exports.delDataBatch = delDataBatch;
exports.enableData = enableData;
exports.enableDataBatch = enableDataBatch;
exports.getPagesList = getPagesList;
exports.logPages = logPages;
exports.metaInfo = metaInfo;
exports.tableBody = tableBody;
exports.tableBodyTree = tableBodyTree;

var _request = _interopRequireDefault(require("../utils/request"));

function getPagesList(data) {
  return (0, _request["default"])({
    url: '/api/v1/component/form/load/body',
    method: 'post',
    data: data
  });
}

function addPages(data) {
  return (0, _request["default"])({
    url: '/api/v1/component/form/submit',
    method: 'post',
    data: data
  });
} //login


function logPages(data) {
  return _request["default"].post('/auth/api/v1/login', data);
} //元数据对象及字段配置详细


function metaInfo(params) {
  return (0, _request["default"])({
    url: '/api/v1/meta/info',
    method: 'get',
    params: params
  });
} //通用加载表格数据


function dataTable(data) {
  return (0, _request["default"])({
    url: '/api/v1/component/data/table/body',
    method: 'post',
    data: data
  });
} //表格查询


function tableBody(data) {
  return (0, _request["default"])({
    url: "/api/v1/component/data/table/body",
    method: 'post',
    data: data
  });
} //表格查询


function tableBodyTree(data) {
  return (0, _request["default"])({
    url: "/api/v1/component/data/table_tree/body",
    method: 'post',
    data: data
  });
} //删除数据


function delData(mainObjectApiName, id) {
  return (0, _request["default"])({
    url: "/api/v1/component/data?mainObjectApiName=" + mainObjectApiName + "&id=" + id,
    method: 'delete'
  });
<<<<<<< HEAD
}

//下拉多选
export function pullInp(data){
  return (0,_request['default'])({
    url:`/api/v1/meta/option/list_tree`,
    method:'get',
    data
  })
=======
} //批量删除数据


function delDataBatch(params) {
  return (0, _request["default"])({
    url: "/api/v1/component/data/batch",
    method: 'delete',
    params: params
  });
} //启用、禁用一行数据


function enableData(data) {
  return (0, _request["default"])({
    url: "/api/v1/component/data/enable",
    method: 'put',
    data: data
  });
} //批量启用、禁用数据


function enableDataBatch(data) {
  return (0, _request["default"])({
    url: "/api/v1/component/data/batch/enable",
    method: 'put',
    data: data
  });
>>>>>>> 1bdfed70a70feebce8927de1027f77a0bde10297
}