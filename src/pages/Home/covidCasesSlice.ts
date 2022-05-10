import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { CovieCaseType } from "./types";

interface CovidCasesProps {
  data: CovieCaseType[];
  isLoading: boolean;
  error: any;
}

const initialState: CovidCasesProps = {
  data: [],
  error: undefined,
  isLoading: false,
};

const covidCasesReducer = createSlice({
  name: "covidCases",
  initialState,
  reducers: {
    getCovidCasesTrigger: (state: CovidCasesProps) => {
      state.error = undefined;
      state.isLoading = !state.isLoading;
    },
    getCovidCasesSuccess: (
      state: CovidCasesProps,
      { payload }: PayloadAction<CovieCaseType[]>
    ) => {
      state.data = payload;
      state.isLoading = false;
      state.error = undefined;
    },
    getCovidCasesError: (
      state: CovidCasesProps,
      { payload }: PayloadAction<any>
    ) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const { getCovidCasesTrigger, getCovidCasesSuccess, getCovidCasesError } = covidCasesReducer.actions;

export default covidCasesReducer.reducer;
