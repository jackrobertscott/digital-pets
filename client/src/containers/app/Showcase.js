import React, { Component } from 'react';

import Pet from '../../pets/Pet';

export default class Showcase extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      loaded: false,
      pet: null,
    };
  }

  componentDidMount() {
    Pet.load().then(pet => this.setState({ loaded: true, pet }));
  }

  createPet = () => {
    Pet.create().then(pet => this.setState({ pet }));
  };

  feedPet = () => {
    Pet.feedPet().then(pet => this.setState({ pet }));
  };

  render() {
    const { loaded, pet } = this.state;
    if (!loaded) {
      return <>Loading...</>;
    }
    return (
      <>
        <div>Pets!</div>
        {pet && <img src={pet.standbyImage()} alt="Pet" />}
        <p>
          Minutes alive:
          {pet.minutesAlive()}
        </p>
        <p>
          Health level:
          {pet.healthLevel()}
        </p>
        <p>
          Hunger level:
          {pet.hungerLevel()}
        </p>
        {pet ? (
          <button type="button" onClick={this.feedPet}>
            Feed
          </button>
        ) : (
          <button type="button" onClick={this.createPet}>
            Create
          </button>
        )}
      </>
    );
  }
}
