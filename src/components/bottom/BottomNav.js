import React from 'react';
import BottomItem from './subpage/BottomItem';
import './bottomNav.css';

const navData = [
  {
    title: '首页',
    id: 1,
    to: '/',
  },
  {
    title: '购物车',
    id: 2,
    to: '/shopCart'
  },
  {
    title: '个人中心',
    id: 3,
    to: '/personal',
  },
];

class BottomNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const {onChangeTab, tab} = this.props;
    return (
      <div className="bottom_wrap">
        {
          navData.map(data => {
            return (
              <BottomItem
                key={data.id}
                data={data}
                onChangeTab={onChangeTab}
                curTab={tab} />
            );
          })
        }
      </div>
    );
  }
}

export default BottomNav;
