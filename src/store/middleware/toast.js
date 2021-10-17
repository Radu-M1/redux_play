const toast = (param) => (store) => (next) => (action) => {
    if(action.type === 'error') {
      console.log("ToastMessage: ", action.payload.message);
    }
    
    // console.log("store", store);
    // console.log("next", next);
    // console.log("action", action);
    return next(action);
  };
  
  export { toast };