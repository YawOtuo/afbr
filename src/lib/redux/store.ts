import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/users";
import utilsReducer from "./reducers/utils";

export default configureStore({
  reducer: {
    users: usersReducer,
    utils: utilsReducer,
  },
});
