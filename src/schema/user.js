import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
    getDetails(id: ID!): UserDetails
  }

  type User {
    id: ID!
    name: String!
    hobby: String!
  }

  type UserDetails {
    id: ID!
    name: String!
    hobby: String!
    monthOfBirth: String!
    gender: String!
    city: String!
  }

  extend type Mutation {
    addUser(id: ID!, name: String!, hobby: String!): User
    editUser(id: ID!, name: String, hobby: String): User
    deleteUser(id: ID!): Boolean
  }
`;
