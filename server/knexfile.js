module.exports = {
  client: 'pg',
  connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'hussein',
      database: 'TradeManiaAssessment',
  },
  migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
  }
};