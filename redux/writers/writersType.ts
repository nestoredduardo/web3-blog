export enum ActionType {
  GET_WRITERS = 'GET_WRITTERS',
  GET_WRITERS_SUCCESS = 'GET_WRITTERS_SUCCESS',
  GET_WRITERS_ERROR = 'GET_WRITTERS_ERROR',
}

type GetWriterPayload = {
  data: WriterPreview[]
  total: number
}

interface actionGet {
  type: ActionType.GET_WRITERS
}

interface actionSuccess {
  type: ActionType.GET_WRITERS_SUCCESS
  payload: GetWriterPayload
}

interface actionError {
  type: ActionType.GET_WRITERS_ERROR
}

export type Action = actionGet | actionSuccess | actionError
