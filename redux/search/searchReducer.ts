import { Action, ActionType } from './searchTypes'

const initialState: SearchState = {
  results: [],
  loading: false,
  error: false,
}

const reducer = (
  state: SearchState = initialState,
  action: Action
): SearchState => {
  switch (action.type) {
    case ActionType.GET_RESULTS:
      return { ...state, loading: true }
    case ActionType.GET_RESULTS_SUCCESS:
      return {
        ...state,
        results: action.payload,
        loading: false,
      }
    case ActionType.END_SEARCH:
      return { ...state, results: [], error: false }
    case ActionType.GET_RESULTS_ERROR:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

export default reducer
