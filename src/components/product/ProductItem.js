import React from 'react';
import {Link} from 'react-router-dom'
import './productItem.css';
import AddIcon from '../customBtn/AddIcon';

const ProductItem = ({data, history}) => {
  const addShopCart = (ev) => {
    ev.cancelable = true;
    ev.stopPropagation();
    const proData = {
      num: 1,
      name: data.name,
      id: data.id,
      price: data.price,
    };

    let shopCartData = sessionStorage.getItem('shopCartData');
    const arr = shopCartData ? JSON.parse(shopCartData) : [];

    const isExist = arr.filter(item => item.id === data.id);
    if(isExist.length > 0) {
      arr.map(item => {
        if(item.id === data.id) {
          item.num ++;
        }
        return item;
      });
    } else {
      arr.push(proData);
    }

    sessionStorage.setItem('shopCartData', JSON.stringify(arr));
  };

  const jumpPage = () => {
    console.log('haah', history);
    history.push(`/detail/${data.id}`)
  };

  return (
    <div onClick={jumpPage}>
      <div className="prod_item_wrap">
        <img width="90" height="50" src={data.pic} alt="logo" />
        <div className="prod_item_info">
          <span style={{fontSize: 14}}>{data.name}</span>
          <span style={{fontSize: 12}}><span style={{fontSize: 14, color: 'red'}}>{`￥${data.price}`}</span>/份</span>
          <span style={{fontSize: 12, color: 'gray'}}>{`已售${data.salesNum}份`}</span>
        </div>
        <AddIcon onAddShopCart={addShopCart} text="+"/>
      </div>
    </div>
  );
};

export default ProductItem;
