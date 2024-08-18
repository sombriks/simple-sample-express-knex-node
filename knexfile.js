// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './simple-sample.sqlite3'
    },
    useNullAsDefault:true
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: '/data/simple-sample.sqlite3'
    },
    useNullAsDefault:true
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
