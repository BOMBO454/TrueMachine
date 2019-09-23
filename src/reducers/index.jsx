import {combineReducers} from 'redux'

import {reducerTask} from "reducers/reducerTask"
import {persones} from "reducers/persones"


export default combineReducers({
    reducerTask,
    persones
})