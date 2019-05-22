const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUserId } = require("../utils");

async function signup(parent, args, ctx, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await ctx.prisma.createUser({ ...args, password });
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
  return {
    token,
    user
  };
}

async function signin(parent, args, ctx) {
  const user = await ctx.prisma.user({ email: args.email });
  if (!user) {
    throw new Error("No such user was found. Please try again");
  }

  const userIsValid = await bcrypt.compare(args.password, user.password);
  if (!userIsValid) {
    throw new Error("Invalid Password. Please try again.");
  }

  return {
    token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
    user
  };
}

async function createTeacher(parent, args, ctx, info) {
  const userId = getUserId(ctx);
  return await ctx.prisma.createTeacher({
    ...args,
    createdBy: {
      connect: {
        id: userId
      }
    }
  });
}

async function createCourse(parent, args, ctx, info) {
  const userId = getUserId(ctx);
  return await ctx.prisma.createCourse({
    ...args,
    createdBy: {
      connect: {
        id: userId
      }
    }
  });
}

module.exports = {
  signup,
  signin,
  createCourse,
  createTeacher
};
