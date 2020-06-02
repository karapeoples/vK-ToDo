
exports.up = function (knex) {
	return knex.schema.createTable('tasks', (tbl) => {
		tbl.increments()
		tbl.text('errand', 255).notNullable()
		tbl.text('errand_desc', 255)
	})
}

exports.down = function (knex) {
	knex.schema.dropTableIfExists('tasks')
}
