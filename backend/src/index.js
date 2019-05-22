const cookieParser = require("cookie-parser");

const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
require("dotenv").config({ path: "variables.env" });

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Course = require("./resolvers/Course");
const Teacher = require("./resolvers/Teacher");
const User = require("./resolvers/User");

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Course,
    Teacher,
    User
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

server.express.use(cookieParser());

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
