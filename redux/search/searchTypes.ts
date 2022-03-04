export enum ActionType {
  GET_RESULTS = 'GET_RESULTS',
  GET_RESULTS_SUCCESS = 'GET_RESULTS_SUCCESS',
  GET_RESULTS_ERROR = 'GET_RESULTS_ERROR',
}

interface actionGet {
  type: ActionType.GET_RESULTS
}

interface actionSuccess {
  type: ActionType.GET_RESULTS_SUCCESS
  payload: WriterPreview[]
}

interface actionError {
  type: ActionType.GET_RESULTS_ERROR
}

export type Action = actionGet | actionSuccess | actionError
