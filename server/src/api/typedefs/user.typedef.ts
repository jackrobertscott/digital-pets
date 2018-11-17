export default `

  type User {
    id: ID!
    createdAt: Date!
    updatedAt: Date!
    username: String!
    password: String!
  }

  type Auth {
    userId: String!
    token: String!
  }

  extend type Query {
    me: User!
  }

  input UserCredentials {
    username: String!
    password: String!
  }

  extend type Mutation {
    userCreate(credentials: UserCredentials!): Auth!
    userLogin(credentials: UserCredentials!): Auth!
  }

`;
