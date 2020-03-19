import { createUserModel } from '../services/userService'
import data from './users.json'

export const createAdmin = async () => {
  try {
    let admin = await createUserModel(data.admin)

    await admin.save()
    console.log('Admin is created')
  }
  catch (error) {
    console.log(error.message)
  }
}