import request from "../utils/request";
export function getPagesList(data) {
  return request({
    url: '/api/v1/component/form/load/body',
    method: 'post',
    data: data
  });
}
export function addPages(data) {
  return request({
    url: '/api/v1/component/form/submit',
    method: 'post',
    data: data
  });
} //login

export function logPages(data) {
  return request.post('/auth/api/v1/login', data);
} //元数据对象及字段配置详细

export function metaInfo(params) {
  return request({
    url: '/api/v1/meta/info',
    method: 'get',
    params: params
  });
} //通用加载表格数据

export function dataTable(data) {
  return request({
    url: '/api/v1/component/data/table/body',
    method: 'post',
    data: data
  });
} //表格查询

export function tableBody(data) {
  return request({
    url: "/api/v1/component/data/table/body",
    method: 'post',
    data: data
  });
} //表格查询

export function tableBodyTree(data) {
  return request({
    url: "/api/v1/component/data/table_tree/body",
    method: 'post',
    data: data
  });
} //删除数据

export function delData(mainObjectApiName, id) {
  return request({
    url: "/api/v1/component/data?mainObjectApiName=" + mainObjectApiName + "&id=" + id,
    method: 'delete'
  });
} //批量删除数据

export function delDataBatch(params) {
  return request({
    url: "/api/v1/component/data/batch",
    method: 'delete',
    params: params
  });
} //启用、禁用一行数据

export function enableData(data) {
  return request({
    url: "/api/v1/component/data/enable",
    method: 'put',
    data: data
  });
} //批量启用、禁用数据

export function enableDataBatch(data) {
  return request({
    url: "/api/v1/component/data/batch/enable",
    method: 'put',
    data: data
  });
}