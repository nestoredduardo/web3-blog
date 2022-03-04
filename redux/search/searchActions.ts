import { Dispatch } from 'redux'
import { Action, ActionType } from './searchTypes'
import { RootState } from 'redux/store'

const search =
  (input: string) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    dispatch({
      type: ActionType.GET_RESULTS,
    })
    try {
      const response = await fetch(`/api/search?input=${input}`)
      const data: WriterPreview[] = await response.json()
      console.log(data)
    } catch (error) {
      dispatch({
        type: ActionType.GET_RESULTS_ERROR,
      })
    }
  }

export { search }
