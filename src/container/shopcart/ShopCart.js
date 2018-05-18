import React from 'react';
import ShopCartItem from './subpage/ShopCartItem';
import Header from '../../components/header/Header';

class ShopCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let arrData = [];
    const shopCartData = sessionStorage.getItem('shopCartData');
    if(shopCartData) {
      arrData = JSON.parse(shopCartData);
    }
    console.log(arrData);
    let totalPrice = 0;
    arrData.forEach(item => {
      totalPrice += item.price * item.num;
    });

    return (
        <div>
          <Header title="购物车" />
          <div className="common_content">
            {
              arrData.map(item => {
                return <ShopCartItem key ={item.id} data={item} />
              })
            }
            {
              arrData.length > 0
                  ?
                  <div>
                    <p>总价：{totalPrice}</p>
                  </div>
                  :
                  <div>购物车没有东西</div>
            }

          </div>
        </div>
    );
  }
}

export default ShopCart;
