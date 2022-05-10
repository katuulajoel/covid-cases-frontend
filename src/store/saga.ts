import { all, fork } from 'redux-saga/effects'
import { watchCovidSaga } from 'pages/Home/covidCaseSaga'

export default function* rootSaga() {
  yield all([
    fork(watchCovidSaga),
  ])
}
