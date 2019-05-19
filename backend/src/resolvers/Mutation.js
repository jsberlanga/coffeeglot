const bcrypt = require("bcryptjs");

async function signup(parent, args, ctx, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await ctx.prisma.createUser({ ...args, password });

  return {
    user
  };
}

async function createCourse(parent, args, ctx, info) {
  const course = await ctx.prisma.createCourse(
    {
      ...args
    },
    info
  );
  return course;
}

async function createTeacher(parent, args, ctx, info) {
  const teacher = await ctx.prisma.createTeacher(
    {
      ...args
    },
    info
  );
  return teacher;
}

module.exports = {
  signup,
  createCourse,
  createTeacher
};
