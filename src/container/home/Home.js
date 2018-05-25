import React from 'react';
import ProductList from '../product/ProductList';
import BottomNav from '../../components/bottom/BottomNav';
import ShopCart from '../../container/shopcart/ShopCart';
import Personal from '../personal/Personal';

const getPage = (id, history) => {
  switch (id){
    case 1:
      return <ProductList history={history} />;
    case 2:
      return <ShopCart />;
    case 3:
      return <Personal history={history} />;
    default:
      return <ProductList history={history} />;
  }
};

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tab: 1,
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab(id) {
    this.setState({tab: id});
  }

  render() {
    const {tab} = this.state;
    const {history} = this.props;
    return (
        <div>
          {
            getPage(tab, history)
          }
          <BottomNav onChangeTab={this.handleChangeTab} tab={tab} />
        </div>
    );
  }
}

export default Home;
