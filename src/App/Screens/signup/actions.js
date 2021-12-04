import {
    SET_EMAIL,
    SET_PASSWORD,
    SET_FIRSTNAME,
    SET_LASTNAME,
    SET_USERNAME,
    SET_BIRTHDAY,
  } from './types'
  
  export const SetEmail = email => ({
    type: SET_EMAIL,
    payload: email,
  })
  export const SetPassword = password => ({
    type: SET_PASSWORD,
    payload: password,
  })
  export const SetFirstName = firstname => ({
    type: SET_FIRSTNAME,
    payload: firstname,
  })
  export const SetLastName = lastname => ({
    type: SET_LASTNAME,
    payload: lastname,
  })
  export const SetUserName = username => ({
    type: SET_USERNAME,
    payload: username,
  })
  export const SetBirthday = birthday => ({
    type: SET_BIRTHDAY,
    payload: birthday,
  })