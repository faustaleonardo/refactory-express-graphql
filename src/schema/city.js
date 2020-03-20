import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    cities: [City!]
    city(id: ID!): City
  }

  type City {
    id: ID!
    name: String!
  }
`;
