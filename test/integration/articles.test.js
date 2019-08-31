const request = require('supertest')
const { app, db } = require('../../app')
const Article = require('../../models/Article')

describe('/articles', () => {
  beforeEach(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
    await db.seed.run()
  })

  afterEach(async () => {
    await db.migrate.rollback()
  })

  describe('GET /articles/new', () => {
    test('can enter a new article', async () => {
      const response = await request(app)
        .get('/articles/new')
      expect(response.status).toBe(200)
    })
  })

  describe('POST /articles', () => {
    test('can create an article', async () => {
      const response = await request(app)
        .post('/articles')
        .send('title=Can Create&body=Article successfully.')
      expect(response.status).toBe(302)
      const articles = await Article.query().orderBy('id')
      const article = articles[articles.length - 1]
      expect(response.header.location).toBe(`/articles/${article.id}`)
    })
  })
})