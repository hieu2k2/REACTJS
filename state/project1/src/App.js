import React, { Component } from 'react';
 
class App extends Component{
  constructor (props) {
    super(props)
    this.state = {
      keypressed : '',
    };
  }
 
  handler = (item) => {
    this.setState({keypressed: item.key});
    // item.key xem trong clg(item)
  };
  render () {
    return (
      <div>
        <p>-*-: {this.state.keypressed}</p>
        <input type="text" onKeyPress={(item) => this.handler(item)} />
      </div>
    )
  }
}
 
export default App