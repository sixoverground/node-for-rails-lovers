const { Model } = require('objection')

class BaseModel extends Model {
  $beforeInsert(context) {
    super.$beforeInsert(context)
    const timestamp = new Date().toISOString()
    this.created_at = timestamp
    this.updated_at = timestamp
  }
  
  $beforeUpdate(opt, context) {
    super.$beforeUpdate(opt, context)
    this.updated_at = new Date().toISOString()
  }
}

module.exports = BaseModel