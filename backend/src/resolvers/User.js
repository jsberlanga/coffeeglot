function teachers(parent, args, ctx) {
  return ctx.prisma.user({ id: parent.id }).teachers();
}

function courses(parent, args, ctx) {
  return ctx.prisma.user({ id: parent.id }).courses();
}

function votes(parent, args, ctx) {
  return ctx.prisma.user({ id: parent.id }).votes();
}

module.exports = {
  teachers,
  courses,
  votes
};
