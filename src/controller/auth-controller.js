const accountController = require('./account-controller');

exports.signIn = async (id, password) => {
  const result = await accountController.findAccountById(id);
  if (result.status !== 200) return { status: result.status };
  if (result.account.password !== password) return { status: 403 };
  return { status: 200, account: result.account };
};