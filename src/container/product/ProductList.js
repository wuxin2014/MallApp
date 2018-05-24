import React from 'react';
import ProductItem from '../../components/product/ProductItem';
import {queryProductList} from '../../service/productService';
import {CODE_SUCCESS} from '../../utils/index';
import TypeMenu from './TypeMenu';
import './product.css';

const menuData = [
  {
    id: 1,
    name: '菜单一'
  },
  {
    id: 2,
    name: '菜单二'
  },
  {
    id: 3,
    name: '菜单三'
  },
  {
    id: 4,
    name: '菜单四'
  },
  {
    id: 5,
    name: '菜单五'
  },
  {
    id: 6,
    name: '菜单六'
  },
  {
    id: 7,
    name: '菜单七'
  },{
    id: 8,
    name: '菜单八'
  },
  {
    id: 9,
    name: '菜单九'
  },
];

const proData = [
  {
    id: 1,
    pic: 'https://img12.360buyimg.com/babel/s700x740_jfs/t16234/256/2440912301/22227/f06f0865/5aaa61b8N4005b92e.jpg!q90!cc_350x370',
    name: 'name1',
    salesNum: 12,
    price: 12,
  },
  {
    id: 2,
    pic: 'https://img12.360buyimg.com/babel/s700x740_jfs/t16234/256/2440912301/22227/f06f0865/5aaa61b8N4005b92e.jpg!q90!cc_350x370',
    name: 'name2',
    salesNum: 8,
    price: 8,
  },
  {
    id: 3,
    pic: 'https://img12.360buyimg.com/babel/s700x740_jfs/t16234/256/2440912301/22227/f06f0865/5aaa61b8N4005b92e.jpg!q90!cc_350x370',
    name: 'name3',
    salesNum: 8,
    price: 8,
  },
  {
    id: 4,
    pic: 'https://img12.360buyimg.com/babel/s700x740_jfs/t16234/256/2440912301/22227/f06f0865/5aaa61b8N4005b92e.jpg!q90!cc_350x370',
    name: 'name4',
    salesNum: 8,
    price: 8,
  },
  {
    id: 5,
    pic: 'https://img12.360buyimg.com/babel/s700x740_jfs/t16234/256/2440912301/22227/f06f0865/5aaa61b8N4005b92e.jpg!q90!cc_350x370',
    name: 'name5',
    salesNum: 8,
    price: 8,
  },
  {
    id: 6,
    pic: 'https://img12.360buyimg.com/babel/s700x740_jfs/t16234/256/2440912301/22227/f06f0865/5aaa61b8N4005b92e.jpg!q90!cc_350x370',
    name: 'name6',
    salesNum: 8,
    price: 10,
  },
  {
    id: 7,
    pic: 'https://img12.360buyimg.com/babel/s700x740_jfs/t16234/256/2440912301/22227/f06f0865/5aaa61b8N4005b92e.jpg!q90!cc_350x370',
    name: 'name7',
    salesNum: 8,
    price: 11,
  },
  {
    id: 8,
    pic: 'https://img12.360buyimg.com/babel/s700x740_jfs/t16234/256/2440912301/22227/f06f0865/5aaa61b8N4005b92e.jpg!q90!cc_350x370',
    name: 'name8',
    salesNum: 8,
    price: 11,
  }
];

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: proData,
      hasMore: false,
      isLoadingMore: false,
      page: 0,
      isSearch: false,
    };
    this.showSearch = this.showSearch.bind(this);
    this.hideSearch = this.hideSearch.bind(this);
  }

  showSearch() {
    this.setState({isSearch: true});
  }

  hideSearch() {
    this.setState({isSearch: false});
  }

  render() {
    const {history} = this.props;
    const {isSearch} = this.state;
    return (
        <div className="common_content">
          <div className="pro_wrap">
            <div className="pro_menu">
              <TypeMenu menuData={menuData} showSearch={this.showSearch} />
            </div>
            <div className="pro_list">
              {
                this.state.data.map(item => {
                  return <ProductItem key={item.id} data={item} history={history} />
                })
              }
            </div>
          </div>
          {
            isSearch &&
            <div className="search_mask">
              <div className="search_content">
              </div>
              <div className="search_wrap">
                <input className="search_input" placeholder="请输入商品名字" />
                <div>
                  <button className="btn_search">搜索</button>
                  <button className="btn_complete" onClick={this.hideSearch}>完成</button>
                </div>
              </div>
            </div>
          }

        </div>
    );
  }

  componentDidMount() {
    // 获取商品列表数据
    this.loadFirstPageData();
  }

  loadFirstPageData() {
    const result = queryProductList();
    this.resultHandle(result);
  }

  resultHandle(result) {
    result.then(res => {
      const {code, result} = res;
      if (code === CODE_SUCCESS) {
        const {objs, total} = result;
        this.setState({
          data: objs,
        });
      } else if (code === 4996) {
        this.props.history.push('/login');
      }
    }).catch(err => {

    });
  }
};