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
    title: '我',
    id: 3,
    to: '/',
  },
];

const BottomNav = ({onChangeTab}) => {
  return (
      <div className="bottom_wrap">
        {
          navData.map(data => {
            return (
                <BottomItem
                    key={data.id}
                    data={data}
                    onChangeTab={onChangeTab} />
            );
          })
        }
      </div>
  );
};

export default BottomNav;
