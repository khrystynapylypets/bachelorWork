const dotenv = require('dotenv')

dotenv.config()

export default {
  PORT: process.env.PORT || 9002,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_KEY:process.env.JWT_KEY,
  BACKEND_DOMAIN:process.env.BACKEND_DOMAIN,
  FRONT_DOMAIN: process.env.FRONT_DOMAIN,
  TOKEN_TIME: process.env.TOKEN_TIME,
}
