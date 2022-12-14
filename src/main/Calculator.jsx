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
  state = {...initialState} //Inicializador o manipulador de estado da calculadora
  constructor(props) {
    super(props);
    this.clearMemo = this.clearMemo.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDig = this.addDig.bind(this);
  }
  clearMemo() {
    this.setState({...initialState}) //chama o estado inicial da app
  }
  setOperation(op) {
    if (this.state.current === 0){
      this.setState({op, current: 1, clearDisplay: true})
    }else{
      const finishOp = op === '='
      const currentOp = this.state.op
      const values = [...this.state.values]
      
      switch(currentOp){ //Recebe a inserção de operação e armazena o calculo
        case '/':
          values[0] = values[0] / values[1];
          break;
        case '+':
          values[0] = values[0] + values[1];
          break;
        case '-':
          values[0] = values[0] - values[1];
          break;
        case '*':
          values[0] = values[0] * values[1];
          break;
        default:
          values[0] = this.state.values[0]
      }
      
      values[1] = 0

      this.setState({
        displayValue: values[0],
        op: finishOp ? null : op, 
        current: finishOp ? 0 : 1,
        clearDisplay: !finishOp,
        values
        
      })
    }
  }
  addDig(d) {
    if (d ==='.' && this.state.displayValue.includes('.')){
      return
    } //Validação para impedir a inserção de dois pontos
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const newDisplayValue = currentValue + d
    this.setState({displayValue: newDisplayValue, clearDisplay: false})
    if(d!=='.'){
      const indice = this.state.current
      const newValue = parseFloat(newDisplayValue)
      const values = [...this.state.values]
      values[indice]=newValue
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
        <Button label="=" click={this.setOperation} operator />
      </div>
    );
  }
}
