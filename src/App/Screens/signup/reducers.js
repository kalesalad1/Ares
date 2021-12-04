import initialState from './initialState'
import {
  SET_EMAIL,
  SET_PASSWORD,
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_USERNAME,
  SET_BIRTHDAY,

} from './types'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_EMAIL: {
      return { ...state, email: payload }
    }
    case SET_PASSWORD: {
      return { ...state, password: payload }
    }
    case SET_FIRSTNAME: {
        return {...state, firstname: payload}
    }
    case SET_LASTNAME: {
        return {... state, lastname: payload}
    }
    case SET_USERNAME:{
        return {...state, username: payload}
    }
    case SET_BIRTHDAY:{
        return {...state, password: payload}
    }
    default: {
      return state
    }
  }
}