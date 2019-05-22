function createdBy(parent, args, ctx) {
  return ctx.prisma.course({ id: parent.id }).createdBy();
}

module.exports = {
  createdBy
};
