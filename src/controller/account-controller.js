const mysql = require('../config/mysql');

exports.findAccountById = async (id) => {
  const sql = `SELECT * FROM accounts WHERE uid = ${id}`;
  try {
    const [rows] = await mysql.query(sql);
    if (!rows[0]) return { status: 404 };
    return { status: 200, account: rows[0] };
  } catch (e) {
    return { status: 500 };
  }
};