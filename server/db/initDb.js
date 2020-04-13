import { createUserModel } from '../services/userService'
import { initSubjectsModel } from '../services/subjectService'
import data from './users.json'
import sub from './subjects.json'

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

export const initSubjects = async () => {

  for (const element of sub.subjects) {
    try {
      let subjects = await initSubjectsModel(element)

      await subjects.save()
      console.log('Subject is added')
    }
    catch (error) {
      console.log(error.message)
    }
  }
}