import { findAllSubjects } from '../services/subjectService';

export const getAllSubjects = async (req, res) => {
  try {
    let subjects = await findAllSubjects();

    let result = subjects.map((subject) => ({
      id: subject._id,
      name: subject.name,
      type: subject.type,
    }));

    return res
      .status(200)
      .send({
        subjects: result,
        message: 'You successfully got all subjects!',
      });
  }
  catch (error) {
    return res
      .status(400)
      .send({
        message: error.message,
      });
  }
};
