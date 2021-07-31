const { usersModel, createUser } = require("./model");
// Resolver map
const resolvers = {
  Query: {
    users: () => usersModel(),
  },
  User: {
    userId: (global) => global.user_id,
    isAdmin: (global) => global.isadmin,
  },
  Mutation:{
    createConsumer:async(_, {username, password})=>{
      const [row]= await createUser(username, password)
      return row
    }
  }
};

module.exports = {
  resolvers,
};
