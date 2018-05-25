const COMMON_PREFIX = '/api/common';
const DOMAIN_PREFIX = '/agentApi/agent';

const apis = {
  userLogin: `${DOMAIN_PREFIX}/user/login`,
  queryCommodity :`${DOMAIN_PREFIX}/commodity/queryCommodity`,
  queryCommodityWithPrice: `${DOMAIN_PREFIX}/commodity/queryCommodityWithPrice`,
  getCommodity: `${DOMAIN_PREFIX}/commodity/getCommodity`,
};

module.exports = apis;