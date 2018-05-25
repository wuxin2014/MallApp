import React from 'react';
import PersonalItem from '../../components/personal/PersonalItem';
import './peronal.css';

const listData = [
  {
    icon: '',
    name: '我的邮箱',
    num: 1,
  },
  {
    icon: '',
    name: '修改资料',
    num: 1,
  },
  {
    icon: '',
    name: '签到',
    num: 1,
  },
  {
    icon: '',
    name: '会员中心',
    num: 1,
  }
];

class Personal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <div>
            <div className="personal_top">
              <img src="" />
            </div>
            <div className="personal_info">
              <div className="personal_info_item">
                <div>0</div>
                <div>余额</div>
              </div>
              <div className="personal_info_item">
                <div>0</div>
                <div>积分</div>
              </div>
              <div className="personal_info_item">
                <div>0</div>
                <div>优惠券</div>
              </div>
            </div>
          </div>
          <div style={{marginTop: 10, marginBottom: 10}}>
            <PersonalItem item={{num: 1, name: "外卖订单"}} />
          </div>

          {
            listData.map((item, key) => {
              return (<PersonalItem key={key} item={item} />)
            })
          }
        </div>
    );
  }
}

export default Personal;
