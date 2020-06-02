// Update with your config settings.

require('dotenv').config()

module.exports = {
	development: {
		client: 'pg',
		connection: { database: 'tasks', user: 'postgres', password: 'Scorpio1978' },
		migrations: {
			directory: './data/migrations',
		},
		seeds: { directory: './data/seeds' },
	},

	testing: {
		client: 'pg',
		connection: { database: 'tasks', user: 'postgres', password: 'Scorpio1978' },
		migrations: {
			directory: './data/migrations',
		},
		seeds: { directory: './data/seeds' },
	},

	production: {
		client: 'pg',
		connection: process.env.DB_URL,
		migrations: {
			directory: './data/migrations',
		},
		seeds: { directory: './data/seeds' },
	},
}






  

