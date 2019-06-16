exports.up = knex => knex.schema
  .createTable('articles', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.text('text')
    table.timestamps()
})
exports.down = knex => knex.schema
  .dropTableIfExists('articles')