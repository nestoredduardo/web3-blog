import { Action, ActionType } from './searchTypes'

const initialState: SearchState = {
  results: [],
  loading: false,
  notfound: false,
  error: false,
}

const reducer = (
  state: SearchState = initialState,
  action: Action
): SearchState => {
  switch (action.type) {
    case ActionType.GET_RESULTS:
      return { ...state, loading: true, error: false }
    case ActionType.GET_RESULTS_SUCCESS:
      return {
        ...state,
        results: action.payload,
        loading: false,
        notfound: !action.payload && true,
      }
    case ActionType.GET_RESULTS_ERROR:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

export default reducer
