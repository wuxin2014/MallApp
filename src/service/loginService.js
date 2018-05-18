import {request} from '../utils/request';
import {userLogin} from '../utils/api';

export async function login(params) {
  return request({
    url: userLogin,
    method: 'post',
    data: params,
  });
}