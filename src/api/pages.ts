import request from '../utils/request';
import qs from 'qs';

export function getPagesList(data) {
  return request({
    url: '/api/v1/component/form/load/body',
    method: 'post',
    data,
  });
}
// 表单提交
export function getFormData(data) {
  return request({
    url: '/api/v1/component/form/load/body',
    method: 'post',
    data,
  });
}
// 表单提交
export function addPages(data) {
  return request({
    url: '/api/v1/component/form/submit',
    method: 'post',
    data,
  });
}

// 下拉选项树或下拉列表
export function getOptionListOrTree(params) {
  return request({
    url: '/api/v1/meta/option/list_tree',
    method: 'get',
    params,
  });
}

//login
export function logPages(data) {
  return request.post('/auth/api/v1/login', data);
}

//元数据对象及字段配置详细
export function metaInfo(params) {
  return request({
    url: '/api/v1/meta/info',
    method: 'get',
    params,
  });
}

//通用加载表格数据
export function dataTable(data) {
  return request({
    url: '/api/v1/component/data/table/body',
    method: 'post',
    data,
  });
}

//表格查询
export function tableBody(data) {
  return request({
    url: `/api/v1/component/data/table/body`,
    method: 'post',
    data,
  });
}

//表格查询-树
export function tableBodyTree(data) {
  return request({
    url: `/api/v1/component/data/table_tree/body`,
    method: 'post',
    data,
  });
}

//删除数据
export function delData(mainObjectApiName, id) {
  return request({
    url: `/api/v1/component/data?mainObjectApiName=${mainObjectApiName}&id=${id}`,
    method: 'delete'
    
  })
}




//批量删除数据
export function delDataBatch(params) {
  return request({
    url: `/api/v1/component/data/batch`,
    method: 'delete',
    params,
  });
}

//启用、禁用一行数据
export function enableData(data) {
  return request({
    url: `/api/v1/component/data/enable`,
    method: 'put',
    data,
  });
}

//批量启用、禁用数据
export function enableDataBatch(data) {
  return request({
    url: `/api/v1/component/data/batch/enable`,
    method: 'put',
    data,
  });
}

