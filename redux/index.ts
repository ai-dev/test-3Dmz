import { combineReducers } from 'redux'

import faceListReducer from './faceList'

const rootReducer = combineReducers({
  faceList: faceListReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
