import { createSlice } from "@reduxjs/toolkit";

const GlobalUrlSaver = createSlice({
    name: "UrlSaver",
    initialState: { UrlState: "UrlPosition", DataState: "" },
    reducers: {
        SaveUrl: (_, action) => { _.UrlState = action.payload },
        SaveData: (_, action) => { _.DataState = action.payload }
    }
})

export const { SaveUrl, SaveData } = GlobalUrlSaver.actions
export default GlobalUrlSaver.reducer