import React from 'react';
import {getProductDetail} from '../../service/productService';
import {CODE_SUCCESS, picUrl} from '../../utils';
import './product_detail.css';

const proDetailData = {
  id: 3,
  pic: picUrl,
  name: 'name3',
  salesNum: 8,
  price: 8,
  type: 1,
};

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: proDetailData,
      loading: false,
    };
    this.onAddShopCart = this.onAddShopCart.bind(this);
  }


  onAddShopCart(num) {
    console.log('onAddShopCart', num);
    const {detailData} = this.state;


    const proData = {
      num: 1,
      name: detailData.name,
      id: detailData.id,
      price: detailData.price,
    };

    let shopCartData = sessionStorage.getItem('shopCartData');
    const arr = shopCartData ? JSON.parse(shopCartData) : [];

    const isExist = arr.filter(item => item.id === detailData.id);
    if(isExist.length > 0) {
      arr.map(item => {
        if(item.id === detailData.id) {
          item.num ++;
        }
        return item;
      });
    } else {
      arr.push(proData);
    }

    sessionStorage.setItem('shopCartData', JSON.stringify(arr));
  }


  render() {
    const {detailData, loading} = this.state;
    return (
        <div className="detail_out_wrap">
          {
            loading
                ? (<div>正在加载中。。。</div>)
                : (<div>
                    <div className="detail_info_wrap">
                      <img src={detailData.pic}/>
                      <p>{detailData.name}</p>
                    </div>
                    <div className="shang_jia_info">
                      <span>幼家配送</span>
                      <span onClick={() => this.props.history.goBack()}>进入店铺>></span>
                    </div>
                    <div className="detail_price_info">
                      <span>
                        <span style={{color: 'red', fontSize: 18}}>{`￥${detailData.price}`}</span>
                        /份
                      </span>
                      <span onClick={this.onAddShopCart}>加入</span>
                    </div>
                  </div>)
          }
        </div>
    );
  }

  componentDidMount() {
    // 获取商品列表数据
    const {location} = this.props;
    const {pathname} = location;
    console.log('pathname', pathname);
    const index = pathname.lastIndexOf('/');
    const id = location.pathname.slice(index+1);
    const detailResult = getProductDetail({id});
    detailResult.then(res => {
      if (res.code === CODE_SUCCESS) {
        const data = res.result;
        data.salesNum = 8;
        data.price = 11;
        data.pic = picUrl;
        this.setState({detailData: data, loading: false});
      }
    }).catch(err => {

    });
  }
}

export default ProductDetail;