const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
require("dotenv").config({ path: "variables.env" });

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: request => ({
    ...request,
    prisma
  })
});
server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
