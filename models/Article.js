const BaseModel = require('./BaseModel')

class Article extends BaseModel {
  static get tableName() {
    return 'articles'
  }
}

module.exports = Article