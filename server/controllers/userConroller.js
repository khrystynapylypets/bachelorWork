import { createUserModel, findUser, findAllUsers, findUserById } from '../services/userService';
import { encodeJWTToken } from '../services/tokenService';
import { checkRequiredFields } from '../helpers/additionalFunctions';
import envConfig from '../configs/env.config';

export const createUser = async (req, res) => {
  try {
    const userData = req.body;

    if (!checkRequiredFields(Object.values(userData))) {
      new Error('Please, fill in required fields.');
    }

    let newUser = await createUserModel(userData);


    await newUser.save();

    let token = encodeJWTToken(newUser._id, envConfig.JWT_KEY, envConfig.TOKEN_TIME);

    return res
      .header('access-token', token)
      .status(201)
      .send({
        user: {
          id: newUser._id,
          isAdmin: newUser.isAdmin,
          firstName: newUser.firstName,
          secondName: newUser.secondName,
          lastName: newUser.lastName,
          dateWork: newUser.dateWork,
          academicStatus: newUser.academicStatus,
          dateBirth: newUser.dateBirth,
          phoneNumber: newUser.phoneNumber,
          created: newUser.created,
          canCreateSchedule: newUser.canCreateSchedule,
        },
        message: 'The user is successfully registered.',
      });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const userData = req.body;

    if (!checkRequiredFields(Object.values(userData))) {
      new Error('Please, fill in required fields.');
    }

    let user = await findUser(userData);

    let token = encodeJWTToken(user._id, envConfig.JWT_KEY, envConfig.TOKEN_TIME);

    return res
      .header('access-token', token)
      .status(200)
      .send({
        user: {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          secondName: user.secondName,
          lastName: user.lastName,
          dateWork: user.dateWork,
          academicStatus: user.academicStatus,
          dateBirth: user.dateBirth,
          isAdmin: user.isAdmin,
          phoneNumber: user.phoneNumber,
          created: user.created,
          canCreateSchedule: user.canCreateSchedule,
        },
        message: 'The user is successfully authorized.',
      });
  }
  catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    let users = await findAllUsers();

    let result = users.map((user) => ({
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      secondName: user.secondName,
      lastName: user.lastName,
      dateWork: user.dateWork,
      academicStatus: user.academicStatus,
      dateBirth: user.dateBirth,
      isAdmin: user.isAdmin,
      phoneNumber: user.phoneNumber,
      created: user.created,
      canCreateSchedule: user.canCreateSchedule,
    }));

    return res
      .status(200)
      .send({
        users: result,
        message: 'You successfully get all users!',
      });
  }
  catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    let id = req.params.id;

    let user = await findUserById(id);

    return res
      .status(200)
      .send({
        user: {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          secondName: user.secondName,
          lastName: user.lastName,
          dateWork: user.dateWork,
          academicStatus: user.academicStatus,
          dateBirth: user.dateBirth,
          isAdmin: user.isAdmin,
          phoneNumber: user.phoneNumber,
          created: user.created,
          canCreateSchedule: user.canCreateSchedule,
        },
        message: 'You successfully get user!',
      });
  }
  catch (error) {
    return res.status(400).send({ message: error.message });
  }
};


