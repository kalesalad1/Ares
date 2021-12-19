import {
    SET_EMAIL,
    SET_PASSWORD,
    SET_FIRSTNAME,
    SET_LASTNAME,
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

