import React from 'react';
import ShopCartItem from './subpage/ShopCartItem';
import AddressInfo from './subpage/AddressInfo';

class ShopCart extends React.Component {
  constructor(props) {
    super(props);

    let arrData = [];
    const shopCartData = sessionStorage.getItem('shopCartData');
    if(shopCartData) {
      arrData = JSON.parse(shopCartData);
    }

    this.state = {
      arrData,
    };
    this.onChangeNum = this.onChangeNum.bind(this);

    console.log('ShopCart===constructor');
  }

  onChangeNum(data) {
    const {arrData} = this.state;
    const newData = arrData.map(item => {
      if (item.id === data.id) {
        item.num = data.num;
      }
      return item;
    });
    this.setState({arrData: newData});
  }

  render() {
    const {arrData} = this.state;
    let totalPrice = 0;
    arrData.forEach(item => {
      totalPrice += item.price * item.num;
    });

    return (
      <div className="common_content">
        <AddressInfo />
        {
          arrData.map(item => {
            return <ShopCartItem key ={item.id} data={item} handleChangeNum={this.onChangeNum} />
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
    );
  }
}

export default ShopCart;
