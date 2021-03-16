import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Car extends Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

export default Car;
ReactDOM.render(
	<Car />,
	document.getElementById('page')
);