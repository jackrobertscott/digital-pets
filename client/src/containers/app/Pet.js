import React, { Component } from 'react';
import gql from 'graphql-tag';

import client from '../../client';
import { petImage } from '../../utils/pets';

const fragment = gql`
  fragment StandardPet on Pet {
    createdAt
  }
`;

const query = gql`
  ${fragment}
  query {
    pet: myPet {
      ...StandardPet
    }
  }
`;

const mutation = gql`
  ${fragment}
  mutation {
    pet: petCreate {
      ...StandardPet
    }
  }
`;

export default class Pet extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      loaded: false,
      pet: null,
    };
  }

  componentDidMount() {
    client.query({ query }).then(({ data: { pet } }) => {
      this.setState({ loaded: true, pet });
    });
  }

  createPet = () => {
    client.mutate({ mutation }).then(({ data: { pet } }) => {
      this.setState({ pet });
    });
  };

  render() {
    const { loaded, pet } = this.state;
    return (
      <>
        <div>Pets!</div>
        {pet && <img src={petImage(pet)} alt="Pet" />}
        {loaded && !pet && (
          <button type="button" onClick={this.createPet}>
            Create
          </button>
        )}
        {JSON.stringify(pet)}
      </>
    );
  }
}
