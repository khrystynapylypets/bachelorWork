import Subject from '../db/models/Subject';

export const initSubjectsModel = async ({ name, type }) => {
  let subject = await Subject.findOne({ 'name': name });

  if (subject) {
    if (name === subject.name) {
      throw new Error('Subject with this name is already exist!');
    }
  }

  return new Subject(
    { name, type }
  );
};

export const findAllSubjects = async () => {
  let subjects = await Subject.find();

  return subjects;
};
