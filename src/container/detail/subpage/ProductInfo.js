import React from 'react';
import {picUrl} from '../../../utils';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div>
          <img alt="图片" src={picUrl} />
        </div>
    );
  }
}

export default ProductInfo;