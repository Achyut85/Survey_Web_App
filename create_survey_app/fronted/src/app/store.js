import { configureStore } from "@reduxjs/toolkit"
import navigationReducer from "../features/navigation/navigationSlice"
import questionNavReducer from "../features/navigation/questionNavSlice"
export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    questionNav: questionNavReducer,
  },
})