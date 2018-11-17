import gql from 'graphql-tag';
import fetchPet from './fetchPet';

import client from '../client';

const fragment = gql`
  fragment StandardPet on Pet {
    createdAt
    lastFed
    hunger
  }
`;

export default class Pet {
  static load() {
    return client
      .query({
        query: gql`
          ${fragment}
          query {
            pet: myPet {
              ...StandardPet
            }
          }
        `,
      })
      .then(({ data: { pet } = {} }) => (pet ? fetchPet(pet) : null));
  }

  static create() {
    return client
      .mutate({
        mutation: gql`
          ${fragment}
          mutation {
            pet: petCreate {
              ...StandardPet
            }
          }
        `,
      })
      .then(({ data: { pet } = {} }) => (pet ? fetchPet(pet) : null));
  }

  constructor(data = {}) {
    const { createdAt } = data;
    this.createdDate = Date.parse(createdAt);
    this.origin = data;
  }

  standbyImage() {
    throw new Error('This method has not been implemented correctly.');
  }

  minutesAlive() {
    const timeSince = Date.now() - this.createdDate;
    return Math.round(timeSince / (60 * 1000));
  }

  healthLevel() {
    return this.minutesAlive();
  }

  hungerLevel() {
    const points = this.origin.hunger - Math.floor(this.minutesAlive() / 12);
    return points <= 0 ? 0 : points;
  }

  feed() {
    return client
      .mutate({
        mutation: gql`
          ${fragment}
          mutation {
            pet: petFeed {
              ...StandardPet
            }
          }
        `,
      })
      .then(({ data: { pet } = {} }) => (pet ? fetchPet(pet) : null));
  }
}
