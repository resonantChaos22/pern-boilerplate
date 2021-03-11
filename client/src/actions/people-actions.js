import * as types from "./action-types";

// export const addPerson = (person) => {
//   return {
//     type: types.ADD_PERSON,
//     person,
//   };
// };

export const addPerson = (person) => async (dispatch) => {
  dispatch({
    type: types.ADD_PERSON,
    payload: {
      person,
    },
  });
};
