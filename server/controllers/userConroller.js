import { createUserModel } from '../services/userService'
import { encodeJWTToken } from '../services/tokenService'
import envConfig from '../configs/env.config'

export const createUser = async (req, res) => {
  try {
    const userData = req.body

    if (!checkRequiredFields) {
      new Error('Please, fill in required fields.')
    }

    let newUser = await createUserModel(userData)

    let token = encodeJWTToken(newUser._id, envConfig.JWT_KEY, envConfig.TOKEN_TIME)

    await newUser.save()

    return res
      .header('access-token', token)
      .status(201)
      .send({
        user: {
          id: newUser._id,
          email: newUser.email,
          firstName: newUser.firstName,
          secondName: newUser.secondName,
          lastName: newUser.lastName,
          dateWork: newUser.dateWork,
          academicStatus: newUser.academicStatus,
          dateBirth: newUser.dateBirth,
        },
        message: 'The user is successfully registered.',
      })
  } catch (error) {
    return res.status(400).send({ message: error.message })
  }
}

const checkRequiredFields = (...arrayOfFields) => {
  return arrayOfFields.every((item) => !(item === undefined))
}