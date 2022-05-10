import { call, put, takeLatest } from 'redux-saga/effects'

import { getAllCovidCases } from './api'
import * as slicesActions from './covidCasesSlice'

function* getCovidCasesApi() {
  try {
    const data = yield call(getAllCovidCases)
    const payload = data
    yield put({type: slicesActions.getCovidCasesSuccess.type, payload})
  } catch (error) {
    yield put({ type: slicesActions.getCovidCasesError.type, error })
  }
}

export function* watchCovidSaga() {
  yield takeLatest(slicesActions.getCovidCasesTrigger, getCovidCasesApi)
} 
