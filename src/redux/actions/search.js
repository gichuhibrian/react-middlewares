//action types
export const SEARCH = "SEARCH";
export const CANCEL_SEARCH = "CANCEL_SEARCH";

//action creator
export const search = term => {
  return {
    type: SEARCH,
    payload: term
  };
};

export const cancelSearch = () => {
  return {
    type: CANCEL_SEARCH
  };
};