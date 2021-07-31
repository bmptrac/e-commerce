const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");
const PORT = process.env.PORT || 5050;
const multer = require("multer");
const upload = multer({ dest: "files/" });

const user = require("./modules/users");

const modules = [user];
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());
app.use("/static", express.static("files"));

const server = new ApolloServer({ modules });
const startup = async () => {
  await server.start();
  server.applyMiddleware({ app });
  return app;
};

startup();
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:5050${server.graphqlPath}`)
);
