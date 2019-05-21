async function users(parent, args, ctx, info) {
  const users = await ctx.prisma.users();
  return users;
}

async function courses(parent, args, ctx, info) {
  const courses = await ctx.prisma.courses();
  return courses;
}

async function getCourse(parent, args, ctx, info) {
  const course = await ctx.prisma.course({ id: args.id });
  return course;
}

async function teachers(parent, args, ctx, info) {
  const teachers = await ctx.prisma.teachers();
  return teachers;
}

module.exports = {
  users,
  courses,
  getCourse,
  teachers
};
