import {request} from '../utils/request';
import {queryCommodity, getCommodity} from '../utils/api';


export async function queryProductList(params) {
  return request({
    url: queryCommodity,
    method: 'get',
    data: params,
  });
}

export async function getProductDetail(params) {
  return request({
    url: getCommodity,
    method: 'get',
    data: params,
  });
}