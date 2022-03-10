export enum ActionType {
  CONNECT_WALLET = 'CONNECT_WALLET',
  DISCONNECT_WALLET = 'DISCONNECT_WALLET',
  GET_USER_NFTS = 'GET_USER_NFTS',
  GET_USER_NFTS_SUCCESS = 'GET_USER_NFTS_SUCCESS',
  GET_USER_NFTS_ERROR = 'GET_USER_NFTS_ERROR',
}

interface connectAction {
  type: ActionType.CONNECT_WALLET
  payload: { publicAddress: string }
}

interface disconnectAction {
  type: ActionType.DISCONNECT_WALLET
}

interface getNFTsAction {
  type: ActionType.GET_USER_NFTS
}

interface getUserNFTsSuccess {
  type: ActionType.GET_USER_NFTS_SUCCESS
  payload: NFTmetadata[]
}

interface getUserNFTsError {
  type: ActionType.GET_USER_NFTS_ERROR
}

export type Action =
  | connectAction
  | disconnectAction
  | getNFTsAction
  | getUserNFTsSuccess
  | getUserNFTsError
