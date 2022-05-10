import saga from 'redux-saga'

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import RootReducer from 'store/reducers'
import RootSaga from 'store/saga'

const sagaMiddleware = saga()

const store = configureStore({
  reducer: RootReducer,
  middleware: [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(RootSaga)

export type RootState = ReturnType<typeof store.getState>

export default store
