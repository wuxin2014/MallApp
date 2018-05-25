import React from 'react';
import AddIcon from '../../../components/customBtn/AddIcon';

class BuyNum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: props.num,
    };
    this.onChangeNum = this.onChangeNum.bind(this);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
  }

  onChangeNum() {

  }

  onIncrease() {
    const {num} = this.state;
    const newNum = num+1;
    // this.setState((prevState, props) => ({num: prevState.num+1}));
    this.setState({num: newNum});
    this.props.changeNum(newNum);
  }

  onDecrease() {
    const {num} = this.state;
    const newNum = num > 0 ? num-1 : 0;
    this.setState({num: newNum});
    this.props.changeNum(newNum);
  }


  render() {
    const {num} = this.state;
    const {handleAddClick} = this.props;
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <AddIcon onAddShopCart={this.onDecrease} text="-"/>
          <input value={this.state.num} onChange={this.onChangeNum} style={{width: 40, textAlign: 'center'}}/>
          <AddIcon onAddShopCart={this.onIncrease} text="+"/>
        </div>
    );
  }
}

export default BuyNum;