async function users(parent, args, ctx, info) {
  return args;
}

async function courses(parent, args, ctx, info) {
  const courses = await ctx.prisma.courses();
  return courses;
}

module.exports = {
  users,
  courses
};
