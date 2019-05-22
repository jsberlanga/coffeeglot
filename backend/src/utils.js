const jwt = require("jsonwebtoken");
const APP_SECRET = "jwtsecret123";

function getUserId(context) {
  console.log(context.request);
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    console.log(token);
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    return userId;
  }

  throw new Error("Not authenticated");
}

module.exports = {
  APP_SECRET,
  getUserId
};
