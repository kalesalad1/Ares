import initialState from './initialState';
import { SET_MEDICATIONS, SET_SELECTED_MED, SET_NEW_MED_NAME, SET_NEW_MED_TIMES, SET_NEW_MED_FREQUENCY } from './types';
export default ((state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case SET_MEDICATIONS:
      {
        return { ...state,
          medications: payload
        };
      }

    case SET_SELECTED_MED:
      {
        return { ...state,
          selectedMedication: payload
        };
      }

    case SET_NEW_MED_NAME:
      {
        return { ...state,
          newMedication: { ...state.newMedication,
            name: payload
          }
        };
      }

    case SET_NEW_MED_TIMES:
      {
        return { ...state,
          newMedication: { ...state.newMedication,
            atTimesToTake: payload
          }
        };
      }

    case SET_NEW_MED_FREQUENCY:
      {
        return { ...state,
          newMedication: { ...state.newMedication,
            takeFrequency: payload
          }
        };
      }

    default:
      {
        return state;
      }
  }
});