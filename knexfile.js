// Update with your config settings.

require('dotenv').config()

module.exports = {
	development: {
		client: 'pg',
		connection: {
			host: 'localhost',
			database: 'tasks',
			user: 'postgres',
			password: 'Scorpio1978',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: './data/migrations',
			tableName: 'knex_migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},

	testing: {
		client: 'pg',
		connection: { host: 'localhost', database: 'tasks', user: 'postgres', password: 'Scorpio1978' },
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: './data/migrations',
			tableName: 'knex_migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},

	production: {
		client: 'pg',
		connection: { host: 'localhost', database: 'tasks', user: 'postgres', password: 'Scorpio1978' },
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: './data/migrations',
			tableName: 'knex_migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},
}






  

