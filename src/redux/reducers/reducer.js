import { API_SUCCESS } from "../actions/api";

const reducer = (state = [], action) => {
  switch (action.type) {
    case API_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default reducer