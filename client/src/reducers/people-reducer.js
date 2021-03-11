import * as types from "../actions/action-types";

const initialState = {
  people: [
    {
      firstname: "Shreyash",
      lastname: "Pandey",
    },
  ],
};

const people = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PERSON:
      let persons = state.people;
      persons.push(action.payload.person);
      state = { ...state, people: persons };
      break;
    default:
      console.log(" No action type ", action.type);
      break;
  }
  return state;
};

export default people;
