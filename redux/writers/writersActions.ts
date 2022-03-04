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
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

export default getWriters
