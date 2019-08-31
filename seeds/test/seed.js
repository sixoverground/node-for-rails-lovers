
exports.seed = async (knex) => {
  await knex('articles').del()
  await knex('articles').insert([
    { title: 'First Article!', text: 'This is my first article.' },
  ])
}
