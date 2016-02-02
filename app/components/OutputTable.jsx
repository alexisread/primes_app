import React from 'react';

export default class OutputTable extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
      var data = this.props.data;
      var rows = [];
      for(var i=0; i<data.length; i++) {
        var cells = [];
	for(var j=0; j<data.length; j++) {
	  cells.push(<td key={j}>{data[i][j]}</td>);
	}
        rows.push(<tr key={i}>{cells}</tr>);
      }
    return (
      <div className="renderTest">
        {this.props.renderTest}
        <table className="MyClassName">
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
