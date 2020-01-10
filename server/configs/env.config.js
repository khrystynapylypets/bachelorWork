const dotenv = require('dotenv')

dotenv.config()

export default {
  PORT: process.env.PORT || 9000,
  DATABASE_URL: process.env.DATABASE_URL,
}
