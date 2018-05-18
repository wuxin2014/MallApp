import React from 'react';
import {picUrl} from '../../../utils';
import './shopCartItem.css';
import BuyNum from './BuyNum';

class ShopCartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    return (
        <div className="shop_cart_item_wrap">
          <img alt="图片" src={picUrl} style={{width: 120, height: 60}}/>
          <div>
            <p>{data.name}</p>
            <p>{data.price}</p>
            <BuyNum num={data.num} />
          </div>
        </div>
    );
  }
}

export default ShopCartItem;