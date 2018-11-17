/**
 * Defining the root query here allows us to
 * extend from the root objects in our sub-schemas.
 * The benefits of doing this means we can use any
 * schema "type" in any file.
 */
export default `
  type Query
  type Mutation
  schema {
    query: Query
    mutation: Mutation
  }
  scalar Date
`;
