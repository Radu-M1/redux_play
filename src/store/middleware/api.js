import axios from "axios";
import * as actions from "../api";

export const api =
  (param) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) {
      return next(action);
    }

    const { url, method, data, onSuccess, onError, onStart } = action.payload;

    if (onStart) {
      dispatch({ type: onStart });
    }

    next(action);

    try {
      // console.log("DATA = ", data);
      const response = await axios.request({
        baseURL: "http://localhost:9001/api",
        url,
        method,
        data,
      });
      // console.log("RESPONSE = ", response);
      //General success dispatch
      dispatch(actions.apiCallSuccess(response.data));
      //Specific
      if (onSuccess) {
        // console.log("RESPONSE = ", response.data)
        dispatch({ type: onSuccess, payload: response.data });
      }
    } catch (err) {
      //General
      dispatch(actions.apiCallFailed(err.message));
      //Specific
      if (onError) {
        dispatch({ type: onError, payload: err.message });
      }
    }
  };
