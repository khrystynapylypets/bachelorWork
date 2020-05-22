import { createEventModel, findAllEvents } from '../services/eventService';
import { sendEmail } from '../helpers/sendMail';
import { findUserById } from '../services/userService';

export const createEvent = async (req, res) => {
  try {
    const eventData = req.body;

    const participantsEmails = [];

    eventData.participants.forEach( async(id) => {
      const user = await findUserById(id);

      return participantsEmails.push(user.email);
    });

    let newEvent = await createEventModel(eventData);

    await newEvent.save();

    sendEmail(participantsEmails, eventData);

    return res
      .status(201)
      .send({
        event: {
          id: newEvent._id,
          date: newEvent.date,
          title: newEvent.title,
          place: newEvent.place,
          description: newEvent.description,
          time: newEvent.time,
          participants: newEvent.participants,
        },
        message: 'Event is successfully created.',
      });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    let events = await findAllEvents();

    let result = events.map((event) => ({
      id: event._id,
      title: event.title,
      date: event.date,
      place: event.place,
      time: event.time,
      description: event.description,
      participants: event.participants,
    }));

    return res
      .status(200)
      .send({
        events: result,
        message: 'You successfully get all events!',
      });
  }
  catch (error) {
    return res.status(400).send({ message: error.message });
  }
};
