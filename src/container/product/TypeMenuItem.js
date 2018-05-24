import React from 'react';

const TypeMenuItem = ({menu, curTabId, changeTab}) => {
  return (
    <li
      onClick={() =>changeTab(menu.id)}
      className={curTabId === menu.id ? "active" : ''}>
      {menu.name}
    </li>
  );
};

export default TypeMenuItem;