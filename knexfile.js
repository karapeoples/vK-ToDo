// Update with your config settings.

require('dotenv').config()

// DATABASE_URL env should follow this format:
// postgres://user_name:password@ipaddress:port/table
// Example: postgres://jimmy:password@localhost:5432/pg_database

module.exports = {
	development: {
		client: 'pg',
		// 🔻 Points to our local Postgresql database
		connection: process.env.DATABASE_URL,
	},
}





  

