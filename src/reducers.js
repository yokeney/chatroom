import {combineReducers} from 'redux'
import {counter} from './index_redux'
import {auth} from './Auth_redux'
export default combineReducers({counter,auth})
