import React, { Component } from 'react';

import AppLayout from '../../components/layout/App';
import AuthRoutes from '../routes/AuthRoutes';
import Showcase from './Showcase';
import auth from '../../utils/auth';

export default class App extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      status: null,
    };
  }

  componentDidMount() {
    this.setState({ status: auth.get() });
  }

  emitAuthChange = () => {
    this.setState({ status: auth.get() });
  };

  render() {
    const { status } = this.state;
    return (
      <AppLayout>
        {status ? (
          <Showcase />
        ) : (
          <AuthRoutes emitAuthChange={this.emitAuthChange} />
        )}
      </AppLayout>
    );
  }
}
