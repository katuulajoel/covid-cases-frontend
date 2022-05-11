import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { CovidCaseType, CovidCasesProps, SummaryProps } from "./types";

export const initialState: CovidCasesProps = {
  data: [],
  summary: undefined,
  countries: [],
  continents: [],
  error: undefined,
  isLoading: false,
};

const covidCasesReducer = createSlice({
  name: "covidCases",
  initialState,
  reducers: {
    getCountryCasesTrigger: (
      state: CovidCasesProps,
      { payload }: PayloadAction<string>
    ) => {
      state.error = undefined;
      state.isLoading = !state.isLoading;
    },
    getContinentCasesTrigger: (
      state: CovidCasesProps,
      { payload }: PayloadAction<string>
    ) => {
      state.error = undefined;
      state.isLoading = !state.isLoading;
    },
    getCovidCasesTrigger: (state: CovidCasesProps) => {
      state.error = undefined;
      state.isLoading = !state.isLoading;
    },
    getCovidCasesSuccess: (
      state: CovidCasesProps,
      {
        payload,
      }: PayloadAction<{
        cases: CovidCaseType[];
        summary: SummaryProps[];
        countries: string[];
        continents: string[];
      }>
    ) => {
      state.data = payload.cases;
      state.summary = payload.summary || state.summary;
      state.countries = payload.countries || state.countries;
      state.continents = payload.continents || state.continents;
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

export const {
  getCountryCasesTrigger,
  getContinentCasesTrigger,
  getCovidCasesTrigger,
  getCovidCasesSuccess,
  getCovidCasesError,
} = covidCasesReducer.actions;

export default covidCasesReducer.reducer;
