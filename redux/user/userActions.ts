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

const getNFTsfromPublicAddress =
  (publicAddress: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_USER_NFTS,
    })
    try {
      const response = await fetch(`/api/user/nfts/${publicAddress}`)
      const data: NFTmetadata[] = await response.json()

      dispatch({
        type: ActionType.GET_USER_NFTS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: ActionType.GET_USER_NFTS_ERROR,
      })
    }
  }

export { setPublicAddress, removePublicAddress, getNFTsfromPublicAddress }
