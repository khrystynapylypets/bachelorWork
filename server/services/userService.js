import User from '../db/models/User'
import { hashPassword } from '../helpers/hashPassword'

export const createUserModel = async({email, password, firstName, secondName, lastName, dateWork, academicStatus, dateBirth}) => {
  let user = await User.findOne({
    $or: [{'email': email}],
  })

  if(user) {
    if (email === user.email) {
      throw new Error('User with this email is already exist!')
    }
  }

  return new User(
      {email, password : hashPassword(password), firstName, secondName, lastName, dateWork, academicStatus, dateBirth})
}