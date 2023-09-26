/** @format */

const User = require("../../model/User");
const { badRequest } = require("../../utils/error");
const create = async ({
  name,
  email,
  password,
  role = "user",
  status = "pending",
}) => {
  if (!name || !email || !password || !role || !status)
    throw badRequest("invalid parameters");

  const user = await User({ name, email, password, role, status });
  await user.save();
  return { ...user._doc, id: user._id };
};
module.exports = {
  create,
};
