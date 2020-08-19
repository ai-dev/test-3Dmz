import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'

import AppTypes from './../types'

const localIP = 'LOCAL_IP_HERE'
const apiHost = __DEV__ ? `http://${localIP}:3000` : 'https://test-3dmz-be.herokuapp.com'

type InitialState = {
  data: AppTypes.Face[]
  meta: { fetching: boolean }
  error: AppTypes.Error | null
}

const initialState: InitialState = {
  data: [],
  error: null,
  meta: {
    fetching: false,
  },
}

const faceListState = createSlice({
  name: 'faceList',
  initialState,
  reducers: {
    fetchFaceListBegin(state) {
      state.meta = { ...state.meta, fetching: true }
      state.error = null
    },
    fetchFaceListSuccess(state, action: PayloadAction<AppTypes.Face[]>) {
      state.data = action.payload
      state.meta = { ...state.meta, fetching: false }
      state.error = null
    },
    fetchFaceListFail(state, action: PayloadAction<AppTypes.Error>) {
      state.data = []
      state.meta = { ...state.meta, fetching: false }
      state.error = action.payload
    },
  },
})

export const { fetchFaceListBegin, fetchFaceListSuccess, fetchFaceListFail } = faceListState.actions

export const fetchFaceList = () => async (dispatch: Dispatch) => {
  dispatch(fetchFaceListBegin())

  try {
    if (__DEV__ && localIP === 'LOCAL_IP_HERE') {
      throw new Error('Set your local ip in /test-3Dmz/redux/faceList.ts')
    }

    const payload = await fetch(`${apiHost}/api/faces`)
    const data = await payload.json()

    dispatch(fetchFaceListSuccess(data))
  } catch (error) {
    dispatch(
      fetchFaceListFail({
        title: 'Error while fetching the face list',
        message: error.message,
      })
    )
  }
}

export default faceListState.reducer
