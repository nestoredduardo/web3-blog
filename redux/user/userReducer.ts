import { Action, ActionType } from './userTypes'

const initialState: UserState = {
  publicAddress: '',
  loadingNFTs: false,
  NFTList: [] as NFTmetadata[],
  errorNFTS: false,
}

const reducer = (
  state: UserState = initialState,
  action: Action
): UserState => {
  switch (action.type) {
    case ActionType.CONNECT_WALLET:
      return { ...state, publicAddress: action.payload.publicAddress }
    case ActionType.DISCONNECT_WALLET:
      return { ...state, publicAddress: '' }
    case ActionType.GET_USER_NFTS:
      return { ...state, loadingNFTs: true }
    case ActionType.GET_USER_NFTS_SUCCESS:
      return {
        ...state,
        loadingNFTs: false,
        NFTList: [...action.payload],
      }
    case ActionType.GET_USER_NFTS_ERROR:
      return { ...state, loadingNFTs: false, errorNFTS: true }
    default:
      return state
  }
}

export default reducer
