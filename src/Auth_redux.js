import axios from 'axios'

import {LOGININ,LOGINOUT,USER_DATA} from './Typeaction'
const initState={
	isAuth:false,
	user:'hx',
	age:20
}
export function auth(state=initState,action){
	console.log(state,action);
	switch (action.type) {
		case LOGININ:
			return {...state,isAuth:true};
		case LOGINOUT:
			return {...state,isAuth:false}
		case USER_DATA:
		return {...state,user:action.payload.user,age:action.payload.age}
		default:
			return state
	}
}
export function getUserData(){
	//dispatch用来通知数据
	return  dispatch=>{
		 axios.get('/data').then(res=>{
			 if (res.status===200) {
				 dispatch(userData(res.data))
				 //  this.setState({data:res.data})
			 }
		 })
	}
}
export function userData(data){
	return {type:USER_DATA,payload:data}
}
export function login(){
	return {type:LOGININ}
}
export function loginout(){
	return {type:LOGINOUT}
}
