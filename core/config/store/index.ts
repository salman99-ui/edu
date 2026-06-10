import { configureStore } from "@reduxjs/toolkit";
import { apiPublic } from "@/core/services/public";
import { apiApp } from "@/core/services/app";
import { AuthSlice } from "./reducer";

const Store = configureStore({
  reducer: {
    [AuthSlice.name]: AuthSlice.reducer,
    [apiPublic.reducerPath]: apiPublic.reducer,
    [apiApp.reducerPath]: apiApp.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(apiPublic.middleware, apiApp.middleware),
});

export default Store;
