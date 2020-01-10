import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const saltRounds = 10

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

UserSchema.pre('save', (next) => {
  if (this.isNew || this.isModified('password')) {
    const document = this
    bcrypt.hash(document.password, saltRounds,
      (error, hashedPassword) => {
      if(error) {
        next
      }
      })
  }
})

export default mongoose.model('User', UserSchema)