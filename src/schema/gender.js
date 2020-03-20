import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    genders: [Gender!]
    gender(id: ID!): Gender
  }

  type Gender {
    id: ID!
    value: String!
  }
`;
