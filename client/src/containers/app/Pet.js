import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pet extends Component {
  static propTypes = {
    item: PropTypes.any,
  };

  static defaultProps = {
    item: null,
  };

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      // code...
    };
  }

  render() {
    const { item } = this.props;
    return (
      <>
        <div>Pets!</div>
        {JSON.stringify(item)}
      </>
    );
  }
}
