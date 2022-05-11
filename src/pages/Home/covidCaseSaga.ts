import { call, put, takeLatest } from 'redux-saga/effects'

import { getAllCovidCases, getCountriesAndContinents, getContinentTotals } from './api'
import * as slicesActions from './covidCasesSlice'

function* getCovidCasesApi() {
  try {
    const data = yield call(getAllCovidCases)
    const countriesContinents = yield call(getCountriesAndContinents)
    const continentTotals = yield call(getContinentTotals)

    const payload = {
      cases: data.cases,
      summary: continentTotals,
      countries: countriesContinents.countries,
      continents: countriesContinents.continents,
    }
    yield put({type: slicesActions.getCovidCasesSuccess.type, payload})
  } catch (error) {
    yield put({ type: slicesActions.getCovidCasesError.type, error })
  }
}

export function* watchCovidSaga() {
  yield takeLatest(slicesActions.getCovidCasesTrigger, getCovidCasesApi)
} 
