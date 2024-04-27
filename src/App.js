import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Keypad from './components/Keypad';
import Result from './components/Result';
class App extends Component {
  state = {
    result : ""
  }
  onClick = button => {
    if(button === '='){
      this.setState({
        result: eval(this.state.result)
      })
    }
    else if(button === 'C'){
      this.setState({
        result : ""
      })
    }
    else{
      this.setState({
        result: this.state.result + button
      })
    }
  }
  render(){
    return(
      <div className='calculator-body'>
      <h1 style={{textAlign:'center'}}>Calculator</h1>
      <div>
        <Keypad onClick={this.onClick}/>
        <Result result={this.state.result}></Result>
      </div>
      </div>
    )
  }
}

export default App;
