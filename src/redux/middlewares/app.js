import { SEARCH, CANCEL_SEARCH } from "../actions/search";
import { apiRequest, cancelApiRequest } from "../actions/api";
import { setLoader } from "../actions/ui";

const PIXABAY_KEY = "14545036-912e59631b7d8e4d4ebbffc6a";

const PIXABAY_URL = `https://pixabay.com/api/?key=${PIXABAY_KEY}`;

export const appMiddleware = () => next => action => {
  next(action);
  switch (action.type) {
    case SEARCH: {
      next(
        apiRequest({
          url: `${PIXABAY_URL}&q=${action.payload}`,
          method: "GET"
        })
      );
      next(setLoader({ state: true }));
      break;
    }
    case CANCEL_SEARCH: {
      next(cancelApiRequest());
      next(setLoader({ state: false }));
      break;
    }
    default:
      break;
  }
};