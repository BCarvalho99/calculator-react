import Display from "../components/Display";
import Button from "../components/Button";
import "./Calculator.css";
import React, { Component } from "react";

const initialState = {
  displayValue: '0',
  clearDisplay: false, 
  operation: null,
  values: [0, 0],
  current: 0
}
export default class Calculator extends Component {
  state = {...initialState}
  constructor(props) {
    super(props);
    this.clearMemo = this.clearMemo.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDig = this.addDig.bind(this);
  }
  clearMemo() {
    this.setState({...initialState})
  }
  setOperation(op) {
    console.log(op);
  }
  addDig(d) {
    if (d ==='.' && this.state.displayValue.includes('.')){
      return
    }
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + d
    this.setState({displayValue, clearDisplay: false})
    if(d!=='.'){
      const i = this.state.current
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[i]=newValue
      this.setState({values})
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={this.clearMemo} three />
        <Button label="/" click={this.setOperation} operator />
        <Button label="7" click={this.addDig} />
        <Button label="8" click={this.addDig} />
        <Button label="9" click={this.addDig} />
        <Button label="*" click={this.setOperation} operator />
        <Button label="4" click={this.addDig} />
        <Button label="5" click={this.addDig} />
        <Button label="6" click={this.addDig} />
        <Button label="-" click={this.setOperation} operator />
        <Button label="1" click={this.addDig} />
        <Button label="2" click={this.addDig} />
        <Button label="3" click={this.addDig} />
        <Button label="+" click={this.setOperation} operator />
        <Button label="0" click={this.addDig} duo />
        <Button label="." click={this.addDig} />
        <Button label="=" operator />
      </div>
    );
  }
}
