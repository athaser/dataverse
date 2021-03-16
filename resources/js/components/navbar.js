import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Navbar extends Component {
	render() {
		return (
			<div>
				<ul className="nav"><li className="nav-item"><a href="/">Page 1</a></li></ul>
				<ul className="nav"><li className="nav-item"><a href="page2">Page 2</a></li></ul>
				<ul className="nav"><li className="nav-item"><a className="contact" href="page3">Page 3</a></li></ul>
			</div>
			
		);
	}
}

export default Navbar;
ReactDOM.render(
	<Navbar />,
	document.getElementById('navbar')
);