const COMMON_PREFIX = '/api/common';
const DOMAIN_PREFIX = '/domainApi/agent';

const apis = {
  userLogin: `${DOMAIN_PREFIX}/user/login`,
  queryProduct: `${DOMAIN_PREFIX}/commodity/queryCommodityWithPrice`,
  productDetail: `${DOMAIN_PREFIX}/commodity/getCommodity`
};

module.exports = apis;