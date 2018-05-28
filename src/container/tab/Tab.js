import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  constructor(props){
    super(props);
    this.defaultCurrent = '0';
    this.state={
      currentIndex:this.props.defaultCurrent
    };
    console.log('Tab---constructor');
  }

  select(select) {
    this.setState({ currentIndex:select });
  }

  render(){
    const {currentIndex} = this.state;
    return(
        <div style={{position: 'relative', height: '100vh'}}>
          <span style={{display: 'block', height: 20}}>你选择的是{currentIndex}</span>
          <div style={{height: 40, position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            {
              React.Children.map(this.props.children, (ele,index) =>
                  <div onClick={this.select.bind(this,index)} style={{flex: 1, textAlign: 'center'}}>{ele.props.name}</div>)
            }
          </div>
          <div style={{ position: 'absolute', bottom: 40, left: 0, right: 0, top: 20}}>
            {
              React.Children.map(this.props.children, (ele,index) => currentIndex == index && ele)
            }
          </div>

        </div>

    )
  }
}

export default Tab;