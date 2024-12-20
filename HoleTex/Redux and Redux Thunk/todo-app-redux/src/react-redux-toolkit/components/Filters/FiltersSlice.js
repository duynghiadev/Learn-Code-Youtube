import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      // mutation -> trong thư viện redux toolkit nó cài đặt sẵn cho chúng ta thư viện immer
      state.search = action.payload;
    }, // { type: 'filters/searchFilterChange' }
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

export const {
  prioritiesFilterChange,
  searchFilterChange,
  statusFilterChange,
} = filtersSlice.actions;

export default filtersSlice.reducer;
