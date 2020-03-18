import { createUserModel, findUser } from '../services/userService'
import { encodeJWTToken } from '../services/tokenService'
import envConfig from '../configs/env.config'

export const createUser = async (req, res) => {
  try {
    const userData = req.body

    if (!checkRequiredFields(Object.values(userData))) {
      new Error('Please, fill in required fields.')
    }

    let newUser = await createUserModel(userData)


    await newUser.save()

    let token = encodeJWTToken(newUser._id, envConfig.JWT_KEY, envConfig.TOKEN_TIME)

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

export const loginUser = async (req, res) => {
  try {
    const userData = req.body

    if (!checkRequiredFields(Object.values(userData))) {
      new Error('Please, fill in required fields.')
    }

    let user = await findUser(userData)

    let token = encodeJWTToken(user._id, envConfig.JWT_KEY, envConfig.TOKEN_TIME)

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
          },
          message: 'The user is successfully authorized.',
        })
  }
  catch(error) {
    return res.status(400).send({ message: error.message })
  }
}

const checkRequiredFields = (arrayOfFields) => {
  return arrayOfFields.every((item) => !(item === undefined))
}