const { model } = require("../../connections/pool.js");

const USERS = ` SELECT * FROM users`;

const CREATE_USER =`INSERT INTO users(username, password ) VALUES($1, crypt($2, gen_salt('bf'))) RETURNING *`

const usersModel = () => model(USERS);
const createUser = (username, password)=>model(CREATE_USER,username, password)

module.exports = {
  usersModel,
  createUser
};
