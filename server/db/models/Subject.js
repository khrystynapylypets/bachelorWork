import mongoose from 'mongoose';

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
});


export default mongoose.model('Subject', SubjectSchema);