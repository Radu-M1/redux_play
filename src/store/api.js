import { createAction } from "@reduxjs/toolkit";

export const { apiCallBegan, apiCallSuccess, apiCallFailed } = {
  apiCallBegan: createAction("api/callBegan"),
  apiCallSuccess: createAction("api/callSuccess"),
  apiCallFailed: createAction("api/callFailed"),
};

// export const apiCallBegan = createAction("api/callBegan");
// export const apiCallSuccess = createAction("api/callSuccess");
// export const apiCallFailed = createAction("api/callFailed");
