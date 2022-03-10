import { Dispatch } from 'redux'
import { ActionType, Action } from './userTypes'
import { RootState } from 'redux/store'

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
  () => async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    dispatch({
      type: ActionType.GET_USER_NFTS,
    })
    try {
      const { publicAddress } = getState().user
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
