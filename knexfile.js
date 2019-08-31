module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'blog_development'
    },
    seeds: {
      directory: './seeds/development'
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: 'blog_test'
    },
    seeds: {
      directory: './seeds/test'
    }
  }
}