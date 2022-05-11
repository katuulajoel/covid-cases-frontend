import { call, put, takeLatest } from "redux-saga/effects";

import {
  getAllCovidCases,
  getCountriesAndContinents,
  getContinentTotals,
  getCountryCases,
  getContinentCases,
} from "./api";
import * as slicesActions from "./covidCasesSlice";

function* getCovidCasesApi() {
  try {
    const data = yield call(getAllCovidCases);
    const countriesContinents = yield call(getCountriesAndContinents);
    const continentTotals = yield call(getContinentTotals);

    const payload = {
      cases: data.cases,
      summary: continentTotals,
      countries: countriesContinents.countries,
      continents: countriesContinents.continents,
    };
    yield put({ type: slicesActions.getCovidCasesSuccess.type, payload });
  } catch (error) {
    yield put({ type: slicesActions.getCovidCasesError.type, error });
  }
}

function* getCountryCasesApi(_action) {
  try {
    const data = yield call(getCountryCases, _action);

    const payload = {
      cases: [data],
    };
    yield put({ type: slicesActions.getCovidCasesSuccess.type, payload });
  } catch (error) {
    yield put({ type: slicesActions.getCovidCasesError.type, error });
  }
}

function* getContinentCasesApi(_action) {
  try {
    const data = yield call(getContinentCases, _action);

    const payload = {
      cases: data.cases,
    };
    yield put({ type: slicesActions.getCovidCasesSuccess.type, payload });
  } catch (error) {
    yield put({ type: slicesActions.getCovidCasesError.type, error });
  }
}


export function* watchCovidSaga() {
  yield takeLatest(slicesActions.getCovidCasesTrigger, getCovidCasesApi);
  yield takeLatest(slicesActions.getCountryCasesTrigger, getCountryCasesApi);
  yield takeLatest(slicesActions.getContinentCasesTrigger, getContinentCasesApi);
}
