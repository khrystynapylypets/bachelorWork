import Event from '../db/models/Event';
import mongoose from 'mongoose';

export const createEventModel = async ({ date, title, place, description, time, participants }) => {
  const participantsObjectId = participants.map((id) => mongoose.Types.ObjectId(id));

  return new Event(
    {
      date,
      title,
      place,
      description,
      time,
      participants: participantsObjectId,
    });
};

export const findAllEvents = async () => {
  let cursor = await Event.find();

  return cursor.map((item) => item);
};
