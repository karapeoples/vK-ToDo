
exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('tasks')
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex('tasks').insert([
				{ id: 1, errand: 'Make a Backend', errand_desc: 'Do the Boilerplate' },
				{ id: 2, errand: 'Make a DB', errand_desc: 'run migrations and seeds' },
				{ id: 3, errand: 'Make a API', errand_desc: 'write endpoints and model file' },
				{ id: 4, errand: 'Make a Front-End', errand_desc: 'use your noggin' },
			])
		})
}
