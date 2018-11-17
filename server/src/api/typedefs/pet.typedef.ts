export default `

  type Pet {
    id: ID!
    createdAt: Date!
    updatedAt: Date!
    active: Boolean!
    creatorId: String!
    creator: User
    name: String
  }

  extend type Query {
    myPet: Pet
  }

  input PetInput {
    name: String
  }

  extend type Mutation {
    petCreate(data: PetInput!): Pet!
  }

`;
