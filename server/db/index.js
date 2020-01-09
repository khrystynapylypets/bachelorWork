import mongoose from 'mongoose'
import envConfig from '../configs/env.config'

export const connect = async () => {
  try {
    await mongoose.connect(envConfig.DATABASE_URL, { useNewUrlParser: true })
    console.log(`Successfully connected to ${envConfig.DATABASE_URL}`)
  } catch (error) {
    console.log(error.name + error.description)
    throw error
  }
}