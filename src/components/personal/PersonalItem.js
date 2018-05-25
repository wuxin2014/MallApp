import React from 'react';

const PersonalItem = ({item}) => {
  return (
      <div style={{height: 46, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0 10px', backgroundColor: 'beige', alignItems: 'center'}}>
        <div>
          <i>icon</i>
          <span style={{marginLeft: 10}}>{item.name}</span>
        </div>
        <div>
          {item.num && <span className="news_num">{item.num}</span>}
          <span>></span>
        </div>
      </div>
  );
};

export default PersonalItem;
