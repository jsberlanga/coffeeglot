const bcrypt = require("bcryptjs");

async function signup(parent, args, ctx, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await ctx.prisma.createUser({ ...args, password });

  return {
    user
  };
}

module.exports = {
  signup
};
