import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    months: [Month!]
    month(id: ID!): Month
  }

  type Month {
    id: ID!
    name: String!
  }
`;
