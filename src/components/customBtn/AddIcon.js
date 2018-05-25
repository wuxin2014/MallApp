import React from 'react';

const addStyle = {
  backgroundColor: 'orange',
  width: 20,
  height: 20,
  color: 'white',
  borderRadius: 20,
  textAlign: 'center',
  fontSize: 14,
  fontStyle: 'bold'
};

const AddIcon = ({onAddShopCart, text}) => {
  return (
      <div style={addStyle} onClick={onAddShopCart} >
        {text}
      </div>
  );
};

export default AddIcon;
