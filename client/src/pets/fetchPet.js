import JohnnyPet from './johnny/JohnnyPet';
import TomPet from './tom/TomPet';

export default pet => {
  const date = Date.parse(pet.createdAt);
  switch (date % 2) {
    case 0:
      return new JohnnyPet(pet);
    default:
      return new TomPet(pet);
  }
};
