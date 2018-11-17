import Pet from '../models/Pet.model';

export default {
  Query: {
    async myPet(_, {}, { user }) {
      const pet: any = await Pet.findOne({
        creatorId: user.id,
        active: true,
      });
      return pet.toGraph();
    },
  },
  Mutation: {
    async petCreate(_, { data }) {
      const pet: any = await Pet.create(data);
      return pet.toGraph();
    },
  },
};
