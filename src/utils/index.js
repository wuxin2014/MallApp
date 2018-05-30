const prefix = 'agent';
const CODE_SUCCESS = 1000;
const picUrl = 'https://img12.360buyimg.com/babel/s700x740_jfs/t16234/256/2440912301/22227/f06f0865/5aaa61b8N4005b92e.jpg!q90!cc_350x370';

// 微信公众号信息
const officialAccount = {
  APP_ID: 'wx5d47b8125f53edfb',
  TOKEN: 'la9df81l8adfjjl12',
  ENCODING_AES_KEY: 'erpKQA11WpBHT0xs3wp9UmEBqG1qlVxYVh4Pr4fJvWj',
  APP_SECRET: '230af3de49aadcf985de72f430f76156',
};

const APP_ID = 'wx54d11de30a4596e1';

// 商品分类
const PRODUCT_TYPE_DATA = [
  {
    id: 1,
    name: '蔬菜类'
  },
  {
    id: 2,
    name: '肉蛋禽类'
  },
  {
    id: 3,
    name: '冷冻品类'
  },
  {
    id: 4,
    name: '点心类'
  },
  {
    id: 5,
    name: '水产品类'
  },
  {
    id: 6,
    name: '水果类'
  },
  {
    id: 7,
    name: '豆制品类'
  },
  {
    id: 8,
    name: '粮油类'
  },
  {
    id: 9,
    name: '乳制品饮品类'
  },
  {
    id: 10,
    name: '定型包装类',
  },
  {
    id: 11,
    name: '调味品类',
  },
  {
    id: 12,
    name: '干货类',
  }
];

const PRODUCT_TYPE_VALUE_MAP = {
  1: '蔬菜类',
  2: '肉蛋禽类',
  3: '冷冻品类',
  4: '点心类',
  5: '水产品类',
  6: '水果类',
  7: '豆制品类',
  8: '粮油类',
  9: '乳制品饮品类',
  10: '定型包装类',
  11: '调味品类',
  12: '干货类',
};


const proData = [
  {
    id: 1,
    pic: picUrl,
    name: 'name1',
    salesNum: 12,
    price: 12,
    type: 1,
  },
  {
    id: 2,
    pic: picUrl,
    name: 'name2',
    salesNum: 8,
    price: 8,
    type: 1,
  },
  {
    id: 3,
    pic: picUrl,
    name: 'name3',
    salesNum: 8,
    price: 8,
    type: 1,
  },
  {
    id: 4,
    pic: picUrl,
    name: 'name4',
    salesNum: 8,
    price: 8,
    type: 1,
  },
  {
    id: 5,
    pic: picUrl,
    name: 'name5',
    salesNum: 8,
    price: 8,
    type: 1,
  },
  {
    id: 6,
    pic: picUrl,
    name: 'name6',
    salesNum: 8,
    price: 10,
    type: 1,
  },
  {
    id: 7,
    pic: picUrl,
    name: 'name7',
    salesNum: 8,
    price: 11,
    type: 1,
  },
  {
    id: 8,
    pic: picUrl,
    name: 'name8',
    salesNum: 8,
    price: 11,
    type: 1,
  }
];


module.exports = {
  picUrl,
  CODE_SUCCESS,
  prefix,
  PRODUCT_TYPE_DATA,
  PRODUCT_TYPE_VALUE_MAP,
  proData,
  APP_ID,
  officialAccount,
};