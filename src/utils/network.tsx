import Axios from 'axios'
import Cookies from 'js-cookie'

const BUSINESS_API : string | undefined = process.env.REACT_APP_BUSINESS_API
const auth_token = Cookies.get('authToken')

Axios.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
      return response;
    }, (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      if (error.response.status === 401) {
        // logout()
        window.location.href = '/login'
    } else {
        return Promise.reject(error);
    }
  }
)

export const GET = (url:string) => {
  return Axios.get(`${BUSINESS_API}${url}`, {
    headers: {
      Authorization: `Token ${auth_token}`,
      Accept: 'application/vnd.api+json'
    }
  })
}

export const DELETE = (url:string) => {
  return Axios.delete(`${BUSINESS_API}${url}`, {
    headers: {
      Authorization: `Token ${auth_token}`,
      Accept: 'application/vnd.api+json',
    }
  })
}

export const POST = (url: string, data: object | undefined, login?: boolean) => {
  return Axios.post(`${BUSINESS_API}${url}`, data, {
      headers: {
          Authorization: ` Token ${auth_token}`,
          Accept: 'application/vnd.api+json'
      }
  })
}

export const POST_USER = (url: string, data: object | undefined, login?: boolean) => {
  return Axios.post(`${BUSINESS_API}${url}`, data, {
      headers: {
          Accept: 'application/json'
      }
  })
}

export const PATCH = (url: string, data: object | undefined) => {
  return Axios.patch(`${BUSINESS_API}${url}`, data, {
      headers: {
          Authorization: ` Token ${auth_token}`,
          Accept: 'application/vnd.api+json'
      }
  })
}