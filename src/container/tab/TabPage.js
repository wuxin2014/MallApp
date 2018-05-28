import React from 'react';
import Tab from './Tab';
import ProductList from '../../container/product/ProductList';

class TabPage extends React.Component {

  constructor(props) {
    super(props);
    console.log('TabPage---constructor');
  }

  render(){
    return(
        <div>
          <Tab defaultCurrent='0'>

            <div name='0'>
              <ProductList history={this.props.history} />
            </div>
            <div name="1">
              <div><span>我是第二个</span><span>2</span></div>
            </div>
            <div name="2">
              <div><span>我是第三个</span><span>3</span></div>
            </div>
          </Tab>
        </div>

    )
  }
}

export default TabPage;