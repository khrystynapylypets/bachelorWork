export const TOKEN = 'TOKEN'
export const USER_DATA = 'USER_DATA'

export const getToken = () => (
  localStorage.getItem(TOKEN)
)

export const setInitData = (token, userData) => {
    console.log(userData)
    localStorage.setItem(TOKEN, token)
    localStorage.setItem(USER_DATA, JSON.stringify({
        id: userData.id,
        isAdmin: userData.isAdmin,
    }))
}

export const deleteInitData = () => {
    localStorage.removeItem(TOKEN)
    localStorage.removeItem(USER_DATA)
}

export const getInitData = () => (
    JSON.parse(localStorage.getItem(USER_DATA))
)