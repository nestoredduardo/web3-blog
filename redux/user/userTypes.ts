export enum ActionType {
  CONNECT_WALLET = 'CONNECT_WALLET',
  DISCONNECT_WALLET = 'DISCONNECT_WALLET',
}

interface connectAction {
  type: ActionType.CONNECT_WALLET
  payload: { publicAddress: string }
}

interface disconnectAction {
  type: ActionType.DISCONNECT_WALLET
}

export type Action = connectAction | disconnectAction
