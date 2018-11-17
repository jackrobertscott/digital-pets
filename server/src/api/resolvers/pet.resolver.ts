import Pet from '../models/Pet.model';
import User from '../models/User.model';

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
    async petCreate(_, { data = {} }) {
      const pet: any = await Pet.create(data);
      return pet.toGraph();
    },
  },
  Pet: {
    async creator({ creatorId }) {
      if (creatorId) {
        const creator: any = await User.findById(creatorId);
        return creator.toGraph();
      }
      return null;
    },
  },
};
