import React from 'react';
import ProductItem from '../../components/product/ProductItem';
import {queryProductList} from '../../service/productService';
import {login} from '../../service/loginService';
import {CODE_SUCCESS, PRODUCT_TYPE_DATA, PRODUCT_TYPE_VALUE_MAP, picUrl, prefix, proData} from '../../utils';
import TypeMenu from './TypeMenu';
import './product.css';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isSearchModal: false,
      menuId: PRODUCT_TYPE_DATA.length > 0 ? PRODUCT_TYPE_DATA[0].id : 0,
      isShowMenu: true,
    };
    this.showSearch = this.showSearch.bind(this);
    this.hideSearch = this.hideSearch.bind(this);
    this.changeMenuTab = this.changeMenuTab.bind(this);
    this.getCommodityByKeys = this.getCommodityByKeys.bind(this);
  }

  showSearch() {
    this.setState({isSearchModal: true});
  }

  hideSearch() {
    this.setState({isSearchModal: false});
  }

  changeMenuTab(menuId) {
    this.setState({menuId});
  }

  getCommodityByKeys() {
    const keyWord = this.keys.value;
    if(!keyWord) {
      alert('请输入搜素词');
      return;
    }
    const result = queryProductList({keyWord});
    this.resultHandle(result);
  }

  render() {
    const {history} = this.props;
    const {isSearchModal, menuId, isShowMenu, data} = this.state;
    const proDataByType =  isShowMenu ? data.filter(item => item.type === menuId) : data;
    return (
        <div className="common_content">
          <div className="pro_wrap">
            {
              isShowMenu && <div className="pro_menu">
                <TypeMenu menuData={PRODUCT_TYPE_DATA} showSearch={this.showSearch} menuId={menuId} changeMenuTab={this.changeMenuTab} />
              </div>
            }

            <div className="pro_list">
              {
                proDataByType && proDataByType.length > 0
                    ? proDataByType.map(item => {
                      return <ProductItem key={item.id} data={item} history={history} />
                    })
                    : <span>{`没有${PRODUCT_TYPE_VALUE_MAP[menuId]}的数据`}</span>
              }
            </div>
          </div>
          {
            isSearchModal &&
            <div className="search_mask">
              <div className="search_content">
              </div>
              <div className="search_wrap">
                <input className="search_input" placeholder="请输入商品名字" ref={(node) => this.keys = node}/>
                <div>
                  <button className="btn_search" onClick={this.getCommodityByKeys}>搜索</button>
                  <button className="btn_complete" onClick={this.hideSearch}>完成</button>
                </div>
              </div>
            </div>
          }
        </div>
    );
  }

  componentDidMount() {
    console.log('ProductList===constructor', this.props.history.location.search);
    const {search} = this.props.history.location;
    const params = search.substring(search.indexOf('?')+1).split('=');
    console.log(params);
    const grantResult = login({code: params[1]});
    grantResult.then(res => {
      const {code, result} = res;
      if (code === CODE_SUCCESS) {
        const {accessToken, userId} = result;
        sessionStorage.setItem(`${prefix}accessToken`, accessToken);
        sessionStorage.setItem(`${prefix}userId`, userId);
        this.loadFirstPageData();
      }
      console.log(res);
    }).catch(err => {

    });
  }

  // 获取商品列表数据
  loadFirstPageData() {
    const result = queryProductList();
    this.resultHandle(result);
  }

  resultHandle(result) {
    result.then(res => {
      const {code, result} = res;
      if (code === CODE_SUCCESS) {
        const {objs} = result;
        objs.map(item => {
          item.salesNum = 8;
          item.price = 11;
          item.pic = picUrl;
        });
        if (this.state.isSearchModal) {
          this.setState({
            data: objs,
            isShowMenu: false,
            isSearchModal: false});
        } else {
          this.setState({
            data: objs,
          });
        }
      }
    }).catch(err => {

    });
  }
};