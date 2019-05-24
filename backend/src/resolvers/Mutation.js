const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUserId } = require("../utils");

async function signup(parent, args, ctx, info) {
  args.email = args.email.toLowerCase();

  const password = await bcrypt.hash(args.password, 10);
  const user = await ctx.prisma.createUser({ ...args, password });
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

  ctx.response.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
  });

  return {
    token,
    user
  };
}

async function signin(parent, args, ctx) {
  const user = await ctx.prisma.user({ email: args.email });
  if (!user) {
    throw new Error(`No such user was found for the email ${args.email}`);
  }

  const userIsValid = await bcrypt.compare(args.password, user.password);
  if (!userIsValid) {
    throw new Error("Invalid Password. Please try again.");
  }

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

  ctx.response.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365
  });

  return {
    token,
    user
  };
}

function signout(parent, args, ctx, info) {
  ctx.response.clearCookie("token");
  return { message: "Goodbye!" };
}

async function createTeacher(parent, args, ctx, info) {
  // const userId = getUserId(ctx);
  const userId = ctx.request.userId;
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
  const userId = ctx.request.userId;
  return await ctx.prisma.createCourse({
    ...args,
    createdBy: {
      connect: {
        id: userId
      }
    }
  });
}

async function deleteCourse(parent, args, ctx, info) {
  const userId = ctx.request.userId;
  const course = await ctx.prisma.course({ id: args.id });

  return await ctx.prisma.deleteCourse({
    id: course.id
  });
}

module.exports = {
  signup,
  signin,
  signout,
  createCourse,
  createTeacher,
  deleteCourse
};
