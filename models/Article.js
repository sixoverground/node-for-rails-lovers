const BaseModel = require('./BaseModel')

class Article extends BaseModel {
  static get tableName() {
    return 'articles'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title'],
      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1, maxLength: 255 },
        text: { type: 'string' }
      }
    }
  }
}

module.exports = Article