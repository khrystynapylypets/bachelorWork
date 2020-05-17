import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  isAdmin: {
    type: Boolean,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  secondName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateWork: {
    type: Date,
    required: true,
  },
  academicStatus: {
    type: String,
    required: true,
  },
  dateBirth: {
    type: Date,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  canCreateSchedule: {
    type: Boolean,
    default: false,
  }
});


export default mongoose.model('User', UserSchema);
