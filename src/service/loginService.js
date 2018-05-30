import {request} from '../utils/request';
import {wxLogin} from '../utils/api';

export async function login(params) {
  return request({
    url: wxLogin,
    method: 'post',
    data: params,
  });
}