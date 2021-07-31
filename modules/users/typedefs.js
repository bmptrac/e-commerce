const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    users: [User]
  }
  type User {
    userId: Int
    username: String
    password: String
    isAdmin: Boolean
  }
  type Mutation {
      createConsumer(username:String, password:String):User
  }
`;
module.exports = {
  typeDefs,
};
