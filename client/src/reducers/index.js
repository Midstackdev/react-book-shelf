import { combineReducers } from 'redux'

import books from './books'
import user from './user'

const rootReducer = combineReducers({
    books,
    user
})

export default rootReducer