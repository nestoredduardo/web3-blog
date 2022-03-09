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

const getNFTsfromPublicAddress = () => async () => {
  const publicAddress = '9BBLZWSdZSGUs5TwiYKN21rxEVHnbQ4H1YP3qF9iBNus'
  const response = await fetch(`/api/user/nfts/${publicAddress}`)
  const data = await response.json()

  console.log(data)
}

export { setPublicAddress, removePublicAddress, getNFTsfromPublicAddress }
