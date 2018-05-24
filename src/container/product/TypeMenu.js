import React from 'react';
import TypeMenuItem from './TypeMenuItem';

class TypeMenu extends React.Component {
  constructor(props){
    super(props);
    const {menuData} = props;

    this.state = {
      curTabId: menuData.length > 0 ? menuData[0].id : 0,
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(curTabId) {
    this.setState({curTabId});
  }

  render() {
    const {menuData, showSearch} = this.props;
    const {curTabId} = this.state;
    return (
      <div>
        <div onClick={showSearch} className="menu_search">
          搜索
        </div>
        <ul>
          {
            menuData.map(menu => <TypeMenuItem key={menu.id} menu={menu} curTabId={curTabId} changeTab={this.changeTab} />)
          }
        </ul>
      </div>
    );
  }
}

export default TypeMenu;
