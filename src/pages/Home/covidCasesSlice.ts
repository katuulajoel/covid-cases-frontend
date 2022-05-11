import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { CovieCaseType } from "./types";

interface summaryProps {
  confirmed: number;
    deaths: number;
    continent: string;
}

interface CovidCasesProps {
  data: CovieCaseType[];
  summary: summaryProps;
  countries: string[];
  continents: string[];
  isLoading: boolean;
  error: any;
}

const initialState: CovidCasesProps = {
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
    getCovidCasesTrigger: (state: CovidCasesProps) => {
      state.error = undefined;
      state.isLoading = !state.isLoading;
    },
    getCovidCasesSuccess: (
      state: CovidCasesProps,
      { payload }: PayloadAction<{cases: CovieCaseType[], summary: summaryProps, countries: string[], continents: string[]}>
    ) => {
      state.data = payload.cases;
      state.summary = payload.summary;
      state.countries = payload.countries;
      state.continents = payload.continents;
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
