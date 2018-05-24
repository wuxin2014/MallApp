import React from 'react';
const BottomItem = ({data, onChangeTab, curTab}) => {
  return (
    <div
      className={data.id === curTab ? "bottom_item active" : "bottom_item"}
      onClick={() => onChangeTab(data.id)}>
      {data.title}
    </div>
  );
};

export default BottomItem;
