import React, { Component } from 'react';
import AppLayout from '../components/layout/App';
import logo from '../assets/logo.svg';

export default class App extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      // code...
    };
  }

  render() {
    return (
      <AppLayout>
        <img src={logo} alt="React Logo" />
      </AppLayout>
    );
  }
}
