export default {
  Query: {
    genders: async (_, __, { models }) => {
      return await models.Gender.findAll();
    },
    gender: async (_, { id }, { models }) => {
      return await models.Gender.findByPk(id);
    }
  }
};
