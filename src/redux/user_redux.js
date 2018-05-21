import {getRedirectPath} from '../util'
import axios from 'axios'//axios不用加
const REGISTER_SUCCESS="REGISTER_SUCCESS";
const LOGIN_SUCCESS='LOGIN_SUCCESS';
const ERROR="ERROR";
const initstate={
	msg:'',
	isAuth:'',
	user:'',
	pwd:'',
	type:''
}
export function user(state=initstate,action){
	switch (action.type) {
		case REGISTER_SUCCESS:
			return {...state,redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
		case LOGIN_SUCCESS:
			return {...state,redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
		case ERROR:
			return {...state,isAuth:false,msg:action.msg}
		default:
			return state
	}
	return state;
}
function errorMsg(msg){
	return {msg,type:ERROR}
}
function loginSuccess(data){
	return  {type: LOGIN_SUCCESS,payload:data}
}
export function login({user,pwd}){
	if (!user||!pwd) {
		return errorMsg('用户密码必须输入')
	}
	return dispatch=>{
		axios.post('/user/login',{user,pwd}).then(res=>{
			if (res.status===200&&res.data.code===0) {
				// dispatch(registerSuccess({user,pwd,type}));
				dispatch(loginSuccess(res.data.data))
			}
			else{
				dispatch(errorMsg(res.data.msg))
			}
		})
}
}
function registerSuccess(data){
	return {type:REGISTER_SUCCESS,payload:data}
}
export	function register({user,pwd,repeatpwd,type}){
	if (!user||!pwd||!type) {
		return errorMsg("用户密码错误")
	}
	if (pwd!==repeatpwd) {
		return errorMsg('密码不一致')
	}
	return dispatch=>{
		axios.post('/user/register',{user,pwd,type}).then(res=>{
			if (res.status===200&&res.data.code===0) {
				dispatch(registerSuccess({user,pwd,type}));
			}
			else{
				dispatch(errorMsg(res.data.msg))
				alert(res.data.msg)
			}
		})
}
}
