import { configureStore } from "@reduxjs/toolkit";
import HeaterReducer from "./features/heater/heaterSlice";



const store = configureStore({
    reducer: {
        heater: HeaterReducer,
    },
})

export default store