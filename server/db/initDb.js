import { createUserModel } from '../services/userService';
import data from './users.json';

export const createAdmin = async () => {
  try {
    let admin = await createUserModel(data.admin);

    await admin.save();
    console.log('Admin is created');
  }
  catch (error) {
    console.log(error.message);
  }
};

export const createUsers = async () => {
  try {
    let users = data.initialUsers;

    console.log(users);
    users.forEach(async (userData) => {
      const newUser = await createUserModel(userData);

      await newUser.save();
    });
  }
  catch (error) {
    console.log(error.message);
  }
};
