function createdBy(parent, args, ctx) {
  return ctx.prisma.teacher({ id: parent.id }).createdBy();
}

module.exports = {
  createdBy
};
