import axios from "axios";
import {
  API_REQUEST,
  apiError,
  apiSuccess,
  CANCEL_API_REQUEST
} from "../actions/api";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === API_REQUEST) {
    const { url, method } = action.meta;
    axios({
      method,
      url,
      cancelToken: source.token
    })
      .then(({ data }) => dispatch(apiSuccess({ response: data })))
      .catch(error => {
        console.log(error);
        if (axios.isCancel(error)) {
          console.log(error.message);
        } else {
          dispatch(apiError({ error: error.response.data }));
        }
      });
  } else if (action.type === CANCEL_API_REQUEST) {
    source.cancel("Operation canceled by the user.");
    console.log("REQUEST CANCELLED!!!");
  }
};