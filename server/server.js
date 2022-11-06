require("dotenv").config();

const express = require("express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");
const { ApolloServer } = require("apollo-server-express");

// const { createSchema } = require("@graphql-tools/schema");
const { gql } = require("apollo-server");
const { typeDefs, resolvers } = require("./schema");
const { authMiddleware } = require("./utils/auth");

// const app = express();
// const PORT = process.env.PORT || 3001;

(async function () {
  // create express app
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // if we're in production, serve client/build as static assets
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }
  // app.use(routes);

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/"));
  });

  // // wrap it in http server
  // const httpServer = createServer(app);

  // make a gql schema
  // const schema = createSchema({ typeDefs, resolvers });

  // create apollo server with typedefs and resolvers (typedefs required for the server to run)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  // start gql server
  await server.start();

  // apply express as middleware
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 3001;

  // run the server on successful connection to db
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Now listening on http://localhost:${PORT}/graphql`);
    });
  });
})();
