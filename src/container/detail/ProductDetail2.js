import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../components/header/Header';
import ProductItem from '../../components/product/ProductItem';
import Buy from './subpage/Buy';
import {getProductDetail} from '../../service/productService';
import {CODE_SUCCESS} from '../../utils';
import * as shopCartFile from '../../actions/shopCart';


class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: {},
      loading: true,
    };
    this.onAddShopCart = this.onAddShopCart.bind(this);
  }

  onAddShopCart(num) {
    console.log('onAddShopCart', this.props);
    const {shopCartActions} = this.props;
    const {detailData} = this.state;
    const data = {
      num,
      name: detailData.name,
      id: detailData.id,
      price: 200,
    };
    shopCartActions.addShopCart(data);
  }

  render() {
    const {detailData} = this.state;
    return (
        <div>
          <Header title="商品详情" />
          <div className="common_content">
            {
              this.state.detailData && <ProductItem data={this.state.detailData} />
            }
            {
              this.state.loading && <div>正在加载中。。。</div>
            }
            <Buy handleAddClick={this.onAddShopCart} />
          </div>
        </div>
    );
  }

  componentDidMount() {
    // 获取商品列表数据
    const {location} = this.props;
    const {pathname} = location;
    console.log(pathname);
    const index = pathname.lastIndexOf('/');
    const id = location.pathname.slice(index+1);
    const detailResult = getProductDetail({id});
    detailResult.then(res => {
      if (res.code === CODE_SUCCESS) {
        const data = res.result;
        this.setState({detailData: data, loading: false});
      }
    }).catch(err => {

    });
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    shopCartData: state.shopCart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    shopCartActions: bindActionCreators(shopCartFile, dispatch)
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetail);