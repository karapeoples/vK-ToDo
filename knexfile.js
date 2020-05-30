// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/errands.db3'
    },
    
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
}




  /* connection: {
    database: 'my_db',
    user: 'username',
    password: 'password'
  }
 */

