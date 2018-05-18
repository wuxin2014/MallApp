import React from 'react';
import Header from '../../components/header/Header';
import ProductItem from '../../components/product/ProductItem';
import Buy from './subpage/Buy';
import {getProductDetail} from '../../service/productService';
import {CODE_SUCCESS} from '../../utils';

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
    console.log('onAddShopCart', num);
    const {detailData} = this.state;

    let shopCartData = sessionStorage.getItem('shopCartData');
    const arr = shopCartData ? JSON.parse(shopCartData) : [];
    const data = {
      num,
      name: detailData.name,
      id: detailData.id,
      price: 200,
    };
    arr.push(data);
    sessionStorage.setItem('shopCartData', JSON.stringify(arr));

  }


  render() {
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

export default ProductDetail;