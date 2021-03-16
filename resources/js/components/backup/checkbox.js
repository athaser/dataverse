import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mycar: 'Male'
      };
    }
    render() {
      return (
        <form>
        <select value={this.state.mycar}>
          <option value="Male">Ford</option>
          <option value="Female">Volvo</option>
        </select>
        </form>
      );
    }
  }
  