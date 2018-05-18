import {request} from '../utils/request';
import {queryProduct, productDetail} from '../utils/api';


export async function queryProductList(params) {
  return request({
    url: queryProduct,
    method: 'get',
    data: params,
  });
}

export async function getProductDetail(params) {
  return request({
    url: productDetail,
    method: 'get',
    data: params,
  });
}