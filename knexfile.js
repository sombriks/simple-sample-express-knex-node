// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './simple-sample.sqlite3'
    }
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: './simple-sample.sqlite3'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'simple-sample',
      user:     'postgres',
      password: '123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
