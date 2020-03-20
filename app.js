import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from '@schema';
import resolvers from '@resolvers';

import models, { sequelize } from '@model';

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: { models }
});

server.applyMiddleware({ app, path: '/graphql' });

const port = 3000;

sequelize.sync().then(async () => {
  app.listen(port, () => {
    console.log(
      `Apollo Server is listening on http://localhost/${port}/graphql`
    );
  });
});
