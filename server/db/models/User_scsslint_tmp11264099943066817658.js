import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

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
  if(this.isNew || this.isModified('password')) {
    const document = thi
  }
})

export default mongoose.model('User', UserSchema)