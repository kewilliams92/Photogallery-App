import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// This is a thunk that will be used to fetch data from the API
export const fetchPhotosAsync = createAsyncThunk('sample/fetchPhotos', async () => {
    try{
        const data = await axios.get(`${process.env.API_URL}/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=30`);
        console.log(data);
        return data.data;
    }catch(error){
        console.log(error)
    }
});

export const searchPhotosAsync = createAsyncThunk('sample/searchPhotos', async (searchTerm) => {
    try{
        const data = await axios.get(`${process.env.API_URL}/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=30&query=${searchTerm}`);
        console.log(data);
        return data.data;
    }catch(error){
        console.log(error)
    }
});

// This is a slice that will be used to store the data from the API
export const photosSlice = createSlice({
    name: 'photos',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPhotosAsync.fulfilled, (state, action) => {
            console.log(action.payload)
            return action.payload;
            }),
        builder.addCase(searchPhotosAsync.fulfilled, (state, action) => {
            console.log(action.payload)
            return action.payload;
            })
        },
});

// This is a selector that will be used to select the data from the store
export const selectPhotos = (state) => state.photos;

// This is a reducer that will be used to update the store
export default photosSlice.reducer;
