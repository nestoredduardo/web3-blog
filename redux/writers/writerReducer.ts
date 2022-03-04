import { PayloadAction } from '@reduxjs/toolkit'

import {
  GET_WRITERS,
  GET_WRITERS_SUCCESS,
  GET_WRITERS_ERROR,
} from './writersType'

const initialState = {
  loading: false,
  error: false,
  page: 0,
  list: [],
}

const reducer = (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
