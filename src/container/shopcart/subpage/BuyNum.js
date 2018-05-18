import React from 'react';

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
        <div>
          <button onClick={this.onDecrease}>-</button>
          <input value={this.state.num} onChange={this.onChangeNum}/>
          <button onClick={this.onIncrease}>+</button>
        </div>
    );
  }
}

export default BuyNum;