const { pool } = require('../../modules/mysql-init')

const findApiUser = async (domain, apikey) => {
  try {
    console.log('api')
    const sql = " SELECT * FROM users_api WHERE domain LIKE ? AND apikey=? "
    const [rs] = await pool.execute(sql, ['%'+domain+'%', apikey])
    console.log(domain)
    console.log(apikey)
    console.log(rs)
    return rs.length === 1
      ? { success: true }
      : { success: false }
  }
  catch (err) {
    throw new Error(err)
  }
}

module.exports = { findApiUser }