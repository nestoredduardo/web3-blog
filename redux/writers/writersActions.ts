import { Dispatch } from 'redux'
import { ActionType, Action } from './writersType'
import { RootState } from 'redux/store'

const getWriters =
  () => async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    dispatch({
      type: ActionType.GET_WRITERS,
    })
    try {
      const { nextPage } = getState().writers
      const response = await fetch(`/api/fetchWriters?page=${nextPage}`)
      const data: ListResponse = await response.json()

      dispatch({
        type: ActionType.GET_WRITERS_SUCCESS,
        payload: { data: data.data, total: data.total },
      })
    } catch (error) {
      dispatch({
        type: ActionType.GET_WRITERS_ERROR,
      })
    }
  }

export { getWriters }
