import React from 'react';

export default class InputForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: '',
      text: ''
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleNumberChange(e){
    this.setState({number: e.target.value});
  }
  
  handleTextChange(e){
    this.setState({text: e.target.value});
  }
	
  handleSubmit(e){
    e.preventDefault();
	var text = this.state.text.trim();
	if (!this.state.number){
	  return;
	}
	this.props.onComponentSubmit({number: this.state.number, text: text});
	this.setState({number: '', text: ''});
  }
	
  render() {

    return (
      <form className="renderTest" onSubmit={this.handleSubmit}>
	{this.props.renderTest}
        <input type="number"
		 placeholder="Number of primes"
		 value={this.state.number}
		 onChange={this.handleNumberChange}
		 />
        <input type="submit" value="Calculate" />
      </form>
    );
  }
}
