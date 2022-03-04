import { Action, ActionType } from './writersType'

const initialState: WritersState = {
  list: [],
  loading: false,
  error: false,
  total: null,
  nextPage: 0,
  limit: 10,
}

const reducer = (
  state: WritersState = initialState,
  action: Action
): WritersState => {
  switch (action.type) {
    case ActionType.GET_WRITERS:
      return { ...state, loading: true }
    case ActionType.GET_WRITERS_SUCCESS:
      return {
        ...state,
        list: state.list.concat(action.payload.data),
        loading: false,
        total: action.payload.total,
        nextPage: state.nextPage + 1,
      }
    case ActionType.GET_WRITERS_ERROR:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

export default reducer
