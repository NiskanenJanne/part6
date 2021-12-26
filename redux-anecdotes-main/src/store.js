import { createStore, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdotereducer from './reducers/anecdoteReducer'
import notificationreducer from './reducers/notificationReducer'

const reducer = combineReducers({
    anecdotes: anecdotereducer,
    notification: notificationreducer
})

const store = createStore(
    reducer,
    composeWithDevTools()
)

export default store