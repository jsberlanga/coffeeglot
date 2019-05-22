function teachers(parent, args, ctx) {
  return ctx.prisma.user({ id: parent.id }).teachers();
}

function courses(parent, args, ctx) {
  return ctx.prisma.user({ id: parent.id }).courses();
}

module.exports = {
  teachers,
  courses
};
