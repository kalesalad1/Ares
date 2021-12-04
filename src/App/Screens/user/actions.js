import { getFirestore } from "redux-firestore"
import {
  SET_CURRENT_USER
} from './types'

export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  payload: currentUser
})
//
export const LogUserIn = () => async (dispatch, getState) => {
  try {

    const {
      loginReducer: { email },
      loginReducer: { password }
    } = getState()
  


    //initialize database
    const firestore = getFirestore()

    //query database 
    const querySnapshot = await firestore.get({
      collection: "Users",
      where: [['email', '==', email]],
      where: [['password', '==', password]]
    });

    querySnapshot.forEach(doc => {
      let data = doc.data()
      dispatch(setCurrentUser(data))
    });

} catch (error) {
  console.log(error)
  }
}

export const UserSignUp = () => async (dispatch, getState) => {
  try {

    const {
      signupReducer: { email,password,username, birthday,firstname,lastname },
     
    } = getState()
  


    //initialize database
    const firestore = getFirestore()

    //query database 
    const res = await firestore.collection('cities').add({
      email: email,
      password: password,
      username: username,
      birthday: birthday,
      firstname: firstname,
      lastname: lastname,
    })
    console.log('Added document with ID: ', res.id);

} catch (error) {
  console.log(error)
  }
}
