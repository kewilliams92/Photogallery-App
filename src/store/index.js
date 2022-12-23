import { configureStore } from "@reduxjs/toolkit";
import photosSlice from "../features/photosSlice/photosSlice";


export const store = configureStore({
    reducer: {
        photos: photosSlice,
    }
});
