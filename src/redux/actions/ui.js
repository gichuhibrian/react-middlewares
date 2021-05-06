//action type
export const SET_LOADER = "SET_LOADER";

//action creator
export const setLoader = ({ state }) => ({
  type: SET_LOADER,
  payload: state
});