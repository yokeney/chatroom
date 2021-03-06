import {getRedirectPath} from '../util'
import axios from 'axios'//axios不用加
const AUTH_SUCCESS="AUTH_SUCCESS";
const LOGOUT = 'LOGOUT'
const LOGIN_DATA="LOGIN_DATA";
const ERROR="ERROR";
const initstate={
	msg:'',
	isAuth:'',
	user:'',
	type:''
}
export function user(state=initstate,action){
	switch (action.type) {
		case AUTH_SUCCESS:
			return {...state,redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload,pwd:''}
		case LOGIN_DATA:
			return {...state,msg:action.payload}
		case ERROR:
			return {...state,isAuth:false,msg:action.msg}
		case LOGOUT:
		 	return {...initstate,redirectTo:'/login'}
		default:
			return state
	}
	return state;
}
function Authsuccess(obj){
	const {pwd,...data} = obj;
	return{type:AUTH_SUCCESS,payload:data}
}
function errorMsg(msg){
	return {msg,type:ERROR}
}
export function update(data){
	return dispatch=>{
		axios.post('/user/update',data).then(res=>{
			if (res.status===200&&res.data.code===0) {
				dispatch(Authsuccess(data))
			}
			else{
				dispatch(errorMsg(data))
			}
		})

	}
}
export function loadData(userinfo){
	return{type:LOGIN_DATA,payload:userinfo}
}
export function logoutSubmit(){
	return {type:LOGOUT}
}
export function login({user,pwd}){
	if (!user||!pwd) {
		return errorMsg('用户密码必须输入')
	}
	return dispatch=>{
		axios.post('/user/login',{user,pwd}).then(res=>{
			if (res.status===200&&res.data.code===0) {
				// dispatch(registerSuccess({user,pwd,type}));
				dispatch(Authsuccess(res.data.data))
			}
			else{
				dispatch(errorMsg(res.data.msg))
			}
		})
}
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
				dispatch(Authsuccess({user,pwd,type}));
			}
			else{
				dispatch(errorMsg(res.data.msg))
				alert(res.data.msg)
			}
		})
}
}
