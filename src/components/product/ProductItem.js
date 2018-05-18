import React from 'react';
import {Link} from 'react-router-dom'
import './productItem.css';

const ProductItem = ({data}) => {
  return (
    <div>
      <Link to={`/detail/${data.id}`}>
        <div className="product_item_wrap">
          <img className="product_img"  src="https://img12.360buyimg.com/babel/s700x740_jfs/t16234/256/2440912301/22227/f06f0865/5aaa61b8N4005b92e.jpg!q90!cc_350x370"/>
          <div className="product_right">
            <h4>{data.name}</h4>
            <p>叫我汉堡大人，还你多彩口味</p>
            <span className="product_item_price">￥200</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
