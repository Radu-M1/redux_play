import axios from "axios";
import * as actions from "../api";

export const api =
  (param) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) {
      return next(action);
      console.log("been here")
      // return;
    }

    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;
    try {
      const response = await axios.request({
        baseURL: "http://localhost:9001/api",
        url,
        method,
        data,
      });
      //General success dispatch
      dispatch(actions.apiCallSuccess(response.data));
      //Specific
      if (onSuccess) {
        dispatch({ type: onSuccess, payload: response.data });
      }
    } catch (err) {
      //General
      dispatch(actions.apiCallFailed(err));
      //Specific
      if (onError) {
        dispatch({ type: onError, payload: err });
      }
    }
  };
