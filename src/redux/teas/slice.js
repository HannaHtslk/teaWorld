import { fetchTeasThunk } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

const slice = {
  name: 'teas',
  initialState,
  selectors: {
    selectTeas: state => state.items,
    selectIsLoading: state => state.isLoading,
    selectIsError: state => state.isError,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTeasThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTeasThunk.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTeasThunk.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
};

export const teasReducer = slice.reducer;
export const { selectTeas, selectIsError, selectIsLoading } = slice.selectors;
