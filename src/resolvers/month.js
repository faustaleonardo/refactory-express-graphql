export default {
  Query: {
    months: async (_, __, { models }) => {
      return await models.Month.findAll();
    },
    month: async (_, { id }, { models }) => {
      return await models.Month.findByPk(id);
    }
  }
};
