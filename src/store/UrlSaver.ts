import { createSlice } from "@reduxjs/toolkit";

const GlobalUrlSaver = createSlice({
    name: "UrlSaver",
    initialState: { UrlState: "UrlPosition" },
    reducers: {
        SaveUrl: (_, action) => { _.UrlState = action.payload }
    }
})

export const { SaveUrl } = GlobalUrlSaver.actions
export default GlobalUrlSaver.reducer