import React from 'react';
import genNPrimes from './../libs/genNPrimes.js';
import multiplyInto2dArray from './../libs/multiplyInto2dArray.js';
import InputForm from './InputForm.jsx';
import OutputTable from './OutputTable.jsx';

const renderTest = '';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      outputArray: []
    };
    this.handleComponentSubmit = this.handleComponentSubmit.bind(this);
  }

  handleComponentSubmit(e){
    var primeArray = genNPrimes(e.number);
    this.setState({outputArray: multiplyInto2dArray(primeArray)});
  }
  
  render() {
    return (
      <div>
        <InputForm renderTest={renderTest} onComponentSubmit={this.handleComponentSubmit} />
        <OutputTable renderTest={renderTest} data={this.state.outputArray} />
      </div>
    );
  }
}
