import { gql } from 'apollo-server-express';

import userSchema from '@schema/user';
import genderSchema from '@schema/gender';
import monthSchema from '@schema/month';
import citySchema from '@schema/city';

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, genderSchema, monthSchema, citySchema];
