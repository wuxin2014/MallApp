import React from 'react';
import TypeMenuItem from './TypeMenuItem';

class TypeMenu extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {menuData, showSearch, changeMenuTab, menuId} = this.props;
    return (
      <div>
        <div onClick={showSearch} className="menu_search">
          搜索
        </div>
        <ul>
          {
            menuData.map(menu => <TypeMenuItem key={menu.id} menu={menu} curTabId={menuId} changeTab={changeMenuTab} />)
          }
        </ul>
      </div>
    );
  }
}

export default TypeMenu;
