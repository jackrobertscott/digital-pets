import React, { Component } from 'react';
import AppLayout from '../../components/layout/App';
import AuthRoutes from '../routes/AuthRoutes';

export default class App extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      user: null,
    };
  }

  handleUserLogin = user => {
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    return (
      <AppLayout>
        <AuthRoutes user={user} handleUserLogin={this.handleUserLogin} />
      </AppLayout>
    );
  }
}
