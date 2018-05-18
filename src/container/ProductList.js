import React from 'react';
import ProductItem from '../components/product/ProductItem';
import {queryProductList} from '../service/productService';
import {CODE_SUCCESS} from '../utils';


export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 0
    };
    console.log(props);
  }

  render() {
    return (
        <div className="common_content">
          {
            this.state.data.map(item => {
              return <ProductItem key={item.id} data={item}/>
            })
          }
        </div>
    );
  }

  componentDidMount() {
    // 获取商品列表数据
    this.loadFirstPageData();
  }

  loadFirstPageData() {
    const result = queryProductList();
    this.resultHandle(result);
  }

  resultHandle(result) {
    result.then(res => {
      const {code, result} = res;
      if (code === CODE_SUCCESS) {
        const {objs, total} = result;
        this.setState({
          data: objs,
        });
      } else if (code === 4996) {
        this.props.history.push('/login');
      }
    }).catch(err => {

    });
  }
};