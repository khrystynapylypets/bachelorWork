import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  participants: {
    type: [ mongoose.Types.ObjectId ],
    required: true,
  },
});


export default mongoose.model('Event', EventSchema);
