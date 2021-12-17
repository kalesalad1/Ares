import {
    SET_MEDICATIONS,
    SET_SELECTED_MED,
    SET_NEW_MED_NAME,
    SET_NEW_MED_TIMES,
    SET_NEW_MED_FREQUENCY,
  } from './types'
  
  export const SetMedications = medications => ({
    type: SET_MEDICATIONS,
    payload: medications,
  })
  export const SetSelectedMed = medication => ({
      type: SET_SELECTED_MED,
      payload: medication,
  })
  export const SetNewMedName = name => ({
    type: SET_NEW_MED_NAME,
    payload: name,
  })
  export const SetNewMedTimes = times => ({
    type: SET_NEW_MED_TIMES,
    payload: times,
  })
  export const SetNewMedFrequency = frequency => ({
    type: SET_NEW_MED_FREQUENCY,
    payload: frequency,
  }) 
  

  export const CreateNewMed = () => async (dispatch, getState) => {
    try {
  
      const {
        medReducer: { atTimesToTake,name,takeFrequency },
        userReducer: {currentUser}
      } = getState()

      //initialize database
      const firestore = getFirestore()
  
      //query database 
      const res = await firestore.collection('Meds').add({
        email: currentUser.email,
        name: name,
        atTimesToTake: atTimesToTake,
        takeFrequency: takeFrequency,
      })
        
      const querySnapshot = await firestore.get({
        collection: "Meds",
        where: [['email', '==', email]],
      });
  
      querySnapshot.forEach(doc => {
        let data = doc.data()
        dispatch(SetMedications(data))
      });
      
  } catch (error) {
    console.log(error)
    }
  }
  

