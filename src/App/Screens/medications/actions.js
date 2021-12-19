import { getFirestore } from "redux-firestore"


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
        medicationsReducer: {newMedication:{ atTimesToTake,name,takeFrequency }},
        userReducer: {currentUser}
      } = getState()

      console.log({atTimesToTake, name, takeFrequency, email:currentUser.email})

     // initialize database
      const firestore = getFirestore()
      const returnArray = []
  
      //query database 
      const res = await firestore.collection('Medications').add({
        email: currentUser.email,
        name: name,
        atTimesToTake: atTimesToTake,
        takeFrequency: takeFrequency,
      })
        
      const querySnapshot = await firestore.get({
        collection: "Medications",
        where: [['email', '==', currentUser.email]],
      });
  
      querySnapshot.forEach(doc => {
        let data = doc.data()
        returnArray.push(data)
      });
      dispatch(SetMedications(returnArray))
  } catch (error) {
    console.log(error)
    }
  }
  
  export const DeleteMedication = (name) => async (dispatch, getState) => {
    try {
  
      const {
        userReducer: {currentUser:{email}}
      } = getState()
      console.log({name, email})

      //initialize database
      const firestore = getFirestore()
  
      //query database 
      let deleteId = ''
     
      const deleteGet = await firestore.get({
        collection: "Medications",
        where: [['email', '==', email]],
        where: [['name', '==', name]]
      });
    
         deleteId = deleteGet.id
 
      

      const res = await firestore.collection('Medications').doc(deleteId).delete({
       
        where: [['email', '==', email]],
        where: [['name', '==', name]]
      });
      

      const querySnapshot = await firestore.get({
        collection: "Medications",
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
  

