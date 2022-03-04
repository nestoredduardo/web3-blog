import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import writerReducer from './writers/writerReducer'
import searchReducer from './search/searchReducer'

const rootReducer = combineReducers({
  writers: writerReducer,
  search: searchReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const generateStore = () => {
  const middlewareEnhancer = applyMiddleware(thunk)
  const composeEnhancers = composeWithDevTools(middlewareEnhancer)
  const store = createStore(rootReducer, composeEnhancers)

  return store
}

export default generateStore
