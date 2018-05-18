import axios from 'axios';
import qs from 'qs';
import {prefix} from '../utils';

const fetch = (options) => {
  let {
    method = 'get',
    data,
    url,
  } = options;

  const headers = {};
  const accessToken = sessionStorage.getItem(`${prefix}accessToken`);
  if (accessToken) {
    headers.accessToken = accessToken;
  }

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        headers,
        params: data,
      });
    case 'post':
      return axios.post(url, qs.stringify(data), {headers});
    case 'delete':
      return axios.delete(url, {
        data: data,
      });
    case 'put':
      return axios.put(url, data);
    case 'patch':
      return axios.patch(url, data);
    default:
      return axios(options);
  }
};

const request = (options) => {
  return fetch(options).then(response => {
    // console.log('request:', response);
    const {statusText, status, data} = response;

    if (data && data.code) {
      data.code = parseInt(data.code, 0);
    }

    // 问题1： 不支持...data
    const result = Object.assign({}, data);

    return result;
  }).catch(err => {
    console.log('err:===', err);
    const result = {
      success: false,
      msg: '请求有误',
    };
    return result;

  });
};

module.exports = {
  request
};
