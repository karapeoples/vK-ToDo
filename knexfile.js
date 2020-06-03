// Update with your config settings.
module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/errands.db3',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},

	// update the following configuration to use PostgreSQL
	production: {
		client: 'pg',
		production: {
			client: 'pg',
			connection: process.env.DATABASE_URL,
			migrations: {
				directory: './data/migrations',
			},
			seeds: {
				directory: './data/seeds',
			},
		},
	}
}


// postgres://axpibcvvmtqmxy:79bac4b3f1ae2ff559a7781665bfbd8b21f7e4a3fb00f83df1e10644d366ed07@ec2-34-232-147-86.compute-1.amazonaws.com:5432/dbnslsb72uusfm
  



