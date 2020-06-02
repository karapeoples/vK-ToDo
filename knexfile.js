// Update with your config settings.


module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
    database: 'tasks',
    user: 'postgres',
      password: 'Scorpio1978',
  },
    
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },


   production: {
   client: 'pg',
    useNullAsDefault: true,
    connection: {
    database: 'tasks',
    user: 'postgres',
      password: 'Scorpio1978',
  },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },
};





  

