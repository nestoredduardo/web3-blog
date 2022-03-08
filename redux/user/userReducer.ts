import { Action, ActionType } from './userTypes'

const initialState: UserState = {
  publicAddress: '',
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
    default:
      return state
  }
}

export default reducer
