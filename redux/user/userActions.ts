import { Dispatch } from 'redux'
import { ActionType, Action } from './userTypes'

const setPublicAddress =
  (publicAddress: string) => (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CONNECT_WALLET,
      payload: { publicAddress },
    })
  }

const removePublicAddress = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.DISCONNECT_WALLET,
  })
}

export { setPublicAddress, removePublicAddress }
