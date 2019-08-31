const knex = require('knex')
const { Model } = require('objection')
const knexConfig = require('../../knexfile')
const Article = require('../../models/Article')

const db = knex(knexConfig[process.env.NODE_ENV || 'test'])
Model.knex(db)

describe('Article', () => {
  let article

  beforeEach(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
    await db.seed.run()

    article = await Article.query().findOne({ title: 'First Article!' })
  })

  afterEach(async () => {
    await db.migrate.rollback()
  })

  test('has a valid seed', async () => {
    expect(article).toBeDefined()
  })

  test('titles are required', async () => {
    article.title = undefined
    expect(() => {
      article.$validate()
    }).toThrow()
  })

})