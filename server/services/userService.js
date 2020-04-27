import User from '../db/models/User'
import {hashPassword, comparePassword} from '../helpers/hashPassword'

export const createUserModel = async ({email, password, firstName, secondName, lastName, dateWork, academicStatus, dateBirth, isAdmin, phoneNumber}) => {
    let user = await User.findOne({
        $or: [{'email': email}],
    })

    if (user) {
        if (email === user.email) {
            throw new Error('User with this email is already exist!')
        }
    }

    return new User(
        {
            email,
            password: hashPassword(password),
            firstName,
            secondName,
            lastName,
            dateWork,
            academicStatus,
            dateBirth,
            isAdmin: isAdmin || false,
            phoneNumber: phoneNumber || null,
        })
}

export const findUser = async ({email, password}) => {
    let user = await User.findOne({
        $or: [{'email': email}],
    })

    if (!user) {
        throw new Error('User with this email doesn\'t exist!')
    }

    let isPasswordMatch = comparePassword(password, user.password)

    if (!isPasswordMatch) {
        throw new Error('Incorrect password!')
    }

    return user
}

export const findAllUsers = async () => {
    let cursor = await User.find()

    return cursor.map((item) => item)
}

export const findUserById = async (id) => {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new Error('User with this id doesn\'t exist!')
    }
    let user = await User.findOne({
        $or: [{'_id': id}]
    })

    if (!user) {
        throw new Error('User with this id doesn\'t exist!')
    }

    return user
}

export const findUserByEmail = async (email) => {
    let user = await User.findOne({
        $or: [{'email': email}]
    })

    if (!user) {
        throw new Error('User with this email doesn\'t exist!')
    }

    return user
}