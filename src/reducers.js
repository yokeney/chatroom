import {combineReducers} from 'redux'
import {user} from './redux/user_redux'
import {chatuser} from './redux/chatuser.redux'
console.log(chatuser);
export default combineReducers({user,chatuser})
