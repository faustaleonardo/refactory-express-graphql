export default {
  Query: {
    users: async (_, __, { models }) => {
      return await models.User.findAll();
    },
    user: async (_, { id }, { models }) => {
      return await models.User.findByPk(id);
    },
    getDetails: async (_, { id }, { models }) => {
      const user = await models.User.findByPk(id);

      const monthId = (id + '').slice(-2) * 1;
      const month = await models.Month.findByPk(monthId);

      const genderId = (id + '').slice(4, 6) * 1;
      const gender = await models.Gender.findByPk(genderId);

      const cityId = (id + '').slice(0, 4) * 1;
      const city = await models.City.findByPk(cityId);

      return {
        id: user.id,
        name: user.name,
        hobby: user.hobby,
        monthOfBirth: month.name,
        gender: gender.value,
        city: city.name
      };
    }
  },
  Mutation: {
    addUser: async (_, { id, name, hobby }, { models }) => {
      return await models.User.create({
        id,
        name,
        hobby
      });
    },
    editUser: async (_, { id, name, hobby }, { models }) => {
      const user = await models.User.findByPk(id);
      if (name) user.name = name;
      if (hobby) user.hobby = hobby;

      return await user.save();
    },
    deleteUser: async (_, { id }, { models }) => {
      return await models.User.destroy({ where: { id } });
    }
  }
};
