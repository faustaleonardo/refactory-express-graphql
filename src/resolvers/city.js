export default {
  Query: {
    cities: async (_, __, { models }) => {
      return await models.City.findAll();
    },
    city: async (_, { id }, { models }) => {
      return await models.City.findByPk(id);
    }
  }
};
