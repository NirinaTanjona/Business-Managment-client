import Cookies from 'js-cookie'

export const isAuth = () => {
  const authTokenCookies = Cookies.get('authToken')
  if (!authTokenCookies) {
    return false
  }
  return true
}

export const getToken = () => {
  return Cookies.get('authToken')
}

export const setAuth = (token: string) => {
  console.log(token)
  Cookies.set('authToken', token, {secure: true})

  const authTokenCookies = Cookies.get('authToken')

  console.log('after')
  console.log(authTokenCookies)

  return authTokenCookies
}

export const logout = () => {
  Cookies.remove('authToken')
}

const authFunctions = {
  isAuth,
  logout,
  setAuth,
  getToken,
}

export default authFunctions