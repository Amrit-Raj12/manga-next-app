import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MangaState {
  mangaList: Array<any>;
}

const initialState: MangaState = {
  mangaList: [],
};

const mangaSlice = createSlice({
  name: 'manga',
  initialState,
  reducers: {
    setMangaList(state, action: PayloadAction<Array<any>>) {
      state.mangaList = action.payload;
    },
    addManga(state, action: PayloadAction<any>) {
      state.mangaList.push(action.payload);
    },
    clearMangaList(state) {
      state.mangaList = [];
    },
  },
});

export const { setMangaList, addManga, clearMangaList } = mangaSlice.actions;

export default mangaSlice.reducer;
