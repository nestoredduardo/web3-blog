import { Dispatch } from 'redux'
import { ActionType, Action } from './writersType'
import { RootState } from 'redux/store'

import fetchWriters from './writersAPI'

const getWriters =
  () => async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    dispatch({
      type: ActionType.GET_WRITERS,
    })
    try {
      const { nextPage } = getState().writers
      const data = await fetchWriters(nextPage)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

export default getWriters
