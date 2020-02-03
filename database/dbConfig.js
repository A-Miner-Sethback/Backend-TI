const knex = require('knex')
const environment = process.env.DB_ENV || "development"
const config = require('../knexfile.js')[environment]

module.exports = knex(config)