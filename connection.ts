

const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5433,
   idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,
});

export default client;