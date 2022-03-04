import { PayloadAction } from '@reduxjs/toolkit'

import {
  GET_WRITERS,
  GET_WRITERS_SUCCESS,
  GET_WRITERS_ERROR,
} from './writersType'

const initialState: WritersState = {
  list: [],
  loading: false,
  error: false,
  total: null,
  nextPage: 0,
  limit: 10,
}

const reducer = (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
