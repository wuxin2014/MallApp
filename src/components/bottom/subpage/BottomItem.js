import React from 'react';
const BottomItem = ({data, onChangeTab}) => {
  return (

      <div className="bottom_item" onClick={() => onChangeTab(data.id)}>
        {data.title}
      </div>
  );
};

export default BottomItem;
